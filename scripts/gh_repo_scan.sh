#!/usr/bin/env bash
set -euo pipefail

# gh_repo_scan.sh (v3)
# 1) find empty repos (size==0) as JSON array
# 2) gather README for every repo into one JSON object keyed by owner/repo
#
# Requirements: gh (authenticated), jq

need_cmd() { command -v "$1" >/dev/null 2>&1 || { echo "ERROR: missing command: $1" >&2; exit 1; }; }

b64decode_to_file() {
  local infile="$1" outfile="$2"
  if base64 --help 2>/dev/null | grep -q -- '--decode'; then
    base64 --decode <"$infile" >"$outfile"
  else
    base64 -D <"$infile" >"$outfile"
  fi
}

timestamp() { date +"%Y%m%d-%H%M%S"; }

ORGS=()
SCAN_ALL_ORGS="false"
USER_ONLY="false"
INCLUDE_FORKS="false"
MAX_REPOS=""
OUT_DIR=""

usage() {
  cat <<'USAGE'
Usage:
  ./gh_repo_scan.sh [--org ORG ...] [--all-orgs] [--user-only] [--include-forks] [--max-repos N] [--out-dir DIR]
USAGE
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --org) ORGS+=("${2:-}"); shift 2;;
    --all-orgs) SCAN_ALL_ORGS="true"; shift;;
    --user-only) USER_ONLY="true"; shift;;
    --include-forks) INCLUDE_FORKS="true"; shift;;
    --max-repos) MAX_REPOS="${2:-}"; shift 2;;
    --out-dir) OUT_DIR="${2:-}"; shift 2;;
    -h|--help) usage; exit 0;;
    *) echo "ERROR: unknown arg: $1" >&2; usage; exit 1;;
  esac
done

need_cmd gh
need_cmd jq

if [[ -z "${OUT_DIR}" ]]; then
  OUT_DIR="./gh-scan-output-$(timestamp)"
fi
mkdir -p "${OUT_DIR}"

if ! gh auth status >/dev/null 2>&1; then
  echo "ERROR: gh not authenticated. Run: gh auth login" >&2
  exit 1
fi

echo "[1/6] Resolving org list..."
if [[ "${USER_ONLY}" == "true" ]]; then
  ORGS=()
