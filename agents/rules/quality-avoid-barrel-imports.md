---
title: Avoid Barrel Imports
impact: MEDIUM
impactDescription: Improves tree-shaking and reduces bundle size
tags: imports, performance, bundling
---

## Avoid Barrel Imports

**Impact: MEDIUM**

`@nerdfish/react` ships **subpath exports only** for components and hooks.
Importing a package-root barrel is wrong and usually fails to resolve.

Prefer `@nerdfish/utils/class` for `cn` / `cva` (the root `@nerdfish/utils`
entry does not re-export `cn`).

**Incorrect:**

```typescript
import { Button } from '@nerdfish/react'
import { cn, cva } from '@nerdfish/utils'
```

**Correct:**

```typescript
import { Button } from '@nerdfish/react/button'
import { useMountEffect } from '@nerdfish/react/hooks/use-mount-effect'
import { cn, cva, type VariantProps } from '@nerdfish/utils/class'
```

**Inside `packages/react`:** use relative imports for sibling components
(`../button/button`), never invent a local `@/` alias.

Reference: `packages/react/package.json` `exports`, `AGENTS.md`
