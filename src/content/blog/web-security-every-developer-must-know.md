---
title: "Web Security Fundamentals Every Developer Must Know"
description: "A practical walkthrough of the vulnerabilities that break real applications — OWASP Top 10, injection attacks, authentication failures — and how to write defensively from day one."
pubDate: 2026-04-28
category: "cybersecurity"
tags: ["security", "web", "owasp", "backend", "authentication"]
featured: false
readingTime: "9 min read"
---

# Web Security Fundamentals Every Developer Must Know

Security isn't a feature you add at the end. By the time you're thinking about it as a checkbox, the damage is already baked into your architecture.

I learned this the hard way while building a web application where I'd been storing JWT secrets in `.env` files committed to a public repo. Not an exotic vulnerability — just embarrassing negligence. That incident made me take a proper look at what it actually means to build secure software.

This is the post I wish I'd read before I made that mistake.

---

## The OWASP Top 10: A Practical Lens

OWASP maintains a living list of the most critical web security risks. It's not academic — it maps directly to the kinds of breaches that destroy companies.

Let's go through the ones that matter most for backend and full-stack developers.

---

## 1. Injection Attacks (SQL, NoSQL, Command)

**What it is:** An attacker inserts malicious code into a query or command that your application executes.

**Classic example:**
```sql
-- User input: ' OR '1'='1
SELECT * FROM users WHERE email = '' OR '1'='1';
-- This returns every user in the database
```

**How to prevent it:**
- Always use parameterized queries or prepared statements
- Use an ORM that handles escaping (Prisma, Drizzle, SQLAlchemy)
- Never construct queries from raw user input
- Validate and sanitize all inputs before they reach your database

---

## 2. Broken Authentication

**What it is:** Weak login systems that allow attackers to impersonate users — through credential stuffing, session hijacking, or brute force.

**What I see most often:**
- Passwords stored as plain text or MD5 hashes
- JWTs with no expiry
- No rate limiting on login endpoints
- Sessions that don't invalidate on logout

**How to prevent it:**
- Hash passwords with bcrypt or Argon2 (never MD5 or SHA1)
- Set short expiry on access tokens, use refresh token rotation
- Implement rate limiting on auth endpoints
- Invalidate sessions server-side on logout, not just client-side

---

## 3. Cross-Site Scripting (XSS)

**What it is:** An attacker injects malicious JavaScript that runs in another user's browser — stealing cookies, redirecting, or doing anything the user can do.

**Reflected XSS example:**
```
https://yourapp.com/search?q=<script>document.cookie</script>
```
If your search page renders the `q` parameter unescaped, you've handed attackers the keys.

**How to prevent it:**
- Sanitize and escape all user-generated content before rendering
- Use a framework that auto-escapes (React, Vue handle this by default when you use JSX/template bindings)
- Never use `dangerouslySetInnerHTML` or `v-html` with user data
- Implement a strict Content Security Policy (CSP)

---

## 4. Insecure Direct Object References (IDOR)

This one is embarrassingly common, especially in early-stage products.

**What it is:** A user can access resources they shouldn't by guessing or modifying an identifier.

```
GET /api/invoices/1042    ← your invoice
GET /api/invoices/1043    ← someone else's invoice, but the server returns it anyway
```

**How to prevent it:**
- Always check authorization, not just authentication — "is this user logged in?" is not enough. "Does this user own this resource?" is the real question
- Use UUIDs or slugs instead of sequential integer IDs where possible
- Implement resource-level permission checks in middleware or service layers

---

## 5. Security Misconfiguration

The most boring category, and one of the most common sources of breaches.

**What to audit:**
- Default credentials left on databases, admin panels
- Stack traces and verbose error messages exposed in production
- CORS configured to `*` (allows any origin)
- Debug endpoints left open
- Cloud storage buckets set to public

**Checklist:**
```
☐ DEBUG=false in production
☐ CORS only allows your actual domains
☐ No sensitive keys in version control
☐ Database not exposed to the public internet
☐ Admin routes protected by IP allowlist or separate auth
```

---

## 6. Using Components with Known Vulnerabilities

Your `node_modules` folder is an attack surface. A dependency you installed two years ago may have a CVE filed against it today.

**Practical steps:**
- Run `npm audit` or `pnpm audit` regularly
- Enable Dependabot or Renovate for automated dependency updates
- Review what you're actually importing — not every library needs to be a dependency

---

## Defensive Coding Mindset

The above are specific vulnerabilities. The underlying mindset matters more:

1. **Treat all user input as hostile** — validate, sanitize, and type-check everything before using it
2. **Principle of least privilege** — your API should only have the database permissions it actually needs
3. **Defense in depth** — don't rely on one control. Layer them
4. **Fail securely** — when something goes wrong, fail closed, not open
5. **Log security events** — failed logins, authorization failures, and unexpected input patterns are signals

---

## Where to Go From Here

- Read the full [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- Set up a simple web app and run it through [OWASP ZAP](https://www.zaproxy.org/) to see what it finds
- Try a CTF (Capture the Flag) on [HackTheBox](https://www.hackthebox.com/) or [PicoCTF](https://picoctf.org/) — attacking systems teaches you to defend them

Security is a mindset, not a checklist. Once you start thinking like an attacker, you can't un-see the vulnerabilities in your own code.
