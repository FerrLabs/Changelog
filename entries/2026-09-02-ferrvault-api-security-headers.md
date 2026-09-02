---
title: 'FerrVault API: defence-in-depth headers on every response, not just the ones nginx fronts'
summary: 'Direct callers of api.ferrvault.com received no security response headers at all. The CLI, the Kubernetes operator and anything using curl now get the same set the web app already had. HSTS is opt-in via a new FERRVAULT_TLS_ENABLED setting.'
date: 2026-09-02T21:00:00Z
product: ferrvault
type: security
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/848
---

The FerrVault web app has always been served through nginx, which adds a set of defence-in-depth response headers. The API did not add them itself, so anything reaching `api.ferrvault.com` without passing through that nginx got none of them. That covers the FerrVault CLI, the Kubernetes operator, and any direct `curl` or script.

Every API response now carries `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` and `Cross-Origin-Resource-Policy`. Nothing is required of you, and no request or response body changes shape.

`Strict-Transport-Security` is handled separately, because it is the one header that can do damage if it is wrong. It is emitted with a one-year lifetime, so sending it from a plain-HTTP origin pins the wrong scheme in a browser for a year. It is therefore opt-in behind a new `FERRVAULT_TLS_ENABLED` setting, which self-hosted installs turn on once a certificate is in front of the API. Cloud is unaffected either way.

This pairs with the earlier change that marked responses carrying plaintext secret values as `no-store`. Caching policy stays per-route rather than blanket, so the endpoints that return a decrypted value keep saying `no-store` while a health check does not.
