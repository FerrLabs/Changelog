---
title: 'FerrVault: End-to-end backend rewrite. Every screen talks to a real endpoint'
summary: Mocks are gone. Vault edit/delete, secret version history, and the K8s operator token page now hit real APIs. Sidebar trimmed to the three surfaces that actually have a data model.
date: 2026-05-14T11:00:00Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/196
---

Until this release, large parts of the app were rendering fixtures from `vaultMockData.ts`: the K8s operator page, the environments/rotations/audit/access/KMS/CI tabs, the entire navigation. Today every nav entry talks to a real endpoint or it doesn't appear in the sidebar.

On the API: `PATCH /v1/vaults/{slug}` and `DELETE /v1/vaults/{slug}` are now admin-only and cascade properly through secrets, versions, grants and service-account tokens. A new `GET /v1/vaults/{slug}/secrets/{name}/versions` returns the version history scoped to the caller's grant, ordered newest first. KEK rotation emits both `vault.updated` and `kek.rotated` in the audit log.

On the app: vault detail page gets a working **Edit** + **Delete** flow with slug confirmation, secret detail surfaces the version history table that was a TODO comment for two months, and the K8s page is no longer a static mock. It lists your vaults, lets you mint a service-account token for the operator and revoke any existing one inline. The sidebar is now three entries (Vaults, CLI/SDK, K8s operator) instead of nine; the dropped six (Environments, Rotations, Audit-global, Access policies, KMS keys, CI integrations) had no backing schema and can come back when one exists.

`grep -rn vaultMockData app/src` returns zero matches.
