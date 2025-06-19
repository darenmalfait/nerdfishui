# @nerdfish/theme

## 3.0.0

### Major Changes

- ## update color naming ([#405](https://github.com/darenmalfait/nerdfishui/pull/405))

  `info`, `warning`, `success` and `danger` colors have been moved within
  background, foreground parents.

  `accent` color has been renamed to `brand`

## 2.9.0

### Minor Changes

- update colors

## 2.8.0

### Minor Changes

- update button design

## 2.7.0

### Minor Changes

- add code-block component

## 2.6.2

### Patch Changes

- tweak accent color

## 2.6.1

### Patch Changes

- fix foreground color

## 2.6.0

### Minor Changes

- adjust base rounded

- update tabs design

## 2.5.1

### Patch Changes

- update to react 19

- adjust dependencies

- Updated dependencies
  [[`f530277`](https://github.com/darenmalfait/nerdfishui/commit/f5302774e6f0326d5693b97243d362df25562e40),
  [`9577103`](https://github.com/darenmalfait/nerdfishui/commit/95771035ceb7156422adeebf39f077b06c32eb74)]:
  - @nerdfish/utils@2.0.1

## 2.5.0

### Minor Changes

- New theme options

## 2.4.1

### Patch Changes

- tweak status colors

## 2.4.0

### Minor Changes

- adjust color palette

## 2.3.1

### Patch Changes

- improve color pallette

## 2.3.0

### Minor Changes

- warm up the dark colors

## 2.2.0

### Minor Changes

- adjust muted background colors

## 2.1.9

### Patch Changes

- improve styling ([#217](https://github.com/darenmalfait/nerdfishui/pull/217))

- Replaced `nerdfish` variants with `accent`, using the new `accent` color

  ## What does this mean?

  Components that have `nerdfish` as a variant, now have `accent` as a variant.

  For example

  ```
  <Button variant='nerdfish'>This is a button</Button> // old
  <Button variant='accent'>This is a button</Button> // new
  ```

- change focus color to accent
  ([#217](https://github.com/darenmalfait/nerdfishui/pull/217))

- Updated dependencies
  [[`15ed259`](https://github.com/darenmalfait/nerdfishui/commit/15ed2595df35cb083c9f09834d01a51c5711338a)]:
  - @nerdfish/utils@2.0.0

## 2.1.8

### Patch Changes

- adjust muted background colors

- increase muted foreground color contrast

## 2.1.7

### Patch Changes

- Updated dependency `framer-motion` to `^11.2.10`.
  ([#169](https://github.com/darenmalfait/nerdfishui/pull/169))

  Updated dependency `lucide-react` to `^0.383.0`. Updated dependency
  `@types/node` to `^20.14.2`. Updated dependency `tsup` to `^8.1.0`.

- Updated dependency `prettier` to `^3.3.0`.
  ([#170](https://github.com/darenmalfait/nerdfishui/pull/170))

  Updated dependency `eslint-config-daren` to `^5.1.0`. Updated dependency
  `eslint-config-turbo` to `^1.13.4`. Updated dependency `eslint-plugin-react`
  to `^7.34.2`.

- Updated dependencies
  [[`91c3720`](https://github.com/darenmalfait/nerdfishui/commit/91c3720c1372c1a9b96916165960581c7fe62821),
  [`f1da18d`](https://github.com/darenmalfait/nerdfishui/commit/f1da18de168530afadba5c2753f33378ce6cf7f9)]:
  - @nerdfish/utils@1.6.6

## 2.1.6

### Patch Changes

- Updated dependency `@types/react` to `^18.3.3`.
  ([#162](https://github.com/darenmalfait/nerdfishui/pull/162))

  Updated dependency `react` to `>=18.3.1`. Updated dependency `react-dom` to
  `>=18.3.1`.

- Updated dependencies
  [[`fcce613`](https://github.com/darenmalfait/nerdfishui/commit/fcce6130e5691fc543c128d5453137e98992a574)]:
  - @nerdfish/utils@1.6.5

## 2.1.5

### Patch Changes

- Updated dependency `@next/env` to `^14.1.3`.
  ([#149](https://github.com/darenmalfait/nerdfishui/pull/149))

  Updated dependency `@next/mdx` to `^14.1.3`. Updated dependency `date-fns` to
  `^3.4.0`. Updated dependency `framer-motion` to `^11.0.12`. Updated dependency
  `lucide-react` to `^0.356.0`. Updated dependency `next` to `^14.1.3`. Updated
  dependency `typescript` to `^5.4.2`. Updated dependency `@types/node` to
  `^20.11.26`. Updated dependency `@types/react` to `^18.2.65`. Updated
  dependency `@types/react-dom` to `^18.2.21`. Updated dependency `autoprefixer`
  to `^10.4.18`. Updated dependency `postcss-loader` to `^8.1.1`. Updated
  dependency `postcss-nesting` to `^12.1.0`. Updated dependency `sonner` to
  `^1.4.3`.

- Updated dependency `@types/eslint` to `^8.56.5`.
  ([#148](https://github.com/darenmalfait/nerdfishui/pull/148))

  Updated dependency `eslint` to `^8.57.0`. Updated dependency
  `eslint-config-next` to `14.1.3`. Updated dependency `eslint-config-daren` to
  `^5.0.4`. Updated dependency `eslint-config-turbo` to `^1.12.5`. Updated
  dependency `eslint-plugin-react` to `^7.34.0`. Updated dependency
  `eslint-plugin-tailwindcss` to `^3.15.1`.

- Updated dependencies
  [[`66c080e`](https://github.com/darenmalfait/nerdfishui/commit/66c080e89dc3f9de3b59979f003e38558dacb106),
  [`7cfb4e0`](https://github.com/darenmalfait/nerdfishui/commit/7cfb4e06a9d24b3ddd3e30bf414dc5a9193d5d8e)]:
  - @nerdfish/utils@1.6.3

## 2.1.4

### Patch Changes

- Updated dependency `@mdx-js/loader` to `^3.0.1`.
  ([#141](https://github.com/darenmalfait/nerdfishui/pull/141))

  Updated dependency `@mdx-js/react` to `^3.0.1`. Updated dependency
  `framer-motion` to `^11.0.5`. Updated dependency `lucide-react` to `^0.336.0`.
  Updated dependency `match-sorter` to `^6.3.4`. Updated dependency
  `@types/node` to `^20.11.20`. Updated dependency `@types/react` to `^18.2.57`.
  Updated dependency `@types/react-dom` to `^18.2.19`. Updated dependency
  `postcss` to `^8.4.35`. Updated dependency `postcss-import` to `^16.0.1`.
  Updated dependency `postcss-nesting` to `^12.0.3`. Updated dependency
  `rehype-pretty-code` to `~0.13.0`. Updated dependency `tsup` to `^8.0.2`.

- Updated dependencies
  [[`1eebcab`](https://github.com/darenmalfait/nerdfishui/commit/1eebcabeb1a6c650d9ac92a9d29f03569febaa37)]:
  - @nerdfish/utils@1.6.2

## 2.1.3

### Patch Changes

- Updated dependency `lucide-react` to `^0.321.0`.
  ([#137](https://github.com/darenmalfait/nerdfishui/pull/137))

  Updated dependency `@types/node` to `^20.11.16`. Updated dependency
  `@types/react` to `^18.2.52`. Updated dependency `npm-run-all2` to `^5.0.2`.
  Updated dependency `postcss-loader` to `^8.1.0`. Updated dependency `vaul` to
  `^0.9.0`.

- Updated dependency `prettier` to `^3.2.5`.
  ([#138](https://github.com/darenmalfait/nerdfishui/pull/138))

  Updated dependency `eslint-config-turbo` to `^1.12.2`.

- Updated dependency `npm-run-all2` to `^6.1.2`.
  ([#140](https://github.com/darenmalfait/nerdfishui/pull/140))

- Updated dependencies
  [[`079c60a`](https://github.com/darenmalfait/nerdfishui/commit/079c60ada40c4e2cf9bcdae2ebb195fe23f5cc53),
  [`5d9f43c`](https://github.com/darenmalfait/nerdfishui/commit/5d9f43c9cf7653a0149b20ecb6462c534b941b15)]:
  - @nerdfish/utils@1.6.1

## 2.1.2

### Patch Changes

- Updated dependency `lucide-react` to `^0.317.0`.
  ([#134](https://github.com/darenmalfait/nerdfishui/pull/134))

  Updated dependency `@types/node` to `^20.11.10`. Updated dependency
  `npm-run-all2` to `^5.0.0`. Updated dependency `sonner` to `^1.4.0`.

- Updated dependency `tailwind-merge` to `^2.2.1`.
  ([#128](https://github.com/darenmalfait/nerdfishui/pull/128))

- Updated dependencies
  [[`2d243d4`](https://github.com/darenmalfait/nerdfishui/commit/2d243d43605121d046237b1ff80e15b75b333543)]:
  - @nerdfish/utils@1.5.1

## 2.1.1

### Patch Changes

- [`0d01bdc`](https://github.com/darenmalfait/nerdfishui/commit/0d01bdcfc5bc685c0d24f4415fd9ecbe652f5fc2)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix wrong color
  naming

## 2.1.0

### Minor Changes

- [`83ff9cf`](https://github.com/darenmalfait/nerdfishui/commit/83ff9cf2e6a65a5adac46db42b17291f824b956b)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add more basic
  colors

## 2.0.0

### Major Changes

- [`fac54cb`](https://github.com/darenmalfait/nerdfishui/commit/fac54cbeab240248325c6046d74cf8be5c314df9)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - new color pallet
  and variables

## 1.0.10

### Patch Changes

- [`5240699`](https://github.com/darenmalfait/nerdfishui/commit/5240699eacf066f21ff235e26400e0f6ac84bd95)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - style(button):
  increase contrast for disabled state

## 1.0.9

### Patch Changes

- [`f259a99`](https://github.com/darenmalfait/nerdfishui/commit/f259a99f27a08215db6d35033288f5654a422aac)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - update bg colors

## 1.0.8

### Patch Changes

- [`9d551d5`](https://github.com/darenmalfait/nerdfishui/commit/9d551d5742be7e41660a84b0b5b903212486d0d8)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - update color scheme

## 1.0.7

### Patch Changes

- [`21fafc8`](https://github.com/darenmalfait/nerdfishui/commit/21fafc85a97c1a60c330b7d452d2f46e0759fb2e)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - update text colors

## 1.0.6

### Patch Changes

- [`eebcf14`](https://github.com/darenmalfait/nerdfishui/commit/eebcf146901205bf800fbfd48fca0bb795f55268)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - update text colors

## 1.0.5

### Patch Changes

- [`070a9f8`](https://github.com/darenmalfait/nerdfishui/commit/070a9f8de89153f5a1daa45dd7e95314be11e95a)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - update gray pallet

## 1.0.4

### Patch Changes

- [`0fc29ef`](https://github.com/darenmalfait/nerdfishui/commit/0fc29ef086da08d0ea81289ed3abaaa2d4126343)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - update navigation
  list styling

## 1.0.3

### Patch Changes

- [#58](https://github.com/darenmalfait/nerdfishui/pull/58)
  [`078887c`](https://github.com/darenmalfait/nerdfishui/commit/078887cb73592e2c77fc2040c3cf58720185c29a)
  Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update
  all dependencies

- Updated dependencies
  [[`078887c`](https://github.com/darenmalfait/nerdfishui/commit/078887cb73592e2c77fc2040c3cf58720185c29a)]:
  - @nerdfish/utils@1.2.1

## 1.0.2

### Patch Changes

- [#49](https://github.com/darenmalfait/nerdfishui/pull/49)
  [`16180d0`](https://github.com/darenmalfait/nerdfishui/commit/16180d0501bd2b716fb23fc23d018fae2afe7c11)
  Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update
  all dependencies

- Updated dependencies
  [[`16180d0`](https://github.com/darenmalfait/nerdfishui/commit/16180d0501bd2b716fb23fc23d018fae2afe7c11)]:
  - @nerdfish/utils@1.1.1

## 1.0.1

### Patch Changes

- [#23](https://github.com/darenmalfait/nerdfishui/pull/23)
  [`453c264`](https://github.com/darenmalfait/nerdfishui/commit/453c2640aa6b6450368bc44d3658c1a197be2937)
  Thanks [@renovate](https://github.com/apps/renovate)! - update dependencies

- Updated dependencies
  [[`453c264`](https://github.com/darenmalfait/nerdfishui/commit/453c2640aa6b6450368bc44d3658c1a197be2937)]:
  - @nerdfish/utils@1.0.1
