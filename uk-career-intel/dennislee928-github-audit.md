# GitHub Skills/Portfolio Audit — `dennislee928`

**Audit date:** 2026-09-05 (Asia/Taipei, UTC+8)  
**Source:** GitHub API via user-Github MCP (read-only)  
**Identity confirmed:** `get_me` → login `dennislee928` (id 55692615)

---

## Executive summary

- **Profile:** Hireable=true; company `mitake.com.tw`; location Taipei; blog `https://www.dennisleehappy.org/`; bio claims fullstack / cybersecurity / CI-CD / crypto; contact `security-admin@dennisleehappy.org`.
- **Display name is a critical UK screening risk:** GitHub `name` is currently `Dildo Baggins(假屌巴金斯，中土世界第一巨屌)` — will fail automated/HR name filters and damage professional first impressions.
- **Scale:** `public_repos=192` (API); search `user:dennislee928` = **139 non-fork** + forks bring total toward 192. Followers **360**, following **550**. Created 2019-09-23.
- **Star signal is thin outside one flagship:** top repo `Ethic-Latex` has **53★**; next personal repos mostly **3–11★**. Sum of stars on non-fork inventory ≈ **697** (many 4–6★ clusters look like low-signal).
- **Real depth exists** in a small set: ERH research monorepo (`Ethic-Latex`), agent/HITL product (`erh-guardian-agent`), Go+Next SaaS (`LiveHouseAAS`), firmware RE demo, polyglot infra scaffold (`AscendOS`), scholarship automation (`Smart_Zone`).
- **Breadth ≫ depth overall:** many scaffolds, GitHub Skills forks, adult-industry themed org repos, and abandoned WIP dilute the portfolio for UK junior–mid hiring.
- **Org footprint:** Active in `quantumworld-dpdns-io` (~60 repos), `Jest-Test-Team` (PRs/commits; org search CAP-blocked), `cyber-security-dev-dep-mitake-com-tw` (12 repos), plus open PRs into `BabyGrootCICD`, `taipei-doit`, `JuliaLang`, etc.
- **Open PRs:** **31** authored open PRs — themes: CI/product prototypes (`BabyGrootCICD`), security/CI (`taipei-doit`), PQC/nginx (`Jest-Test-Team`), Julia CI robustness, Cloudflare/Bankless, containerization.
- **Closed PR volume is very high:** search `author:dennislee928 is:closed` total_count **1715** (includes self-repo churn and org work).
- **UK positioning angle after conversion MSc:** Lead with **production-shaped fullstack (Go/TS)**, **DevSecOps/firmware**, and **AI-agent + measurable-safety (ERH)** — not with adult-themed scaffolds or joke naming.

---
## Identity (get_me)

| Field | Value (API) |
|-------|-------------|
| login | dennislee928 |
| name | Dildo Baggins(假屌巴金斯，中土世界第一巨屌) |
| company | mitake.com.tw |
| location | taipei |
| hireable | true |
| public_repos | 192 |
| followers / following | 360 / 550 |
| blog | https://www.dennisleehappy.org/ |
| bio | NCCU Student; Metal guitar; Full stack / Cybersecurity platform / CI / CD; Crypto lover |

---

## Org memberships & related presence

`get_teams` returned **null** (no team memberships visible to this token, or none configured). Org presence inferred from repo search, commits, and PRs:

| Org / entity | Evidence | Notes |
|--------------|----------|-------|
| **quantumworld-dpdns-io** | ~**60** public repos; heavy `author:dennislee928` commits (many initial scaffolds); open PR on `.github` README | Appears founder/primary. Mix of cyber/PQC/space **and** many adult-industry product scaffolds. UK employers may treat adult-themed public branding as screening risk. |
| **Jest-Test-Team** | **78** authored PRs (search); commits in `redis-lab`, work on `inclusive-ai-trust-gateway`, `Agentic-Defense-Matrix-ADM`, `XDR-OAR-Hybrid-Infrastructure_K8S`, `software-poe`, etc. | Org listing blocked by CAP (conditional access policy). Themes: AI trust gateway, XDR/PQC, Redis lab, agentic defense. |
| **cyber-security-dev-dep-mitake-com-tw** | **12** repos (chipwhisper lab, ESP32 proxy logger, PBX IVR, BLE presence lock, Security tooling set, etc.) | Aligns with company `mitake.com.tw` — hardware/security adjacent work. |
| **BabyGrootCICD** | **14+** open PRs titled feat solution prototype on `product_maker` | Org search CAP-blocked; CI/CD product prototyping burst (2026-08-23). |
| **taipei-doit** | Open PRs: Dashboard security+CI/CD deps; ORB image detection DevSec pipeline | Civic/gov-adjacent OSS contribution signal. |
| **JuliaLang/julia** | Open PR: SIGINT test robustness; closed PR: compiler invalidation cache | Strong serious OSS signal for UK research/HPC-adjacent roles. |
| Other PR targets | BanklessDAO (Cloudflare+Cypress), moda-gov-tw, nics-tw, Hexstrike-AI, StreetVoice, bitcoin-model, Tinder docs, etc. | Mix of meaningful security hardening and low-value drive-by PRs. |

