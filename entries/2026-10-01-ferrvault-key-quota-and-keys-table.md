---
title: 'See your key quota on the Keys page'
summary: 'The FerrVault Keys page shows how many managed and HSM keys your plan allows and how many are used, links to the plan that raises the limit, and lists keys in a table.'
date: 2026-10-01T16:40:36Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/1039
docsLink: https://ferrvault.com/docs/keys/
---

Your plan includes a number of managed keys, some of which can be kept in a hardware security module, but the Keys page never said how many. Two cards above the list now show managed keys used against your plan, split into software and HSM, and HSM keys used against the HSM allowance, including which level the next generated key will get. The bar turns amber at 80% and red when it is full.

Next to them, a link points to what raises the limit: "Upgrade to" the next tier on a paid plan, "See plans" without a subscription, "Renew" when the subscription has ended, and nothing on Enterprise. It opens the products page in your FerrLabs account with FerrVault's card outlined and the suggested tier shown, and nothing changes until you confirm there ([FerrLabs-Cloud#1039](https://github.com/FerrLabs/FerrLabs-Cloud/pull/1039)).

The keys themselves moved from cards to a table: name and URI, backend, type, the vaults using it, status, date added and actions. The status reads Active, Unused and still billed, Deactivated or Destroyed, and the longer explanations moved into tooltips. A key stays impossible to delete while a vault uses it.
