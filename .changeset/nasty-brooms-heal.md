---
'@nerdfish/ui': major
---

Input components do not have built-in FieldProps anymore.

## What does this mean?

You used to be able to provide a `label`, `description` and `error` to the input component. This was used to generate the `FieldProps` for you.

Now `input` components are just inputs. You can add a `label`, `description` and `error` via the `Field`, `Label` and `Description` components.

There are also new form components that work well with `react-hook-form`, to dynamically set the correct aria attributes.
