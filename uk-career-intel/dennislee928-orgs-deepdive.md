# GitHub Organizations Deep-Dive — `dennislee928`

**Audit date:** 2026-09-05 (Asia/Taipei, UTC+8)  
**Source:** user-Github MCP (read-only) + public GitHub API / raw.githubusercontent.com fallbacks  
**Identity:** `get_me` → `dennislee928` (id 55692615); company `mitake.com.tw`; location Taipei  
**Scope:** Priority orgs + related (BabyGrootCICD, taipei-doit). No GitHub writes.

---

## 1. Executive summary

| Org | Public repos | dennislee928 role (inferred) | Themes | Quality | UK CV stance |
|-----|-------------:|------------------------------|--------|---------|--------------|
| **quantumworld-dpdns-io** | **60** | Founder / primary author (solo; merges own PRs; authored org README WIP) | Space/cyber/PQC **+ ~19 adult-industry scaffolds** | Uneven: 1–2 deep demos (ZK-XDR), many stubs + auto-commit noise | **Hide org wholesale**; optionally cite 1–2 non-adult cyber repos only |
| **Jest-Test-Team** | **39** | Primary committer on flagship repos; **78** authored PRs | AI security (ADM), ZK/datacenter sim, inclusive AI gateway, XDR/PQC K8s, IELTS noise | **Highest substance** among orgs (live demos, tests, infra) | **Cite carefully** — lead with named flagship repos, not org brand |
| **cyber-security-dev-dep-mitake-com-tw** | **12** | Primary author on sampled repos; aligns with employer `mitake.com.tw` | Hardware security, ESP32 lab, ChipWhisperer platform, disk cleaner, security tooling | **Strongest employer-aligned** evidence | **Safe to cite** (selected repos); avoid joke/SCP-named repos |
| **BabyGrootCICD** | CAP-blocked listing | Frequent author (PRs + commits); **31** authored PRs | CI/CD product prototypes + NSFW game history | Mixed; open PR burst looks prototype spam | **Cite carefully** (CI themes) / **Hide** Sext-Adventure |
| **taipei-doit** | N/A (external civic org) | Contributor (2 open security/CI PRs) | Civic dashboard DevSecOps | Good collaborative signal if merged | **Safe to cite** if/when merged |

**Cross-cutting risks for UK SOC 2134 software roles (post-Glasgow MSc):**
1. Profile display name still vulgar (`Dildo Baggins…`) — blocks professional screening independently of orgs.
2. Adult-industry branding concentrated in `quantumworld-dpdns-io` (~32% of public repos by keyword) and historical `BabyGrootCICD/Sext-Adventure`.
3. Heavy AI co-authorship (`Co-Authored-By: Claude…`) is fine if framed as tooling; do not oversell "solo genius."
4. Commit-search `total_count` values for some org queries are inflated/unreliable; use per-repo evidence instead of raw totals.
5. Collaboration is mostly **solo** inside owned orgs; external PRs (taipei-doit, JuliaLang) are the main multi-party signals.

**CAP / permission blocks (documented):**
- `search_repositories org:Jest-Test-Team` → Conditional Access Policy block.
- `search_repositories org:BabyGrootCICD` → CAP block.
- `get_file_contents` / collaborators on Jest-Test-Team via MCP PAT → org forbids fine-grained PATs with lifetime >366 days.
- `list_repository_collaborators` on quantumworld / mitake → 403 (token scope).
- `get_teams` for dennislee928 → `null`.
- Workarounds used: `search_commits` / `search_pull_requests`, public `api.github.com/users|repos`, `raw.githubusercontent.com`.

---

## 2. Per-org deep sections

### 2.1 `quantumworld-dpdns-io`

