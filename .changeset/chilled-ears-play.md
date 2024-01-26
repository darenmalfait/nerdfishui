---
"@nerdfish/ui": patch
---

Alert can now be passed children.

Removed `description` prop.

```tsx
<Alert variant="outline" description="description" />
```

Now becomes:

```tsx
<Alert variant="outline">Alert content</Alert>
```
