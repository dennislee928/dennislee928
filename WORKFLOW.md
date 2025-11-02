# MSc Applications — Suggested Workflow

This repo tracks MSc applications (AI/Software, Cybersecurity, Blockchain/Web3, Quantum). It pairs with:
- `msc_shortlist_table_extended_ece.csv` — your master list of programs
- Calendar: `msc_deadlines_extended_ece.ics` — import to Google Calendar

## Kanban (GitHub Projects)
Columns you can use:
1. **Backlog** — programs you're considering
2. **In Progress** — drafting SoP, requesting LORs, collecting docs
3. **Submitted** — application submitted; waiting for decision
4. **Decision** — admitted / waitlist / reject
5. **Visa & Housing** (if admitted) — visa docs, housing, flights, arrival

## Labels
Use labels to filter quickly:
- `application`, `funding`, `lor`, `docs`, `visa`, `sop`, `deadline`, `submitted`, `decision`

## Core Cycle (per program)
1. **Create an issue** using **Program Application Tasklist**.
2. **Block the calendar** with the deadline and a 14- and 7-day reminder.
3. **Documents**: CV → SoP draft (program-specific) → transcripts & degrees → IELTS TRF → portfolio/GitHub.
4. **Recommenders**: open an **LOR** issue; send a complete package.
5. **Portal**: create account, fill forms, upload PDFs, pay fee, submit.
6. **Funding**: open a **Funding** issue; shortlist scholarships/waivers.
7. **Follow-ups**: interview prep, status checks, decision recording.
8. **If admitted**: accept, deposit, visa checklist, housing, arrival.

## Weekly Rhythm
- **Mon**: 60–90 mins — update issues; check new calls/Deadlines page for Malta, EIT Digital.
- **Wed**: 90 mins — SoP tailoring + document polish.
- **Fri**: 30 mins — scholarship search & status.
- **Sun**: 30 mins — review Kanban & calendar for next week.

## SoP Outline (per program)
- **Hook**: DevSecOps + AI experience summary (GitHub activity, security + backend).
- **Academic fit**: Strong Master's GPA & relevant modules (AI, interactive systems).
- **Technical impact**: 2–3 brief case studies (cloud/IAM/CI/CD; security; blockchain).
- **Program fit**: 2–3 modules/labs/faculty that match your goals; why this university.
- **Trajectory**: ML/MLOps or Security engineering; medium-term leadership goals.
- **Closing**: Why now, why Europe; what you bring to the cohort.

## Optional Automation Ideas
- **GitHub Actions**: 
  - Auto-label issues by title prefix (`[Application]`, `[Funding]`, `[LOR]`).
  - Mark `stale` after N days without updates.
- **CSV → Issues**: Small script to read the CSV and auto-create issues per row.

## After IELTS Writing Retake (2026-11-25)
- If Writing ≥ 6.0/6.5, add **EIT Digital Cyber**, **TU Delft CS**, **UvA AI** to your active applications.
- Update the CSV and re-export `.ics` for any new deadlines.