#### Org profile
| Field | Value |
|-------|-------|
| Display name | `quantumworld.dpdns.io` |
| Created | 2025-12-16 |
| Public repos | **60** (search + user API agree) |
| Followers | 1 |
| Website / location / company | empty in API |
| Profile README | Present (`.github` profile): ZKP, DID, PQC, Zero Trust across **cislunar space**, **privacy/compliance (incl. adult industry)**, **SecOps** |
| Open org intro PR | [#1 WIP README](https://github.com/quantumworld-dpdns-io/.github/pull/1) by dennislee928 (open since 2026-05-22) |

#### Role of dennislee928
- **Inferred owner / founder / primary committer.** Evidence: authored org intro PR; 16 authored PRs (mostly self-merge "Dev"); commit author login exclusively `dennislee928` on sampled repos; commit author name oscillates `Dennislee:)` vs vulgar display name.
- Official org **owner** role cannot be confirmed via `get_teams` (null) or collaborators API (403).
- Not a multi-member collaboration signal on public evidence.
- Not a multi-member collaboration signal on public evidence.

#### Theme split (from public descriptions/names)
- **Adult / creator / intimacy compliance:** ~**19** repos (e.g. `escort-compliance-crm`, `adult-platform-trust-safety-os`, `web3-adult-industry-ca`, `sex-worker-safety-dao-toolkit`, …).
- **Cyber / space / PQC / ZT:** ~**31** repos (e.g. `ZK-XDR-…`, `pqc-migration-digital-twin`, `gnss-spoofing-jamming-early-warning`, satellite/zero-trust series).
- **Other / DeFi / misc:** ~**10** (`KSN-AI-RWA-Civilization-Stack`, `Aave-DeFi-…`, `web3-cbt`, …).
- **Tiny scaffolds** (`size < 200`): ~**23** repos — empty or near-empty product ideas.

#### Top repos by substance (not just name)

| Repo | Lang | ★ | Size | Updated | dennislee928 majority? | Notes |
|------|------|--:|-----:|---------|------------------------|-------|
| **ZK-XDR-Graph-Agentless-XDR-ZK-Device-Trust-Federated-CTI-Lakehouse** | Go | 0 | 53k | 2026-07-15 | **Yes** (all sampled commits) | Real phased build: Go services, Next console, Rust IoC, Julia anomaly, Noir ZK, eBPF, Sigma/SOAR, Robot/CI. Strongest cyber artifact in org. |
| **KSN-AI-RWA-Civilization-Stack** | Move | 1 | 417k | 2026-08-09 | **Yes** | Heavy recent FE/Sui commits; ambitious RWA narrative; more product than scaffold. |
| **gnss-spoofing-jamming-early-warning** | Makefile | 2 | 286k | 2026-08-14 | **Yes** | Largest ★ in org; **quality concern:** burst of `Auto-commit: Project implementation in progress [count: 132x]` — volume ≠ craftsmanship. README is thin template. |
| **decentralized-proof-of-contact-network** | Rust | 0 | 1.0M | 2026-05-23 | Likely | Huge size; not deep-read beyond metadata. |
| **satellite-zero-trust-access-broker** | Makefile | 0 | 214k | 2026-07-29 | Likely | Large; space ZT theme. |
| **decentralized-ground-station-network** | Makefile | 0 | 206k | 2026-07-15 | Likely | Large Makefile monorepo pattern. |
| **web3-adult-industry-ca** | Makefile | 0 | 193k | 2026-05-17 | Likely | **NSFW branding** — do not cite for UK apps. |
| **privacy-preserving-kyc-vault** | TypeScript | 0 | 110k | 2026-05-24 | Likely | Dual-use (privacy KYC) but described for adult platforms. |
| **Life_3.0_doomsday_clock** | Makefile | 0 | 235k | — | Likely | Featured in org README; AI-risk tracking narrative. |
| **pqc-migration-digital-twin** | Go | 0 | 1.0k | 2026-06-19 | Yes (PRs) | Polished README + docker-compose/src/tests present; README still says "scaffold stage." Cite as PQC interest, not production. |
| **federated-threat-intel-lakehouse** | Python | 0 | 280 | 2026-07-29 | Unknown | Ambitious README (Iceberg/Flower/Qiskit); tiny size → mostly aspirational. |
| **secure-satellite-api-gateway** | TypeScript | 0 | 978 | 2026-06-05 | Likely | Mid-size space API theme. |
| **continuous-face-zero-trust** | Python | 0 | 1190 | 2026-07-29 | Likely | ZT auth theme (non-adult). |
| **escort-compliance-crm** | Go | 1 | 630 | 2026-07-29 | Likely | **Hide** for UK. |
| **adult-creator-tax-accounting-copilot** | Python | 0 | 20k | 2026-07-29 | Likely | **Hide** for UK. |

#### Quality signal
- **Real depth:** ZK-XDR (commit history shows multi-phase feature work, tests, observability — not just a README).
- **Scaffold / marketing density:** Many repos share Wild-SaaS template READMEs; ~23 near-empty.
- **Auto-commit spam** on GNSS repo undermines "60 projects" narrative.
- **NSFW / adult branding risk:** **High** for UK banks, public sector, big tech ATS — even "compliance for adult industry" framing reads as adult vertical on LinkedIn/GitHub scrape.

#### Collaboration
- **Solo** on public evidence. PRs are self-authored/self-merged "Dev" loops.

#### How to cite (UK CV / LinkedIn)
- **Avoid listing the organization name** on UK applications.
- If needed, cite **one** non-adult repo by full URL + skill claim (e.g. "open-source XDR/SOAR demo in Go/TS") without org marketing copy.
- Prefer moving best non-adult work under personal account or a neutrally named org before applications.

---

### 2.2 `Jest-Test-Team`

#### Org profile
| Field | Value |
|-------|-------|
| Display name | `John Sladek ,inc.` |
| Email (public) | `support-jsdk@jsdk-tech.io` |
| Created | 2025-04-28 |
| Public repos | **39** |
| Website / location | empty |
| Org repo search via MCP | **CAP-blocked** |
| File contents via MCP PAT | **Blocked** (fine-grained PAT lifetime >366 days policy) |
| Public raw / unauthenticated repo API | Works for individual public repos |

#### Role of dennislee928
- **Primary committer** on flagship repos (Datacenter Builder, inclusive-ai-trust-gateway, ADM, software-poe) per `search_commits org:Jest-Test-Team author:dennislee928`.
- **78 authored PRs** across org (77 closed, 1 open PQC nginx on XDR-OAR).
- PR concentration includes **45** on `Ielts` (low signal for software CV) plus meaningful security/AI repos.
- Org ownership vs member: **not confirmable** (`get_teams` null; CAP). Display name "John Sladek ,inc." ≠ personal brand — treat as associated lab/company org, cite by **repo**, not vague "Jest-Test-Team engineer."

#### Top repos by substance

| Repo | Lang | ★ | Size | Updated / pushed | Notes |
|------|------|--:|-----:|------------------|-------|
| **Dastacenter_Builder_Simulator** | TypeScript | **2** | 10.3k | pushed 2026-08-30 | **Flagship.** Next.js 15 + R3F 3D builder; standards-cited scoring; browser Noir ZK proofs; SBT mint; WebMCP tools; **396 tests**; live demo on `datacenter-building-simulator.dennisleehappy.org`. Heavy Aug 2026 dennislee928 commits (undo/WebMCP fixes). |
| **Agentic-Defense-Matrix-ADM** | Go | 0 | 2.8k | pushed 2026-08-25 | **Flagship AI-sec.** Live red/blue/green exercise on OCI; Go gateway + Rust watchdog + OPA; Neon/Elastic/Groq; GitHub Pages dashboard; research experiments. Homepage points at `api.dennisleehappy.org`. |
| **inclusive-ai-trust-gateway** | Python | 0 | 970 | pushed 2026-08-23 | Hackathon MVP: ERH + ADM for inclusive AI trust; Vercel homepage; 5 closed PRs by dennislee928 (open-data.gov.tw wiring, visual proof). |
| **XDR-OAR-Hybrid-Infrastructure_K8S** | — | — | — | — | PRs for NGINX TLS 1.3 + NIST PQC hybrid groups; **1 open** PQC PR. Good DevSecOps talking point if you can demo configs. |
| **Agentless-Monitoring-and-EDR-HIDS-integration** | — | — | — | — | PRs adding Zeek/Logstash/Kafka + Actions. |
| **software-poe** | — | — | — | — | Recent commits by dennislee928 (18 in latest commit page sample). |
| **Ielts** / **IELTS-GAME** / **HTB-Academy** / **next-js-project** | — | — | — | — | High PR volume, low UK software-role signal. |

#### Themes / product narrative
- AI agent security & purple-team automation (ADM).
- ZK + infrastructure education (Datacenter Builder).
- Inclusive AI / civic hackathon (trust gateway).
- XDR/EDR/PQC lab infra.
- Side: IELTS / academy content.

#### Quality signal
- **High** on Datacenter Builder and ADM (live URLs, tests, honest docs about Midnight ZK toolchain limits).
- Org name/`John Sladek` branding is odd for UK recruiters — **don't lead with org**.
- Mixed with low-value IELTS PR churn.

#### Collaboration
- Public evidence still dominated by dennislee928; live demos imply personal infra (`dennisleehappy.org`). Treat as **solo / founder-led lab**, not large team.

#### UK citation
- **Cite carefully:** name the **repo + live demo + stack**, e.g. "Built a ZK-attested datacenter design simulator (Next.js, Noir, 396 tests)" and "Agentic AI defense matrix (Go/Rust, live purple-team demo)."
- Avoid "Member of Jest-Test-Team" without context.
- Do not cite IELTS PR spam.

---

### 2.3 `cyber-security-dev-dep-mitake-com-tw`

#### Org profile
| Field | Value |
|-------|-------|
| Display name | `cyber-security-dev-dep-mitake.com.tw` |
| Created | 2025-09-25 |
| Public repos | **12** |
| Profile README | Hardware **KEY BOX** vision: ESP32 root-of-trust endpoint agent + central console (Go/Next/Prometheus/Grafana/Loki) |
| Alignment | Matches user company `mitake.com.tw` |

#### Role of dennislee928
- **Primary author** on deep-sampled repos (`ESP32_atk_def_proxy_logger`, `chip_whisper_lab`, `boss-s_dyson_clear`): commit authors are exclusively `dennislee928`.
- **7 authored PRs** (chip_whisper_lab, local-connection-gui-inspector, pbx_ivr, Security-and-Infrastructure-tools-Set) — mostly "Dev" self-merges.
- Plausible **employer-adjacent / internal R&D org** presence; exact job title not on GitHub.

#### All public repos (API)

| Repo | Lang | ★ | Size | Updated | Assessment |
|------|------|--:|-----:|---------|------------|
| **chip_whisper_lab** | TypeScript | 0 | 3.9k | 2026-07-30 | **High substance:** ChipWhisperer learning platform; 25-module curriculum; Next+FastAPI; Robot CI; Docker. Strong HW security storytelling. |
| **ESP32_atk_def_proxy_logger** | Rust | 0 | 157 | 2026-08-04 | **High substance:** 3-node ESP32 WiFi lab (Rust firmware + Go agent + React UI + Julia analysis); SAFETY.md gated attack; Docker/CI. Excellent DevSecOps/embedded demo. |
| **boss-s_dyson_clear** (SweepDeck) | TypeScript | 0 | 4.8k | 2026-08-09 | Cross-platform disk cleaner (Electron + graph/SQLite model); win+mac CI; Robot tests. Product-shaped; **name is unprofessional** — cite as SweepDeck. |
| **Security-and-Infrastructure-tools-Set** | Shell | 0 | 142 | 2025-10-17 | Dockerized Nuclei/Nmap/AMASS + Vault/Traefik/ArgoCD. Solid SecOps tooling portfolio piece; verbose README. |
| **pbx_ivr** | Python | 0 | 366 | 2026-06-01 | Telephony/IVR — niche but real. |
| **BLE-off-seat-Presence-Lock** | Rust | 0 | 89 | 2026-07-23 | BLE presence lock — hardware-adjacent. |
| **local-connection-gui-inspector** | TypeScript | 0 | 702 | 2026-07-05 | Local network GUI inspector. |
| **local-stt** | Swift | 0 | 49 | 2026-06-30 | Local speech-to-text (small). |
| **mitake-eat** | TypeScript | 0 | 7.0k | 2026-05-13 | Internal/lifestyle app — low UK software signal. |
| **SCP-2317** / **scp-1003-ko-main** | Makefile / PowerShell | 0 | — | 2026-07 | **Joke/SCP naming** — hide from UK CV. |
| **.github** | — | 0 | 6 | 2025-10-01 | Org profile. |

#### Themes
- Hardware security & SCA education (ChipWhisperer).
- Embedded WiFi security lab (ESP32).
- Desktop utility (SweepDeck).
- Containerized security scanning stack.
- Internal/misc (eat, SCP jokes).

#### Quality / collaboration
- ESP32 and WhisperLab READMEs show **operational honesty** (limits, SAFETY gates, macOS USB constraints) — stronger than quantumworld template spam.
- Collaboration: **solo** on public commits sampled; may still be company-backed privately.

#### UK citation
- **Safe to cite** as employment-aligned R&D: "Hardware security learning platform (ChipWhisperer + Next/FastAPI)" and "ESP32 WiFi monitoring/detection lab (Rust/Go/React)."
- Frame under **Mitake / cybersecurity hardware** experience, not org vanity URL.
- Hide SCP-named repos and rename SweepDeck citation away from `boss-s_dyson_clear`.

---

### 2.4 Related orgs / external

#### BabyGrootCICD
- Org listing **CAP-blocked**.
- **31** authored PRs: 14 simultaneous open "solution prototype" PRs on `product_maker` (2026-08-23) — looks like batch prototyping, weak as CV bullets until curated.
- Closed work on `hermes_agent_setup_guide`, `modern_hospital_information_system`.
- Historical **`Sext-Adventure`** PRs (2025-10) — **Hide** (NSFW naming).
- Recent commits on `quant-trading-bot` (author dennislee928, Aug 2026) — optional fintech angle if polished.

#### taipei-doit (contributor, not member org)
- Open PRs: [Taipei-City-Dashboard#1229](https://github.com/taipei-doit/Taipei-City-Dashboard/pull/1229) security + CI/CD dependency updates; [ORB-Image-Detection#1](https://github.com/taipei-doit/ORB-Image-Detection/pull/1) DevSec pipeline.
- Commit search `org:taipei-doit author:dennislee928` returned **0** (changes may be PR-only / not on default branch yet).
- **Safe to cite** as civic OSS **once merged**; until then "submitted security hardening PRs."

#### Other (from prior audit, not re-owned)
- JuliaLang/julia PRs — strong external signal (prefer over org vanity).
- BanklessDAO, moda-gov-tw, etc. — secondary.

---

## 3. CV citation matrix (UK apps / LinkedIn / SOC 2134)

| Item | Verdict | How to present |
|------|---------|----------------|
| Mitake org: `chip_whisper_lab` | **Safe to cite** | Hardware security platform; curriculum + FastAPI/Next |
| Mitake org: `ESP32_atk_def_proxy_logger` | **Safe to cite** | Embedded + Go agent + safety-gated lab |
| Mitake org: Security tools set | **Safe to cite** | Dockerized SecOps toolchain |
| Mitake: SweepDeck (`boss-s_dyson_clear`) | **Cite carefully** | Use product name SweepDeck; avoid repo slug |
| Mitake: SCP-* / mitake-eat | **Hide** | Joke / non-relevant |
| Jest: Datacenter Builder Simulator | **Safe to cite** (best org artifact) | Live demo + ZK + tests; don't need org name |
| Jest: Agentic Defense Matrix (ADM) | **Safe to cite** | AI-agent security / purple team; live dashboard |
| Jest: inclusive-ai-trust-gateway | **Cite carefully** | Hackathon MVP; pair with Ethic-Latex personal repo |
| Jest: XDR-OAR PQC nginx work | **Cite carefully** | Config/infra contribution; show diff if interviewed |
| Jest: Ielts / HTB-Academy churn | **Hide** | Noise |
| Jest-Test-Team org brand / "John Sladek ,inc." | **Cite carefully / avoid** | Prefer repo URLs |
| quantumworld: ZK-XDR (non-adult) | **Cite carefully** | Only if cleaned branding; else mirror under personal account |
| quantumworld: PQC digital twin | **Cite carefully** | Interest signal; admit scaffold |
| quantumworld: adult-* / escort / sex-worker / intimacy | **Hide for UK apps** | NSFW vertical risk |
| quantumworld org name on CV | **Hide** | Adult pillar in org README |
| BabyGroot: CI product_maker prototypes | **Cite carefully** | Pick 1–2 merged/meaningful only |
| BabyGroot: Sext-Adventure | **Hide** | NSFW |
| taipei-doit security PRs | **Safe to cite** (post-merge preferred) | Civic DevSecOps |
| Personal repos Ethic-Latex / LiveHouseAAS / erh-guardian | **Safe (preferred)** | Stronger than most org scaffolds — use as primary pins |

---

## 4. Recommended 3–5 org-backed talking points (interviews)

1. **Agentic AI defense (Jest / ADM):** "I built and operate a live red/blue/green exercise for tool-calling agents — Go gateway with semantic boundary controls, Rust endpoint watchdog concepts, OPA policies, and a scored battle log on free-tier cloud." *Evidence:* live dashboard + API hostnames in README.

2. **ZK + standards-aware systems (Jest / Datacenter Builder):** "I shipped a browser-side Noir proof that a private facility design clears a threshold against cited standards (Uptime/TIA/ASHRAE…), with 396 automated tests and WebMCP agent tooling." *Evidence:* live app + commit history on undo/WebMCP hardening.

3. **Hardware / embedded security lab (Mitake org):** "I designed a three-node ESP32 WiFi monitoring and detection lab with a Go control plane, React dashboard, Julia offline analysis, and dual safety gates so attack features only hit allowlisted own BSSIDs." *Evidence:* ESP32 README + SAFETY narrative.

4. **Side-channel / ChipWhisperer platform (Mitake org):** "I packaged a local-first ChipWhisperer research/learning stack (installer, 25 modules, FastAPI orchestration, CI) aimed at SCA/fault-injection education on Apple Silicon." *Evidence:* WhisperLab README structure.

5. **Civic DevSecOps contribution (taipei-doit):** "I submitted dependency/security and DevSec pipeline PRs to Taipei City Dashboard / ORB image detection — collaborative, review-driven work outside my own orgs." *Evidence:* open PRs; upgrade to "merged" when true.

*(Optional sixth if interviewer wants PQC: XDR-OAR nginx PQC hybrid PR + quantumworld PQC twin — frame as exploration, not production.)*

---

## 5. Method notes / limits

- Read-only MCP + public HTTP; **no writes** to GitHub.
- Jest / BabyGroot org listing CAP-blocked; Jest file API blocked by PAT lifetime policy — used PR/commit search + public raw/API.
- Collaborator lists 403 — collaboration inferred from commit author logins only.
- Commit search `total_count` for broad `org:… author:dennislee928` queries appears **inflated** (e.g. tens of thousands); do not cite those totals on a CV.
- Private repos not audited.
- Prior personal-repo audit: `/workspace/dennislee928-github-audit.md`.

---

*End of org deep-dive.*
