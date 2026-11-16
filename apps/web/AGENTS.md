<!-- While a root AGENTS.md is essential, best practices for monorepos recommend nested AGENTS.md files per sub-repository or package.
The root file provides global defaults (like your monorepo boundaries and commit conventions), while the nested file provides domain-specific rules for that workspace. This helps AI agents understand the specific context of the Next.js app without polluting the root context. -->

# apps/web — Agent Guide

Next.js App Router frontend for ANVAYA.

- Server Components by default. Add `"use client"` only when browser APIs or state are genuinely required.
- All server-side data fetching goes through the API package or typed API client. Do not query databases directly from the web app.
- `NEXT_PUBLIC_*` variables are embedded in the client bundle. Never place secrets behind a `NEXT_PUBLIC_` prefix.
- Use the shared UI package for primitives.
- Run `pnpm --filter @anvaya/web typecheck` before finishing a change.
