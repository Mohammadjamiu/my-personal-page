---
title: "pdfjs-dist vs pdf-parse when you care about pages, not just a blob of text"
description: "Both extract text from PDFs; one is a full engine with layout and workers, the other is a quick dump. I picked sides for an AI reading assistant."
pubDate: 2026-01-17
category: "dev-notes"
tags: ["pdf", "nodejs", "pdfjs", "ai", "readahead"]
featured: false
readingTime: "6 min read"
---

While building **ReadAhead** (an AI reading assistant), I had to choose how to read PDFs. The shortlist came down to **pdfjs-dist** vs **pdf-parse**.

They are not interchangeable — they solve different problems.

**pdfjs-dist** is what Firefox uses under the hood: rendering, pages, text with structure, workers in heavier setups. If you need “what is on page 12” or coordinates for highlights, this is the tool.

**pdf-parse** is closer to “give me all the text in one string.” Low ceremony, quick scripts, MVPs. It leans on an older PDF.js lineage and is not where I would bet a long-term product in 2026.

For anything where **page boundaries** or **layout** feed the model — summarizing the next page, anchoring citations, showing the real page beside AI output — **pdfjs-dist** wins.

For a one-off “rip text and throw it at an API” script, **pdf-parse** can still be fine. Just know what you are trading away.

The decision was not “which library is better” but **which shape of data** the product actually needs.
