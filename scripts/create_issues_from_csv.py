#!/usr/bin/env python3
import csv
import os
import sys
import requests

API = "https://api.github.com"

def md_block(row):
    deadline = (row.get("Next deadline") or "").strip()
    if deadline:
        deadline_line = f"**Deadline:** {deadline}"
    else:
        deadline_line = "**Deadline:** (check programme page)"
    lines = [
        f"**Program:** {row.get('Program','')}",
        f"**University:** {row.get('University','')}",
        f"**Country:** {row.get('Country','')}",
        f"**Field:** {row.get('Field','')}",
        f"**Status:** {row.get('Open now?','')}",
        deadline_line,
        f"**English rule:** {row.get('Key English rule','')}",
        f"**Fees (tuition):** {row.get('Fees (tuition)','')}",
        f"**Application link:** {row.get('Application link','')}",
        "",
        "### Documents checklist",
        "- [ ] Passport scan",
        "- [ ] CV (latest)",
        "- [ ] Statement of Purpose (SoP)",
        "- [ ] Transcripts (BSc, MSc) + translations",
        "- [ ] Diploma(s) / proof of expected graduation",
        "- [ ] IELTS/TOEFL TRF",
        "- [ ] Portfolio / GitHub links",
        "- [ ] Two recommendation letters",
        "- [ ] Financial proof (if required)",
        "- [ ] Application fee paid",
        "",
        "### Portal steps",
        "- [ ] Created account / verified email",
        "- [ ] Entered personal & education data",
        "- [ ] Uploaded documents",
        "- [ ] Submitted application",
        "- [ ] Received confirmation email & application ID",
        "",
        "### Follow-ups",
        "- [ ] Scholarship/waiver application",
        "- [ ] Interview prep/scheduled (if any)",
        "- [ ] Decision received",
        "- [ ] Offer accepted",
        "- [ ] Seat deposit paid (if required)",
        "- [ ] Visa started",
        "- [ ] Housing arranged",
        "- [ ] Flights & arrival plan",
    ]
    return "\n".join(lines)

def create_issue(owner, repo, token, title, body, labels):
    url = f"{API}/repos/{owner}/{repo}/issues"
    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github+json",
    }
    data = {"title": title, "body": body, "labels": labels}
    r = requests.post(url, headers=headers, json=data, timeout=30)
    if r.status_code >= 300:
        raise SystemExit(f"Failed to create issue: {r.status_code} {r.text}")
    return r.json().get("html_url")

def main():
    if len(sys.argv) < 4:
        print("Usage: python scripts/create_issues_from_csv.py OWNER REPO CSV_PATH")
        sys.exit(1)

    owner, repo, csv_path = sys.argv[1], sys.argv[2], sys.argv[3]
    token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if not token:
        print("Error: Please export GITHUB_TOKEN")
        sys.exit(1)

    with open(csv_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            uni = (row.get('University','') or '').strip()
            prog = (row.get('Program','') or '').strip()
            country = (row.get('Country','') or '').strip()
            title = f"[Application] {uni} - {prog} ({country})"
            body = md_block(row)
            url = create_issue(owner, repo, token, title, body, ["application", "todo"])
            print(f"Created: {url}")

if __name__ == "__main__":
    main()
