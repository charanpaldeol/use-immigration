<!-- Purpose: Frontend rules scoped to app components and styles, guiding how to build UI in this project. -->
---
paths:
  - "app/**/*.{ts,tsx}"
  - "app/**/*.css"
---

# Frontend (App Router)

- Prefer server components; add `"use client"` only when hooks or browser APIs are required.
- Section components live under `app/components/`; shared libs under `app/lib/`.
- Use semantic Tailwind tokens (`bg-primary-container`, `text-on-surface`, etc.) from `app/globals.css`.
- Header scroll offset: use `scroll-mt-header-scroll-offset` for in-page anchors.
- Accessibility: meaningful `aria-*` on interactive controls; decorative icons `aria-hidden`.
- Images: use `next/image` with hosts allowed in `next.config.ts` remotePatterns.
