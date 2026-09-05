# AGENT LOOP — UK Career Intel (GitHub + LinkedIn + Glasgow MSc)

Reusable end-to-end agent work loop. Invoke when the user wants a refreshed UK postgrad job-market assessment tied to a Glasgow (or similar) conversion MSc, their GitHub (incl. orgs), and LinkedIn.

## Goal
Produce evidence-based career intel: portfolio/org hygiene, UK role fit, salary bands, visa-aware job odds, and a best path — then commit reports to a named GitHub branch.

## Inputs (ask only if missing)
- GitHub username (default from connected account / `get_me`)
- LinkedIn profile URL
- Programme facts the user treats as high-confidence (fees, start date, projects, visa notes, ASHE figures) — re-verify against GOV.UK / university pages when stale
- Target branch + repo for publishing (e.g. `owner/profile` @ `feat-uk-career-intel`)

## Prerequisites
- GitHub connector authenticated (PAT with repo + PR read; write if pushing)
- LinkedIn: browser session (sign-in via box handoff if authwall)
- Do not invent employment dates, degrees, or salaries not observed

## Work loop (ordered)

### 1) Orient
- Confirm identity via GitHub `get_me`
- Record timezone for the user; label all timestamps in their local zone
- Create a todo list: github-audit, orgs-deepdive, linkedin, programme-verify, assessment, publish, skill-refresh

### 2) GitHub personal audit (read-only)
- Inventory all public repos (paginate); separate forks vs non-forks
- Sample top ~15 by stars / recency / size; peek README + manifests for real stack depth
- Skill matrix with High/Med/Low evidence
- Flag professional risks: joke/NSFW names, display-name hygiene, empty scaffolds
- Write `*-github-audit.md`

### 3) Org deep-dive (read-only)
- For each priority org (and discovered orgs): role inference, themes, top repos, collaboration vs solo
- Document CAP / PAT blocks explicitly; use PR/commit search workarounds
- CV citation matrix: Safe / Cite carefully / Hide
- Write `*-orgs-deepdive.md`

### 4) LinkedIn inspect
- Prefer connector if available; else browserUse
- On authwall: request box help for login, then resume extraction
- Capture About, Experience, Education, Skills, certs, featured — mark sections missing
- Screenshots as evidence; write `*-linkedin.md`
- Never message or edit the profile

### 5) Programme / visa / labour market
- Re-verify fees, dates, Graduate Route duration, SOC going rates, ASHE regional medians from live sources when possible
- Distinguish industrial *opportunity* vs guaranteed *placement*
- Keep prior research files if still valid; note re-verify date

### 6) Synthesize assessment
Write `uk-career-assessment-*.md` covering:
1. One-line conclusion
2. Observed profile (LI + GH + orgs)
3. Fit vs conversion MSc (visa clock, projects, fees ROI)
4. Target role categories (ranked)
5. Salary bands by city (labelled estimates)
6. Conditional probability ranges with assumptions
7. Best path timeline (pre-enrol / during / Graduate Route)
8. Information gaps that would change odds
9. Index of deliverables

Language: match the user's app/chat language.

### 7) Publish
- Assemble folder `uk-career-intel/` (or user-specified path)
- Commit + push to the requested branch (GitHub API `push_files` / cloud agent — no unnecessary local clone)
- Open or update PR only if user asks
- Return commit URL + file paths

### 8) Package the loop
- Keep this AGENT_LOOP file next to the reports
- Optionally save a generic skill pointing here for `/` invocation
- Mention the skill/pill to the user

## Success criteria
- [ ] Audit + org + LinkedIn files exist with sources/dates
- [ ] Assessment states odds as ranges with assumptions; lists missing inputs
- [ ] NSFW/hygiene risks called out if present
- [ ] Reports on the target branch
- [ ] Agent loop doc updated if the procedure changed

## Anti-patterns
- Treating adult-industry or joke branding as neutral
- Confusing UG placements with PGT conversion projects
- Using ASHE medians as expected graduate starting salary
- Fabricating Experience timelines LinkedIn did not show
- Pushing secrets, tokens, or private personal data into the public repo

## Optional follow-ons (offer once)
- GitHub hygiene PR (rename display name guidance; pin list)
- English CV draft from Safe-cite artifacts only
- Sponsor-density city shortlist refresh
