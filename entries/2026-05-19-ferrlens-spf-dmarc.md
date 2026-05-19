---
title: 'SPF / DKIM / DMARC inspector'
summary: Pull, parse and score a domain's email-authentication TXT records — SPF mechanisms, DMARC policy + reports, ~30 common DKIM selectors checked in parallel.
date: 2026-05-19T19:30:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/46
---

[/tools/spf-dmarc](https://ferrlens.com/tools/spf-dmarc) checks a domain's email authentication setup in one shot.

For each domain, in parallel:

- **SPF** — fetches the `v=spf1` TXT record, parses the mechanisms (`include:`, `a`, `mx`, `ip4:`, `exists:`, …) and the `all` qualifier, warns if there are more than 10 lookups (RFC 7208 limit) or if you've left `+all` open.
- **DMARC** — fetches `_dmarc.<domain>` TXT, parses `p=`, `sp=`, `pct=`, `rua=`, `ruf=`. Warns when the policy is `none` (monitor-only), when `pct<100` partially enforces, when no `rua=` means you're flying blind on aggregate reports.
- **DKIM** — brute-force probes about 30 common selector names (`default`, `google`, `selector1/2`, `mailgun`, `sendgrid`, `brevo`, `mandrill`, `scph0820`, …) on `<selector>._domainkey.<domain>`. Lists every one that resolves with the detected key type. The tool will miss custom selectors — if your mailer uses something exotic, that's currently reported as "no DKIM found".

A 0-100 score aggregates the three: SPF presence ×30, DMARC policy ×15/30/40 depending on `none/quarantine/reject`, DKIM presence ×30. Score is colour-coded with the warning list right below.

Powered by `hickory-resolver` against Cloudflare's recursive resolvers — all five lookups (SPF + DMARC + ~30 DKIM) fire concurrently, response usually under a second.