else
  if [[ "${SCAN_ALL_ORGS}" == "true" && ${#ORGS[@]} -eq 0 ]]; then
    mapfile -t ORGS < <(gh api user/orgs --paginate --jq '.[].login' 2>/dev/null || true)
  fi
fi
echo "Orgs: ${#ORGS[@]}"

repos_ndjson="${OUT_DIR}/repos.ndjson"
: > "${repos_ndjson}"

echo "[2/6] Collecting user repos..."
# IMPORTANT: use GET + querystring (avoid -f which can imply POST)
gh api -X GET "user/repos?per_page=100&visibility=all&affiliation=owner,collaborator,organization_member" \
  --paginate --jq '.[]' >> "${repos_ndjson}"

if [[ "${USER_ONLY}" != "true" && ${#ORGS[@]} -gt 0 ]]; then
  for org in "${ORGS[@]}"; do
    [[ -z "${org}" ]] && continue
    echo "[2/6] Collecting org repos: ${org}"
    gh api -X GET "orgs/${org}/repos?per_page=100&type=all" \
      --paginate --jq '.[]' >> "${repos_ndjson}"
  done
fi

echo "[3/6] Building repos.json..."
jq -s 'unique_by(.full_name)' "${repos_ndjson}" > "${OUT_DIR}/repos.all.json"

if [[ "${INCLUDE_FORKS}" == "true" ]]; then
  jq '.' "${OUT_DIR}/repos.all.json" > "${OUT_DIR}/repos.json"
else
  jq '[.[] | select(.fork == false)]' "${OUT_DIR}/repos.all.json" > "${OUT_DIR}/repos.json"
fi

if [[ -n "${MAX_REPOS}" ]]; then
  jq ".[0:${MAX_REPOS}]" "${OUT_DIR}/repos.json" > "${OUT_DIR}/repos.tmp.json"
  mv "${OUT_DIR}/repos.tmp.json" "${OUT_DIR}/repos.json"
fi

total_repos="$(jq 'length' "${OUT_DIR}/repos.json")"
echo "Total repos: ${total_repos}"

echo "[4/6] Writing empty_repos.json..."
jq '[.[] | select(.size == 0) | .full_name] | sort' "${OUT_DIR}/repos.json" > "${OUT_DIR}/empty_repos.json"
empty_count="$(jq 'length' "${OUT_DIR}/empty_repos.json")"
echo "Empty repos: ${empty_count}"

echo "[5/6] Fetching READMEs..."
readmes_ndjson="${OUT_DIR}/readmes.ndjson"
: > "${readmes_ndjson}"

tmpdir="$(mktemp -d)"
cleanup() { rm -rf "${tmpdir}"; }
trap cleanup EXIT

jq -r '.[].full_name' "${OUT_DIR}/repos.json" > "${OUT_DIR}/repo_full_names.txt"

missing_count=0
scanned=0

while IFS= read -r full_name; do
  [[ -z "${full_name}" ]] && continue
  scanned=$((scanned + 1))

  readme_json="${tmpdir}/readme.json"
  readme_b64="${tmpdir}/readme.b64"
  readme_txt="${tmpdir}/readme.txt"
  err_file="${tmpdir}/err.txt"

  if gh api "repos/${full_name}/readme" >"${readme_json}" 2>"${err_file}"; then
    jq -r '.content // empty' "${readme_json}" | tr -d '\n' > "${readme_b64}"

    if [[ -s "${readme_b64}" ]]; then
      b64decode_to_file "${readme_b64}" "${readme_txt}"
      name="$(jq -r '.name // ""' "${readme_json}")"
      path="$(jq -r '.path // ""' "${readme_json}")"
      sha="$(jq -r '.sha // ""' "${readme_json}")"
      html_url="$(jq -r '.html_url // ""' "${readme_json}")"
      download_url="$(jq -r '.download_url // ""' "${readme_json}")"
      size="$(jq -r '.size // 0' "${readme_json}")"

      jq -n \
        --arg full_name "${full_name}" \
        --arg name "${name}" \
        --arg path "${path}" \
        --arg sha "${sha}" \
        --arg html_url "${html_url}" \
        --arg download_url "${download_url}" \
        --argjson size "${size}" \
        --rawfile content "${readme_txt}" \
        '{full_name:$full_name, readme:{missing:false,name:$name,path:$path,sha:$sha,size:$size,html_url:$html_url,download_url:$download_url,content:$content}}' \
        >> "${readmes_ndjson}"
    else
      missing_count=$((missing_count + 1))
      jq -n --arg full_name "${full_name}" --arg error "readme_endpoint_returned_no_content" \
        '{full_name:$full_name, readme:{missing:true,error:$error}}' \
        >> "${readmes_ndjson}"
    fi
  else
    missing_count=$((missing_count + 1))
    err_msg="$(tr '\n' ' ' <"${err_file}" | sed -E 's/[[:space:]]+/ /g' | sed -E 's/^ +| +$//g')"
    [[ -z "${err_msg}" ]] && err_msg="readme_fetch_failed"
    jq -n --arg full_name "${full_name}" --arg error "${err_msg}" \
      '{full_name:$full_name, readme:{missing:true,error:$error}}' \
      >> "${readmes_ndjson}"
  fi

  if (( scanned % 50 == 0 )); then
    echo "Processed ${scanned}/${total_repos}..."
  fi
done < "${OUT_DIR}/repo_full_names.txt"

echo "[6/6] Building readmes.json..."
if [[ -s "${readmes_ndjson}" ]]; then
  if jq -s 'reduce .[] as $i ({}; .[$i.full_name] = $i.readme)' "${readmes_ndjson}" > "${OUT_DIR}/readmes.json" 2>/dev/null; then
    readmes_count="$(jq 'length' "${OUT_DIR}/readmes.json" 2>/dev/null || echo "0")"
    echo "Successfully built readmes.json with ${readmes_count} entries"
  else
    echo "WARNING: Failed to build readmes.json from readmes.ndjson" >&2
  fi
else
  echo "WARNING: readmes.ndjson is empty or missing, skipping readmes.json generation" >&2
fi

echo "README missing/failed: ${missing_count}"
echo "Output directory: ${OUT_DIR}"
