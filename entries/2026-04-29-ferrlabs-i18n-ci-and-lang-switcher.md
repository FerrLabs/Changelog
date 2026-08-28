---
title: 'FerrLabs: CI i18n + langue désactivée quand pas de miroir'
summary: 'Tous les sites passent par un check CI parité fr/en + résolution de clés. Le toggle FR/EN sur une page sans miroir est désormais visiblement désactivé (strikethrough + tooltip) au lieu de no-op silencieux.'
date: 2026-04-29T18:00:00Z
product: 'ferrlabs'
type: 'new'
---

Deux améliorations qui touchent les 5 sites (`ferrlabs.com`, `ferrflow.com`, `track/vault/growth.ferrlabs.com`).

**CI i18n**: un script Node zero-deps (`scripts/check-i18n.mjs`) vérifie à chaque PR :

- Parité des clés entre `en:` et `fr:` dans `translations.ts`: fail sur toute clé orpheline.
- Chaque appel `t(lang, 'key')` du source résout vers une clé existante dans **les deux** bundles.
- FerrFlow inclut en plus la parité des MDX docs `content/docs/docs/**` ↔ `content/docs/fr/docs/**`.

Le job `check-i18n` est gating sur le release pipeline. Parité parfaite sur les 5 sites au moment du land. Le script sert de garde-fou.

**Toggle FR/EN désactivé proprement**: avant : cliquer FR sur une page anglaise sans miroir français ne faisait rien (no-op silencieux). Maintenant : sur les pages sans traduction (`/changelog/`, `/docs/` côté SaaS pré-launch), le toggle s'affiche en `opacity: 0.4` + `text-decoration: line-through` + `cursor: not-allowed` + `aria-disabled="true"` + tooltip "Not yet translated" / "Pas encore traduit". Plus de clic mort.
