# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Windows 95 themed personal portfolio website. Single-page Next.js app deployed on Vercel at jordanboesch.com.

## Commands

```bash
pnpm dev          # Dev server (prints local network IP)
pnpm build        # Production build
pnpm lint         # Oxlint (type-aware, config in .oxlintrc.json)
pnpm lint:fix     # Oxlint autofix
pnpm format       # Prettier check
pnpm format:fix   # Prettier write
pnpm typecheck    # tsc --noEmit
pnpm precommit    # lint + format + typecheck
pnpm payload migrate:create <name>   # Generate a migration after changing collections or fields
```

## Database

One Neon Postgres database serves local dev, preview deployments, and production. Schema push is off (`push: false`), so `pnpm dev` never changes the schema; migrations in `src/migrations` do.

Vercel builds with `pnpm run ci`, which refuses to deploy if a dev-push marker exists, runs `payload migrate`, then `next build`. Every deployment, previews included, migrates the shared database, so keep migrations additive and compatible with the code that's already deployed. Drop columns in a follow-up after the code that stops using them is live.

Never run `migrate:down`, `migrate:reset`, `migrate:refresh`, or `migrate:fresh`: they run against production.

No test framework is configured.

## Tech Stack

- **Next.js 16** (App Router, React Compiler enabled) with **React 19**
- **TypeScript 5.9** (strict mode, path alias `@/*` → `./src/*`)
- **Tailwind CSS v4** (CSS-first config in `globals.css` `@theme` block, no JS config)
- **Jotai** for state (1 atom: `tabSelectedAtom`)
- **@base-ui/react** for headless UI primitives (Tabs, Menu, Progress, Tooltip, Collapsible, ScrollArea)
- **Oxlint** with type-aware rules via `oxlint-tsgolint` (migrated from ESLint's `strictTypeChecked` + `stylisticTypeChecked`, react, react-hooks including React Compiler rules, jsx-a11y, and Next.js rules)
- **Prettier** (4-space indent, single quotes, semicolons, tailwind plugin)

## Architecture

**Single-page SPA** — one route (`/`) plus a `not-found.tsx`. No API routes or server actions.

**Config-driven content** — all portfolio data (bio, work history, skills, tab definitions) lives in `src/config/`. Components render from config; content is never hardcoded in components.

**Server components by default** — `'use client'` is used only in components that need interactivity (tab container, clock, start menu). Tab content (About, Experience, Skills) are server components passed into the client boundary via composition.

**Tab system** — each tab is its own static route (`/`, `/experience`, `/skills`, `/blog`) under the `(frontend)/(home)` route group. Its layout renders `WelcomeView` once, so all four panels stay mounted across tab changes. A single optional catch-all page (`[[...tab]]`) generates the four static paths from `TABS` and renders nothing. `TABS` in `src/config/tabs.ts` holds each tab's `href`, and `TabContentContainer` picks the active tab from `usePathname()`. Old `/?tab=` links redirect via `next.config.ts`.

**Win95 design system** — custom border utilities (`win95-border-raised`, `win95-border-sunken`, etc.) are defined as Tailwind `@layer components` in `globals.css` using `box-shadow` compositions. Theme colors (windows-gray, windows-blue, windows-bg), a custom `xs: 380px` breakpoint, and shared spacing tokens (taskbar-height) are in the `@theme` block.

**Utility:** `cn()` in `src/utils.ts` — standard `clsx` + `tailwind-merge` wrapper for conditional classes.

## Key Patterns

- Types derived from runtime values (`TabKey` from `TABS`) — avoid parallel type definitions
- `as const satisfies` on config arrays for inference + type safety
- React Compiler is enabled — manual `useMemo`/`useCallback` is rarely needed
- `useSyncExternalStore` for the Clock (not useState + useEffect)
- Named constants for all magic numbers and repeated strings
- Separate `import type` statements on their own line
- `next/font/local` for MS Sans Serif with CSS variable `--font-ms-sans-serif`
