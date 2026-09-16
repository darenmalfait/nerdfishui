---
title: Component Composition
impact: HIGH
impactDescription:
  Readable components, predictable Hooks, stronger TypeScript narrowing
tags: patterns, react, composition, early-returns
---

## Component Composition

**Impact: HIGH**

Use **composition + early returns** instead of nesting conditional JSX. Compose
existing `@nerdfish/react` primitives before inventing new ones.

### Mutually exclusive states

**Incorrect:**

```tsx
export function AttachmentList({ items, isLoading }: Props) {
	return (
		<div>
			{isLoading ? (
				<Skeleton />
			) : items.length === 0 ? (
				<Empty>
					<EmptyTitle>No files</EmptyTitle>
				</Empty>
			) : (
				items.map((item) => <Attachment key={item.id} {...item} />)
			)}
		</div>
	)
}
```

**Correct:**

```tsx
export function AttachmentList({ items, isLoading }: Props) {
	if (isLoading) {
		return <Skeleton className="h-16 w-full" />
	}

	if (items.length === 0) {
		return (
			<Empty>
				<EmptyHeader>
					<EmptyTitle>No files</EmptyTitle>
					<EmptyDescription>Drop a file to get started.</EmptyDescription>
				</EmptyHeader>
			</Empty>
		)
	}

	return (
		<ul className="gap-best-friends flex flex-col">
			{items.map((item) => (
				<Attachment key={item.id} {...item} />
			))}
		</ul>
	)
}
```

### Optional sections — child with early return

Prefer a child that returns `null` over parent ternaries, especially when the
child needs Hooks after the guard.

### Hooks

Run Hooks at the top level, then early-return. Never call Hooks inside
conditions.

Reference: `AGENTS.md`, `packages/react/src/components/empty/empty.tsx`
