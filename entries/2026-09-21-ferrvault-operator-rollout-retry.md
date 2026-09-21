---
title: 'FerrVault operator: a failed rolloutRestart is now retried instead of forgotten'
summary: 'When restarting the workloads of a changed FerrVaultSecret failed, the operator logged it once and never tried again, so pods kept the old values while the resource reported Ready. The restart is now retried until it goes through, and the failure shows on the resource.'
date: 2026-09-21T20:00:00Z
product: ferrvault
type: fix
prLink: https://github.com/FerrLabs/FerrVault/pull/272
draft: true
---

`spec.rolloutRestart` restarts the listed Deployments, StatefulSets and DaemonSets when the content of a `FerrVaultSecret` changes, so their pods pick up the new values. When that restart failed, because a workload was missing, a patch was refused, or a read never returned, the operator wrote one log line and moved on.

It never came back to it. On the next pass the target Secret already held the new content, so as far as the operator could tell nothing had changed, and no restart was due. The pods kept running the previous values indefinitely, and the resource still reported `Ready=True`.

The operator now records which content the workloads were last restarted for, in `status.lastRolloutHash`, and keeps retrying while that differs from the current content. A failure sets a new `RolloutRestarted=False` condition carrying the error, so it shows in `kubectl describe fvs`, and increments `ferrvault_secret_sync_errors_total{reason="RolloutFailed"}`. The condition turns `True` once the restart goes through.

Upgrading does not restart anything by itself. Existing resources take their current content as the baseline, so only a later change triggers a restart.
