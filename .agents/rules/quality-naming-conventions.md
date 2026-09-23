---
title: Naming Conventions (@nerdfish/config)
impact: HIGH
impactDescription: Enforced by ESLint @nerdfish/conventions (warn)
tags: quality, naming, conventions, eslint
---

## Naming Conventions (@nerdfish/config)

**Impact: HIGH**

Root `eslint.config.js` spreads `@nerdfish/config/eslint/conventions`. Follow
these prefixes.

### Booleans — `is` / `has` / `can` / `should`

**Incorrect:**

```typescript
const open = props.open === true
const mobile = width < 768
```

**Correct:**

```typescript
const isOpen = props.open === true
const isMobile = width < 768
const canClose = isOpen && !isLoading
```

### Event handlers — `handle*`

**Incorrect:**

```typescript
function toggleOpen() { /* ... */ }
<button onClick={toggleOpen} />
```

**Correct:**

```typescript
function handleToggleOpen() { /* ... */ }
<button onClick={handleToggleOpen} />
<button onClick={onClick} /> // forwarded prop — OK
```

### `.map()` transformers — `to*`

**Incorrect:**

```typescript
items.map(getKey)
```

**Correct:**

```typescript
items.map(toItemKey)
items.map((item) => item.id) // inline — OK
```

### `.sort()` comparators — `by*`

**Incorrect:**

```typescript
sizes.sort(compareSize)
```

**Correct:**

```typescript
sizes.sort(bySize)
```

### `use*` prefix — must call a hook

**Incorrect:**

```typescript
function useButtonLabel(props: ButtonProps) {
	return props.children
}
```

**Correct:**

```typescript
function getButtonLabel(props: ButtonProps) {
	return props.children
}

function useIsMobile() {
	return useSyncExternalStore(/* ... */) // calls a hook — OK
}
```

Reference: `@nerdfish/config/eslint/conventions`, `eslint.config.js`
