---
'@nerdfish/ui': major
---

## Namespacing components with dot notation

Using the current way of using `Object.assign` to namespace components breaks consuming React Server Components. It also has limitations to tree-shaking capabilities.

[https://github.com/vercel/next.js/issues/51593](See github issue)

We need to change the way we namespace components to be compatible with React Server Components.

Now, all components are being exported directly from the package, but also as a namespaced component in another way.
The limitations is that namespaced component now always have a `.Root` element.

for example, a `Dialog` would now be available as `Dialog.Root`, which to why these are breaking changes.


