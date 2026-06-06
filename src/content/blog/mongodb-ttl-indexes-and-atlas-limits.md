---
title: "MongoDB TTL indexes: free deletes, not free resources"
description: "TTL is the right hammer for expiring documents, but storage, indexes, and delete load still count on small clusters like Atlas M0."
pubDate: 2025-05-12
category: "dev-notes"
tags: ["mongodb", "database", "ttl", "atlas"]
featured: false
readingTime: "3 min read"
---

I needed weekly report documents to disappear so an Atlas **M0** cluster would not fill up. TTL indexes were the obvious move: set `expireAfterSeconds` on a date field and let MongoDB remove rows in the background.

They work well. The trap is thinking “TTL = no cost.”

There is no separate TTL fee, but:

- Documents still use disk until they are removed.
- Indexes still exist and are maintained on writes.
- Deletes are work the cluster does on a schedule — on a tiny tier, that matters if volume spikes.

**Takeaway:** TTL is great for **temporary data** you are okay losing on a timer. You still watch storage and write patterns. For anything mission-critical, I pair TTL with monitoring or a safety job that alerts before the cap.
