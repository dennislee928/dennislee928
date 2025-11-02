How to use

In your repo → Settings → General → Features → Issues (ensure “Issues” is enabled).

Commit the .github/ISSUE_TEMPLATE/*.yml files to main.

Create a new issue and choose the template:

Program Application Tasklist → one issue per program (fills out docs, portal, funding, and follow-ups checklists).

Scholarship / Funding → one issue per scholarship or waiver.

Recommendation Letter Request → one issue per recommender.

Optional: import labels with the GitHub API using labels.json (or create them manually in the UI).

Suggested workflows (quick)

Board: use GitHub Projects with columns: Backlog → In Progress → Submitted → Decision → Visa & Housing.

Weekly cadence:

Mon — update issues & check new calls (30–60 min)

Wed — SoP tailoring & docs (60–90 min)

Fri — funding search and status (30 min)

Sun — Kanban & calendar review (30 min)

Automations (optional):

A simple labeler that looks at titles starting with [Application], [Funding], [LOR] and auto-applies labels.

A “stale issue” action to ping items with no updates after 10 days.

A tiny script to read your CSV and auto-open issues per program row.
