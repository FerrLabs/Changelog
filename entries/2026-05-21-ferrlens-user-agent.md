---
title: 'User-Agent parser'
summary: Break down any User-Agent string into browser, engine, OS, device and bot heuristics — no remote call.
date: 2026-05-21T08:05:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/55
---

[/tools/user-agent](https://ferrlens.com/tools/user-agent) parses a User-Agent header and returns the structured pieces: browser + version, layout engine (Blink, Gecko, WebKit), OS + version, device class (desktop, mobile, tablet) and a bot flag for the common crawlers (Googlebot, Bingbot, AhrefsBot, etc.).

Opens pre-filled with `navigator.userAgent` so you can immediately see what your own browser advertises. One-click sample buttons cover modern Chrome, Safari iOS, Firefox, and Googlebot for quick reference.

Useful when debugging analytics misclassification, writing a User-Agent allowlist for a CDN rule, or sanity-checking what a server log line actually came from. Pure regex, no network call.
