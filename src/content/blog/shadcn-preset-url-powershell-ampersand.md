---
title: "shadcn’s preset URL and PowerShell’s love-hate relationship with &"
description: "Copy-pasting the init command from the UI failed on Windows because & splits commands. Triple-quoting the URL fixed it."
pubDate: 2025-01-17
category: "dev-notes"
tags: ["windows", "powershell", "shadcn", "cli"]
featured: false
readingTime: "3 min read"
---

I generated a **shadcn/ui** init command from the website and pasted it into **Windows PowerShell**. It exploded with errors like `'style' is not recognized as an internal or external command`.

The preset URL had query parameters: `?base=radix&style=...&theme=...`

In PowerShell, **`&` is a statement separator** — not part of the string unless you quote carefully. The shell chopped the URL and tried to run `style=...` as its own command.

**Fix:** wrap the URL so the whole thing is one argument. What worked for me was extra quoting around the URL (triple double-quotes in some examples) so the CLI receives the full string.

```bash
pnpm dlx shadcn@latest create --preset """https://ui.shadcn.com/init?base=radix&style=maia&...""" --template next
```

This is not shadcn being picky — it is shell parsing. Same class of problem shows up with `curl` and long URLs on Windows.

If a command mysteriously treats chunks of your URL as commands, assume quoting first.
