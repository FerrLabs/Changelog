---
title: 'CORS tester'
summary: 'Send a preflight + actual request from a configurable Origin and see exactly which CORS headers the server returns: with pass/fail diagnostics.'
date: 2026-05-21T09:15:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/56
---

[/tools/cors](https://ferrlens.com/tools/cors) helps debug "why does my fetch fail in the browser but work in curl" by reproducing exactly what a browser does:

- For non-simple methods (PUT, PATCH, DELETE, etc.) it sends an **OPTIONS preflight** with `Origin`, `Access-Control-Request-Method` and `Access-Control-Request-Headers`.
- Then it sends the **actual request** with the supplied Origin.
- Both responses show every CORS header the server returned: `Access-Control-Allow-Origin`, `-Allow-Credentials`, `-Allow-Methods`, `-Allow-Headers`, `-Expose-Headers`, `-Max-Age`, and `Vary`.

Diagnostic checks flag the common mistakes:
- Origin not allowed (or no `Access-Control-Allow-Origin` returned at all).
- Preflight doesn't list the requested method.
- `Access-Control-Allow-Origin: *` combined with `Allow-Credentials: true`: invalid per spec, browsers will reject the response.

Useful when integrating a third-party API, configuring a new endpoint, or chasing the maddening "request blocked by CORS policy" error.
