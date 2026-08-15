---
title: 'Admin: Editable org subscriptions + global discounts + promo codes'
summary: Staff can now edit any org's subscriptions inline from the admin console, and a new Billing page manages site-wide percentage discounts and user-redeemable promo codes with stacking rules.
date: 2026-05-21T16:00:00Z
product: ferrlabs
type: new
prLink: https://github.com/FerrLabs/FerrLabs-Cloud/pull/328
---

The admin console at `app.ferrlabs.com/admin` gained a real billing surface.

### Editable org subscriptions

The Subscriptions card on each org detail page is no longer read-only. Tier and status are now live dropdowns that save on change. A Cancel button soft-cancels (status → `canceled`), and a "+ Activate a product" button creates a fresh subscription for whichever paid product the org doesn't have yet. Useful when comping a product, stretching a trial, or fixing a stuck status without dropping into SQL.

### Global discounts

A new `/admin/billing` page hosts two tabs. The first manages **global discounts**: site-wide, time-bounded percentage offs (think "summer sale −50%"). Set a label, a percent, an optional end date, and the products it applies to. Only one global discount can be active at any moment: the database enforces it with a partial unique index, so two staff members racing to create overlapping discounts can't.

### Promo codes

The second tab handles **promo codes** that customers can redeem. Each code carries a percent or amount off, a duration (`once`, `forever`, or `repeating N months`), an optional max-redemptions cap, and optional restrictions on which products and tiers it applies to.

The important bit: a `stackable_with_global` flag controls interaction with the active global discount. **Default is non-stackable**: redeeming a code overrides the global discount for that org. Flip the toggle on a per-code basis when stacking is genuinely intended. Codes are uppercase-normalised on insert and uniqueness is DB-enforced.

### Schema

Three new tables in migration `057_billing_promotions.sql`: `billing_global_discounts`, `billing_promo_codes`, and `billing_promo_redemptions`. The redemption table carries `UNIQUE (promo_code_id, org_id)` so an org cannot redeem the same code twice, plus a `revoked_at` column to soft-revoke without losing history.

Stripe wiring stays deferred to V1.1. Today's shipment is the DB + admin UX; the V1.1 PR will reconcile each row with a Stripe Coupon + PromotionCode and apply the discount on actual checkout.
