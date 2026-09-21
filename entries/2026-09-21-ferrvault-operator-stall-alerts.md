---
title: 'FerrVault operator: a stuck reconcile is now cut short, and alerts say so'
summary: 'One reconcile that never returned could hold the operator for hours while the pod looked healthy. Each reconcile now has a deadline, set with --reconcile-timeout, and the Helm chart can install Prometheus alerts for stuck, timed-out and stale reconciles.'
date: 2026-09-21T20:00:00Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault/pull/273
draft: true
---

In August one call inside a reconcile stopped returning, and the operator stopped syncing every `FerrVaultSecret` on the cluster for four hours. The pod stayed `Running`, every resource kept its last `Ready=True`, and nothing but the logs showed it. That particular cause was fixed at the time. This release deals with the class of problem.

Each reconcile now runs under a deadline, two minutes by default, set with `--reconcile-timeout` or the chart value `reconcileTimeout`. A call that never returns is cancelled instead of holding the whole work queue.

The chart can also install a `PrometheusRule` with four alerts. Two catch a stuck loop within minutes, whatever your refresh interval: a reconcile running far past the deadline, and reconciles hitting it. One flags any `FerrVaultSecret` whose last sync is older than twice its own refresh interval, and one fires when a content change could not restart its workloads.

```yaml
metrics:
  serviceMonitor:
    enabled: true
  prometheusRule:
    enabled: true
```

Both need the Prometheus Operator CRDs. The operator README has a new Monitoring section listing what each alert means and what to look at when the operator seems frozen.
