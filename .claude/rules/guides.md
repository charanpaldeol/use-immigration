<!-- Purpose: Rules for creating and maintaining immigration guide pages and their supporting wiring. -->
---
paths:
  - "app/guides/**/*"
---

# Guide pages

When adding or editing guides:

1. Create `app/guides/<slug>/page.tsx` matching existing guide structure.
2. Add entry to `guidesNav` in `app/lib/site-nav.ts`.
3. Add URL to `app/sitemap.ts`.
4. Update `app/guides/page.tsx` if it lists child guides.
5. Keep tone factual; no guaranteed outcomes; point readers to official IRCC/Ontario sources for eligibility.
