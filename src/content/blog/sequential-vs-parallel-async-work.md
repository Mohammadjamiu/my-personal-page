---
title: "Sequential vs parallel: when order actually matters"
description: "Parallelizing everything is tempting. Some pipelines only work in order — payments and balances taught me that the hard way."
pubDate: 2025-08-15
category: "dev-notes"
tags: ["async", "concurrency", "architecture", "nodejs"]
featured: false
readingTime: "2 min read"
---

Not every `Promise.all` is a win.

**Sequential** is for work where step B depends on step A’s result, or where shared mutable state must be updated in order. Example: adjusting a balance then recording a ledger line — if you parallelize naively you race yourself.

**Parallel** is for independent units: generating chapters that do not touch each other, fan-out HTTP calls to different services, fetching static assets.

I used to reach for parallel first because it felt “modern.” Now I ask: *if these finish out of order, is anything wrong?* If yes, sequential (or explicit locking / transactions).

When parallel is safe, it is often a big speedup. When it is not, it is a subtle bug factory.
