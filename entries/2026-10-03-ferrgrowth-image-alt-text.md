---
title: 'FerrGrowth: alt text on hero, card, testimonial and logo images'
summary: 'Hero side images, card images, testimonial photos and the navbar logo now take alt text in the editor, so screen readers and image search can describe them.'
date: 2026-10-03T13:00:00Z
product: ferrgrowth
type: fix
prLink: https://github.com/FerrLabs/FerrGrowth-Cloud/pull/925
---

The Image, Gallery and Logos blocks always let you describe your pictures, but several others did not. The side image in a hero, card images, testimonial photos and the navbar logo went out with an empty `alt`, and the editor had no field to fill it in. Screen readers skipped them, image search had nothing to index, and an accessibility audit flags exactly that on public commercial sites.

Each of those images now has an alt text field right below its URL in the block settings. What you type shows up in the editor preview and in the published HTML.

The navbar logo falls back to your logo text when you leave the field empty, since a logo's description is usually the company name. Pages you already published keep working unchanged: open the block, fill in the field, and republish.
