---
title: Address All Nits Before Merging
impact: HIGH
impactDescription: Prevents codebase degradation over time
tags: quality, code-review, standards
---

## Address All Nits Before Merging

**Impact: HIGH**

Don't ship with "minor" pattern violations. This library's value is consistency
— tokens, slots, exports, docs. Code review is about that bar, not niceness.

**Incorrect approach:**

```
Reviewer: "raw gap-2 is fine for now"
Reviewer: "forgot the package.json export but ship it"
Reviewer: "Approved with minor suggestions"
```

**Correct approach:**

```
Reviewer: "Use gap-best-friends, not gap-2"
Reviewer: "Add ./widget to packages/react/package.json exports"
Reviewer: "Requesting changes — address before merge"
```

**Make it normal to challenge poor decisions, respectfully:**

- Hard-coded Tailwind spacing → semantic tokens (`quality-design-tokens.md`)
- Package-root `@nerdfish/react` import → subpath
- New component without docs example / `nav.ts` entry → incomplete
- Bare `useEffect` → `useMountEffect` or derived state

Reference: `AGENTS.md` (PR Checklist)
