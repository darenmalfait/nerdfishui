import * as React from 'react'
import {cx} from '@nerdfish/utils'
import {Check, ChevronsUpDown} from 'lucide-react'

import {Command} from './command'
import {
  InputError,
  InputProps,
  Label,
  RawInputProps,
  getInputClassName,
} from './input'
import {Popover} from './popover'

interface ComboboxProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'> {
  id?: string
  items?: {
    value: string
    label: string
  }[]
  hasError?: boolean
  placeholder?: string
  emptyString?: string
  searchDisabled?: boolean
  onChange?: (value: string) => void
}

const RawCombobox = React.forwardRef<
  HTMLInputElement,
  ComboboxProps & Pick<RawInputProps, 'hasError' | 'icon' | 'inputSize'>
>(function RawCombobox(
  {
    value: valueProp,
    className,
    placeholder = 'Search...',
    emptyString = 'No items found.',
    items = [],
    defaultValue = '',
    hasError,
    icon: Icon = ChevronsUpDown,
    inputSize,
    searchDisabled,
    onChange,
    ...props
  },
  ref,
) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(valueProp ?? defaultValue)

  const handleChange = React.useCallback(
    (v: string) => {
      setValue(v === value ? '' : v)
      onChange?.(v)
      setOpen(false)
    },
    [onChange, value],
  )

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          role="combobox"
          aria-haspopup="listbox"
          aria-controls="listbox"
          aria-expanded={open}
          className={cx(
            getInputClassName(className, hasError, inputSize),
            'flex justify-between items-center',
            className,
          )}
        >
          <input ref={ref} type="hidden" value={value} {...props} />

          {value
            ? items.find(item => item.value === value)?.label
            : placeholder}
          <Icon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </Popover.Trigger>
      <Popover.Content className="w-full min-w-[200px] p-0">
        <Command>
          {!searchDisabled ? (
            <>
              <Command.Input placeholder={placeholder} />
              <Command.Empty>{emptyString}</Command.Empty>
            </>
          ) : null}
          <Command.Group>
            {items.map(item => (
              <Command.Item
                key={item.value}
                onSelect={() => handleChange(item.value)}
              >
                <Check
                  className={cx(
                    'mr-2 h-4 w-4',
                    value === item.value ? 'opacity-100' : 'opacity-0',
                  )}
                />
                {item.label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command>
      </Popover.Content>
    </Popover>
  )
})
RawCombobox.displayName = 'RawCombobox'

const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps & InputProps>(
  function Combobox(
    {defaultValue, error, name, label, className, description, id, ...props},
    ref,
  ) {
    const inputId = id ?? name
    const errorId = `${inputId}-error`
    const descriptionId = `${inputId}-description`

    return (
      <div className="w-full">
        {label ? (
          <div className="flex justify-between">
            <Label htmlFor={inputId} className="mb-2">
              {label}
            </Label>
            {description ? (
              <span className="text-sm text-gray-200" id={descriptionId}>
                {description}
              </span>
            ) : null}
          </div>
        ) : null}

        <RawCombobox
          ref={ref}
          {...props}
          name={name}
          id={inputId}
          autoComplete={name}
          required
          defaultValue={defaultValue}
          aria-describedby={
            error ? errorId : description ? descriptionId : undefined
          }
          hasError={!!error}
        />

        {error ? (
          <InputError className="mt-2" id={errorId}>
            {error}
          </InputError>
        ) : null}
      </div>
    )
  },
)
Combobox.displayName = 'Combobox'

export {Combobox}
