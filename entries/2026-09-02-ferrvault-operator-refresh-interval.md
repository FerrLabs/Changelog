---
title: 'FerrVault operator: refreshInterval now actually governs how often secrets are pulled'
summary: 'Both controllers reconciled continuously instead of on their configured interval, so every FerrVaultSecret was reading from the API in a tight loop. The setting is now honoured. Expect a sharp drop in API calls and audit events from your clusters.'
date: 2026-09-02T20:00:00Z
product: ferrvault
type: fix
prLink: https://github.com/FerrLabs/FerrVault/pull/250
---

`spec.refreshInterval` on a `FerrVaultSecret` was documented as the refresh cadence and was not behaving as one. Both the secret and connection controllers were reconciling continuously, at the speed of a single reconcile rather than once per interval.

The cause was the controller reacting to its own writes. Each pass finishes by stamping a sync timestamp onto the resource status, and the controllers were subscribed to every change on their own resources, including that one. Each status write woke the controller, which wrote the status again. The requeue timer was set correctly on every pass and never got a chance to fire.

The visible cost was not CPU on the operator. Every one of those loops was a real secret read against the FerrVault API, so a cluster with a few dozen `FerrVaultSecret` resources was consuming its rate limit continuously and writing an audit event each time. If your audit log has looked noisier than your actual secret usage, this is why.

The controllers now ignore their own status writes, so the requeue timer drives the cadence and `refreshInterval` means what it says. Nothing changes in your manifests. Edits to a `FerrVaultSecret` still reconcile immediately, and manual edits to a managed Secret are still corrected on the spot.

After upgrading, `rate(controller_runtime_reconcile_total{controller="ferrvaultsecret"}[5m])` on a settled cluster should fall to roughly one reconcile per resource per interval.
