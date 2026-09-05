# AGENT LOOP — UK Career Intel

# UK career intel agent loop

## Goal
Evidence-based UK career assessment for a conversion MSc candidate: GitHub portfolio + org hygiene, LinkedIn capture, visa-aware job odds / roles / salary / path, then publish markdown reports to a named GitHub branch.

## Defaults (unless the user overrides)
- **Report language: Traditional Chinese (zh-Hant)** for all user-facing report files (`*-github-audit.md`, `*-orgs-deepdive.md`, `*-linkedin.md`, `uk-career-assessment-zh.md`, folder `README.md`). Keep code identifiers, repo names, URLs, and SOC codes in original form.
- Target publish path: `uk-career-intel/` on branch `feat-uk-career-intel` of the user's profile repo when named; otherwise ask once.
- Prefer GitHub connector with **org + all-repo read** scopes when available; document CAP / permission blocks explicitly.
- Canonical procedure twin: keep `uk-career-intel/AGENT_LOOP_uk-career-intel.md` in sync with this skill after each run that changes the loop.

## Inputs
- GitHub user (or connected `get_me`)
- LinkedIn profile URL
- Programme / visa / ASHE facts (re-verify when stale against GOV.UK / university pages)
- Target `owner/repo` + branch for publishing

## Steps
1. Todo list: github-audit, orgs-deepdive, linkedin, programme-verify, assessment, publish, skill-sync
2. Personal GitHub audit → Traditional Chinese `*-github-audit.md` (skill matrix High/Med/Low, red flags, pin list)
3. Org deep-dive (all reachable orgs with read access) → Traditional Chinese `*-orgs-deepdive.md` with Safe / Cite carefully / Hide matrix
4. LinkedIn via connector or browser; authwall → box handoff for login; Traditional Chinese `*-linkedin.md`; never edit the profile
5. Re-verify fees, Graduate Route, SOC going rates, ASHE; distinguish industrial *opportunity* vs guaranteed *placement*
6. Write Traditional Chinese assessment with conditional probability ranges, ranked roles, salary bands, timeline, missing inputs
7. Publish folder `uk-career-intel/` to the target branch (`push_files` if token has Contents write; otherwise Cursor cloud agent). Return tree URL + commit SHA
8. Refresh `AGENT_LOOP_uk-career-intel.md` beside reports and rewrite this skill if the loop changed

## Rules
- No invented employment dates, degrees, or salaries
- Call out NSFW / joke branding as UK screening risk
- Do not push secrets or tokens
- If the user asks for another language, override the zh-Hant default for that run only

## Success
- All reports in Traditional Chinese on the branch
- Assessment states odds as ranges with assumptions; gaps listed
- Agent loop file + skill updated when procedure changed
