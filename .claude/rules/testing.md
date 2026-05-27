<!-- Purpose: Testing rules for app code and libraries, including where tests live and how to run them. -->
---
paths:
  - "app/**/*.test.ts"
  - "app/lib/**/*.ts"
---

# Testing

- Framework: Vitest with jsdom; tests live beside code as `*.test.ts` under `app/`.
- Run a single file: `npm run test -- app/lib/focus-trap.test.ts`
- Run watch mode locally: `npm run test:watch`
- Prefer table-driven tests for pure helpers (see `app/lib/site-nav.test.ts`).
- New logic in `app/lib/` should include tests when behavior is non-trivial.
