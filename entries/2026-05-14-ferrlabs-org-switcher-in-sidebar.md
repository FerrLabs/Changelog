---
title: 'FerrLabs · Org switcher in every product sidebar + cross-app create-org link'
summary: All four product apps (Vault, Track, Growth, Fleet) now show the same org switcher dropdown in the sidebar. 'Create an organisation' deep-links to the central labs portal instead of being a dead end.
date: 2026-05-14T17:10:00Z
product: ferrlabs
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/198
---

If you're a member of more than one org, switching between them used to mean signing out, picking the right org on the FerrLabs portal, and signing back in. That UX has been replaced with the same sidebar `OrgDropdown` shared component (from `@ferrlabs/ui-react`) now mounted in **FerrVault**, **FerrTrack**, **FerrGrowth** and **FerrFleet**.

Picking another org from the dropdown triggers the JWT-with-org-claim flow (`/auth/switch-org`, shipped in FerrLabs-Cloud earlier this week), and you stay on the page you were viewing — no re-login, no portal round trip.

The same dropdown also fixed a paper cut: 'Create an organisation' used to be present in the menu but not wired to anything. It now deep-links to the labs portal (`app.ferrlabs.com/orgs/new?return=<current_url>`), and after creation the portal redirects you back to wherever you were, with the new org selected in the JWT.

Shipped in parallel via four matched PRs ([Vault#198](https://github.com/FerrLabs/FerrVault-Cloud/pull/198) + [#202](https://github.com/FerrLabs/FerrVault-Cloud/pull/202), [Track#203](https://github.com/FerrLabs/FerrTrack-Cloud/pull/203) + [#206](https://github.com/FerrLabs/FerrTrack-Cloud/pull/206), [Growth#181](https://github.com/FerrLabs/FerrGrowth-Cloud/pull/181) + [#184](https://github.com/FerrLabs/FerrGrowth-Cloud/pull/184), [Fleet#169](https://github.com/FerrLabs/FerrFleet-Cloud/pull/169) + [#171](https://github.com/FerrLabs/FerrFleet-Cloud/pull/171)) so every product gets the same UX on the same day. Consume `@ferrlabs/ui-react` ≥ 4.x in any new product to get it for free.
