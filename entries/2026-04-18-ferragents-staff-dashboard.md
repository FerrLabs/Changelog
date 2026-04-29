---
title: 'FerrAgents · staff dashboard'
summary: 'Internal observability for our agent fleet — live queue, cost per request, profitability per agent.'
date: 2026-04-18
product: 'ferragents'
type: 'new'
---

We shipped the FerrAgents staff dashboard — internal-only, but the engineering ideas behind it will surface in the public products.

What it tracks per agent:

- Live request queue with priority + age
- Success rate, p50, p95
- Cost per request (in / out tokens × model price)
- Revenue per request (when configured)
- Margin per request × volume = real-time profitability

The dashboard refreshes every 1.5s without a websocket — just a stale-while-revalidate fetch loop. Cheap, correct, no socket churn at scale.
