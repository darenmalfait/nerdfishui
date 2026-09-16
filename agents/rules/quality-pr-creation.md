---
title: PR Creation Best Practices
impact: HIGH
impactDescription: PRs that don't follow guidelines slow down review cycles
tags: pull-request, code-review, workflow
---

# PR Creation Best Practices

**Impact: HIGH**

Prefer small, draft PRs. Do **not** push branches or open PRs unless the user
explicitly asks — see `git-pr-discipline.md`.

## Do Not Push or Open PRs Automatically

Local work stops at branch + commit (when commit was requested). Never run as a
follow-up unless asked:

- `git push`
- `gh pr create`

When the user asks to put work on a branch: create/checkout, implement, commit
locally if requested, then stop. Tell them the branch name and that they can ask
to push or open a PR.

## Draft Mode

Create pull requests in **draft** mode by default. A human marks ready for
review.

## Split by layer (this repo)

**Incorrect:** one PR that adds a component + tokens + docs + changeset +
unrelated utils refactor

**Correct:**

1. `feat(react): add widget primitive`
2. `docs(widget): MDX page and examples`
3. `chore: changeset for @nerdfish/react`

## PR Title

- Conventional Commits: `feat:`, `fix:`, `refactor:`, `docs:`, `chore:`
- Specific: `feat(button): add xl icon size`
- Not generic: `fix: button bug`

## Size Limits

- Under **500** lines / **10** code files (docs/lockfiles/generated excluded)
- Single responsibility per PR

## Before Pushing (when the user asks to push)

1. `pnpm build:packages` (needed before lint/typecheck resolve workspace pkgs)
2. `pnpm checks:fix` (or format:fix + lint:fix + typecheck)
3. Confirm new exports / docs nav / changeset if publishing surface changed

Reference: `AGENTS.md`, `agents/rules/git-pr-discipline.md`,
`agents/rules/ci-check-failure.md`
