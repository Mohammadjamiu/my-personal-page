---
title: "When Next.js keeps your scroll position and you wish it wouldn’t"
description: "Client-side navigation can leave you halfway down the new page. A small effect tied to the pathname fixes it when you want a fresh scroll each time."
pubDate: 2025-04-05
category: "dev-notes"
tags: ["nextjs", "react", "ux", "routing"]
featured: false
readingTime: "2 min read"
---

Next.js (App Router or Pages) often **preserves scroll** between navigations. That is deliberate and sometimes nice — except on content-heavy sites where landing mid-page feels like a bug.

I hit this on a project with long articles and nested routes. Users clicked “next chapter” and landed scrolled to the same pixel offset as the previous page. Confusing.

**Fix:** listen to route changes (e.g. `usePathname()` in the app router) and call `window.scrollTo(0, 0)` when the path changes. Wrap it in a client component mounted at layout level so you do not repeat it on every page.

You might still want scroll restoration for certain flows (modals, tabs). For a straight “new page, start at top” mental model, this is enough and easy to reason about.
