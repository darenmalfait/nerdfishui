# @nerdfish/ui

## 7.6.3

### Patch Changes

- tweak typography across library

- change border to semi in `Alert`

## 7.6.2

### Patch Changes

- reduce H2 size on mobile

- Improve design of `Slider` and add more variants

## 7.6.1

### Patch Changes

- adjust corners in `Drawer`

## 7.6.0

### Minor Changes

- add new rounded-large option

- remove blur from titles

## 7.5.0

### Minor Changes

- add `input-size` prop to `Switch`

## 7.4.3

### Patch Changes

- set `AccordionTrigger` to align text left by default

- make the default loading animation the square variant

- move close button more to the corner in `Dialog`

- `Drawer` now scrolls when overflowing

- set `CardHeader` background to transparent

## 7.4.2

### Patch Changes

- fix max size for h1 heading

## 7.4.1

### Patch Changes

- increase h1 title

- improve button sizing

## 7.4.0

### Minor Changes

- add `Marquee` component

## 7.3.6

### Patch Changes

- increase checkbox icon size

## 7.3.5

### Patch Changes

- Make spacing more consistent

## 7.3.4

### Patch Changes

- add new `Square` loading animation variant

- add option to hide the default close button in `Drawer`

## 7.3.3

### Patch Changes

- Add new `LoadingAnimation` component

## 7.3.2

### Patch Changes

- adjust z-index of title blur bg

## 7.3.1

### Patch Changes

- adjust `Tabs` border color

## 7.3.0

### Minor Changes

- Add new `Gauge` component

### Patch Changes

- add height to window header

- Add `onError` callback to `useCopyToClipboard` hook

- set correct border color on the `Input` variants

## 7.2.0

### Minor Changes

- improve `button-group`

### Patch Changes

- make `NavigationMenu` consistent with the rest of the ui

- decrease overall padding in panels

## 7.1.1

### Patch Changes

- move accentuate button into variant

## 7.1.0

### Minor Changes

- add rounded-semi as most used one

### Patch Changes

- increase the size of navigationitems a bit

- tweak navigationlist items styling

## 7.0.0

### Major Changes

