---
description: Do not push branches or open PRs unless the user explicitly asks
alwaysApply: true
---

# Git & PR discipline

**Impact: HIGH**

## Rules

1. **Never push** (`git push`, etc.) unless the user explicitly asks.
2. **Never open or submit PRs** (`gh pr create`, etc.) unless the user
   explicitly asks.
3. **Never commit** unless the user explicitly asks.

## What "put it on a branch" means

When the user asks for a new branch:

- Create/checkout the branch
- Implement and commit locally **only if they asked to commit**
- Stop there

Do **not** push or open a PR as a follow-up unless they ask.

## Allowed without asking

- Local git: `status`, `diff`, `log`, `branch`
- Explain what branch/PR commands _would_ be run, and wait for approval

## Examples

**User:** "implement X on a new branch"

- Create branch, implement
- Do **not** commit/push/PR unless asked

**User:** "push and open a PR"

- Then push and create a **draft** PR
