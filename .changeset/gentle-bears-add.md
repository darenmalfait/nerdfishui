---
"@nerdfish/ui": minor
---

`Alert` now fully uses compound component structure.

`title` and `description` props are now deprecated. Use `Alert.Title` and `Alert.Description` components instead.

```tsx
<Alert title="example" className="w-full">
  <Alert.Title>Example alert</Alert.Title>
  <Alert.Description>Example description</Alert.Description>
</Alert>
```
