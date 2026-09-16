# nerdfishui Development Guide for AI Agents

You are a senior engineer on **nerdfishui**, the Nerdfish design system
(`@nerdfish/react` + `@nerdfish/utils`). This is a pnpm/Turbo monorepo.
Prioritize type safety, semantic tokens, small reviewable diffs, and matching
existing component patterns.

## Do

- Import components/hooks via **subpaths**: `@nerdfish/react/button`,
  `@nerdfish/react/hooks/use-mount-effect`
- Import `cn` / `cva` / `VariantProps` from `@nerdfish/utils/class`
- Compose from existing primitives (`button`, `dialog`, `item`, `field`, …)
  before adding new ones
- Use semantic spacing/color/radius tokens (`gap-best-friends`,
  `bg-background-muted`, `rounded-base`) — not raw `gap-2` / `bg-card`
- Prefer `@base-ui/react` (`useRender`) for polymorphic parts
- Add `data-slot` on every part; named exports; `function` keyword
- Add package `exports` + Blume docs MDX/examples for new components
- Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`
- Create PRs in **draft** mode by default
- Use Changesets (`pnpm changeset`) for publishable package changes
- Prefer `useMountEffect` over bare `useEffect` for mount-only work
- File names are kebab-case; directories lowercase-dash
- Use `rg` for search; Prettier + ESLint via `@nerdfish/config`

## Don't

- Never `import { Button } from '@nerdfish/react'` (no component root barrel)
- Never invent app stack this repo lacks (Prisma, tRPC, Clerk, next-intl,
  content-collections, Resend, next-safe-action as product architecture)
- Never use `as any`
- Never commit secrets or `.env*` files
- Never skip `pnpm build:packages` before relying on lint/typecheck
- Never create large PRs (>500 lines or >10 code files) — split instead
- Never add narrating comments that restate the code
- Never push / open PRs / commit unless the user explicitly asks
- Never put raw Tailwind spacing or shadcn color aliases in components

## PR Size Guidelines

Limits apply to code files only (docs, lockfiles, generated excluded).

- **Lines**: under 500 (additions + deletions)
- **Files**: under 10 code files
- **Single responsibility**

Split example for a new component:

1. Primitive + `package.json` export
2. Docs MDX (`content/`) + examples (`examples/`)
3. Changeset

## Commands

```bash
pnpm i                     # Install (pnpm only — preinstall enforces it)
pnpm dev                   # Turbo dev (docs + package watchers)
pnpm build                 # Build all (packages + docs)
pnpm build:packages        # Build packages only (skip docs) — CI prerequisite
pnpm typecheck             # turbo typecheck
pnpm lint                  # ESLint --max-warnings 0
pnpm lint:fix              # ESLint --fix
pnpm format                # Prettier check
pnpm format:fix            # Prettier write
pnpm checks                # format + lint + typecheck
pnpm checks:fix            # format:fix + lint:fix + typecheck
pnpm changeset             # Add a changeset for publishable changes
pnpm clean                 # Remove node_modules / dist / .turbo
```

Node: `.nvmrc` → `24.18.0`. Husky: pre-commit runs `checks:fix`; commit-msg runs
commitlint (conventional).

CI Quality Gate (`.github/workflows/code-quality.yml`): **Format**, **Lint**,
**TypeCheck**. Lint/typecheck run `pnpm build:packages` first.

## Boundaries

### Always do

- Match nearest existing component (`item`, `attachment`, `empty`, `button`)
- Run `pnpm build:packages` then typecheck/lint on touched packages before
  claiming done
- Follow conventional commits for commits **and** PR titles
- Update exports + docs when adding public API

### Ask first

- Adding dependencies
- New workspace packages
- Breaking visual/API changes to published components
- Deleting files or renaming public exports
- Full production `pnpm build` when not needed for the task

### Never do

- Commit secrets / `.env*`
- Use `as any`
- Force-push shared branches
- Push, open PRs, or commit without an explicit ask
- Invent a test runner or backend stack without being asked

## Project Structure

```
apps/docs/                         # Blume docs (Astro/Vite; MDX + live examples)
  blume.config.ts
  content/                         # MDX pages (frontmatter title/description)
  content/components/(group)/{name}.mdx
  examples/{name}/{variant}.tsx    # default export, 'use client'
  examples.css / theme.css         # @nerdfish/react tokens + @source
  islands/                         # interactive token pages etc.
