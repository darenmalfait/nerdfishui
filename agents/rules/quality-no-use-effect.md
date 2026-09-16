---
title: No Bare useEffect
impact: HIGH
impactDescription: Enforced by ESLint @nerdfish/conventions/no-use-effect
tags: quality, react, conventions, eslint
---

## No Bare useEffect

**Impact: HIGH**

`@nerdfish/conventions/no-use-effect` bans direct `useEffect`. Prefer derived
values and event handlers. Rare mount-only side effects go through
`useMountEffect` from `@nerdfish/react/hooks/use-mount-effect`.

**Incorrect:**

```typescript
useEffect(() => {
	setDerived(compute(props.value))
}, [props.value])

useEffect(() => {
	const media = window.matchMedia('(max-width: 768px)')
	const onChange = () => setIsMobile(media.matches)
	media.addEventListener('change', onChange)
	return () => media.removeEventListener('change', onChange)
}, [])
```

**Correct:**

```typescript
const derived = compute(props.value)

import { useMountEffect } from '@nerdfish/react/hooks/use-mount-effect'

useMountEffect(() => {
	const media = window.matchMedia('(max-width: 768px)')
	const onChange = () => setIsMobile(media.matches)
	media.addEventListener('change', onChange)
	return () => media.removeEventListener('change', onChange)
})
```

Empty-deps `useEffect(..., [])` should become `useMountEffect` so mount-only
intent is searchable. Inside the library hook implementation itself, `useEffect`
is allowed (see `use-mount-effect.ts`).

Reference: `packages/react/src/hooks/use-mount-effect.ts`,
`@nerdfish/config/eslint/conventions`
