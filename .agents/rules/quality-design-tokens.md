---
title: Semantic Design Tokens
impact: HIGH
impactDescription: Keeps the published UI coherent across consumers
tags: quality, design-tokens, tailwind, styling
---

## Semantic Design Tokens

**Impact: HIGH**

Tokens live in `packages/react/src/styles/` (`global.css`, `duration.css`,
`easing.css`, `animations.css`, `utilities.css`). Prefer semantic spacing and
color names over raw Tailwind / shadcn aliases.

### Spacing

| Class                       | ~Size | Use for                       |
| --------------------------- | ----- | ----------------------------- |
| `bff` / `p-bff` / `gap-bff` | 4px   | Tight gaps, xs padding        |
| `best-friends`              | 8px   | sm gaps/padding, icon spacing |
| `friends`                   | 16px  | default gaps/padding          |
| `casual`                    | 24px  | section spacing               |
| `acquaintances`             | 64px  | large layout gaps             |

**Incorrect:**

```tsx
'gap-2 px-2.5 py-2 mt-0.5'
```

**Correct:**

```tsx
'gap-best-friends px-best-friends py-best-friends mt-bff'
```

### Colors

| Avoid                   | Use                               |
| ----------------------- | --------------------------------- |
| `bg-card`               | `bg-background-surface`           |
| `bg-muted`              | `bg-background-muted`             |
| `text-muted-foreground` | `text-foreground-muted`           |
| `border` (alone)        | `border-border`                   |
| `bg-destructive/10`     | `bg-destructive-background-muted` |

### Radius & motion

- Radius: `rounded-compact` · `rounded-base` · `rounded-container` ·
  `rounded-page`
- Focus:
  `outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]`
- Duration: `duration-fast-min`, `duration-fast`, … · Easing: `ease-standard`

New animation utilities → `animations.css`. Layout/misc → `utilities.css`.
Import partials from `global.css`; don't dump large blocks into `global.css`.

Reference: `packages/react/src/styles/tokens.css`, `AGENTS.md`
