---
title: Code Comment Guidelines
impact: MEDIUM
impactDescription:
  Excessive comments add noise; missing comments hurt maintainability
tags: comments, documentation, readability
---

# Code Comment Guidelines

## General Principle

Keep comments limited. Explain **why**, not **what** — names and types should
carry the what.

## When to Comment

- Non-obvious design-token or a11y constraints
- Workarounds (Base UI / Radix quirks, Tailwind edge cases)
- Intentional empty-deps mount behavior (prefer `useMountEffect`)
- Deprecation context (`utils/deprecate.tsx`)

If none apply, skip the comment.

## When NOT to Comment

```typescript
// ❌ Obvious
// Render the button
return <Button {...props} />

// ❌ Restating the code
// Merge class names
className={cn(buttonVariants({ variant }), className)}
```

## Good Examples

```typescript
// ✅ Why, not what — from use-mount-effect.ts
// Mount-only: we intentionally ignore changes to the callback identity.
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(effect, [])

// ✅ Documents a consumer-facing constraint
// Portalled overlays need an isolate root on the app layout body
```

Reference: `packages/react/src/hooks/use-mount-effect.ts`, `AGENTS.md`
