---
title: 'The People tab shows names and emails'
summary: 'The People tab of a FerrVault vault listed members as @u- followed by an ID. It now shows each member by display name and email.'
date: 2026-09-29T20:53:39Z
product: ferrvault
type: fix
prLink: https://github.com/FerrLabs/FerrVault-Cloud/pull/1034
---

The People tab of a vault lists who has access to it, but every row read `@u-` followed by a long ID, because FerrVault's local copy of your organization's users never learned their names. Telling two members apart meant guessing.

Each row now shows the member's display name with their email underneath, or the email alone when they have not set a name. The tab reads them from your FerrLabs organization's member list, which now includes display names ([FerrLabs-Cloud#1036](https://github.com/FerrLabs/FerrLabs-Cloud/pull/1036)). The old handle only comes back for a grant whose user has since left the organization, and if the member list cannot be loaded the tab shows what it did before.
