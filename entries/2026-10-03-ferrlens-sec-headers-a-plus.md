---
title: 'Security headers check can award A+ again'
summary: A fully hardened site now scores 100 and gets A+, instead of topping out at A.
date: 2026-10-03T12:00:00+02:00
product: ferrlens
type: fix
prLink: https://github.com/FerrLabs/FerrLens-Cloud/pull/555
---

The [security headers](https://ferrlens.com/tools/sec-headers) tool could never give an A+. The eight headers it checks add up to 85 points, but A+ required 90, so a site with every header set correctly stopped at A. The page also claimed the score was out of 90.

The score is now a percentage of the maximum, so a fully hardened site scores 100 and gets A+, and every grade boundary means the same share of the total as it says. Each header also shows the points it earned out of the points it can earn, which makes it clear where the missing points are.
