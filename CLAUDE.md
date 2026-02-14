# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Windows 95 themed personal portfolio website. Single-page Next.js app deployed on Vercel at jordanboesch.com.

## Commands

```bash
pnpm dev          # Dev server (prints local network IP)
pnpm build        # Production build
pnpm lint         # ESLint (flat config, strict TS)
pnpm lint:fix     # ESLint autofix
pnpm format       # Prettier check
pnpm format:fix   # Prettier write
pnpm typecheck    # tsc --noEmit
pnpm precommit    # lint + format + typecheck
```

No test framework is configured.

## Tech Stack

- **Next.js 16** (App Router, React Compiler enabled) with **React 19**
- **TypeScript 5.9** (strict mode, path alias `@/*` → `./src/*`)
- **Tailwind CSS v4** (CSS-first config in `globals.css` `@theme` block, no JS config)
- **Jotai** for state (2 atoms: `tabSelectedAtom`, `showNavMenuAtom`)
- **@base-ui/react** for headless UI primitives (Tabs)
- **ESLint 9** flat config with `strictTypeChecked` + `stylisticTypeChecked`
- **Prettier** (4-space indent, single quotes, semicolons, tailwind plugin)

## Architecture

**Single-page SPA** — one route (`/`) plus a `not-found.tsx`. No API routes or server actions.

**Config-driven content** — all portfolio data (bio, work history, skills, tab definitions) lives in `src/config/`. Components render from config; content is never hardcoded in components.

**Server components by default** — `'use client'` is used only in components that need interactivity (tab container, clock, nav menu, buttons with handlers).

**Tab system** — `TAB_CONFIG` in `src/config/main.ts` maps tab keys to titles, labels, and component references using `as const satisfies`. The `TabKey` type in `src/types/application.types.ts` is derived from this config at the type level.

**Win95 design system** — custom border utilities (`win95-border-raised`, `win95-border-sunken`, etc.) are defined as Tailwind `@layer components` in `globals.css` using `box-shadow` compositions. Theme colors (windows-gray, windows-blue, windows-bg) and a custom `xs: 380px` breakpoint are in the `@theme` block.

**Utility:** `cn()` in `src/utils.ts` — standard `clsx` + `tailwind-merge` wrapper for conditional classes.

## Key Patterns

- Types derived from runtime values (`TabKey` from `TAB_CONFIG`) — avoid parallel type definitions
- `as const satisfies` on config arrays for inference + type safety
- React Compiler is enabled — manual `useMemo`/`useCallback` is rarely needed
- `useSyncExternalStore` for the Clock (not useState + useEffect)
- Named constants for all magic numbers and repeated strings
- Separate `import type` statements on their own line
