/* eslint-disable jsx-a11y/prefer-tag-over-role */
'use client'

import * as React from 'react'
import {cx, useControllableState} from '@nerdfish/utils'
import {Check, ChevronsUpDown} from 'lucide-react'

import {Command} from './command'
import {
  getInputClassName,
  InputError,
  InputProps,
  Label,
  RawInputProps,
} from './input'
import {Popover} from './popover'
import {ScrollArea} from './scroll-area'

interface SelectProps
  extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'>,
    Pick<RawInputProps, 'hasError' | 'icon' | 'inputSize'> {
  id?: string
  options?: {
    value: string
    label: string
    icon?: React.ElementType
  }[]
  hasError?: boolean
  placeholder?: string
  emptyString?: string
  searchDisabled?: boolean
  onChange?: (value: string) => void
}

const RawSelect = React.forwardRef<HTMLInputElement, SelectProps>(
  function RawSelect(
    {
      value: valueProp,
      className,
      placeholder = 'Search...',
      emptyString = 'No items found.',
      options = [],
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
    const [value, setValue] = useControllableState(valueProp, defaultValue)

    const handleChange = React.useCallback(
      (v: string) => {
        setValue(v === value ? '' : v)
        onChange?.(v)
        setOpen(false)
      },
      [onChange, setValue, value],
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
              ? options.find(item => item.value === value)?.label
              : placeholder}
            <Icon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </button>
        </Popover.Trigger>
        <Popover.Content className="w-full min-w-[200px] p-0">
          <Command
            filter={(val, search) => {
              const item = options.find(({value: v}) => v === val)?.label

              if (item?.toLowerCase().includes(search.toLowerCase())) return 1
              return 0
            }}
          >
            {!searchDisabled ? (
              <>
                <Command.Input placeholder={placeholder} />
                <Command.Empty>{emptyString}</Command.Empty>
              </>
            ) : null}
            <Command.Group>
              <ScrollArea className="h-32 w-full">
                {options.map(item => {
                  const ItemIcon =
                    value === item.value ? Check : item.icon ?? 'div'

                  return (
                    <Command.Item
                      key={item.value}
                      onSelect={() => handleChange(item.value)}
                    >
                      <ItemIcon className={cx('mr-2 h-4 w-4')} />
                      {item.label}
                    </Command.Item>
                  )
                })}
              </ScrollArea>
            </Command.Group>
          </Command>
        </Popover.Content>
      </Popover>
    )
  },
)
RawSelect.displayName = 'RawSelect'

const Select = React.forwardRef<HTMLInputElement, SelectProps & InputProps>(
  function Select(
    {defaultValue, error, name, label, className, description, id, ...props},
    ref,
  ) {
    const inputId = id ?? name
    const errorId = `${inputId}-error`
    const descriptionId = `${inputId}-description`

    return (
      <div className="w-full">
        {label ? (
          <div className="flex flex-col justify-between gap-y-1 md:flex-row md:gap-x-1 md:gap-y-0">
            <Label htmlFor={inputId} className="mb-2">
              {label}
            </Label>
            {description ? (
              <span className="text-muted text-sm" id={descriptionId}>
                {description}
              </span>
            ) : null}
          </div>
        ) : null}

        <RawSelect
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
Select.displayName = 'Select'

export {Select}
