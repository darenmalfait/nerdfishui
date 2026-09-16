---
title: Package Boundaries
impact: CRITICAL
impactDescription: Keeps publishable packages and docs app correctly separated
tags: architecture, monorepo, packages
---

## Package Boundaries

**Impact: CRITICAL**

| Path             | Package           | Role                                    |
| ---------------- | ----------------- | --------------------------------------- |
| `packages/react` | `@nerdfish/react` | Published components + styles           |
| `packages/utils` | `@nerdfish/utils` | Published helpers (`cn`, `cva`, …)      |
| `apps/docs`      | `docs` (private)  | Next.js MDX docs site                   |
| `tooling/`       | —                 | Shared GitHub Actions install composite |
| `scripts/`       | —                 | Rollup build used by packages           |

**Incorrect:**

- Putting consumer-app features (auth, i18n, CMS) into `@nerdfish/react`
- Importing from `apps/docs` inside `packages/*`
- Adding a root `@nerdfish/react` component barrel

**Correct:**

- New UI → `packages/react/src/components/{name}/` + subpath export
- Shared non-UI helpers → `packages/utils` subpath (or existing module)
- Live examples / MDX → `apps/docs`
- Version bumps via Changesets (`.changeset/`), not hand-edited publish

Workspace deps use `workspace:*` (e.g. `@nerdfish/utils` from react).

Reference: `pnpm-workspace.yaml`, `AGENTS.md`
