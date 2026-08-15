---
title: 'FerrLabs: Navbar + Footer enfin traduits sur les 3 sites SaaS'
summary: 'FerrTrack / FerrVault / FerrGrowth: les pages /fr/ affichaient une navbar et un footer en anglais. Tout passe maintenant par t(lang, key).'
date: 2026-04-29T15:30:00Z
product: 'ferrlabs'
type: 'fix'
---

Bug visible depuis le launch des sites SaaS : les visiteurs sur `/fr/...` voyaient le corps de page en français mais la navbar (Features, Pricing, Get FerrTrack/Vault, Menu) et le footer (tagline, "Back to ferrlabs.com", colophon, copyright) restaient en anglais.

Cause : les composants `Navbar.astro` et `Footer.astro` ignoraient le prop `lang` et hardcodaient les libellés. Les clés de traduction existaient déjà dans `i18n/translations.ts`, juste personne ne les appelait.

Fix : 8 nouvelles clés par site (`nav.cta`, `nav.menu`, `nav.openMenu`, `brand.tag`, `footer.tagline`, `footer.back`, `footer.colophon`, `nav.ferrlabs`), `Navbar` + `Footer` passés à `t(lang, key)`, `Layout.astro` qui forward le `lang` au footer (la navbar le recevait déjà).

Concerne `track.ferrlabs.com`, `vault.ferrlabs.com`, `growth.ferrlabs.com`. ferrflow.com utilisait déjà la version i18n-aware du composant partagé `@ferrlabs/ui-astro`, donc pas affecté.
