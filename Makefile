# Simple shortcuts for MSc tracker automation

OWNER ?= your-github-username-or-org
REPO  ?= your-repo-name
CSV   ?= msc_shortlist_table_extended_ece.csv

.PHONY: help install create-issues

help:
	@echo "Targets:"
	@echo "  install         - install Python deps (requests)"
	@echo "  create-issues   - create issues from CSV (requires GITHUB_TOKEN)"
	@echo ""
	@echo "Variables (override like VAR=value make target):"
	@echo "  OWNER, REPO, CSV"

install:
	python -m pip install --upgrade pip
	pip install requests

create-issues:
	@[ -n "$$GITHUB_TOKEN" ] || (echo "Please export GITHUB_TOKEN"; exit 1)
	python scripts/create_issues_from_csv.py $(OWNER) $(REPO) $(CSV)
