# nerdfishui Agent Documentation Index

- **[../AGENTS.md](../AGENTS.md)** — Main guide (structure, stack, commands,
  examples)
- **[rules/README.md](rules/README.md)** — How rules are structured and added
- **[rules/\_sections.md](rules/_sections.md)** — Section order and impact
- **[skills/web-design-guidelines/SKILL.md](skills/web-design-guidelines/SKILL.md)**
  — Web Interface Guidelines UI review
- **[skills/vercel-react-best-practices/SKILL.md](skills/vercel-react-best-practices/SKILL.md)**
  — React/Next performance patterns

## Rules Index

### Architecture

- [architecture-package-boundaries](rules/architecture-package-boundaries.md) —
  `packages/react`, `packages/utils`, `apps/docs` boundaries

### Code Quality

- [quality-avoid-barrel-imports](rules/quality-avoid-barrel-imports.md) —
  Subpath imports (`@nerdfish/react/button`, `@nerdfish/utils/class`)
- [quality-simplicity](rules/quality-simplicity.md) — Prefer existing patterns
- [quality-thorough-code-review](rules/quality-thorough-code-review.md) — Review
  bar
- [quality-code-comments](rules/quality-code-comments.md) — Why > what
- [quality-naming-conventions](rules/quality-naming-conventions.md) — `is*` /
  `handle*` / `to*` / `by*` / `use*`
- [quality-no-use-effect](rules/quality-no-use-effect.md) — Prefer
  `useMountEffect`
- [quality-design-tokens](rules/quality-design-tokens.md) — Semantic spacing /
  color / radius
- [quality-pr-creation](rules/quality-pr-creation.md) — Draft, small PRs; never
  push/open unless asked

### Data Layer

_(none — no CMS/ORM in this repo)_

### API Design

_(none — library + docs only)_

### Performance

_(see `skills/vercel-react-best-practices`)_

### Testing

_(none — no test runner in this repo)_

### Design Patterns

- [patterns-component-composition](rules/patterns-component-composition.md) —
  Early returns + composition
- [patterns-react-components](rules/patterns-react-components.md) — Component /
  docs / export checklist

### Team Culture

_(covered by commitlint + PR rules)_

### CI/CD

- [git-pr-discipline](rules/git-pr-discipline.md) — Never push/PR/commit unless
  asked
- [ci-check-failure](rules/ci-check-failure.md) — Quality Gate triage (format /
  lint / typecheck)

### Reference

Prefer [AGENTS.md](../AGENTS.md).
