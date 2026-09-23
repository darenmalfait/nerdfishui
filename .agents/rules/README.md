# Nerdfish UI Engineering Rules

Repo-specific rules for this design-system monorepo. Shared guidelines live in
`.agents/skills/` (installed via
`npx skills add darenmalfait/nerdfish-agent-skills`).

## What's here vs skills

| Topic                       | Location                                    |
| --------------------------- | ------------------------------------------- |
| Package boundaries          | `architecture-package-boundaries.md` (here) |
| Subpath imports             | `quality-avoid-barrel-imports.md` (here)    |
| Semantic tokens             | `quality-design-tokens.md` (here)           |
| Naming (`@nerdfish/config`) | `quality-naming-conventions.md` (here)      |
| CI Quality Gate triage      | `ci-check-failure.md` (here)                |
| Comments / simplicity / fx  | skill: `nerdfish-code-quality`              |
| Git / PR discipline         | skill: `nerdfish-pr-discipline`             |
| Composition / compound APIs | skill: `nerdfish-composition-patterns`      |
| React performance           | skill: `nerdfish-react-best-practices`      |
| Web UI guidelines           | skill: `web-design-guidelines`              |

## Structure

| Prefix          | Section      | Impact   |
| --------------- | ------------ | -------- |
| `architecture-` | Architecture | CRITICAL |
| `quality-`      | Code Quality | CRITICAL |
| `ci-`           | CI/CD        | HIGH     |

## Files

- `_sections.md` — section order / impact
- `_template.md` — new rule template
- `{section}-{rule-name}.md` — individual rules

## Usage

`.cursor/rules` and `.claude/rules` symlink here. Skills are under
`.agents/skills` (also symlinked from `.cursor/skills` / `.claude/skills`).

Canonical overview: [`AGENTS.md`](../../AGENTS.md).
