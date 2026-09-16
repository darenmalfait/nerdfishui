# Sections

This file defines all sections, their ordering, impact levels, and descriptions.
The section ID (in parentheses) is the filename prefix used to group rules.

---

## 1. Architecture (architecture)

**Impact:** CRITICAL

**Description:** pnpm/Turbo monorepo boundaries — `packages/react`
(`@nerdfish/react`), `packages/utils` (`@nerdfish/utils`), `apps/docs` (Blume
MDX docs). Component source lives under `packages/react/src/components/{name}/`;
package exports are subpaths, not a root barrel. No app backend, CMS, or
database in this repo.

## 2. Code Quality (quality)

**Impact:** CRITICAL

**Description:** Clarity over cleverness, naming conventions (`@nerdfish/config`
ESLint), comment discipline, PR size, semantic design tokens, and review bar for
agents.

## 3. Data Layer (data)

**Impact:** HIGH

**Description:** Unused here. This design-system repo has no Prisma, content-
collections, repositories, or DTOs. Do not invent a data layer.

## 4. API Design (api)

**Impact:** HIGH

**Description:** Unused here. No tRPC, REST controllers, next-safe-action, or
server-action mutations. Docs may use Zod + react-hook-form for examples only.

## 5. Performance (performance)

**Impact:** HIGH

**Description:** Tree-shaking via subpath imports, minimal `'use client'`, and
keeping the published `@nerdfish/react` surface lean. Prefer the
`vercel-react-best-practices` skill for deep React/Next guidance.

## 6. Testing (testing)

**Impact:** MEDIUM-HIGH

**Description:** No Playwright / Vitest / Jest runner in this repo today. ESLint
still loads `@nerdfish/config` testing/BDD convention packs. Do not add a test
stack unless asked.

## 7. Design Patterns (patterns)

**Impact:** MEDIUM

**Description:** Compose from existing primitives (`button`, `dialog`, `item`,
`field`, …). Early returns, `cva` + `cn`, `data-slot`, Base UI `useRender`, and
Blume docs MDX (`content/`) + examples (`examples/`).

## 8. Team Culture (culture)

**Impact:** MEDIUM

**Description:** Conventional commits (commitlint + husky), Changesets for
publish, small diffs, ask before new deps or package surface changes.

## 9. CI/CD (ci)

**Impact:** HIGH

**Description:** GitHub Actions Quality Gate (format, lint, typecheck). Lint and
typecheck need `pnpm build:packages` first. Release via Changesets on `main`.
Never push/open PRs unless the user asks.

## 10. Reference (reference)

**Impact:** LOW

**Description:** Informational lookups and local setup. Prefer `AGENTS.md`.
