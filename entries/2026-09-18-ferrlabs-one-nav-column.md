---
title: 'One nav column, and an app switcher that shows what your org has'
summary: 'The dark product rail and the white sidebar merge into a single column in FerrVault, FerrTrack, FerrGrowth, FerrFleet and the FerrLabs console. Switching apps moves to the top of it, and only lists the products your organization actually uses.'
date: 2026-09-18T12:00:00Z
product: ferrlabs
type: new
prLink: https://github.com/FerrLabs/UI/pull/549
---

Every app used to open with two vertical bands side by side: a narrow dark rail holding one tile per FerrLabs product, then a white sidebar with the app's own navigation. They are now one dark column. The current app sits at the very top with a switch control, then your organization, then the sections, with your account at the bottom. The page itself keeps a light surface, set slightly in from the column.

The switcher no longer lists the whole catalogue. It shows the products your organization holds, on a trial, active or waiting on a payment, plus the FerrLabs console, with the plan next to each one. An org that only uses FerrVault sees FerrVault and FerrLabs, not four tiles leading to sales pages. **Manage subscriptions**, at the bottom of the switcher, goes straight to the products page of the FerrLabs console when you want to add one.

On screens narrower than 880px the column is hidden for now, and the switcher with it. A drawer to bring it back on phones is tracked in [FerrLabs/UI#551](https://github.com/FerrLabs/UI/issues/551).
