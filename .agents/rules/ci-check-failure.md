---
title: CI Check Failure Handling
impact: HIGH
impactDescription: Misinterpreting CI failures wastes debugging time
tags: ci, debugging, workflow
---

# CI Check Failure Handling

## What to Focus On

Quality Gate: `.github/workflows/code-quality.yml`

Jobs:

1. **Format** — `pnpm format`
2. **Lint** — `pnpm build:packages` then `pnpm lint`
3. **TypeCheck** — `pnpm build:packages` then `pnpm typecheck`

Focus on failures related to your changes. Infra flakes (Actions cache, install)
can be re-run; do **not** ignore format/lint/typecheck.

## Common local mistakes

- Running lint/typecheck without `pnpm build:packages` first (workspace packages
  resolve from `dist`)
- Editing published source without updating `packages/react/package.json`
  `exports`
- Leaving Prettier drift (`pnpm format:fix`)

## No e2e / unit CI

This repo has **no** Playwright/Vitest/Jest jobs. Do not look for e2e skips or
`ready-for-e2e` labels.

## Before Blaming CI

```bash
pnpm build:packages
pnpm typecheck
pnpm lint
pnpm format
```

Even if errors appear outside files you touched, your export/API change may
break docs or the other package.

## Release CI

`.github/workflows/release.yml` on `main` runs Changesets publish. Don't treat
release job failures as Quality Gate issues — different workflow, needs
`NPM_TOKEN` / `PAT`.

Reference: `AGENTS.md` (Commands), `.github/workflows/code-quality.yml`
