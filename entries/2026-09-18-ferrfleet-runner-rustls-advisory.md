---
title: 'FerrFleet runner 1.0.1: rustls updated for RUSTSEC-2026-0285'
summary: 'The runner image shipped rustls 0.23.44, affected by a TLS 1.3 handshake advisory. Version 1.0.1 moves to 0.23.45. If you use the action at @v1 you already have it; if you pin the image by digest, update the pin.'
date: 2026-09-18T18:40:00Z
product: ferrfleet
type: security
prLink: https://github.com/FerrLabs/FerrFleet-Runner/pull/10
---

The runner reaches the FerrFleet API over TLS through rustls, and version 1.0.0 locked rustls 0.23.44. That release is affected by [RUSTSEC-2026-0285](https://rustsec.org/advisories/RUSTSEC-2026-0285): rustls accepted TLS 1.3 handshake messages sent at the wrong encryption level when they followed a key change in the same record. The handshake transcript stays authenticated, so a network attacker could not tamper with or complete a handshake, but a peer could send in the clear what should have been encrypted without the connection being refused.

Runner 1.0.1 locks rustls 0.23.45, which fixes it. Nothing else changes in the image or in the action's inputs.

`uses: FerrLabs/FerrFleet-Runner@v1` and the `ghcr.io/ferrlabs/ferrfleet/runner:1` image both point at 1.0.1 already, so a workflow on the moving tag picks it up on its next run. If you pin the image by digest, as the action recommends, move to the 1.0.1 digest and check its signature:

```bash
cosign verify ghcr.io/ferrlabs/ferrfleet/runner@sha256:1e80b0f7e34c6e2a0e6babb42235eae58ba5e2605bbc1679d30aa93229fbe0b2 \
  --certificate-identity-regexp '^https://github.com/FerrLabs/FerrFleet-Runner/' \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com
```

The runner's CI now runs `cargo deny` on every pull request and requires it to pass, so a dependency with a known advisory can no longer merge without someone deciding to accept it.
