---
title: 'The connect-cluster wizard hands out snippets that work'
summary: 'The snippets FerrVault shows after you mint a token now apply and run: the Kubernetes manifest passes the CRD schema, and the CLI and GitHub Actions tabs install the CLI with cargo.'
date: 2026-10-03T07:56:17Z
product: ferrvault
type: fix
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/1050
docsLink: https://ferrvault.com/docs/cli/
---

After you mint a token, FerrVault shows a wizard with snippets to connect a cluster, a shell or a CI pipeline. None of its tabs worked as written.

The Kubernetes manifest was refused by `kubectl apply`. It now fills `organization` on the `FerrVaultConnection` and `project` on the `FerrVaultSecret`, both required by the operator's CRDs, and drops the `environment` field, which the CRD does not have: the token already decides the environment.

The CLI tab pointed at an install script that returned a 404. It now builds the CLI from source, pinned to the lockfile in the repository:

```bash
cargo install --locked --git https://github.com/FerrLabs/FerrVault ferrvault-cli
```

The GitHub Actions tab used action inputs that do not exist. The workflow it shows now installs the CLI the same way and runs your command through `ferrvault exec`, with `FERRVAULT_URL` and `FERRVAULT_TOKEN` in its environment. Prebuilt binaries are not published yet, so cargo is the only install path for now; the [CLI docs](https://ferrvault.com/docs/cli/) use the same command.