**Checked as requested:**
- `quantumworld-dpdns-io` — visible, substantial.
- `Jest-Test-Team` — visible via PRs/commits; repo search CAP-blocked.
- mitake-related — `cyber-security-dev-dep-mitake-com-tw` visible (12 repos).

---
## Personal repository inventory (API)

- Search `user:dennislee928` (default excludes forks): **total_count 139**
- Search `user:dennislee928 fork:true`: **total_count 192** (matches `public_repos`)
- Merged inventory: **192** unique names → **139 non-fork**, **53 forks**
- **Archived (sample):** 0 in merged non-fork set
- **Private:** not visible via public search
- **Languages (non-fork, primary language label):** TypeScript 23, Python 20, Go 16, JavaScript 13, Vue 10, none/unset 29, plus Shell/HTML/Rust/C/Makefile/Julia/Q#/YARA/etc.
- **Topics (freq):** api, python, react, typescript, vue, nextjs, go, vercel, automation, javascript, github-actions, quantum-computing, rust, cloudflare-pages, portfolio, web3, fintech, nuxt3, cloudflare-workers, mcp, ghidra, reverse-engineering, …
- **Activity:** ~34 non-fork repos with `updated_at` ≥ 2026-06-01; many others last touched ~2026-03–05 (bulk update pattern).
- **Tiny repos:** ~44 non-fork with `size < 50` (GitHub size units) — many stubs/skills/tutorials.

### Notable personal repos (API stats)

| Repo | Stars | Lang | Size | Updated | One-line |
|------|------:|------|-----:|---------|----------|
| Ethic-Latex | 53 | TypeScript | 31277 | 2026-09-03 | ERH research + security/AI products monorepo |
| thesis | 11 | Python | — | 2026-05-03 | thesis-related |
| QASM | 10 | Python | — | 2026-05-03 | quantum |
| APL_Demo | 9 | APL | — | 2026-03-21 | Cloudflare Spectrum / Axiom APL |
| Carbon_Trading_For_Individuals | 8 | TypeScript | 35688 | 2026-05-03 | Next/Supabase carbon trading |
| ETH_GATEWAY_DEMO | 7 | JavaScript | — | 2026-05-03 | React+Web3 DApp demo |
| CySECurity_Example | 7 | Q# | 8 | 2026-05-05 | Tiny Q# crypto/malware demos |
| firmware-research-demo | 7 | YARA | 46379 | 2026-05-03 | binwalk/Ghidra/YARA + Docker + web UI |
| next_js_portfolio | 6 | TypeScript | 24169 | 2026-07-16 | Next 15 portfolio (Sentry, Three.js, i18n) |
| LiveHouseAAS | 3 | Go | 82254 | 2026-07-28 | Full-stack live-house SaaS |
| erh-guardian-agent | 0 | Python | 2360 | 2026-09-03 | Strands+Bedrock+CF Workers HITL agent |
| AscendOS | 4 | Makefile | 40297 | 2026-06-09 | Polyglot microservices + Terraform/k3s scaffold |
| Smart_Zone | 4 | Makefile | 629107 | 2026-09-04 | Scholarship automation (Py/Rust/Go + Actions) |
| academy-central | 4 | Shell | 393056 | 2026-08-23 | Learning dump |
| ai-codereviewer | 5 | TypeScript | 506 | 2026-03-21 | GitHub Action AI review (small) |
| Pennis-Biometric-… | 4 | TypeScript | 702174 | 2026-05-23 | Next+Go+Supabase — joke naming |
| Teledildonics-as-a-Service | 4 | Go | 324 | 2026-06-08 | joke/adult naming, tiny |
| The-Trojan-Horse-Approach | 3 | TypeScript | 148 | 2026-05-23 | Consumer monorepo MVP (small) |

