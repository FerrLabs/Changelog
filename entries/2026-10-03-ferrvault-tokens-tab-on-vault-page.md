---
title: 'Manage tokens from the vault page'
summary: 'FerrVault tokens now live in a Tokens tab on each vault, scoped to the environment selected there. The separate Developers > Tokens page is gone.'
date: 2026-10-03T08:05:23Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/1052
docsLink: https://ferrvault.com/docs/tokens/
---

A FerrVault token belongs to one environment of one vault, but you used to create and revoke tokens from a separate Developers > Tokens page, picking the vault and the environment again there. Tokens now sit in a Tokens tab on the vault page, between People and Audit.

The tab uses the environment already selected in the vault's environment row, so switching from staging to production shows that environment's tokens. Creating a token, revoking one and the connect-cluster wizard work as before, from inside the tab.

The Developers section is gone from the sidebar. Old links to `/tokens` redirect to the vault list rather than failing. The token preview also shows the real `fvsat_` prefix, where it used to show a wrong one.
