---
'@nerdfish/ui': minor
---

Added new `ToggleGroup` component

```tsx
import { ToggleGroup } from '@nerdfish/ui';
```

```tsx
<ToggleGroup type="multiple">
  <ToggleGroup.Item value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroup.Item>
  <ToggleGroup.Item value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroup.Item>
</ToggleGroup>
```