---

## Deep-dive sample - stack evidence from files

### 1. Ethic-Latex (53 stars)
High substance monorepo with Python SDK, Next.js app, Go gateway, tests, Docker.

### 2. erh-guardian-agent (0 stars, 2026-09-03)
AWS Strands + Bedrock + Cloudflare Workers/D1 MCP + Vite UI; HITL gate; pytest.

### 3. LiveHouseAAS (3 stars)
Go Gin+pgx+Redis+JWT; Next.js 14; Postgres; Docker; payments; ERC-721; CI. Modest tests; NATS pending.

### 4. firmware-research-demo (7 stars)
binwalk/Ghidra/YARA, analyzer script, Docker Hub image, Render web UI. Med-High cyber/RE demo.

### 5. AscendOS (4 stars)
Polyglot Go/Rust/Python/Qwik/Svelte + Terraform/k3s/OTel. Ambitious scaffold; integration incomplete.

### 6. Smart_Zone (4 stars)
Scholarship automation: Actions + Python/Rust/Go + Telegram/Slack/Discord. Med-High DevOps.

### 7. next_js_portfolio (6 stars)
Next 15, Sentry, Three.js, next-intl, Vercel. Med FE; missing root README.

### 8. Carbon_Trading_For_Individuals (8 stars)
Next/TS + Supabase + CI. Med fullstack; climate/fintech angle.

### 9-12. Thinner samples
ai-codereviewer (5, size 506) Low-Med Action. CySECurity_Example (7, size 8) Low Q#. git_porfolio_scanner (3) Low-Med Go. academy-central (4) Low learning dump.

### 13-15. Hygiene problem repos
Joke/NSFW-named personal repos (Pennis-Biometric..., Teledildonics-as-a-Service, bloody_mickey, Jason_Adult_Only, etc.) — private/rename before UK apps.

### Cloudflare evidence
Workers/Pages/D1 topics; CF_Workers/CF_App demos; erh-guardian worker; AscendOS CF Pages Terraform.

---

## Skill matrix (evidence-rated)

| Cluster | Strength | Evidence |
|---------|----------|----------|
| TypeScript / Next.js fullstack | High | LiveHouse FE, Ethic security app, portfolio, Carbon Trading |
| Go backends | High | LiveHouseAAS gin/pgx/redis, Ethic AI gateway, AscendOS Go |
| Python research+APIs | High | Ethic-Latex/erh, erh-guardian, Smart_Zone |
| Cloudflare Workers/Pages/D1 | Med-High | erh-guardian, CF demos, topics |
| Vercel / FE deploy | Med-High | portfolio, Ethic Vercel URL |
| Docker / CI-CD | High | LiveHouse, firmware, AscendOS, Actions, BabyGroot PRs |
| Security / DevSecOps | Med-High | firmware RE, taipei-doit PRs, Ethic security app, mitake org |
| AI / Agents / LLM ops | Med-High | erh-guardian Strands/Bedrock, Ethic engine, Jest AI gateway |
| Data / analytics | Med | ERH pipelines, PBX estimation, LiveHouse analytics |
| Blockchain / Web3 | Med-Low | ETH gateway, NFT tickets, TWSE-on-chain |
| Quantum | Low-Med | QASM, Qikit, Q# toy, optional Qiskit |
| Rust | Low-Med | Smart_Zone search, AscendOS services |
| Vue / Nuxt | Med (older) | BingX projects, 2024 portfolio |
| IaC / k8s | Med | AscendOS Terraform/k3s, CF Terraform, Ansible |
| Hardware / embedded | Med | mitake chipwhisper, ESP32, BLE, PBX IVR |

---

## Top showcase repos for UK employers (pin order)

