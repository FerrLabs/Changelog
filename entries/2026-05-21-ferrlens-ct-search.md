---
title: 'CT log search'
summary: Find every TLS certificate ever issued for a domain by querying the public Certificate Transparency logs (crt.sh): great for subdomain discovery and rogue-cert detection.
date: 2026-05-21T09:20:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/56
---

[/tools/ct-search](https://ferrlens.com/tools/ct-search) queries [crt.sh](https://crt.sh): the public Certificate Transparency log search: for every TLS cert ever issued for `*.example.com`, and returns:

- Cert ID (clickable straight to crt.sh for the full PEM).
- Issuer (Let's Encrypt, DigiCert, Sectigo, internal CA, …).
- Validity window: `not_before` → `not_after`.
- All **subjectAltNames** as searchable chips.

Two big use cases:

1. **Subdomain discovery**: every internal-only hostname an org has ever issued a public cert for shows up here. Cheap recon before scoping a security audit or migration.
2. **Rogue-cert detection**: if a CA you don't use issued a cert for your domain, you'll see it here. Combine with CAA records on the DNS side.

Capped at 200 most recent certs to keep responses fast. Hits live data. No cache.
