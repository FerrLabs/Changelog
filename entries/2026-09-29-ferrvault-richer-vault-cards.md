---
title: 'Vault cards show what is inside and what needs doing'
summary: 'Each vault on the FerrVault home page now shows its environments, secret count, your role and its last activity, and flags a deactivated key, pending requests or secrets to rotate.'
date: 2026-09-29T19:51:04Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/1025
---

The cards on the FerrVault home page used to show a vault's name, summary and key, which said little about whether you needed to open it. Each card now lists the vault's environments and how many secrets it holds, counted by name so a secret set in two environments counts once, followed by your role in that vault and when it was last active.

A signal appears only when something needs doing: the vault's key is deactivated, someone is waiting on a secret request, or secrets have gone untouched for more than 90 days, the same threshold the vault page already uses for rotation. Vaults are sorted by last activity, so the ones your team works in sit at the top.

The key line moved off the card. It is still on the vault page and on the Keys page. API clients get the same data from `GET /vaults`, which now returns `role`, `environments`, `secret_count`, `stale_secret_count`, `pending_request_count` and `last_activity_at` next to the existing fields.
