# Sections

Repo-specific rules that aren't covered by installed `.agents/skills`
(`npx skills add darenmalfait/nerdfish-agent-skills`). Section IDs match
filename prefixes.

---

## 1. Architecture (architecture)

**Impact:** CRITICAL

**Description:** pnpm/Turbo monorepo boundaries — `packages/react`,
`packages/utils`, `apps/docs`. (General monorepo slicing lives in
`nerdfish-monorepo-architecture`.)

## 2. Code Quality (quality)

**Impact:** CRITICAL

**Description:** Design-system specifics — subpath imports, semantic tokens,
`@nerdfish/config` naming. (Simplicity / comments / `useEffect` / review live in
`nerdfish-code-quality`; PR size / draft PRs in `nerdfish-pr-discipline`.)

## 3. CI/CD (ci)

**Impact:** HIGH

**Description:** Quality Gate triage for this repo. (Never push/PR unless asked
lives in `nerdfish-pr-discipline`.)
