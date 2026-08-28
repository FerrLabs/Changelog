---
title: 'FerrLabs: Product APIs accept the BFF session cookie. Auth no longer 401s in cookie mode'
summary: 'Every product API (Vault, Track, Growth, Fleet) now falls back to the fl_session HttpOnly cookie when no Authorization header is present. Fixes a hard 401 for all BFF-routed traffic.'
date: 2026-05-14T09:00:00Z
product: ferrlabs
type: fix
prLink: https://github.com/FerrLabs/FerrGrowth-Cloud/pull/179
---

The BFF deployment pattern (browsers talk to `api.<product>.com`, which proxies `/v1/*` to `api.ferrlabs.com` with the `fl_session` HttpOnly cookie attached) shipped a few weeks ago but had a fatal gap: the downstream product APIs only knew how to validate `Authorization: Bearer` headers. Cookie-mode requests therefore returned 401 on every authenticated call.

Each product API now extends its `AuthUser` extractor with a cookie fallback: if no `Authorization` header is present, parse the JWT out of `fl_session` and validate via the same path. Same key, same claims, same expiry checks. Unit tests on `read_session_cookie` for each codebase (4 tests per API, 16 total) cover empty cookie jar, malformed cookies, expired tokens, and the happy path.

Companion CORS change: `allow_credentials(true)` is set when an explicit origin list is configured (not when origin is wildcard: browsers reject that combo). Without it, browsers strip the session cookie on cross-origin `fetch({ credentials: 'include' })` calls. The SPA-side `AuthGuard` was also softened to only bounce to the login page on `ApiError && status === 401`; transient network / CORS / 5xx errors now render a retry panel instead of looping through the IdP on flaky DNS.

Net effect: BFF cookie mode actually works end-to-end. If you've been seeing 401s on `/v1/*` calls from any product app, redeploy the API. That's the fix.
