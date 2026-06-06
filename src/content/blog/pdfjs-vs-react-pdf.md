---
title: "Understanding PDF.js vs react-pdf: What I Learned"
description: "A breakdown of the relationship between pdfjs-dist and react-pdf, and why understanding the dependency tree matters."
pubDate: 2026-02-20
category: "dev-notes"
tags: ["javascript", "pdf", "react", "packages", "frontend"]
featured: true
readingTime: "4 min read"
---

# Understanding PDF.js vs react-pdf: What I Learned

Recently I was working on a project that required rendering PDFs in a React application. Like many developers, I reached for `react-pdf`—it seemed like the obvious choice. But what I learned about the underlying architecture changed how I think about JavaScript dependencies.

## The Discovery

I was debugging a performance issue when I noticed something in my `node_modules`:

```
node_modules/
├── react-pdf/
│   └── dist/
├── pdfjs-dist/
│   └── build/
│       └── pdf.js
```

`react-pdf` was using `pdfjs-dist` under the hood. This might seem obvious in hindsight, but it raised an important question: **what exactly am I getting from react-pdf that I couldn't get from pdfjs-dist directly?**

## Understanding the Stack

### pdfjs-dist

`pdfjs-dist` is the **core rendering engine**. It's Mozilla's PDF.js library packaged for distribution. It handles:
- PDF parsing
- Text extraction
- Rendering to canvas
- Annotation handling

It's powerful but low-level. You interact with it through a fairly imperative API.

### react-pdf

`react-pdf` is a **React wrapper** around `pdfjs-dist`. It provides:
- Declarative React components (`<Document>`, `<Page>`)
- Automatic loading states
- Easier integration with React lifecycle
- TypeScript definitions

## The Trade-off

Here's what I realized:

| Approach | Bundle Size | Control | Dev Experience |
|----------|------------|---------|----------------|
| react-pdf | Larger (~1.5MB) | Less | Excellent |
| pdfjs-dist | Smaller (~800KB) | More | Manual |

The "lite" version of `react-pdf` actually just uses a specific worker from `pdfjs-dist` without loading the full WASM build.

## When to Use What

**Use react-pdf when:**
- You need to display PDFs quickly
- You're already deep in React ecosystem
- You don't need custom rendering logic

**Use pdfjs-dist directly when:**
- Bundle size is critical
- You need fine-grained control over rendering
- You're building something custom (like a PDF editor)
- You're not using React

## The Broader Lesson

This experience taught me to always ask: **what am I actually importing?**

Modern JavaScript development often feels like stacking abstractions. Each layer adds convenience but also:
- Bundle size
- Dependency risk
- Debugging complexity

Before reaching for a wrapper library, understand what problem it solves and whether you could solve it with the underlying tool.

Sometimes the wrapper is worth it. Sometimes you're adding 500KB to your bundle for a `<Document>` component you could write yourself in 50 lines.

## My Current Approach

For most projects, I now start with `pdfjs-dist` and only add `react-pdf` if the imperative API becomes painful. This keeps my bundle smaller and my understanding deeper.

The best code is the code you understand, even if it's slightly more verbose.
