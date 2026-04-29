---
title: 'FerrTrack · API back online after auth fix'
summary: 'ferrtrack-api was crash-looping for ~6h waiting for an Ed25519 keypair that did not exist. Switched to the shared HMAC HS256 secret used by the rest of FerrLabs auth — API booted, sessions preserved.'
date: 2026-04-29T06:00:00Z
product: 'ferrtrack'
type: 'fix'
---

`ferrtrack-api` had been `CrashLoopBackOff` since the last deploy because it was wired to verify Ed25519 (asymmetric) JWTs, but FerrLabs central auth still issues HMAC HS256 — and the Ed25519 public key it expected from FerrVault had never been provisioned.

Fixed by switching the API to consume the shared `JWT_SECRET` (HS256), same as everyone else. No user impact beyond the downtime: existing sessions stayed valid, no re-login required.

Same temporary measure landed on ferrvault-api in parallel. The proper Ed25519 migration (one private key on central, public keys on each verifier) is tracked separately and lands before more APIs come online.
