---
'@nerdfish/ui': minor
---

New `Indicator` component added. Indicator can add a visual status to a component.

```tsx
<Indicator>
  <Indicator.Item>
    <div className="size-4 rounded-full bg-pink-500" />
  </Indicator.Item>
  <div className="grid size-32 place-items-center bg-muted">content</div>
</Indicator>
```
