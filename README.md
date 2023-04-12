<div align="center">
<h1>Nerdfishui</h1>

<p>Nerdfish Design System</p>
</div>

---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Usage](#usage)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Quick start](#quick-start)
  - [Useful Commands](#useful-commands)
- [Docs](#docs)
- [Versioning \& Publishing Packages](#versioning--publishing-packages)
  - [Generating the Changelog](#generating-the-changelog)
  - [Releasing](#releasing)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


Introducing Nerdfishui - a custom component library built with React and TailwindCSS to help streamline proof of concept development and provide visually pleasing and functional components. Nerdfishui is the perfect tool for developers who want to quickly create stunning and user-friendly interfaces.

It's an opinionated library, so you might not agree with all the design, but
you can add your own styles to the components.

It's mainly [radix-ui](https://www.radix-ui.com) primitives with some custom
styling, with strong inspiration from
[https://ui.shadcn.com](https://ui.shadcn.com)

## Usage

### Installation

To install the component-library run the following within your project directory.

npm 
```sh
npm install @nerdfish/theme @nerdfish/tailwind-config @nerdfish/ui postcss tailwindcss @tailwindcss/typography lucide-react tailwindcss-animate
```

yarn 
```sh
yarn add @nerdfish/theme @nerdfish/tailwind-config @nerdfish/ui postcss tailwindcss @tailwindcss/typography lucide-react tailwindcss-animate
```

npm 
```sh
pnpm add @nerdfish/theme @nerdfish/tailwind-config @nerdfish/ui postcss tailwindcss @tailwindcss/typography lucide-react tailwindcss-animate
```

### Configuration

The theme of this library depends on the @tailwindcss/typography plugin. To use it, follow the steps on the plugin source page. https://github.com/tailwindlabs/tailwindcss-typography
For animations, you need to install the tailwindcss-animate plugin.


```js
// tailwind.config.js
module.exports = {
  mode: "jit",
  content: [
    // ... paths that use tailwind
    "./node_modules/@nerdfish/**/*.{js,ts,jsx,tsx}", // path to nerdfishui
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require("@nerdfish/tailwind-config"),
  ],
};
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Then you need a global css file which you import at the root of the project

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Quick start

```js
import * as React from "react";
import { ThemeProvider, H1 } from "@nerdfish/ui";
import "@nerdfish/theme/dist/nerdfishui.css"

function App() {
  return (
    <ThemeProvider>
      <H1>Hello Nerdfish</H1>
    </ThemeProvider>
  );
}
```


### Useful Commands

- `pnpm build` - Build all packages, including the docs
- `pnpm dev` - Run all packages locally and preview the docs
- `pnpm validate` - Lint all packages
- `pnpm changeset` - Generate a changeset
- `pnpm clean` - Clean up all `node_modules` and `dist` folders (runs each package's clean script)

## Docs

The docs are built with [NextJS](https://nextjs.org/) and [MDX](https://mdxjs.com/). The docs are located in the `apps/docs` folder.

To run the docs locally, run `pnpm dev` from the root of the project. This will run the `dev` script defined in the root `package.json`:

```bash
pnpm dev
```


## Versioning & Publishing Packages

This example uses [Changesets](https://github.com/changesets/changesets) to manage versions, create changelogs, and publish to npm. It's preconfigured so you can start publishing packages immediately.

You'll need to create an `NPM_TOKEN` and `GITHUB_TOKEN` and add it to your GitHub repository settings to enable access to npm. It's also worth installing the [Changesets bot](https://github.com/apps/changeset-bot) on your repository.

### Generating the Changelog

To generate your changelog, run `pnpm changeset` locally:

1. **Which packages would you like to include?** – This shows which packages and changed and which have remained the same. By default, no packages are included. Press `space` to select the packages you want to include in the `changeset`.
1. **Which packages should have a major bump?** – Press `space` to select the packages you want to bump versions for.
1. If doing the first major version, confirm you want to release.
1. Write a summary for the changes.
1. Confirm the changeset looks as expected.
1. A new Markdown file will be created in the `changeset` folder with the summary and a list of the packages included.

### Releasing

When you push your code to GitHub, the [GitHub Action](https://github.com/changesets/action) will run the `release` script defined in the root `package.json`:

```bash
turbo run build --filter=docs^... && changeset publish
```

