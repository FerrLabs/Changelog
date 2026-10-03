---
title: 'Grid or table, and a filter bar, on the vault list'
summary: 'The FerrVault vault list can switch between cards and a table, filter by text, and narrow to the vaults that need attention. The layout you pick is remembered in your browser.'
date: 2026-09-29T20:07:03Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/1029
---

A toolbar now sits above the vault list. The filter field matches a vault's name, slug, summary and environment names, so typing `prod` finds every vault with a production environment. Next to it, an All / Needs attention switch keeps only the vaults showing a signal: a deactivated key, pending secret requests, or secrets to rotate. The two combine.

With more than a handful of vaults, cards take a lot of scrolling, so a toggle switches the list to a table with the same information, one clickable row per vault. On a narrow screen the table scrolls sideways rather than squeezing its columns. Your choice of grid or table is remembered in that browser, and falls back to the grid if the browser blocks storage.

When the filters match nothing, a line says so with a link to clear them. Both switches slide to the selected option, and stay still if your system asks for reduced motion.
