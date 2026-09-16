---
title: Prioritize Clarity Over Cleverness
impact: HIGH
impactDescription: Reduces cognitive load and improves maintainability
tags: quality, simplicity, readability
---

## Prioritize Clarity Over Cleverness

**Impact: HIGH**

Prefer code that is easy to read and match nearby patterns. Speculative
abstractions slow this library down.

**Questions to ask yourself:**

- Am I solving the problem at hand, or inventing for a hypothetical consumer?
- Does `packages/react` already have a primitive I should compose (`item`,
  `field`, `button`, `empty`)?
- Have I considered at least one simpler alternative that already exists here?

**Incorrect (clever but hard to understand):**

```typescript
const byVariant = variants.reduce(
	(acc, v) => ({ ...acc, [v]: (acc[v] ?? []).concat(v) }),
	{} as Record<string, string[]>,
)
```

**Correct (clear and readable):**

```typescript
const byVariant: Record<string, string[]> = {}

for (const variant of variants) {
	if (!byVariant[variant]) {
		byVariant[variant] = []
	}
	byVariant[variant].push(variant)
}
```

**Important:** Simple does not mean incomplete. A new component still gets `cva`
variants, `data-slot`, docs MDX, and a package export — that's the existing
pattern, not gold-plating.

Reference: `AGENTS.md`, `patterns-react-components.md`
