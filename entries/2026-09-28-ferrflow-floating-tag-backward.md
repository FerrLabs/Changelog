---
title: 'FerrFlow: a hotfix no longer drags a floating tag backward'
summary: 'Releasing 1.4.2 after 1.5.0 silently moved v1 back to 1.4.2. The guard meant to refuse that move never fired. It does now, and --force still overrides it.'
date: 2026-09-28T10:00:00Z
product: ferrflow
type: fix
prLink: https://github.com/FerrLabs/FerrFlow/pull/1226
---

Floating tags such as `v1` or `v1.5` are supposed to only move forward: when a release on an older line would point them at a lower version, FerrFlow refuses and prints a warning unless you pass `--force`. That check read the version from the alias tag's message, which git hands back with a trailing newline, so parsing it failed and the check concluded there was nothing to protect.

In practice, cutting a hotfix on a maintenance branch moved the major alias back to the hotfix, and anyone pinned to `v1` got the older code. The message is now trimmed before it is compared, so the move is refused as documented. If you do want the alias to follow the hotfix, `ferrflow release --force` still moves it.
