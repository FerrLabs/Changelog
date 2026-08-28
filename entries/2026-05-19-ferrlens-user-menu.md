---
title: 'FerrLens: User menu with tier badge in the navbar'
summary: Signed-in users now see an avatar + tier pill in the FerrLens navbar instead of a plain Account link. The dropdown surfaces email, plan, Upgrade CTA and Sign out.
date: 2026-05-19T14:00:00Z
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/26
---

The navbar on `ferrlens.com` used to swap its "Sign in" button for a flat "Account" link once you were logged in: informative, but flat. It now renders a real user menu: a small avatar (gravatar or initials), a tier pill, and a dropdown that shows the signed-in identity at a glance plus shortcuts to the account page, upgrade flow, and sign-out.

Tier displays "Free" for every signed-in user today. FerrLens has no per-user subscriptions schema yet (Stripe wiring is the V1.1 milestone). The component is already shaped for `pro` and `team`, so when the API lands the wire-up is a single constant change. Staff accounts also get a discreet shortcut to `app.ferrlabs.com/admin` in the same menu.

This shipped alongside a small addition to the shared editorial navbar in `@ferrlabs/ui-astro` (UI#159) that exposes a `trailing` slot: the same hook will let FerrVault, FerrTrack, FerrGrowth and FerrFleet marketing sites render their own user menus when their auth flow goes live.
