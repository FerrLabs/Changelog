---
title: 'FerrLabs · auto-redirect French browsers + translate=no on code'
summary: 'First-time visitors with browser locale starting with `fr` are redirected once to /fr/. Code blocks tagged translate="no" so Google Translate stops mangling shell snippets.'
date: 2026-04-29T11:25:00Z
product: 'ferrlabs'
type: 'new'
---

Two i18n improvements that ship across every FerrLabs marketing site:

**Auto-redirect on first visit.** If `navigator.language` starts with `fr` and the visitor lands on a non-`/fr/` URL, they get redirected once to the French equivalent. The choice is stored in `localStorage.lang-pref` so the auto-redirect never fires again. Manual EN/FR pill clicks set the same preference.

**`translate="no"` on code blocks.** Every `code`, `pre`, `kbd`, `samp`, and `.mono` element gets the `translate="no"` attribute + `notranslate` class on page load. Google Translate now leaves `cargo install ferrflow` alone instead of suggesting `cargo installer ferrflow`.

The `<meta name="google" content="notranslate">` tag was *removed* from FerrFlow — Google Translate is now available again for languages we don't ship (DE, ES, JP, …), only the brand-defined translations are protected.
