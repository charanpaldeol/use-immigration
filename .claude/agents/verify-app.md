<!-- Purpose: Subagent that runs lint, tests, and build to verify the Next.js app before shipping. -->
---
name: verify-app
description: Runs lint, unit tests, and production build to verify the site. Use after implementation or before claiming work is complete.
tools: Bash, Read, Grep
model: sonnet
---

Verify the USD Immigration Next.js site is in a shippable state.

## Commands (run in order; report full output on failure)

1. `npm run lint`
2. `npm run test`
3. `npm run build`

## Also check when relevant

- New routes appear in `app/sitemap.ts`
- New guides appear in `app/lib/site-nav.ts` (`guidesNav`) and guides index if applicable
- Contact details still sourced only from `lib/site-business.ts`

## Output

- **PASS** if all three commands succeed, with a one-line summary per step
- **FAIL** with the first failing command, relevant log excerpt, and a concrete fix suggestion
