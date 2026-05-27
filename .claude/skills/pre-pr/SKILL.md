<!-- Purpose: Skill that runs a full pre-PR checklist (lint, tests, build, diff review) and reports readiness. -->
---
name: pre-pr
description: Runs lint, tests, and build, then summarizes readiness for a PR. Use when the user asks to prepare a PR, ship, or verify the branch.
disable-model-invocation: true
allowed-tools: Bash, Read, Grep, Glob
---

# Pre-PR checklist

Run these commands in the project root and report pass/fail for each:

1. `npm run lint`
2. `npm run test`
3. `npm run build`

## Diff review

!`git diff main...HEAD 2>/dev/null || git diff origin/main...HEAD 2>/dev/null || git diff HEAD`

Check the diff for:

- New pages listed in `app/sitemap.ts`
- New guides in `app/lib/site-nav.ts`
- No contact/phone/email duplicated outside `lib/site-business.ts`

## Output

- Checklist with command results
- **READY** or **NOT READY** with blocking items first
