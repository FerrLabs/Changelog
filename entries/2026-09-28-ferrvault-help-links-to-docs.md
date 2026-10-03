---
title: 'FerrVault pages link to their documentation'
summary: 'A question-mark icon in the page header of the FerrVault app opens the matching documentation page in a new tab.'
date: 2026-09-28T20:52:52Z
product: ferrvault
type: new
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/1019
docsLink: https://ferrvault.com/docs/introduction/
---

With FerrVault documentation now online, the app points to it from where you are working. A "?" icon sits next to the actions in each page header and opens the relevant page of the docs in a new tab.

The vault list, a vault's page, its environments and its settings link to the vaults documentation. The Tokens page links to the tokens documentation and the Keys page to the keys documentation. The account Settings page has no docs page yet, so it has no link.

A vault's own page used to draw its header differently from the rest of the app, which is why it took a second change ([#1021](https://github.com/FerrLabs/FerrVault-Cloud/pull/1021)). It now uses the same header as the other pages, with the vault name as the title, the slug as a badge, Edit and Delete as actions, and the content lined up underneath.
