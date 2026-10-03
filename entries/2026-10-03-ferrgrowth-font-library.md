---
title: 'FerrGrowth: a library of 1,743 free fonts, served from your own domain'
summary: "Pick any of 1,743 open-licensed font families for headings and body text. The files are served from your site's own domain, so visitors never load anything from Google or any other third party."
date: 2026-10-03T08:00:00Z
product: ferrgrowth
type: new
prLink: https://github.com/FerrLabs/FerrGrowth-Cloud/pull/908
---

Until now, a custom font meant having a `.woff2` file at hand and uploading it. Most people building a marketing site do not have one: they want to pick Inter or Playfair Display from a list.

Site settings now have a font library next to each font role. It holds 1,743 families under the SIL Open Font License or Apache 2.0, the most used first, searchable and filterable by category: sans serif, serif, display, handwriting and monospace. Every tile is set in its own font, so you see what you pick.

The obvious shortcut would have been to link Google Fonts, which sends every visitor's IP address to Google, something a German court has already held to breach the GDPR. FerrGrowth serves the files itself, from the domain your page is on, so there is nothing to declare in a cookie banner or a privacy notice.

Variable fonts come with every weight, so bold headings are real bold rather than a smeared regular. Pages only download what they use: a page in French never fetches the extended Latin files, and a page without italics never fetches the italic.

To use it, open your site's Settings, go to Design tokens, and click Browse next to Headings or Body.
