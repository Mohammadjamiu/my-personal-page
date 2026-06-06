---
title: "Caching generated PowerPoints with a content hash"
description: "Regenerating slides with pptxgenjs on every request was slow. Hashing the input and reusing the stored file when nothing changed made the API feel instant."
pubDate: 2025-07-20
category: "dev-notes"
tags: ["nodejs", "caching", "mongodb", "performance"]
featured: false
readingTime: "3 min read"
---

I had an endpoint that built a `.pptx` with **pptxgenjs** from structured content. Correct, but expensive: layout work, binary write, then download. Calling it repeatedly with the same payload was wasteful.

**Approach that worked:**

1. Canonicalize the input (stable JSON string or sorted keys).
2. Hash it — SHA-256 is fine; you only need a cheap fingerprint.
3. Store `{ hash, fileBufferOrGridFSId }` in MongoDB (or object storage keyed by hash).
4. On each request: compute hash; if it matches a row, return the stored file; else generate, save, return.

Same content → same hash → no regeneration. Change one bullet → new hash → one rebuild.

CPU and latency dropped hard. The only discipline is invalidating when your **template** changes even if content does not — bump a template version in the hash input when you ship layout changes.
