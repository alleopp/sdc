# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing/portfolio site for **S.D. Construction & Development** (a Greater Boston general contractor). Single-page landing site plus a filterable project gallery. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

## Commands

```bash
npm run dev     # Dev server with Turbopack at http://localhost:3000
npm run build   # Production build (Turbopack)
npm run start   # Serve the production build
npm run lint    # ESLint (next/core-web-vitals + next/typescript)
```

There is no test suite configured.

## Architecture

- **All site content lives in `src/data/siteContent.ts`** as the `siteContent` object — services, gallery items, about/mission/tagline copy, and contact info. It is a plain static content module (no backend); edit copy, services, gallery images, and contact details here rather than hardcoding them into components.
- **`src/app/page.tsx`** — the home page (Server Component). Renders header, hero, about, services, gallery preview (category cards), and footer, all driven by `siteContent`. Gallery category cards link to `/gallery?category=<category>`.
- **`src/app/gallery/page.tsx`** — gallery route shell (Server Component). Wraps `GalleryContent` in `<Suspense>` because the child reads search params.
- **`src/app/gallery/GalleryContent.tsx`** — `"use client"` component handling category filtering via `useSearchParams`/`useRouter`. Categories are derived dynamically from `gallery[].category`, so adding a new category in `siteContent.ts` automatically creates a new filter and home-page card.

## Conventions

- **Brand color** is `rgb(16, 12, 106)` (deep blue), used inline throughout as `text-[rgb(16,12,106)]` / `bg-[rgb(16,12,106)]`, with hover `rgb(30,25,150)`. CSS variables (`--brand-blue`, `--brand-blue-light`, `--brand-blue-dark`) and the `.brand-gradient` utility are defined in `src/app/globals.css`.
- **Path alias**: `@/*` maps to `./src/*`.
- **Images**: external gallery images come from `images.unsplash.com`, allowlisted in `next.config.ts` (`images.remotePatterns`). Any new external image host must be added there or `next/image` will reject it. Allowed `qualities` are `[75, 90, 100]`.
- Tailwind v4 is configured via PostCSS (`postcss.config.mjs` + `@import "tailwindcss"` in `globals.css`) — there is no `tailwind.config` file.
- Deployed on **Vercel** (`.vercel/` present).
