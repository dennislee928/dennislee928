# GitHub Automation Pack (Auto-label + CSV → Issues)

## Files
- `.github/workflows/auto_label.yml` — auto-label issues based on title prefixes:
  - `[Application]` → `application`, `todo`
  - `[Funding]` → `funding`, `research`
  - `[LOR]` → `lor`, `docs`
  - Mentions of 'deadline' in body → adds `deadline`

- `scripts/create_issues_from_csv.py` — creates `[Application]` issues from your CSV tracker.

## Usage
1. Commit the workflow to your repo's default branch.
2. Ensure labels exist (use the earlier `labels.json` or create them in Settings → Issues → Labels).
3. Export a token:
   ```bash
   export GITHUB_TOKEN=ghp_yourtoken
   ```
4. Run the script:
   ```bash
   python scripts/create_issues_from_csv.py OWNER REPO path/to/msc_shortlist_table_extended_ece.csv
   ```

Each issue will be titled:
`[Application] {University} - {Program} ({Country})`
and pre-filled with checklists.

> Tip: run on a test repo first to confirm formatting.
