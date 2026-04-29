---
title: 'FerrLabs · changelog disponible en français'
summary: 'ferrlabs.com/fr/changelog/ et /fr/changelog/<slug>/ + flux RSS FR. La chrome (header, breadcrumb, boutons, dates) suit la langue ; les entrées restent en anglais (source unique de vérité).'
date: 2026-04-29T16:00:00Z
product: 'ferrlabs'
type: 'new'
---

Les visiteurs francophones avaient `/changelog/` en anglais sans miroir FR. Maintenant :

- `/fr/changelog/` et `/fr/changelog/<slug>/` listent et rendent les mêmes entrées avec la chrome traduite (titre éditorial "Ce qu'on a livré.", filtres, breadcrumb, boutons "Lire la doc" / "Voir la PR" / "Retour au changelog", dates au format `fr-FR`).
- Flux RSS FR à `/fr/changelog/rss.xml` avec `<language>fr-fr</language>`.
- Lien "Changelog" du footer pointe vers `/changelog/` ou `/fr/changelog/` selon la locale.

Les entrées markdown elles-mêmes restent en anglais — c'est le format imposé par le repo source `FerrLabs/Changelog` (une seule version par changement, pas de drift entre langues). Seule la chrome change. Si on veut un jour des résumés FR, on ajoutera un champ `summary_fr:` au schéma.
