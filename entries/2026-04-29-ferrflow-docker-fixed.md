---
title: 'FerrFlow · ferrflow.com Docker pipeline unblocked'
summary: 'site Docker builds were silently failing for 24h+ — site v5.7, v5.8, v5.9 never reached prod. Fixed at the Dockerfile level, ferrflow.com is now back on the latest release.'
date: 2026-04-29T09:50:00Z
product: 'ferrflow'
type: 'fix'
---

The Docker workflow that builds the ferrflow.com image had been failing silently since 2026-04-28 with `ERR_PNPM_OUTDATED_LOCKFILE`. The site's Dockerfile used `--frozen-lockfile` while CI used `--no-frozen-lockfile`, so any package.json bump that didn't ship a refreshed lockfile broke the Docker stage.

Concrete impact: site v5.7.0, v5.8.0, v5.9.0 all failed to build. The editorial hero from #405 never reached prod. ferrflow.com stayed pinned to v5.6.1 in Infra GitOps because that was the last image GHCR had.

Fixed by aligning Dockerfiles with CI behaviour (`--no-frozen-lockfile`) then later tightening back to `--frozen-lockfile` once the lockfile was refreshed properly. ferrflow.com is now back on the latest release with the editorial design.
