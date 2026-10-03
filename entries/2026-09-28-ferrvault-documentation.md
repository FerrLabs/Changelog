---
title: 'FerrVault has documentation'
summary: 'ferrvault.com/docs replaces its one-page placeholder with real documentation, in English and French, covering vaults, tokens, keys, the CLI and the Kubernetes operator.'
date: 2026-09-28T20:19:52Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/1016
docsLink: https://ferrvault.com/docs/introduction/
---

FerrVault now has a documentation site at [ferrvault.com/docs](https://ferrvault.com/docs/introduction/), in English and French. It starts with an introduction, then covers vaults and environments, tokens, keys, the CLI and the Kubernetes operator.

Until now the docs were a single placeholder page, and the closest thing to a reference was the README in each repository, which had drifted from the product. Every page was checked against the code instead, so it describes what works today. The CLI page installs with `cargo install --git` because there is no binary release yet, the operator manifest shows the fields the CRDs require even though FerrVault ignores them, and the tokens page explains what happens to a token when the person who created it loses access.

The marketing pages were corrected at the same time: the list of supported key backends now reads OVHcloud KMS, AWS KMS and Vault Transit, the ones FerrVault actually talks to.
