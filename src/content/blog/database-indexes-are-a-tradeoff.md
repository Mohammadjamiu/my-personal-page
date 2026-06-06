---
title: "Indexing everything is not the flex people think it is"
description: "Indexes speed reads until they slow writes and eat RAM. I finally internalized ‘frequently queried’ as a design choice, not a checklist."
pubDate: 2025-09-22
category: "dev-notes"
tags: ["mongodb", "sql", "database", "performance"]
featured: false
readingTime: "3 min read"
---

Early on I read “add indexes to fields you query often” and took it as **index more**.

Indexes help the database find rows without scanning the whole collection. They also:

- Use memory (sometimes a lot).
- Slow inserts/updates/deletes because every index must stay consistent.

So they are a **trade-off**, not free speed.

**What I do now:** index fields that appear in hot queries *and* where a full scan actually hurts (large collections, real user traffic). For small tables or rare admin queries, a scan is fine.

Profiling beats guessing. One explain plan tells you more than ten indexes you added “just in case.”
