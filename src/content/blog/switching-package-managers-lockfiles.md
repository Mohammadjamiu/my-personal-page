---
title: "Switching between npm, pnpm, and Yarn without hurting yourself"
description: "Each tool writes its own lockfile. Mix them and you get phantom bugs. Here is the cleanup ritual I use when I change my mind mid-project."
pubDate: 2025-03-10
category: "dev-notes"
tags: ["node", "pnpm", "npm", "yarn", "tooling"]
featured: false
readingTime: "2 min read"
---

I bounce between npm, pnpm, and Yarn depending on what a repo started with or what a tutorial used. That is fine — the part that bites you is **half-switching**.

Each manager expects its own lock artifact:

- npm → `package-lock.json`
- pnpm → `pnpm-lock.yaml`
- Yarn → `yarn.lock`

If you install with pnpm while an old `package-lock.json` is still sitting there, you are not in a supported state. You might get duplicate installs, version skew, or CI that passes locally and fails in production because the pipeline uses a different tool.

**What I do now:** delete `node_modules`, delete every lockfile that is not for the tool I am committing to, then run a clean install once. Sounds obvious, but I have lost hours to “it works on my machine” when two lockfiles were fighting.

No magic — just one source of truth for dependencies.
