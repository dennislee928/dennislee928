#!/usr/bin/env bash
# GH_OWNER="gh_user_name" /path_to/gh-conflict-solver.sh
# A script to bulk-merge open pull requests across one or more repositories.
# It automatically detects the default branch and can resolve merge conflicts.
#
# SETUP:
# 1. Ensure 'git' and 'gh' (GitHub CLI) are installed.
# 2. Authenticate the GitHub CLI with repository access:
#    gh auth login -h github.com -s repo
#
# USAGE:
#   - To run on the current repository:
#     ./gh-conflict-solver.sh
#
#   - To run on all repositories in an organization/user:
#     GH_OWNER="my-github-user" ./gh-conflict-solver.sh

set -euo pipefail

# =========================
# Auth & Environment
# =========================
export GH_HOST=github.com

require_bin() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "Error: Missing dependency '$1'. Please install it and try again." >&2
    exit 1
  fi
}
require_bin git
require_bin gh

if ! gh auth status -h github.com >/dev/null 2>&1; then
  echo "Error: GitHub CLI not authenticated." >&2
  echo "Please run the following command to log in:" >&2
  echo "  gh auth login -h github.com -s repo" >&2
  exit 1
fi

gh auth setup-git >/dev/null 2>&1

# =========================
# Configuration
# =========================
MERGE_STRATEGY="${MERGE_STRATEGY:-theirs}"
GH_OWNER="${GH_OWNER:-}"
GH_REPOS_CSV="${GH_REPOS_CSV:-}"
ORIGINAL_PWD="$(pwd)"

# Statistics counters
TOTAL_PRS=0
SUCCESSFUL_MERGES=0
CONFLICTING_PRS=0
SKIPPED_PRS=0

# =========================
# UI Helpers
# =========================
print_success() { echo -e "\033[1;32m$1\033[0m"; }
print_warning() { echo -e "\033[1;33m$1\033[0m"; }
print_error()   { echo -e "\033[1;31m$1\033[0m"; }
print_info()    { echo -e "\033[1;34m$1\033[0m"; }

# =========================
# Git & Conflict Helpers
# =========================
force_resolve_all_conflicts() {
  print_info "    Force-resolving all remaining conflicts using strategy: $MERGE_STRATEGY"
  if [ "$MERGE_STRATEGY" = "theirs" ]; then
    git checkout --theirs .
  else
    git checkout --ours .
  fi
  git add -A
}

auto_resolve_conflict_and_finalize() {
  local repo="$1"
  local base_branch="$2"

  print_warning "    ⚠️  PR 衝突，使用自動策略解決 ($MERGE_STRATEGY)"
  CONFLICTING_PRS=$((CONFLICTING_PRS + 1))

  set +e
  git merge -X "$MERGE_STRATEGY" --no-edit >/dev/null 2>&1
  local rc=$?
  set -e

  if [ $rc -ne 0 ] || git diff --name-only --diff-filter=U | grep -q .; then
    force_resolve_all_conflicts
  fi

  if git rev-parse -q --verify MERGE_HEAD >/dev/null 2>&1; then
    git commit -m "🔧 自動解決衝突 (策略=$MERGE_STRATEGY)" >/dev/null
  fi

  git push origin "HEAD:$base_branch"
  print_success "    ✅ 衝突已自動解決並完成推送"
  SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
}