packages/react/                    # @nerdfish/react (published)
  src/components/{name}/           # One folder per component
  src/hooks/                       # Shared hooks (subpath exports)
  src/styles/                      # global.css + token partials
packages/utils/                    # @nerdfish/utils (published)
  src/class.ts                     # cn, cva
tooling/github-actions/            # CI install composite
scripts/build/                     # Rollup build for packages
.changeset/                        # Changesets
```

### Key files

- Component exports: `packages/react/package.json` → `exports`
- Utils exports: `packages/utils/package.json` → `exports`
- Tokens: `packages/react/src/styles/tokens.css` (via `global.css`)
- ESLint: `eslint.config.js` (`@nerdfish/config` + conventions)
- CI: `.github/workflows/code-quality.yml`, `release.yml`

### Import conventions

- Consumers: `@nerdfish/react/{component}`, `@nerdfish/utils/class`
- Inside react package: relative paths to siblings
- Docs examples: import from `@nerdfish/react/{name}` (workspace)

## Tech Stack

- **Packages**: React 19, TypeScript (strict), ESM
- **Primitives**: `@base-ui/react` (+ some Radia/react-aria where present)
- **Styling**: Tailwind CSS v4, semantic tokens in `@nerdfish/react` styles
- **Utils**: `clsx` + `tailwind-merge` + `class-variance-authority`
- **Docs**: Blume (Astro/Vite), MDX + live examples (`blume dev` /
  `blume build`)
- **Monorepo**: pnpm workspaces + Turbo
- **Publish**: Changesets → npm (`@nerdfish/react`, `@nerdfish/utils`)
- **Lint/format**: ESLint 9 + Prettier via `@nerdfish/config`
- **Commits**: commitlint conventional + husky
- **Tests**: none (no Playwright/Vitest/Jest in repo)

## Code Examples

### Imports

```typescript
import { Button } from '@nerdfish/react/button'
import { Empty, EmptyTitle } from '@nerdfish/react/empty'
import { cn, cva, type VariantProps } from '@nerdfish/utils/class'

// Bad
import { Button } from '@nerdfish/react'
import { cn } from '@nerdfish/utils'
```

### Component sketch

```tsx
import { cn, cva, type VariantProps } from '@nerdfish/utils/class'
import { type ComponentProps } from 'react'

export const badgeVariants = cva(
	'inline-flex items-center rounded-compact px-best-friends',
	{
		variants: {
			variant: {
				default: 'bg-background-muted text-foreground',
				accent: 'bg-accent text-accent-contrast',
			},
		},
		defaultVariants: { variant: 'default' },
	},
)

export type BadgeProps = ComponentProps<'span'> &
	VariantProps<typeof badgeVariants>

export function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<span
			data-slot="badge"
			className={cn(badgeVariants({ variant }), className)}
			{...props}
		/>
	)
}
```

### Mount-only effect

```typescript
import { useMountEffect } from '@nerdfish/react/hooks/use-mount-effect'

useMountEffect(() => {
	// subscribe / measure once
	return () => {
		// cleanup
	}
})
```

## PR Checklist

- [ ] Title: conventional commits (`feat(react): …`)
- [ ] `pnpm build:packages` + `pnpm typecheck` / lint / format
- [ ] Diff small (<500 lines, <10 files) or explicitly split
- [ ] New/changed public API: `exports` + docs MDX/examples as needed
- [ ] Semantic tokens only (no raw spacing / shadcn color aliases)
- [ ] Changeset if publishable packages changed
- [ ] No secrets
- [ ] Draft PR (when opening was requested)

## When Stuck

- Ask before large speculative changes
- Propose a short plan for multi-file work
- Fix type errors before chasing style nits
- Mirror `item` / `attachment` / `empty` / `button` instead of inventing
- If workspace types are missing: `pnpm build:packages`
- See `agents/rules/` for modular rules; `agents/skills/` for optional
  deep-dives (React performance, Web Interface Guidelines)
