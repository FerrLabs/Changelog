---
title: 'FerrLens · Sign in with your FerrLabs account'
summary: ferrlens.com now uses the central FerrLabs identity, so the same account works across every product site. Cross-domain auth handled server-side by the Astro SSR layer — no token in JavaScript.
date: 2026-05-19T10:00:00Z
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pulls
---

The "Sign in" CTA in the FerrLens navbar now starts a real authorization-code flow against `auth.ferrlabs.com`. After a successful login the browser lands back on `ferrlens.com/auth/callback` with a single-use 30-second code, the Astro server exchanges it against `api.ferrlabs.com` for a session token, and that token is stored in an `HttpOnly` cookie scoped to `.ferrlens.com`. JavaScript on the page never sees the token, so the usual XSS exfiltration path is closed.

Every request that follows runs through an Astro middleware that reads the cookie, calls `GET /api/v1/me` once per render, and exposes the user via `Astro.locals.user`. The navbar swaps the "Sign in" button for an "Account" link as soon as a valid session is present, and a minimal `/account` page shows the current identity and a sign-out button.

This is the same OAuth client model used by `app.ferrvault.com`, `app.ferrtrack.com` and the other product portals — FerrLens is registered as `ferrlens-site` with the redirect URI `https://ferrlens.com/auth/callback` exact-matched against the `oauth_clients` table. No new credentials, no separate password — the FerrLabs account is the only one.

Self-hosters need two new environment variables on the Astro container: `FERRLABS_AUTH_URL` (typically `https://auth.ferrlabs.com`) and `FERRLABS_API_URL` (typically `https://api.ferrlabs.com`). Both default to the public URLs.