- Removing namespacing from the ui components
  ([#217](https://github.com/darenmalfait/nerdfishui/pull/217))

  ## What does this mean?

  I've discovered that bundlers, particularly Webpack as used in Next.js, have
  limitations in tree-shaking components when using dot notation (namespace)
  syntax. This revelation contradicts our initial assumptions about bundling
  efficiency. As a result, I made changes to improve bundle size optimization
  and ensure better performance in production builds by removing namespacing.

  As a result, all component with subcomponent are not accessible via the dot
  notation anymore.

  For example, `Drawer.Root` will be accessible as `Drawer`, and
  `Drawer.Trigger` will be accessible as `DrawerTrigger`.

  While this is a breaking change, it should be straightforward to update
  imports in your project.

- Replaced `nerdfish` variants with `accent`, using the new `accent` color

  ## What does this mean?

  Components that have `nerdfish` as a variant, now have `accent` as a variant.

  For example

  ```
  <Button variant='nerdfish'>This is a button</Button> // old
  <Button variant='accent'>This is a button</Button> // new
  ```

- fully revamped the `Select` component

- Input components do not have built-in FieldProps anymore.

  ## What does this mean?

  You used to be able to provide a `label`, `description` and `error` to the
  input component. This was used to generate the `FieldProps` for you.

  Now `input` components are just inputs. You can add a `label`, `description`
  and `error` via the `Field`, `Label` and `Description` components.

  There are also new form components that work well with `react-hook-form`, to
  dynamically set the correct aria attributes.

- Completely overhaul of the `TimePicker` component.

### Minor Changes

- Add variants to `Switch` component

- More roundness overall except for input elements

- Move hooks to ui

  ## What does this mean?

  All hooks that were previously in `@nerdfish/utils` are now in `@nerdfish/ui`.

  This is a breaking change for any code that imports hooks from
  `@nerdfish/utils`.

  `useControllableState`, `useCopyToClipboard`, `useMediaQuery` are some
  examples of hooks that were previously in `@nerdfish/utils`.

  If you are using these hooks in your code, you will need to update your
  imports to point to `@nerdfish/ui` instead of `@nerdfish/utils`.

- Introduce new `DateTimePicker` component.

- Add new `Timeline` component

- Add new `Textarea` component
  ([#217](https://github.com/darenmalfait/nerdfishui/pull/217))

- Add new `Autocomplete` component

### Patch Changes

- adjust `Switch` background color

- improve `Skeleton`component to match line height of parent

- adjust x close icon in `Drawer`

- change focus color to accent
  ([#217](https://github.com/darenmalfait/nerdfishui/pull/217))

- Adjusted styling for `Tabs`

- Updated dependencies
  [[`15ed259`](https://github.com/darenmalfait/nerdfishui/commit/15ed2595df35cb083c9f09834d01a51c5711338a)]:
  - @nerdfish/utils@2.0.0

## 6.2.0

### Minor Changes

- add `Resizable` component

- Add new `Mockup` component
  ([#211](https://github.com/darenmalfait/nerdfishui/pull/211))

- Add `Separator` component

- add `Sidebar` component

### Patch Changes

- make `Select` be in line with other input components when it comes to
  description and error messages

- Improve code presentation in the docs

- Updated dependencies
  [[`9388c60`](https://github.com/darenmalfait/nerdfishui/commit/9388c60658afebd8c7a09be5369cd7d375f8da46)]:
  - @nerdfish/utils@1.7.0

## 6.1.0

### Minor Changes

- Added new `Flags` component

- Add new `EmptyState` component

### Patch Changes

- unify focus state styling across multiple components

- Swap `jelly` with `pop` animation in `Checkbox`

- improved shake animation and used on error state in `Input`

## 6.0.0

### Major Changes

- ## Namespacing components with dot notation ([#199](https://github.com/darenmalfait/nerdfishui/pull/199))

  Using the current way of using `Object.assign` to namespace components breaks
  consuming React Server Components. It also has limitations to tree-shaking
  capabilities.

  [https://github.com/vercel/next.js/issues/51593](See github issue)

  We need to change the way we namespace components to be compatible with React
  Server Components.

  Now, all components are being exported directly from the package, but also as
  a namespaced component in another way. The limitations is that namespaced
  component now always have a `.Root` element.

  for example, a `Dialog` would now be available as `Dialog.Root`, which to why
  these are breaking changes.

- removed `DoubleLabelLink`
  ([#199](https://github.com/darenmalfait/nerdfishui/pull/199))

### Patch Changes

- fix the padding in `Alert` when there is an icon
  ([#199](https://github.com/darenmalfait/nerdfishui/pull/199))

- add focus outline to `Timepicker` elements

## 5.0.2

### Patch Changes

- add use client to multiple components

## 5.0.1

### Patch Changes

- add popover background to dialogs

- `Command` items are not always disabled

- improve `Calendar` color contrasts

## 5.0.0

### Major Changes

- remove Deprecated components `Section`, `Container`, `Sheet` and
  `ProgressiveImage`

### Minor Changes

- introduce new `Grid` component

### Patch Changes

- use the primary background as overlay color in `Drawer`

- Updated dependency `framer-motion` to `^11.2.10`.
  ([#169](https://github.com/darenmalfait/nerdfishui/pull/169))

  Updated dependency `lucide-react` to `^0.383.0`. Updated dependency
  `@types/node` to `^20.14.2`. Updated dependency `tsup` to `^8.1.0`.

- Updated dependency `prettier` to `^3.3.0`.
  ([#170](https://github.com/darenmalfait/nerdfishui/pull/170))

  Updated dependency `eslint-config-daren` to `^5.1.0`. Updated dependency
  `eslint-config-turbo` to `^1.13.4`. Updated dependency `eslint-plugin-react`
  to `^7.34.2`.

- Increase opacity of the `Drawer` handle

- Updated dependencies
  [[`91c3720`](https://github.com/darenmalfait/nerdfishui/commit/91c3720c1372c1a9b96916165960581c7fe62821),
  [`f1da18d`](https://github.com/darenmalfait/nerdfishui/commit/f1da18de168530afadba5c2753f33378ce6cf7f9)]:
  - @nerdfish/utils@1.6.6

## 4.7.1

### Patch Changes

- replace border in `NavigationMenu` Content with outline

## 4.7.0

### Minor Changes

- add `NavigationMenu` component

### Patch Changes

- deprecate `ProgressiveImage` component. The component is not working well with
  SSR. It's probably worth looking into better solutions.

## 4.6.3

### Patch Changes

- add `react` and `react-dom` as peer dependencies to the `ui` package

- add 'use client' add top of the exported file

- Updated dependency `@types/react` to `^18.3.3`.
  ([#162](https://github.com/darenmalfait/nerdfishui/pull/162))

  Updated dependency `react` to `>=18.3.1`. Updated dependency `react-dom` to
  `>=18.3.1`.

- Updated dependencies
  [[`fcce613`](https://github.com/darenmalfait/nerdfishui/commit/fcce6130e5691fc543c128d5453137e98992a574)]:
  - @nerdfish/utils@1.6.5

## 4.6.2

### Patch Changes

- remove `Tabs` trigger default bg color, enable it on hover

## 4.6.1

### Patch Changes

- Adjust `Field` label and description positioning

- adjust `Input` focus styling

- Adjust `Tabs` look & feel

- fix `DatePicker` trigger not opening up on click

- `Checkbox` now has a focus outline

- Updated dependencies
  [[`8fbed06`](https://github.com/darenmalfait/nerdfishui/commit/8fbed06a4b5765c78ef8ba98fa36e0390d22d7f9)]:
  - @nerdfish/utils@1.6.4

## 4.6.0

### Minor Changes

- introduced new `Breadcrumb` component

- New OTP input component

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

## 4.5.1

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

## 4.5.0

### Minor Changes

- New `Indicator` component added. Indicator can add a visual status to a
  component.

  ```tsx
  <Indicator>
  	<Indicator.Item>
  		<div className="size-4 rounded-full bg-pink-500" />
  	</Indicator.Item>
  	<div className="bg-muted grid size-32 place-items-center">content</div>
  </Indicator>
  ```

### Patch Changes

- `Multi-Email` improvements:

  - Added `onBlur` event to `MultiEmail` component
  - Added emails are now editable by clicking on them
  - `Backspace` key now edits the last email in the list, instead of deleting it
  - Some minor styling improvements
  - Allow `Name <name@domain.com>` to be added as an email. This will be clipped
    to only the email address when added.
  - Allow a list of emails to be pasted into the input

- Updated dependency `lucide-react` to `^0.321.0`.
  ([#137](https://github.com/darenmalfait/nerdfishui/pull/137))

  Updated dependency `@types/node` to `^20.11.16`. Updated dependency
  `@types/react` to `^18.2.52`. Updated dependency `npm-run-all2` to `^5.0.2`.
  Updated dependency `postcss-loader` to `^8.1.0`. Updated dependency `vaul` to
  `^0.9.0`.

- Updated dependency `prettier` to `^3.2.5`.
  ([#138](https://github.com/darenmalfait/nerdfishui/pull/138))

  Updated dependency `eslint-config-turbo` to `^1.12.2`.

- Updated dependencies
  [[`079c60a`](https://github.com/darenmalfait/nerdfishui/commit/079c60ada40c4e2cf9bcdae2ebb195fe23f5cc53),
  [`5d9f43c`](https://github.com/darenmalfait/nerdfishui/commit/5d9f43c9cf7653a0149b20ecb6462c534b941b15)]:
  - @nerdfish/utils@1.6.1

## 4.4.0

### Minor Changes

- `Alert` now fully uses compound component structure.

  `title` and `description` props are now deprecated. Use `Alert.Title` and
  `Alert.Description` components instead.

  ```tsx
  <Alert title="example" className="w-full">
  	<Alert.Title>Example alert</Alert.Title>
  	<Alert.Description>Example description</Alert.Description>
  </Alert>
  ```

### Patch Changes

- Deprecate `Container`, `Grid` and `Section` in favor of built-in tailwind
  stuff. More documentation how to move forward in
  (layout)[https://nerdfish.be/layout].

- `ButtonGroup` now has less spacing between buttons

- `Drawer` now scroll if the content overflows

- Updated dependencies
  [[`d7bbb85`](https://github.com/darenmalfait/nerdfishui/commit/d7bbb85af9069cf507d15266dbe1082c633ab68e)]:
  - @nerdfish/utils@1.6.0

## 4.3.1

### Patch Changes

- `Input` now correctly passes on `className` to add custom styling

- Updated dependency `lucide-react` to `^0.317.0`.
  ([#134](https://github.com/darenmalfait/nerdfishui/pull/134))

  Updated dependency `@types/node` to `^20.11.10`. Updated dependency
  `npm-run-all2` to `^5.0.0`. Updated dependency `sonner` to `^1.4.0`.

- Updated dependency `lucide-react` to `^0.316.0`.
  ([#132](https://github.com/darenmalfait/nerdfishui/pull/132))

  Updated dependency `@types/node` to `^20.11.7`. Updated dependency
  `rehype-pretty-code` to `~0.12.6`.

- `Command` uses `cmdk` again. It has been updated.

- Updated dependencies
  [[`2d243d4`](https://github.com/darenmalfait/nerdfishui/commit/2d243d43605121d046237b1ff80e15b75b333543)]:
  - @nerdfish/utils@1.5.1

## 4.3.0

### Minor Changes

- Added new `ToggleGroup` component

  ```tsx
  import { ToggleGroup } from '@nerdfish/ui'
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

- `Drawer` now has directional support. The `direction` prop can be set to
  `top`, `right`, `bottom`, or `left`.

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

### Patch Changes

- `Toggle`: adjusted focus state design to be more consistent with other button
  components.

- `Alert`: `description` prop is now deprecated in favor of `children`.

  This allows more flexibility in the content of the `Alert`. The `description`
  prop will be removed in a future release.

  ```tsx
  <Alert variant="danger" description="Alert content" />
  ```

  Now becomes:

  ```tsx
  <Alert variant="danger">Alert content</Alert>
  ```

- `Sheet`: Deprecate in favor of `Drawer`. `Sheet` will be removed in a future
  release.

- `Command`: Fix backspace bug.

  To fix it `Command` now temporarely uses `carloslfu-cmdk-internal` until
  `cmdk` is released.

- `Button`: replace active-ring effect to a subtle scale effect

- Components that have an Overlay (`Dialog`, `AlertDialog`) now have the primary
  background color instead of the popover background.

## 4.2.4

### Patch Changes

- change background color of Drawer component content to the primary background
  color

- Input and the components that inherit from input now have better distinction
  between states

- increase slider contrast

- improve checkbox design and micro animations

- Switch now has more neutral colors

- Input element descriptions now have more spacing above.

## 4.2.3

### Patch Changes

- [`0d01bdc`](https://github.com/darenmalfait/nerdfishui/commit/0d01bdcfc5bc685c0d24f4415fd9ecbe652f5fc2)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix wrong color
  naming

## 4.2.2

### Patch Changes

- [`83ff9cf`](https://github.com/darenmalfait/nerdfishui/commit/83ff9cf2e6a65a5adac46db42b17291f824b956b)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - tweak basic styling

- [`83ff9cf`](https://github.com/darenmalfait/nerdfishui/commit/83ff9cf2e6a65a5adac46db42b17291f824b956b)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add more basic
  colors

- [`9269ca1`](https://github.com/darenmalfait/nerdfishui/commit/9269ca13404cac3c90202bcace0b39db2c8a0e69)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - minor styling
  improvements to the Switch component

- [`aca9fab`](https://github.com/darenmalfait/nerdfishui/commit/aca9fab76ae1466abd689cd9f0b2c5d5fd1231ad)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - tweak popover
  background

## 4.2.1

### Patch Changes

- [`3998e5c`](https://github.com/darenmalfait/nerdfishui/commit/3998e5c1c50f32d7f76ac4276a54ecd9f33762a1)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - change slider color

- [`fac54cb`](https://github.com/darenmalfait/nerdfishui/commit/fac54cbeab240248325c6046d74cf8be5c314df9)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - update styling
  across components

- [`81e6bb0`](https://github.com/darenmalfait/nerdfishui/commit/81e6bb09fdb8016aae4e6b77160735c0d328286c)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - increase opacity of
  inactive steps in Steps component

- [`288eb25`](https://github.com/darenmalfait/nerdfishui/commit/288eb25d95962e885f7c0c69e32ff83ed4cbca2e)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - improve disabled
  checkbox state

- [`bd0e7a2`](https://github.com/darenmalfait/nerdfishui/commit/bd0e7a209f7f9e63ab2db00d407b7c3fa14d64a6)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - increase Skeleton
  opacity

- [`7ffa527`](https://github.com/darenmalfait/nerdfishui/commit/7ffa5273bcbb1c29c340a914242114fdf696043b)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - implement missing
  calendar-props

## 4.2.0

### Minor Changes

- [`919da65`](https://github.com/darenmalfait/nerdfishui/commit/919da65a22e64fc95ae50a09bceec96503c6e730)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - Input now has
  leading and trailing addon functionality

### Patch Changes

- [`a03a365`](https://github.com/darenmalfait/nerdfishui/commit/a03a3656a03e7a269c93ea6d33158e45abb69866)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - remove padding from
  NavigationList

- Updated dependencies
  [[`919da65`](https://github.com/darenmalfait/nerdfishui/commit/919da65a22e64fc95ae50a09bceec96503c6e730)]:
  - @nerdfish/utils@1.5.0

## 4.1.0

### Minor Changes

- [`1c1403a`](https://github.com/darenmalfait/nerdfishui/commit/1c1403ac56ed411ad62105025e6872e3977fbd3e)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! -
  NavigationList.Title has the same styling options as NavigationList.Item

- [`1a69440`](https://github.com/darenmalfait/nerdfishui/commit/1a694400959216552b0fde592762b038413d405c)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - Add new Steps
  component that cna be used as an indicator in a wizard form

### Patch Changes

- [`78b60b6`](https://github.com/darenmalfait/nerdfishui/commit/78b60b6876743623e52d65e49e8abdd842c08919)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix background
  color for Tabs in dark mode

## 4.0.0

### Major Changes

- [`f08b72c`](https://github.com/darenmalfait/nerdfishui/commit/f08b72c74a5e23313f35277af6df90968e34bc9a)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - `Combobox` has been
  renamed to `Select`. The `items` prop has been changed to `options` for
  `Select` and `MultiSelect` components.

### Minor Changes

- [`574601b`](https://github.com/darenmalfait/nerdfishui/commit/574601b9183d8d61aa152b766885dc1189ee595d)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add new Field
  utility component for label and error display of input fields

### Patch Changes

- [`fba918d`](https://github.com/darenmalfait/nerdfishui/commit/fba918d52560680934ab7b9d7de64c176ed9ca41)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add top padding to
  card content

- [`cc8e2ff`](https://github.com/darenmalfait/nerdfishui/commit/cc8e2ff0f019d2ba0b36d29757c461e78e0b0f7d)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - adjust disabled
  input styling

## 3.0.0

### Major Changes

- [`2dffd36`](https://github.com/darenmalfait/nerdfishui/commit/2dffd3685001bc904924d9bb8612ce01bb1eab5c)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - new DatePicker
  component, removed the old

### Minor Changes

- [`8d3a226`](https://github.com/darenmalfait/nerdfishui/commit/8d3a226cbebea23403b4c9063bd967d18c1075f5)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - improve
  navigation-list layout

## 2.4.0

### Minor Changes

- [`ad9dfaa`](https://github.com/darenmalfait/nerdfishui/commit/ad9dfaab13e742a06715edcbda368ff6953aca59)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - update toast
  component to sonner

- [`f3bffed`](https://github.com/darenmalfait/nerdfishui/commit/f3bffed30b1ec15a81425728ed00b80d59dccb47)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add Drawer
  component

### Patch Changes

- Updated dependencies
  [[`f3bffed`](https://github.com/darenmalfait/nerdfishui/commit/f3bffed30b1ec15a81425728ed00b80d59dccb47)]:
  - @nerdfish/utils@1.4.0

## 2.3.5

### Patch Changes

- [`fae7e15`](https://github.com/darenmalfait/nerdfishui/commit/fae7e15fcced17ea5cf8394ca58e71e870cdfb00)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - style(button):
  improve shadow and colors

## 2.3.4

### Patch Changes

- [`afa6ab4`](https://github.com/darenmalfait/nerdfishui/commit/afa6ab4eedf49a57eec631ddb5810162b2717f04)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(button): hide
  ghost border

## 2.3.3

### Patch Changes

- [`b57bf24`](https://github.com/darenmalfait/nerdfishui/commit/b57bf24df97ca0ee3cccf4c166ec38fabf0ed66a)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - style(button): add
  accentuate prop

## 2.3.2

### Patch Changes

- [`1e6a3b4`](https://github.com/darenmalfait/nerdfishui/commit/1e6a3b440c2a7bd94a3d4d9687be0611b2915c18)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(slider): adjust
  track color

- [`5240699`](https://github.com/darenmalfait/nerdfishui/commit/5240699eacf066f21ff235e26400e0f6ac84bd95)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - style(button):
  increase contrast for disabled state

- [`65cdfc5`](https://github.com/darenmalfait/nerdfishui/commit/65cdfc52d5572394c6bcaa81b450d166a6eec5ee)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(slider): extend
  classname

## 2.3.1

### Patch Changes

- [`0b700c6`](https://github.com/darenmalfait/nerdfishui/commit/0b700c6aed478078ebcdd56e70b972c6ec7c88e7)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(slider): add
  thumb as child

## 2.3.0

### Minor Changes

- [`3a90668`](https://github.com/darenmalfait/nerdfishui/commit/3a906688fb07c5c7a58d29ab4a18fd74b8b47d98)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - feat(ui): add new
  slider component

### Patch Changes

- [`74299e6`](https://github.com/darenmalfait/nerdfishui/commit/74299e6ceffd14501671527d5db9cdcc1d64770c)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - feat(theme): add
  shadow-highlight color variant

- [`55b4904`](https://github.com/darenmalfait/nerdfishui/commit/55b49040576c49856d75235581ac173fa47ea823)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - feat(skeleton): add
  basic skeletons

- [`ee784c2`](https://github.com/darenmalfait/nerdfishui/commit/ee784c25395d6295cc72663c6a37c9a71c8628ae)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - style(title): add
  blurred bg color for h1 and h2

## 2.2.13

### Patch Changes

- [`d6b8334`](https://github.com/darenmalfait/nerdfishui/commit/d6b8334d0b661c8fbcd3c9c069b1bf49f378bf91)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add icon property
  to combobox items

## 2.2.12

### Patch Changes

- [`f15a473`](https://github.com/darenmalfait/nerdfishui/commit/f15a4731532f7264bccdbfb165c918d34bfa619e)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add button press
  animation

## 2.2.11

### Patch Changes

- [`d357351`](https://github.com/darenmalfait/nerdfishui/commit/d3573518f8e355f108de0c8d9dda5744828d6f20)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - remove shadow from
  navigation list item

## 2.2.10

### Patch Changes

- [`05fc899`](https://github.com/darenmalfait/nerdfishui/commit/05fc89983580d09fcb9d2d33e0150162725beab8)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix card colors

## 2.2.9

### Patch Changes

- [`2c4e5df`](https://github.com/darenmalfait/nerdfishui/commit/2c4e5df479a33f258289c29977cb1979c0541318)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - reduce overall
  roundness

## 2.2.8

### Patch Changes

- [`4489e21`](https://github.com/darenmalfait/nerdfishui/commit/4489e216d83d06f7777efef9be9ea1b9c39bd2b9)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - minor card styling
  tweaks

- [`cc8b2b5`](https://github.com/darenmalfait/nerdfishui/commit/cc8b2b5d2d08c97665bf7a857b9ac674bb8b80bf)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - Minor navigation
  list tweaks

## 2.2.7

### Patch Changes

- [`59cc461`](https://github.com/darenmalfait/nerdfishui/commit/59cc461a1dfdcb0a883ff6cba43d0474826000f4)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - table: minor layout
  tweaks

## 2.2.6

### Patch Changes

- [`094b929`](https://github.com/darenmalfait/nerdfishui/commit/094b9298c51341e25ccaa7529f53c4b132a5d3c6)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - reduce toggle
  border radius

## 2.2.5

### Patch Changes

- [`ef13c0c`](https://github.com/darenmalfait/nerdfishui/commit/ef13c0c53a5e2db8685b98dbe5c8dc9c402e62e2)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - reduce tab list
  border radius

- [`6a4b4c7`](https://github.com/darenmalfait/nerdfishui/commit/6a4b4c7e259f5640d9a7c9e6d21d45259ff91abe)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - increase calendar
  selected day contrast

## 2.2.4

### Patch Changes

- [`836d555`](https://github.com/darenmalfait/nerdfishui/commit/836d555ae7144213bdbf39298bae780e91eae186)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - improve calendar
  dropdown styling

- [`836d555`](https://github.com/darenmalfait/nerdfishui/commit/836d555ae7144213bdbf39298bae780e91eae186)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - minor layout tweaks

## 2.2.3

### Patch Changes

- [`48c8b84`](https://github.com/darenmalfait/nerdfishui/commit/48c8b84ba2623d12282ea1e3298ec0468badcab4)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - increase button
  border radius

- [`92a0baf`](https://github.com/darenmalfait/nerdfishui/commit/92a0bafc32398b1ec55e445486e5bd8aa5695d4e)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - introduce new
  shadow config

- [`694b743`](https://github.com/darenmalfait/nerdfishui/commit/694b743555dd30dd03e7ca0c0e9fdbdba40b5faa)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - update card layout

## 2.2.2

### Patch Changes

- [`0fc29ef`](https://github.com/darenmalfait/nerdfishui/commit/0fc29ef086da08d0ea81289ed3abaaa2d4126343)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - update navigation
  list styling

## 2.2.1

### Patch Changes

- [`72165ff`](https://github.com/darenmalfait/nerdfishui/commit/72165ff58063ed346ab75331de7dc944265f4cc7)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add new button
  sizes

## 2.2.0

### Minor Changes

- [`5000b38`](https://github.com/darenmalfait/nerdfishui/commit/5000b3844fda8c1f41721d172bb9d7f469bcd294)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add new color utils

- [`33eb9b4`](https://github.com/darenmalfait/nerdfishui/commit/33eb9b4ce962a0981932e308b0eb636124a8e00c)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - new radio-group
  component

- [`1be63c7`](https://github.com/darenmalfait/nerdfishui/commit/1be63c7d30429c53db14907cd7f9fab95897e9c6)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - improve
  multi-select

### Patch Changes

- Updated dependencies
  [[`5000b38`](https://github.com/darenmalfait/nerdfishui/commit/5000b3844fda8c1f41721d172bb9d7f469bcd294)]:
  - @nerdfish/utils@1.3.0

## 2.1.7

### Patch Changes

- [`70cce8c`](https://github.com/darenmalfait/nerdfishui/commit/70cce8c53d6cef43ea8cd90a2b86dc5d7c30bde7)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(popover):
  remove portal form popover

## 2.1.6

### Patch Changes

- [`68ec060`](https://github.com/darenmalfait/nerdfishui/commit/68ec060afb846aeec2cf1ebdf08792e06a50f5e1)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(dropdown):
  improve search

## 2.1.5

### Patch Changes

- [`68372e8`](https://github.com/darenmalfait/nerdfishui/commit/68372e8c2d7ad0469b42aaafa7d907a7b260d811)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(multi-select):
  add scrollarea to content

## 2.1.4

### Patch Changes

- [`81c00ad`](https://github.com/darenmalfait/nerdfishui/commit/81c00ada790958d12960f5c464b661a2b3871d8a)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(combobox): add
  scroll area

- [#58](https://github.com/darenmalfait/nerdfishui/pull/58)
  [`078887c`](https://github.com/darenmalfait/nerdfishui/commit/078887cb73592e2c77fc2040c3cf58720185c29a)
  Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update
  all dependencies

- Updated dependencies
  [[`078887c`](https://github.com/darenmalfait/nerdfishui/commit/078887cb73592e2c77fc2040c3cf58720185c29a)]:
  - @nerdfish/utils@1.2.1

## 2.1.3

### Patch Changes

- [`1927c92`](https://github.com/darenmalfait/nerdfishui/commit/1927c92cb9f87cbd998da96e76375a791269fb2d)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(multi-select):
  fix item spacing

- Updated dependencies
  [[`b1be040`](https://github.com/darenmalfait/nerdfishui/commit/b1be04052b5d835f610d950d78f614f00fe4e3c0)]:
  - @nerdfish/utils@1.2.0

## 2.1.2

### Patch Changes

- [`8496112`](https://github.com/darenmalfait/nerdfishui/commit/849611225c789e9072c5d68d7b75393fc1eaf87b)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(datepicker):
  update styling

## 2.1.1

### Patch Changes

- [`1a35ea5`](https://github.com/darenmalfait/nerdfishui/commit/1a35ea5ff0e79fbd03d88f7850cd8a8683f8cb62)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix Sheet title
  color

- [`4c6fa9d`](https://github.com/darenmalfait/nerdfishui/commit/4c6fa9de6bab37b4d67d69d65590ed8c065793c7)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix multi-select
  text color

- [`ff2a7ec`](https://github.com/darenmalfait/nerdfishui/commit/ff2a7ecc6f26182a5d68c7d9400b371196618fb3)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix calendar
  outside of month text contrast

## 2.1.0

### Minor Changes

- [`ae3bb43`](https://github.com/darenmalfait/nerdfishui/commit/ae3bb43141e35c0d0d04537f61be9a6f756170f9)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - Add success style
  to button

## 2.0.0

### Major Changes

- [`184507c`](https://github.com/darenmalfait/nerdfishui/commit/184507cc7a2ea17aa94735a3924bfa10b50fde55)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - New button styles

### Patch Changes

- [`1485459`](https://github.com/darenmalfait/nerdfishui/commit/14854591e491523642d51e5cdaa97770ab8a7cb4)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - increase calendar
  inactive cells contrast

- [`fac2f0c`](https://github.com/darenmalfait/nerdfishui/commit/fac2f0c6e8e7edde8e62adb8e5ee1905bfe4475e)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - set datepicker to
  input styling

- [`af4477c`](https://github.com/darenmalfait/nerdfishui/commit/af4477c227e2ec90ec838a64204cce8da8adfa92)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - multiselect(fix):
  fallback to default badge color when no color provided

- [`8467891`](https://github.com/darenmalfait/nerdfishui/commit/84678916c92aadd1f0734bd877ac25ee6fc9f729)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - set multi-select to
  input styling

## 1.5.0

### Minor Changes

- [`f42c11c`](https://github.com/darenmalfait/nerdfishui/commit/f42c11cff80969a165a4848176c6830c754b8149)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add multi-select
  component

### Patch Changes

- [`8746b2d`](https://github.com/darenmalfait/nerdfishui/commit/8746b2d17e6c85f65e7ad7913add8cbc83103aa9)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(multi-email):
  pressing spacebar does not brake the entered text anymore

- [`1f8a7f8`](https://github.com/darenmalfait/nerdfishui/commit/1f8a7f8ff35d53e92ef7288bcc66f17b0d68b893)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(switch): add
  background color

- [#49](https://github.com/darenmalfait/nerdfishui/pull/49)
  [`16180d0`](https://github.com/darenmalfait/nerdfishui/commit/16180d0501bd2b716fb23fc23d018fae2afe7c11)
  Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update
  all dependencies

- Updated dependencies
  [[`16180d0`](https://github.com/darenmalfait/nerdfishui/commit/16180d0501bd2b716fb23fc23d018fae2afe7c11)]:
  - @nerdfish/utils@1.1.1

## 1.4.2

### Patch Changes

- [`8173019`](https://github.com/darenmalfait/nerdfishui/commit/81730195e8e2e0610376f9437884d52ebfb2fa0e)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add missing
  reference on textarea

## 1.4.1

### Patch Changes

- [`731cce8`](https://github.com/darenmalfait/nerdfishui/commit/731cce8a16e2d593c556841a7811808ee890f6ea)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix dialog and
  sheet interference

## 1.4.0

### Minor Changes

- [`bfb353d`](https://github.com/darenmalfait/nerdfishui/commit/bfb353d6690c1fa8246eb50813e49333accbb548)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add Tooltip
  component

- [#41](https://github.com/darenmalfait/nerdfishui/pull/41)
  [`205ed4e`](https://github.com/darenmalfait/nerdfishui/commit/205ed4effd414fdc32965164d7ba1fc64fc02561)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - Add Card component

- [`6ab9323`](https://github.com/darenmalfait/nerdfishui/commit/6ab93239717412963c7f4520f9dc0621d61ba2c0)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add new table
  component

- [#43](https://github.com/darenmalfait/nerdfishui/pull/43)
  [`bd782e8`](https://github.com/darenmalfait/nerdfishui/commit/bd782e8e31c789d1f1897a5cb3e2917d268f7859)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - Add Skeleton
  component

- [`7c14315`](https://github.com/darenmalfait/nerdfishui/commit/7c14315f6624379fc6ecf772b34f595bf0b36c48)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add new sheet
  component

### Patch Changes

- [`5dc3345`](https://github.com/darenmalfait/nerdfishui/commit/5dc334566847adba0e2afbb1ac0b7d50c1a0ed9d)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - adjust text color
  in multiple components

## 1.3.1

### Patch Changes

- [`a83e751`](https://github.com/darenmalfait/nerdfishui/commit/a83e751d20eb656da8ae99b49173ed7f384f665f)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - calendar: remove
  border on range selection

## 1.3.0

### Minor Changes

- [`4bee241`](https://github.com/darenmalfait/nerdfishui/commit/4bee2417318c7e70006fe9bc45133c7e1240a15b)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add multi-email
  component and util function

### Patch Changes

- [`ab20113`](https://github.com/darenmalfait/nerdfishui/commit/ab20113002b72ce5cb50997d628cd83d7c8992a5)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - calendar: change
  active today styling

- Updated dependencies
  [[`4bee241`](https://github.com/darenmalfait/nerdfishui/commit/4bee2417318c7e70006fe9bc45133c7e1240a15b)]:
  - @nerdfish/utils@1.1.0

## 1.2.6

### Patch Changes

- [`5a67110`](https://github.com/darenmalfait/nerdfishui/commit/5a67110ea8bae51e7f282cb906d9fcb5e8a7397d)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - update calendar
  styling

## 1.2.5

### Patch Changes

- [`a4d7d65`](https://github.com/darenmalfait/nerdfishui/commit/a4d7d6544dd786a9abc671211ecb06b426fc51a8)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - datepicker: improve
  styling

## 1.2.4

### Patch Changes

- [`f6f3532`](https://github.com/darenmalfait/nerdfishui/commit/f6f35320ec68d471cd6947f6e0f8a4d1997daa36)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix broken package

## 1.2.3

### Patch Changes

- [`6171305`](https://github.com/darenmalfait/nerdfishui/commit/6171305cb073899900965ecdb1e59d0ff5125918)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add defaultSelected
  prop to datepicker

## 1.2.2

### Patch Changes

- [`c74b935`](https://github.com/darenmalfait/nerdfishui/commit/c74b935cbb3282ac7887b19d0894142260c1ad3f)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add hidden input
  field for value storage

## 1.2.1

### Patch Changes

- [`bfbaf79`](https://github.com/darenmalfait/nerdfishui/commit/bfbaf7930803e21b52c5c2cbf4d936af2c39b5fb)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - clicking the
  datepicker should not submit the form

## 1.2.0

### Minor Changes

- [`c92c74d`](https://github.com/darenmalfait/nerdfishui/commit/c92c74df5e7533ea56297d4f461c50f003b30630)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add datepicker
  component

- [`5a4969a`](https://github.com/darenmalfait/nerdfishui/commit/5a4969a5b3b7b1052858e516e4ecc80723ede1b3)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add new badge
  component

### Patch Changes

- [`a2b0a32`](https://github.com/darenmalfait/nerdfishui/commit/a2b0a32b70d29d97a655af4638bbbc365c96c39a)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - make combobox
  controllable

## 1.1.0

### Minor Changes

- [`3d4c8ef`](https://github.com/darenmalfait/nerdfishui/commit/3d4c8ef95e497cdde332771d4e7e2bb70243e5c3)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add collapsible
  component

### Patch Changes

- [#23](https://github.com/darenmalfait/nerdfishui/pull/23)
  [`453c264`](https://github.com/darenmalfait/nerdfishui/commit/453c2640aa6b6450368bc44d3658c1a197be2937)
  Thanks [@renovate](https://github.com/apps/renovate)! - update dependencies

- [#24](https://github.com/darenmalfait/nerdfishui/pull/24)
  [`9c73189`](https://github.com/darenmalfait/nerdfishui/commit/9c7318959dfd3a0dc3b932e01610d0f3b48933fc)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - better align icon
  in Alert component

- Updated dependencies
  [[`453c264`](https://github.com/darenmalfait/nerdfishui/commit/453c2640aa6b6450368bc44d3658c1a197be2937)]:
  - @nerdfish/utils@1.0.1

## 1.0.5

### Patch Changes

- [`090a5d6`](https://github.com/darenmalfait/nerdfishui/commit/090a5d6cc79f8a7c9491878ba9547f657991c537)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add missing props
  to combobox

## 1.0.4

### Patch Changes

- [`0f86c47`](https://github.com/darenmalfait/nerdfishui/commit/0f86c47c3171276a5e3114475f04f19ac895cfc0)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - combobox: send
  correct value onChange

## 1.0.3

### Patch Changes

- [`f8252f0`](https://github.com/darenmalfait/nerdfishui/commit/f8252f01dd65180f5d536a19d3c308272dbf4c43)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(combobox): add
  onChange handler

## 1.0.2

### Patch Changes

- [`ddfe4b0`](https://github.com/darenmalfait/nerdfishui/commit/ddfe4b0e0220add03cdb30254981ca0d9da319bd)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - fix(combobox):
  prefer value when provided

## 1.0.1

### Patch Changes

- [`44bcfad`](https://github.com/darenmalfait/nerdfishui/commit/44bcfad553be2bdbb33e24819b6fa222f5ed81a2)
  Thanks [@darenmalfait](https://github.com/darenmalfait)! - add default field
  props to combobox
