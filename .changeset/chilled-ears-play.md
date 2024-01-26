---
'@nerdfish/ui': patch
---

`Alert`: `description` prop is now deprecated in favor of `children`. 

This allows more flexibility in the content of the `Alert`. The `description` prop
will be removed in a future release.

```tsx
<Alert variant="danger" description="Alert content" />
```

Now becomes:

```tsx
<Alert variant="danger">Alert content</Alert>
```
