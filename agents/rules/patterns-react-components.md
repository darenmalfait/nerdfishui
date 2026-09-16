---
title: React Component Checklist
impact: CRITICAL
impactDescription: New primitives must match library structure end-to-end
tags: patterns, react, components, docs
---

## React Component Checklist

**Impact: CRITICAL**

Reference implementations: `item`, `attachment`, `empty`, `button`.

### File structure

```
packages/react/src/components/{name}/{name}.tsx
apps/docs/src/app/(app)/docs/components/{name}/
  page.mdx
  example/default.tsx
  example/index.ts
```

### Component code

- Import `cn`, `cva`, `VariantProps` from `@nerdfish/utils/class`
- Prefer `@base-ui/react` (`useRender`, `mergeProps`) for polymorphic parts —
  see `button`, `breadcrumb`
- Relative imports for siblings (`../button/button`), never `@/`
- Named `*Props` per part; `function` declarations; named exports
- `data-slot="{name}"` / `data-slot="{name}-{part}"`; root often `group/{name}`
- Variants via `cva` + `defaultVariants`; compose with
  `cn(variants({ ... }), className)`
- `'use client'` only when the file needs client APIs

**Incorrect:**

```tsx
export const Widget = ({ className, ...props }) => (
	<div className={`p-2 ${className}`} {...props} />
)
```

**Correct:**

```tsx
import { cn, cva, type VariantProps } from '@nerdfish/utils/class'
import { type ComponentProps } from 'react'

export const widgetVariants = cva('rounded-base p-friends', {
	variants: {
		variant: {
			default: 'bg-background-muted',
			outline: 'border-border border',
		},
	},
	defaultVariants: { variant: 'default' },
})

export type WidgetProps = ComponentProps<'div'> &
	VariantProps<typeof widgetVariants>

export function Widget({ className, variant, ...props }: WidgetProps) {
	return (
		<div
			data-slot="widget"
			className={cn(widgetVariants({ variant }), className)}
			{...props}
		/>
	)
}
```

### Package export

Add alphabetically to `packages/react/package.json` `exports`:

```json
"./{name}": "./src/components/{name}/{name}.tsx"
```

Then `pnpm build` / `pnpm build:packages` so docs resolve
`@nerdfish/react/{name}`.

### Docs

1. `page.mdx` — header + `ComponentExample` sections
2. `example/*.tsx` — `'use client'`, import from `@nerdfish/react/{name}`
3. `example/index.ts` — re-export
4. Register in `apps/docs/src/app/(app)/docs/components/component-examples.tsx`
5. Link in `apps/docs/src/nav.ts` (`status: 'new'` for new components)

Reference: `packages/react/src/components/button/button.tsx`, `AGENTS.md`
