---
title: "Why my Next.js OG image was ignored (spoiler: wrong filename)"
description: "Next only picks up certain names for social images. I used og-image.jpg and wondered why previews broke until I read the convention list."
pubDate: 2025-06-01
category: "dev-notes"
tags: ["nextjs", "open-graph", "seo", "metadata"]
featured: false
readingTime: "2 min read"
---

I dropped a file called `og-image.jpg` in the app directory, refreshed, and Twitter still showed a generic card. No error — just silence.

Next.js metadata file conventions are strict. For automatic OG / Twitter images it expects names like:

- `opengraph-image.png` (or `.jpg`, etc.)
- `twitter-image.png` (or `.jpg`, etc.)

Not `og-image.*`. Wrong name means the framework never wires it into metadata.

**Lesson:** when something in the metadata stack “does nothing,” check naming and location before you assume the platform is broken. I lost a good twenty minutes to this; maybe this note saves you five.
