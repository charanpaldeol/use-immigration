<!-- Purpose: Skill that scaffolds a new immigration guide page following this site's navigation, sitemap, and design conventions. -->
---
name: add-guide-page
description: Scaffolds a new immigration guide page following site conventions (nav, sitemap, layout, tokens). Use when adding a guide under app/guides/.
allowed-tools: Read, Write, Edit, Grep, Glob, Bash
---

# Add a guide page

## Conventions

- Route: `app/guides/<slug>/page.tsx` (kebab-case slug)
- Register in `app/lib/site-nav.ts` → `guidesNav`
- Add URL in `app/sitemap.ts` with sensible `changeFrequency` / `priority`
- Link from `app/guides/page.tsx` index if other guides are listed there
- Use design tokens from `docs/DESIGN.md` / `app/globals.css` — no raw hex
- Copy is informational, not legal advice; cite policy sources where relevant
- NAP/footer contact: import from `@/lib/site-business`, never hardcode

## Reference implementations

Read these before scaffolding:

- `app/guides/express-entry-2026/page.tsx`
- `app/guides/oinp-2026-niagara/page.tsx`

## After editing

Run `npm run lint` and `npm run build` to verify the new route compiles.
