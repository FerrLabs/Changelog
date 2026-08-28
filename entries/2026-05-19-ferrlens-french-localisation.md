---
title: 'FerrLens disponible en français'
summary: '38 nouvelles routes /fr/: home, pricing, account, les 8 pages légales, le changelog et les 21 outils: avec un sélecteur EN/FR en haut de chaque page.'
date: 2026-05-19T18:30:00+02:00
product: ferrlens
type: new
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/39
---

FerrLens parle français maintenant. Cliquez sur **FR** dans le coin haut-droit (ou tapez `/fr/` directement dans l'URL) et tout le chrome bascule en français.

Ce qui est traduit :

- **Marketing**: `/fr/`, `/fr/pricing`, `/fr/account`.
- **Légal**: les 8 pages (mentions, confidentialité, conditions d'utilisation, cookies, DPA, sous-traitants, sécurité, abus) avec liens internes corrects et terminologie RGPD française (CNIL, intérêt légitime, responsable de traitement…).
- **Auth**: `/fr/auth/start`, `/fr/auth/callback`, `/fr/auth/logout`. Le flow OAuth préserve la langue à travers le round-trip.
- **Changelog**: `/fr/changelog/` avec les noms de mois localisés (mai 2026, juin 2026…) et un flux RSS dédié à `/fr/changelog/rss.xml`.
- **21 outils**: chaque outil a sa route `/fr/tools/<slug>` avec navbar / footer / breadcrumb en français.

Ce qui reste en anglais pour l'instant :

- Le contenu interne des composants React des outils (boutons "COPY", placeholders, messages). C'est de l'UI dev-targeted où l'anglais est la norme.
- Le corps des entrées changelog: elles sont rédigées en anglais par les développeurs au moment du commit ; une bannière explique pourquoi sur la version française.

Le sélecteur de langue connaît l'équivalent de chaque page : depuis `/legal/dpa` il pointe vers `/fr/legal/dpa`, depuis `/tools/hash#q=foo` il pointe vers `/fr/tools/hash` (le fragment de partage compressé est préservé). Si vous voulez l'expérience en français par défaut, mettez `https://ferrlens.com/fr/` en favori.
