@AGENTS.md

See @package.json for scripts and @docs/DESIGN.md for design tokens (Stellar Sovereign palette).

# Workflow

- Use **npm**, not bun/yarn/pnpm.
- Run `npm run lint` before claiming a task is done.
- Run `npm run test` when changing logic in `app/lib/` or utilities with tests.
- Run `npm run build` before PRs that touch routing, `next.config.ts`, API routes, or sitemap.
- Working directly on `main` is OK for now (small project).

# Architecture

- Contact NAP, hours, URLs: `lib/site-business.ts` only — do not duplicate in components.
- Homepage marketing copy: `app/lib/home-content.ts`.
- Header nav and guides menu: `app/lib/site-nav.ts` and `guidesNav`.
- Design tokens: `docs/DESIGN.md` + semantic classes in `app/globals.css` — avoid raw hex in components.
- New public pages: add to `app/sitemap.ts` when they should be indexed.

# Gotchas

- Marketing site only — not legal advice; no outcome guarantees in copy.
- `app/api/contact/route.ts` logs enquiries to the server console; no CRM/email wired yet.
- Vitest includes only `app/**/*.test.ts` (jsdom).
