# Fallow — quick guide

**Fallow** is a fast, deterministic **codebase intelligence** tool for **JavaScript and TypeScript**. It analyzes how your repo fits together (imports, entry points, duplication, complexity, dependency hygiene) and reports **evidence-backed** findings. The static analyzer does **not** use AI; output is meant for humans, CI, and agents.

- **Project:** [github.com/fallow-rs/fallow](https://github.com/fallow-rs/fallow)
- **Docs:** [docs.fallow.tools](https://docs.fallow.tools)

---

## What it is

| Aspect | Detail |
|--------|--------|
| **Language focus** | JS / TS (framework-aware via plugins) |
| **Runtime for analysis** | Static analysis does **not** require Node to execute your app |
| **Typical interface** | CLI (`npx fallow`), optional devDependency, GitHub Action, GitLab template, LSP, MCP |
| **Output** | Human-readable reports, **JSON**, SARIF, and other machine formats |

---

## Use cases

1. **Pull request review** — See what changed vs a base branch, what got riskier, and a **pass / warn / fail** style verdict (`fallow audit`).
2. **Dead code & hygiene** — Unused files, exports, types, dependencies, circular deps, boundary issues (`fallow dead-code`).
3. **Duplication** — Find clone families and repeated logic (`fallow dupes`).
4. **Maintainability** — Complexity, hotspots, health score, refactor targets (`fallow health`).
5. **Security signals (opt-in)** — Extra categories when you enable them (`fallow security`).
6. **CI gates** — Run the same commands (or the official GitHub Action) on every PR.
7. **Agents & editors** — Structured JSON, MCP, and LSP so tools can answer “who imports this?” and “what’s safe to remove?” with traceable reasons.

---

## How to use it

### Install (optional)

```bash
npm install --save-dev fallow
```

For one-off runs you can use `npx` without adding a dependency.

### Commands you will use most

```bash
# Changed-code audit vs default base branch (great for PRs)
npx fallow audit

# Full-repo style cleanup signals (not limited to the diff)
npx fallow dead-code

# Duplication
npx fallow dupes

# Complexity, score, hotspots, targets
npx fallow health --score --hotspots --targets

# Everything in one pass (cleanup + dupes + health)
npx fallow

# Machine-readable output (for scripts / agents)
npx fallow audit --format json
npx fallow dead-code --format json

# Preview automated fixes without applying
npx fallow fix --dry-run
```

### `audit` vs `dead-code`

- **`fallow audit`** compares your tree to a **base ref** (often `main`) and only analyzes **changed files** (plus related context). If Git reports **no diff**, scope can be **0 files** — that is expected, not a bug.
- **`fallow dead-code`** walks **reachable code from entry points** across the project (or filtered scopes). Unused UI kits and never-imported files show up here even when `audit` is empty.

Use **audit** for merge gates; use **dead-code** / **fallow** for repo-wide cleanup campaigns.

### CI (high level)

- **GitHub:** `fallow-rs/fallow@v2` with `command: audit` (and optional comments, SARIF, coverage).
- **Elsewhere:** run `npx fallow audit --changed-since origin/main` (adjust ref to your default branch).

See the official README for full Action and GitLab examples.

### Useful environment variables

| Variable | Purpose |
|----------|---------|
| `FALLOW_UPDATE_CHECK=off` | Disable version check / upgrade hint |
| `FALLOW_TELEMETRY=inspect` | Inspect telemetry payload without enabling send (see CLI help / docs) |

Telemetry is **off** unless you opt in; the CLI may show a one-time notice.

---

## What you gain (benefits)

1. **Less guesswork** — Findings cite reachability and rules, not vibes.
2. **Smaller maintenance surface** — Removing real dead code and unused dependencies shrinks what you must secure, test, and upgrade.
3. **Better PR focus** — Audits highlight **what changed** and what deserves review before merge.
4. **Consistent agent/CI context** — JSON and typed contracts help automation stay aligned with the same graph the CLI uses.
5. **Trend and hotspots** — Health commands help prioritize refactors where complexity and churn meet.

---

## Interpreting noisy results (common in Next.js / shadcn apps)

- **`components/ui/*` “unused files”** often means “no import chain from an entry point yet.” That can be **intentional** if you keep a full component library for later use.
- **Remediation choices:** actually use or remove components, adjust entry/detection if your layout is unusual, or use Fallow’s **suppression / ignore** patterns documented for your rule labels (`fallow explain <label>`).

Treat Fallow as **evidence**: you decide what to delete vs what to keep as deliberate inventory.

---

## Learn more

```bash
npx fallow --help
npx fallow audit --help
npx fallow explain unused-files
```

For exhaustive option lists and enterprise/runtime features, use the official repository and documentation linked at the top.

---

## Note on `fallow.md` in this workspace

If you have a long `fallow.md` that looks like a **scraped GitHub HTML/page dump**, treat this **`fallow-guide.md`** as the readable summary; keep the dump only if you still want a raw offline copy of upstream docs.
