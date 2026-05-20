---
title: 'Security headers grader'
summary: Score any URL on CSP, HSTS, X-Frame, X-Content-Type, Referrer-Policy, Permissions-Policy, COOP and CORP. A+ to F grade out of 90 points.
date: 2026-05-20T08:15:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/54
---

[/tools/sec-headers](https://ferrlens.com/tools/sec-headers) is a securityheaders.com-style audit. Paste a URL, get a letter grade plus a row per header with what's missing, what's weak, and what's strict.

The scoring rubric (max 90 points):

- **Content-Security-Policy** — 25 if present without `unsafe-inline` / `unsafe-eval`; 15 if present but loose; 0 if missing. CSP is half the score because it's by far the most impactful.
- **Strict-Transport-Security** — 20 if `max-age` ≥ 1 year and `preload`-eligible; 15 if 1+ year without preload; 10 if shorter; 0 if missing.
- **X-Frame-Options** and **X-Content-Type-Options** — 10 each. Older but still useful.
- **Referrer-Policy**, **Permissions-Policy**, **Cross-Origin-Opener-Policy**, **Cross-Origin-Resource-Policy** — 5 each.

Grades: A+ ≥ 90, A ≥ 80, B ≥ 70, C ≥ 60, D ≥ 40, F < 40.

Each row shows the raw header value when present (so you can copy-paste it into a CSP linter) plus a one-liner explaining what to fix.
