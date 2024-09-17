---
'@nerdfish/ui': major
---

Removing namespacing from the ui components

## What does this mean?

I've discovered that bundlers, particularly Webpack as used in Next.js, have limitations in tree-shaking components when using dot notation (namespace) syntax. This revelation contradicts our initial assumptions about bundling efficiency. As a result, I made changes to improve bundle size optimization and ensure better performance in production builds by removing namespacing.

As a result, all component with subcomponent are not accessible via the dot notation anymore.

For example, `Drawer.Root` will be accessible as `Drawer`, and `Drawer.Trigger` will be accessible as `DrawerTrigger`.

While this is a breaking change, it should be straightforward to update imports in your project.
