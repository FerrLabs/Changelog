---
title: 'FerrFleet runs now show up as a check on the pull request'
summary: A run about a pull request gets its own FerrFleet check in the checks list, linking to the run, whether it executes in our cluster or on your own runner.
date: 2026-09-21
product: ferrfleet
type: new
prLink: https://github.com/FerrLabs/FerrFleet-Cloud/pull/805
draft: true
---

When an agent runs about a pull request, that pull request now carries a FerrFleet check, named after the agent. It shows the run as queued, running, then finished, and links straight to its transcript in the dashboard.

The check is posted by FerrFleet itself, as the FerrFleet GitHub App, not by the machine executing the agent. So it looks the same for a run in our cluster and for one on your own runner through `FerrLabs/FerrFleet-Runner`. Until now, a run on your own runner only appeared as a GitHub Actions job.

A finished run is reported as neutral, not as success. Finishing means the agent did its work, not that it approved the change, and nothing structured says what it concluded. If you make the check required, it blocks a merge when the review did not happen, and never because of what the review found.

It needs one thing from you: accept the new Checks permission when GitHub asks you to, on each account where the FerrFleet App is installed.
