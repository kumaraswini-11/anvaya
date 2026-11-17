# @anvaya/web

Next.js App Router frontend for **ANVAYA**, the School Management ERP.

This application is part of the ANVAYA monorepo. It consumes shared configuration and UI packages from the workspace and is orchestrated by Turborepo.

## Commands

Run from the **repository root** using the pnpm filter:

```bash
# Development
pnpm --filter @anvaya/web dev

# Build
pnpm --filter @anvaya/web build

# Type checking and linting
pnpm --filter @anvaya/web typecheck
pnpm --filter @anvaya/web lint
```

The app starts on <http://localhost:3000> by default.

## Workspace Integration

**TypeScript config**: Extends `@anvaya/typescript-config/nextjs.json`.
**Linting and formatting**: Extends the root `biome.json` via a nested `biome.json`.
**Dependencies**: Shared versions are defined in `pnpm-workspace.yaml` at the repository root and referenced using the catalog: protocol.

## apps/web/src/app Structure

```text
apps/web/src/
├── app/
│   ├── (auth)/                 # Route Group (organizes routes without affecting URL)
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── dashboard/
│   │   ├── error.tsx           # Scoped error boundary
│   │   ├── loading.tsx         # Scoped loading skeleton
│   │   └── page.tsx
│   ├── error.tsx               # Root error boundary (Client Component)
│   ├── global-error.tsx        # Catches errors in the root layout
│   ├── layout.tsx              # Root layout (Server Component)
│   ├── loading.tsx             # Global loading skeleton
│   ├── not-found.tsx           # 404 UI
│   ├── page.tsx                # Home page
│   ├── robots.ts               # Generated robots.txt
│   └── sitemap.ts              # Generated sitemap.xml
├── components/                 # Colocated UI components
├── lib/                        # Colocated utility functions
└── styles/                     # Global styles (if not using Tailwind exclusively)
```

## Additional File Conventions to Keep in Mind

- `template.tsx`: If you need a layout that re-renders on navigation (unlike layout.tsx, which preserves state), use `template.tsx`. It wraps the child segment but is useful for enter/exit animations.
- `default.tsx`: Required only if you use Parallel Routes (@folder). It serves as a fallback when a parallel route cannot be matched.
- Backend APIs: All REST endpoints are handled exclusively by `@anvaya/api` (Express backend). Do not create backend API handlers inside Next.js.
