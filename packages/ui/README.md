# @anvaya/ui

Shared UI components for ANVAYA, built with shadcn/ui and Base UI.

## Component Model

The package follows an Atomic Design-inspired approach:

- **Atoms:** shadcn primitives live in `src/components/shadcn-ui/`.
- **Molecules:** reusable combinations of primitives belong in
  `src/components/molecules/`.

Keep school-domain workflows and page-specific composition in the consuming app.

## Adding Components

Run the following command from the root of the repository:

```bash
pnpm dlx shadcn@latest add <component> -c apps/web
```

The `ui` aliases in `apps/web/components.json` and `packages/ui/components.json`
route shared primitives into `packages/ui/src/components/shadcn-ui/`. App-specific
components and blocks remain in `apps/web`. The package's wildcard export exposes
shared components without adding an export entry for each one:

```tsx
import { Button } from "@anvaya/ui/components/shadcn-ui/button";

export function Example() {
  return <Button>Save</Button>;
}
```

The web app imports the shared stylesheet from `@anvaya/ui/globals.css`. Import it
once in an app's global CSS rather than importing it from individual components.

## Development

This source package has no separate build step. The consuming Next.js app compiles
the TypeScript/React source directly.

```bash
pnpm --filter @anvaya/ui typecheck
```
