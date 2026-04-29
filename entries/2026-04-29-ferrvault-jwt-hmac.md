---
title: 'FerrVault · API JWT verification'
summary: 'ferrvault-api now verifies session tokens with the shared HMAC secret from the central FerrLabs auth, instead of expecting an Ed25519 PKCS#8 PEM that did not exist.'
date: 2026-04-29T05:30:00Z
product: 'ferrvault'
type: 'fix'
---

ferrvault-api was crashing on startup because it was wired to verify Ed25519 asymmetric tokens, but FerrLabs central auth still issues HMAC HS256 — and no Ed25519 keypair had ever been provisioned.

Fixed by switching the API to consume the same `JWT_SECRET` everyone else uses (HS256). Existing user sessions stay valid; the API now boots and serves requests.

This is a deliberate temporary measure. The proper Ed25519 migration (one private key on central, public key on each verifier, no shared signing material) is tracked separately and will land before more APIs come online.
