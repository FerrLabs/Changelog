---
title: 'FerrGrowth: Five new builder blocks: button, rich hero, CTA section, navbar, footer'
summary: The page builder gains a standalone button primitive and four layout blocks: a rich hero with background image and overlay, a CTA conversion band, a top navbar, and a multi-column footer: so you can reproduce a real website's full page chrome without leaving the builder.
date: 2026-07-07T09:00:00Z
product: ferrgrowth
type: new
prLink: https://github.com/FerrLabs/FerrGrowth-Cloud/pull/480
---

Until now the builder could produce landing-page sections, but not a page that reads as a complete website: there was no top navigation, no footer, and buttons only existed baked inside CTA, pricing, and form blocks. This release adds five blocks that close that gap.

- **Button**: the first standalone button primitive. Label, link, four variants (primary, secondary, ghost, link), three sizes, alignment, and an open-in-new-tab option.
- **Rich hero**: eyebrow, headline, subhead, up to three buttons, an optional background image with an adjustable dark overlay (0–100), and an optional side image on the left or right for a split hero.
- **CTA section**: a conversion band with headline, body, and one or two buttons; the band background comes from the block's regular style settings, so a solid color or full-bleed image both work.
- **Navbar**: a page-level top bar with logo (text or image), links, an optional CTA button, sticky positioning, and left or spread alignment. It wraps to a stacked layout on mobile.
- **Footer**: one to four link columns plus optional tagline, copyright line, and social links.

All five appear in the builder's block palette: add them to a page like any other block. They inherit the existing responsive style system (spacing, background, border, per-breakpoint visibility), and buttons share one styling helper across the button, hero, CTA, and navbar blocks, so a primary button looks identical wherever it shows up. Editor preview and published output render matching markup, so what you see in the builder is what your visitors get.

Navbar and footer are per-page blocks for now; a site-wide chrome slot and a mobile hamburger menu for the navbar are on the roadmap.
