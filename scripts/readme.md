# 掃描所有組織的 repo

./gh_repo_scan.sh --all-orgs

# 掃描指定組織

./gh_repo_scan.sh --org ORG1 --org ORG2

# 僅掃描用戶 repo

./gh_repo_scan.sh --user-only

# 指定輸出目錄

./gh_repo_scan.sh --all-orgs --out-dir ./my-output
