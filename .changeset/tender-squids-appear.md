---
'@nerdfish/ui': minor
---

`Drawer` now has directional support. 
The `direction` prop can be set to `top`, `right`, `bottom`, or `left`.

This also deprecates the `Sheet` which has the same functionality as `Drawer` but with a different name.
`Sheet` will be removed in a future release.

```tsx
<Drawer direction="bottom">
  <Drawer.Trigger asChild>
    <Button variant="outline">Open</Button>
  </Drawer.Trigger>
  <Drawer.Content className="w-full">
    <Drawer.Header>
      <Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
      <Drawer.Description>This action cannot be undone.</Drawer.Description>
    </Drawer.Header>
    <Drawer.Footer>
      <Button>Submit</Button>
      <Drawer.Close>
        <Button variant="outline">Cancel</Button>
      </Drawer.Close>
    </Drawer.Footer>
  </Drawer.Content>
</Drawer>
```
