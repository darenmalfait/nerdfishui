---
'@nerdfish/ui': major
'@nerdfish/theme': patch
---

Replaced `nerdfish` variants with `accent`, using the new `accent` color

## What does this mean?

Components that have `nerdfish` as a variant, now have `accent` as a variant.

For example

```
<Button variant='nerdfish'>This is a button</Button> // old
<Button variant='accent'>This is a button</Button> // new
```