1. Ethic-Latex — research-to-product (AI judgment metrics, FastAPI/Next, Go gateway, SDK).
2. LiveHouseAAS — clearest production-shaped SaaS (Go API, Postgres, auth, payments, Docker, CI).
3. erh-guardian-agent — Bedrock/Strands HITL agent + Cloudflare audit trail.
4. firmware-research-demo — concrete cyber tooling (YARA/binwalk/Docker).
5. Smart_Zone — automation/CI storytelling.
6. next_js_portfolio — front door (add README; pin only pro projects).
7. Carbon_Trading_For_Individuals — optional climate/fintech.
8. AscendOS — selective IaC/architecture talk; not a finished product claim.
9. External: JuliaLang/julia + taipei-doit security/CI PRs.
10. Mitake org chip_whisper_lab / security tools if citable.

---

## Open PR status (brief)

- Open authored PRs: **31**.
- Themes: BabyGrootCICD product_maker solution prototypes; taipei-doit security/CI; Jest-Test-Team PQC nginx; JuliaLang SIGINT test robustness; BanklessDAO Cloudflare+Cypress; quantumworld .github README WIP; moda-gov-tw Snyk; Hexstrike containers.
- Closed authored PRs: **1715** total_count — high throughput; many self-merges titled Dev (noise).
- Jest-Test-Team authored PRs (search): **78**.

---

## Red flags / cleanup recommendations

### Critical (before UK applications)
1. Change GitHub profile display name from joke/vulgar to professional (e.g. Dennis Lee).
2. Rename or private joke/NSFW-named repos; review quantumworld public NSFW-industry branding (or separate account for UK job hunt).
3. Pin only ~6 professional repos; unpin skills forks and joke projects.

### High
4. Archive/private: skills-* clones, empty demos, academy-central dump, tiny Q# toy if pinned.
5. Deduplicate skill demos (BingX/Nuxt, portfolios, CF demos) — one canonical per skill.
6. Add root README to next_js_portfolio; live URLs + diagrams on top 5.
7. Prefer merged meaningful OSS PRs on CV; do not lead with unmerged drive-bys.

### Medium
8. Many quantumworld commits are initial scaffolds — deepen 2-3 non-NSFW security repos or stop citing org wholesale.
9. Do not claim popularity from 4-6 star clusters — claim substance.
10. Polish English on public descriptions left visible.

---

## Gaps vs UK junior-mid software roles (SOC 2134)

| Expectation | Status | Action |
|-------------|--------|--------|
| Clean professional GitHub identity | Fail | Fix display name + joke/NSFW repos |
| 2-4 production projects with tests/deploy | Partial | LiveHouse+Ethic+guardian strong; add coverage badges |
| Clear primary stack | Partial | Too polyglot; pick Go+TS as home stack |
| Collaborative OSS | Emerging | Julia + taipei-doit good; avoid Dev-only PR spam |
| AWS/GCP/Azure depth | Uneven | Bedrock present; add one cloud deploy beyond CF/Vercel |
| Testing culture | Uneven | Strong on flagships; missing on demos |
| Observability / prod proof | Scaffold-heavy | AscendOS OTel needs real run evidence |
| Concise EN READMEs | Gap | Standardize top pins |
| Avoid controversial brand | Gap | NSFW-industry themes risky for UK corporates/banks |
| MSc conversion coherence | Opportunity | Tie Ethic/ERH + cyber to coursework/dissertation |

Bottom line: Present as Taipei-based conversion candidate with strong Go/TS fullstack + DevSecOps/agent-safety, after hygiene pass. Lead with 4-6 curated artifacts + 1-2 external PRs — not volume (192 repos / 1715 closed PRs).

---

## Method notes / limits

- Stats from GitHub search/API on 2026-09-05 (Asia/Taipei).
- get_teams returned null; Jest-Test-Team / BabyGrootCICD org repo search CAP-blocked — inferred from PRs/commits.
- Private repos not audited.
- File peeks via get_file_contents on selected roots/READMEs/manifests; not full code review.
- No writes / no posts to GitHub.

---

## Appendix — API inventory snapshot

- Public repos (profile): 192
- Non-fork search: 139
- Forks (approx): 53
- Open PRs authored: 31
- Closed PRs authored: 1715
- quantumworld-dpdns-io repos: 60
- cyber-security-dev-dep-mitake-com-tw repos: 12
- Jest-Test-Team authored PRs (search): 78
