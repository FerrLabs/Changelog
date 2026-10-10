---
title: 'Run FerrFleet agents on your own runner pools'
summary: 'Register a pool of runners you host and point an agent at it. FerrFleet hands its runs to your runners, so the code and the Claude credential stay on your machines, and a Helm chart scales the pool from zero with KEDA.'
date: 2026-10-10T09:30:00Z
product: ferrfleet
type: new
prLink: https://github.com/FerrLabs/FerrFleet-Cloud/pull/876
docsLink: https://ferrfleet.com/docs/runner-pools/
---

Until now an agent ran either in the FerrFleet cluster or in your own pipeline, which had to start each run itself. A runner pool is a third option: the agent keeps its schedules, webhooks and tickets, and its runs go to machines you host instead of our cluster.

Your runners clone the repository and start Claude on your side, with an Anthropic API key from their own environment. FerrFleet never receives that key. Every connection goes out from the runner, and pool runs never wait for a slot in our cluster: your capacity is the number of runners you start.

Create a pool under **Runner pools** in the app, copy its token (it is shown once), set **Run on** to the pool in the agent's settings, then install the runner chart, which starts one Job per waiting run and nothing when the queue is empty:

```bash
helm install ferrfleet-runner oci://ghcr.io/ferrlabs/charts/ferrfleet-runner \
  --namespace ferrfleet \
  --set poolToken.existingSecret=ferrfleet-pool \
  --set claudeCredential.existingSecret=ferrfleet-pool
```

The chart also runs a fixed set of runners without KEDA, and there is a Docker Compose example for hosts without Kubernetes.

Runs are handed out in arrival order. A runner that goes quiet before starting a run gives it back to the pool; one that goes quiet mid-run fails it rather than running it twice, and a run nobody takes ends after 6 hours.
