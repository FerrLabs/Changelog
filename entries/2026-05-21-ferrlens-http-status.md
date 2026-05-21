---
title: 'HTTP status lookup'
summary: Searchable dictionary of HTTP status codes — number, reason phrase, category and what each one actually means in practice.
date: 2026-05-21T08:00:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/55
---

[/tools/http-status](https://ferrlens.com/tools/http-status) puts the full HTTP status code list one search away. Type a number (`429`), a phrase (`gateway timeout`), or filter by category — informational, success, redirect, client error, server error — each color-coded.

Each entry shows the canonical reason phrase from the RFC plus a short, practical explanation: when the server actually returns it, what the client should do, and the gotchas (a 301 is permanently cached, a 308 is the verb-preserving sibling, a 451 is the legally-blocked one, etc.).

Includes the less common but useful ones — 103 Early Hints, 207 Multi-Status, 418 I'm a Teapot, 425 Too Early, 451 Unavailable For Legal Reasons. Runs entirely client-side, no network call.