# =========================
# Main Merge Routine
# =========================
merge_one_pr() {
  local repo_dir="$1"
  local pr_number="$2"
  local pr_url="$3"
  local base_branch="$4"

  print_info "  ➡️  嘗試合併 PR #$pr_number: $pr_url"
  cd "$repo_dir"

  # Ensure a clean workspace and sync with the remote base branch
  git reset --hard >/dev/null
  git clean -fdx >/dev/null
  git fetch origin "$base_branch" --quiet
  git checkout "$base_branch" --quiet
  git reset --hard "origin/$base_branch" --quiet

  local pr_local_branch="pr-$pr_number"
  git fetch origin "pull/$pr_number/head:$pr_local_branch" --quiet

  set +e
  git merge --no-ff --no-edit "$pr_local_branch" >/dev/null 2>&1
  local merge_rc=$?
  set -e

  if [ $merge_rc -eq 0 ]; then
    print_success "    ✅ PR #$pr_number 合併成功！"
    git push origin "$base_branch"
    SUCCESSFUL_MERGES=$((SUCCESSFUL_MERGES + 1))
  else
    if git diff --name-only --diff-filter=U | grep -q .; then
      auto_resolve_conflict_and_finalize "$(basename "$repo_dir")" "$base_branch"
    else
      print_error "    ❌ 自動合併失敗 (PR #$pr_number). 這不是一個標準的合併衝突。請手動檢查。"
      git merge --abort >/dev/null 2>&1 || true
      SKIPPED_PRS=$((SKIPPED_PRS + 1))
    fi
  fi

  git branch -D "$pr_local_branch" >/dev/null 2>&1 || true
  cd "$ORIGINAL_PWD"
}

# =========================
# Repository Enumeration
# =========================
list_repos() {
  if [ -n "$GH_OWNER" ]; then
    if [ -n "$GH_REPOS_CSV" ]; then
      echo "$GH_REPOS_CSV" | tr ',' '\n'
    else
      gh repo list "$GH_OWNER" --limit 500 --json name,isArchived --jq '.[] | select(.isArchived|not) | .name'
    fi
  else
    basename "$(git rev-parse --show-toplevel 2>/dev/null || echo '.')"
  fi
}

# =========================
# Main Execution
# =========================
main() {
  print_info "🧭 衝突策略: $MERGE_STRATEGY"
  echo "-----------------------------------------------------"

  while read -r repo_name; do
    [ -z "$repo_name" ] && continue

    if [ -n "$GH_OWNER" ]; then
      full_repo_name="$GH_OWNER/$repo_name"
    else
      full_repo_name="$(gh repo view --jsonWithOwner --jq .nameWithOwner 2>/dev/null || echo "$repo_name")"
    fi

    print_info "🔍 處理儲存庫: $full_repo_name"

    # Dynamically determine the default branch for the repository
    local base_branch
    base_branch=$(gh repo view "$full_repo_name" --json defaultBranchRef --jq .defaultBranchRef.name 2>/dev/null)
    if [ -z "$base_branch" ]; then
      print_warning "  Could not determine default branch for $full_repo_name. Skipping."
      echo ""
      continue
    fi
    print_info "  Found default branch: '$base_branch'"

    if [ ! -d "$repo_name/.git" ]; then
      gh repo clone "$full_repo_name" "$repo_name" -- -q
    else
      (cd "$repo_name" && git fetch --all --prune --quiet)
    fi

    prs_found=0
    while read -r pr_number pr_url; do
      TOTAL_PRS=$((TOTAL_PRS + 1))
      prs_found=1
      merge_one_pr "$repo_name" "$pr_number" "$pr_url" "$base_branch"
    done < <(gh pr list -R "$full_repo_name" --state open --json number,url --jq '.[] | "\(.number) \(.url)"')

    if [ "$prs_found" -eq 0 ]; then
      print_info "  ℹ️  無開放中的 PR"
    fi
    echo "" # Newline for readability

  done < <(list_repos)
}

# Run the main function
main

# =========================
# Final Summary
# =========================
echo "-----------------------------------------------------"
print_success "所有儲存庫檢查完畢。"
echo ""
echo "📊 處理總結："
echo "=================================================="
echo "📈 統計資訊："
echo "    • 總共檢查的 PR 數量: $TOTAL_PRS"
echo "    • 成功合併的 PR 數量: $SUCCESSFUL_MERGES"
echo "    • 自動解決衝突的 PR 數量: $CONFLICTING_PRS"
echo "    • 跳過/無法處理的 PR 數量: $SKIPPED_PRS"
echo ""
if [ $CONFLICTING_PRS -gt 0 ]; then
  print_warning "自動處理了 $CONFLICTING_PRS 個衝突 (策略=$MERGE_STRATEGY)"
fi
if [ $TOTAL_PRS -gt 0 ] && [ $SKIPPED_PRS -eq 0 ]; then
  print_success "所有找到的 PR 都已成功處理！"
fi
