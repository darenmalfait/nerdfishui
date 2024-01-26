---
'@nerdfish/ui': patch
---

`Alert` `description` prop is now deprecated in favor of `children`. This is to
allow for more flexibility in the content of the `Alert`. The `description` prop
will be removed in a future release.

```tsx
<Alert variant="outline" description="Alert content" />
```

Now becomes:

```tsx
<Alert variant="outline">Alert content</Alert>
```
