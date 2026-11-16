# ANVAYA — Agent Guide

Multi-tenant School Management ERP. pnpm workspace orchestrated with Turborepo.
A behaviour-focused companion to the human `README.md`.

## Scope and precedence

- Prefer the most specific `AGENTS.md` for the directory you are changing.
  Nested files under `apps/*` and `packages/*` override this root file.
- Do not inspect or modify `docs/` unless the task explicitly concerns documentation.
- On-demand workflows live in `.agents/skills/`. Load one only when the task matches
  its description; do not read them speculatively.

## Monorepo boundaries

- `apps/*` contains deployable applications only. `packages/*` contains shared
  libraries only. A package must never depend on an app, and packages must never
  be nested inside other packages.
- Never hand-edit a version range in a workspace `package.json`; use `catalog:`.
- `pnpm-lock.yaml` is committed. Do not delete it, regenerate it casually, or add
  another package manager's lockfile.
- Never commit real environment values. Only `.env.example` templates are tracked.

## Engineering principles (enforced, not aspirational)

- **Isolation over convenience.** Do not import across app boundaries, reach into
  another package's internals, or add framework-specific code to a shared package.
  If a shared package needs Next.js, Express, or a database client, the abstraction
  is in the wrong layer.
- **Single responsibility per module.** One exported concept per file where practical.
  Prefer composition over inheritance. Do not create a "utils" dumping ground.
- **DRY at the third occurrence, not the second.** Do not pre-abstract on speculation.
  When duplication appears three times, extract it into a package with a clear owner.
- **Agnostic by default.** New code must not couple to a vendor, cloud, or framework
  unless the package's purpose is that integration. Keep adapters at the edges.
- **Enterprise-grade means operable.** Every new surface needs validation at the
  boundary, explicit error handling, and no `any` / non-null assertions to silence
  the type checker.
- **Reversibility.** Prefer additive, backward-compatible changes. Flag any change
  that requires a coordinated deploy or a data migration before making it.

## References and standards

- Resolve behaviour from the **official documentation for the exact version pinned
  in `package.json`**, not from blog posts, Stack Overflow, or memory. If the docs
  and a tutorial disagree, the docs win.
- If the installed version's documentation is unavailable, say so explicitly rather
  than guessing an API surface.
- Follow the repository's existing conventions before introducing a new pattern.
  A new pattern requires a stated reason in the PR description.

## Verification strategy

- Prefer the narrowest command for the package you changed:
  `pnpm --filter <workspace> <script>`.
- Run repo-wide `pnpm build`, `pnpm test`, or `pnpm lint` only when a change crosses
  package boundaries or touches shared build tooling. A full monorepo build is a
  last resort, not the default verification path.
- Before finishing any change, run the targeted typecheck and test for the affected
  workspace. If you cannot, say so explicitly.

## Documentation sync

- When you change behaviour, update the relevant requirement or rule status in
  `docs/` in the same change. Stale docs poison agent context: the agent trusts
  what it reads.

## Commit and PR conventions

- Use Conventional Commits: `fix`, `feat`, `chore`, `ci`, `docs`, `refactor`,
  `perf`, `test`, `style`.
- PR titles follow the same convention. Keep the subject imperative and capitalised.
- Do not bypass Husky hooks or `lint-staged`. If a hook fails, fix the cause.

## Turborepo-managed block

Turborepo may maintain a uniquely marked block in this file. Do not edit or remove
that block.

<!-- BEGIN:turborepo-agent-rules -->

## This is NOT the Turborepo you know

Turborepo configuration, task behavior, and CLI commands can vary between installed versions and may differ from your training data. Resolve the `turbo` package from this file's directory or relevant workspace; in monorepos, it may not be visible from the repository root. For example, run `node -p "require.resolve('turbo/package.json')"` from a workspace that depends on `turbo`.

Read `docs/README.md` inside that installed package first, then read the relevant pages from its `docs/` directory before changing Turborepo configuration or commands. Heed deprecation notices. These bundled docs match the installed package version and are available without network access.

This block is written and re-added by `turbo` before repository-scoped commands when an AI agent is detected. In the Turborepo source repository, its template is defined in `crates/turborepo-cli/src/cli/agent_guidance.rs`. Removing the managed block while updates are enabled means a later qualifying invocation will add it again. Set `"agentGuidance": true` in the root `turbo.json` or `turbo.jsonc` to opt in; this does not remove an existing block. Keep the block committed with your work to avoid an uncommitted change on the next agent invocation.

<!-- END:turborepo-agent-rules -->
