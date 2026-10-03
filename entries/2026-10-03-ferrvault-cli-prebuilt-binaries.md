---
title: 'Prebuilt binaries for the FerrVault CLI'
summary: 'The FerrVault CLI now ships as a prebuilt binary for Linux, macOS and Windows, and the GitHub Action installs it instead of building from source.'
date: 2026-10-03T09:28:54Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault/pull/284
docsLink: https://ferrvault.com/docs/cli/
---

Installing the FerrVault CLI used to mean building it with cargo, which needs a Rust toolchain and a few minutes per machine. Each CLI release now publishes archives for Linux and macOS (amd64 and arm64) and Windows (amd64), each with its SHA-256 checksum, starting with `cli-v0.2.0`.

On Linux or macOS:

```bash
os=$(uname -s | tr '[:upper:]' '[:lower:]'); arch=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')
curl -fsSL "https://github.com/FerrLabs/FerrVault/releases/download/cli-v0.2.0/ferrvault-$os-$arch.tar.gz" | tar -xz
sudo install -m 0755 ferrvault /usr/local/bin/ferrvault
```

The `FerrLabs/FerrVault/action` GitHub Action downloads the same binary, so a workflow fetches its secrets in seconds. Pin `cli-version` to a release tag to keep CI reproducible:

```yaml
- uses: FerrLabs/FerrVault/action@cli-v0.2.0
  with:
    api-url: https://api.ferrvault.com
    token: ${{ secrets.FERRVAULT_TOKEN }}
    cli-version: cli-v0.2.0
    names: DATABASE_URL,STRIPE_KEY
```

The connect-cluster wizard in the app shows both snippets. `cargo install --locked` still works for platforms without a binary.
