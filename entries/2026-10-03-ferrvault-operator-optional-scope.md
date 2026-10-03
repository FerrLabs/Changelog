---
title: 'The FerrVault operator no longer asks for organization and project'
summary: 'Operator 5.3.2 drops two fields the default mode never used, and syncs a new FerrVaultSecret as soon as it is created.'
date: 2026-10-03T11:55:32Z
product: ferrvault
type: fix
prLink: https://github.com/FerrLabs/FerrVault/pull/285
docsLink: https://ferrvault.com/docs/kubernetes-operator/
---

A `FerrVaultSecret` had to carry a `project` and its `FerrVaultConnection` an `organization`, although the operator ignores both: the service-account token already decides which vault and environment it reads. Since 5.3.2 the CRDs accept manifests without them, and the connect-cluster wizard in the app no longer writes them. Existing manifests that still set them keep working.

The legacy `mode: cloud` still needs both. When one is missing the operator now stops before calling the API and reports `Ready=False` with the reason `MissingCloudScope`, instead of building a broken request.

The same release fixes a newly created `FerrVaultSecret` that could stay unsynced: the first reconcile only added the operator's finalizer and nothing scheduled the next one, so the Secret waited for an unrelated event. It now syncs on that first pass. Upgrade with `helm upgrade`, which also updates the CRDs.
