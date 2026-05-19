---
title: 'Email verifier (v0)'
summary: Syntax + MX record check + disposable-provider list + role-based local-part detection. Real SMTP probe comes later.
date: 2026-05-19T19:40:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/46
---

[/tools/email-verify](https://ferrlens.com/tools/email-verify) is the first cut of the email-verifier suite, intentionally scoped to the checks that don't need outbound SMTP.

Four checks per address:

1. **Syntax** — RFC 5321 grammar (local part ≤ 64 chars, total ≤ 254, allowed characters in local and domain parts, no leading/trailing dots in the local part).
2. **MX records** — does the domain actually accept mail? Lists every MX with priority and exchange hostname.
3. **Disposable provider** — checks against a curated list of ~400 throwaway-email providers (Mailinator, 10minutemail, Guerrilla Mail, the whole Tempmail family, etc.). Hit = warning, not invalid — disposable addresses are real, they just signal a low-value signup.
4. **Role-based local-part** — `info@`, `support@`, `admin@`, `noreply@` and friends. Hit = soft warning, replies tend to be triaged differently and bounce rates are higher.

The verdict combines those four into one of: `Valid · domain accepts mail`, `Valid — but disposable provider`, `Valid — role-based address`, `Invalid syntax`, `Domain has no MX`. The detailed checks + the MX record list are always shown so you can see exactly why.

**What's not in v0**: a real SMTP probe (`MAIL FROM` / `RCPT TO` to the MX) that would confirm the specific mailbox exists. That's a separate effort — it needs outbound port 25, a clean IP with proper rDNS, and catch-all detection logic to be useful. Tracked at [FerrLens-Cloud#43](https://github.com/FerrLabs/FerrLens-Cloud/issues/43); v0 ships now because it already catches the bulk of real-world signup garbage.
