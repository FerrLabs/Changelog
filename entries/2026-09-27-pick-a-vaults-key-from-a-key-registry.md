---
title: 'A key registry, and vaults that pick their key from it'
summary: 'Generate a managed key, software or HSM, or add one you already have, name it, and point any number of vaults at it from a select in their settings. Keys are billed and counted per key, not per vault.'
date: 2026-09-27T18:00:00Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/995
---

Until now a vault's encryption key was an attribute of the vault: one key per vault, created with it or typed in as a URI, with nowhere to see which keys an organization had or what each one cost. The new **Keys** page, under Organization, lists them as objects of their own.

From there you can generate a key managed by FerrVault, choosing software or HSM protection within your plan's quota, or add a key you created yourself in OVHcloud, AWS or Vault by its identifier. Either way the key is checked with a real wrap and unwrap before it is saved, so a key FerrVault cannot use is refused there rather than on the first secret you write.

In a vault's settings, the key is now a select over those keys. Picking another one starts the usual background re-encryption, and secrets stay readable throughout. Several vaults can share a key, which is how you group vaults by domain on a handful of keys instead of paying for one per vault. New vaults still get a key of their own by default, and can pick a registry key instead.

Plan quotas and the end-of-subscription lifecycle now work per key. A managed key that no vault uses is flagged as still billed, and deleting it is what stops the billing: FerrVault deactivates it at once and destroys it 60 days later. Generating and destroying managed keys needs an owner or admin of the organization.
