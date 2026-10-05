---
title: 'FerrGrowth: org roles now decide who can administer a site'
summary: 'Members of your organisation edit pages, posts, forms and media. Deleting a site, custom domains, server tokens, integrations and release rollbacks are now for admins and owners.'
date: 2026-10-05T19:00:00Z
product: ferrgrowth
type: security
prLink: https://github.com/FerrLabs/FerrGrowth-Cloud/pull/940
draft: true
---

Until now, every member of an organisation could do everything in FerrGrowth, whatever their role in FerrLabs. Inviting a freelancer to edit a landing page also gave them the power to delete the site, detach its domain or mint API tokens.

FerrGrowth now follows the role you give people in your FerrLabs organisation. Members read everything and edit the content: pages, blog posts, forms, email templates and media, and they can publish. Admins and owners can also archive or restore a site, manage its custom domain, mint and revoke server tokens, connect integrations, manage site members, switch a site between visual and code mode, and activate or roll back a release.

Personal API tokens follow the same rule: a token never does more than the person who created it can do. Someone removed from your organisation loses access to its sites right away, instead of when their session expires.

There is nothing to configure. Roles come from your organisation's member list in FerrLabs, so change someone's role there and FerrGrowth follows within seconds.
