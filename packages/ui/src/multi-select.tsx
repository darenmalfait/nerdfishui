'use client'

import * as React from 'react'
import {cx, getContrastColor, useControllableState} from '@nerdfish/utils'
import {Check, ChevronsUpDown, Pencil, Plus} from 'lucide-react'

import {Badge} from './badge'
import {Command} from './command'
import {Field, getInputClassName, InputProps, RawInputProps} from './input'
import {Popover} from './popover'
import {ScrollArea} from './scroll-area'

type Item = {
  value: string
  label: string
  color?: string
  description?: string
}

const badgeStyle = (color: string) => ({
  borderColor: color,
  backgroundColor: color,
  color: getContrastColor(color),
})

type MultiSelectProps = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'onChange' | 'value' | 'defaultValue'
> &
  Pick<RawInputProps, 'hasError' | 'icon' | 'inputSize'> & {
    options?: Item[]
    placeholder?: string
    onChange?: React.Dispatch<React.SetStateAction<Item[] | undefined>>
    value?: Item[]
    defaultValue?: Item[]
    onCreateItemsClicked?: (value: string) => void
    onEditItemsClicked?: () => void
    createNewLabel?: string
    editItemsLabel?: string
  }

const RawMultiSelect = React.forwardRef<HTMLInputElement, MultiSelectProps>(
  function RawMultiSelect(
    {
      value: valueProp,
      defaultValue,
      onChange,
      options = [],
      onCreateItemsClicked,
      onEditItemsClicked,
      hasError,
      placeholder = 'Select items',
      createNewLabel,
      editItemsLabel,
      ...props
    },
    ref,
  ) {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [openSelect, setOpenSelect] = React.useState(false)
    const [inputValue, setInputValue] = React.useState<string>('')
    const [selectedValues = [], setSelectedValues] = useControllableState<
      Item[]
    >(valueProp, defaultValue ?? [], onChange)

    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    function toggleItem(item: Item) {
      setSelectedValues(
        !selectedValues.includes(item)
          ? [...selectedValues, item]
          : selectedValues.filter(l => l.value !== item.value),
      )
      inputRef.current?.focus()
    }

    function onSelectOpenChange(value: boolean) {
      inputRef.current?.blur() // HACK: otherwise, would scroll automatically to the bottom of page
      setOpenSelect(value)
    }

    return (
      <div>
        <Popover open={openSelect} onOpenChange={onSelectOpenChange}>
          <Popover.Trigger asChild>
            <button
              data-slot="control"
              role="combobox"
              aria-controls="listbox"
              aria-expanded={openSelect}
              className={getInputClassName(
                `flex items-center justify-between ${props.className}`,
                hasError,
              )}
            >
              <span className="truncate">
                {selectedValues.length === 0 ? placeholder : null}
                {selectedValues.length === 1 ? selectedValues[0]?.label : null}
                {selectedValues.length === 2
                  ? selectedValues.map(({label}) => label).join(', ')
                  : null}
                {selectedValues.length > 2
                  ? `${selectedValues.length} items selected`
                  : null}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </button>
          </Popover.Trigger>
          <Popover.Content className="w-[200px] p-0">
            <Command
              filter={(value, search) => {
                const item = options.find(({value: v}) => v === value)?.label

                if (item?.toLowerCase().includes(search.toLowerCase())) return 1
                return 0
              }}
              loop
            >
              <Command.Input
                ref={inputRef}
                placeholder="Search items..."
                value={inputValue}
                onValueChange={setInputValue}
              />
              <ScrollArea className="h-32 w-full">
                <Command.Group>
                  {options.map(item => {
                    const isActive = selectedValues.includes(item)

                    return (
                      <Command.Item
                        key={item.value}
                        value={item.value}
                        onSelect={() => toggleItem(item)}
                        className="items-start"
                      >
                        <Check
                          className={cx(
                            'mr-2 h-4 w-4 pt-1',
                            isActive ? 'opacity-100' : 'opacity-0',
                          )}
                        />
                        <div className="flex flex-col items-start gap-y-1">
                          <div className="flex justify-start">
                            <span
                              className="mr-2 h-4 w-4 rounded-full"
                              style={{backgroundColor: item.color}}
                            />
                            <span className="flex-1">{item.label}</span>
                          </div>
                          {item.description ? (
                            <span className="text-muted text-[10px]">
                              {item.description}
                            </span>
                          ) : null}
                        </div>
                      </Command.Item>
                    )
                  })}
                  {onEditItemsClicked && inputValue.length === 0 ? (
                    <Command.Item
                      onSelect={() => {
                        setOpenSelect(false)
                        onEditItemsClicked()
                      }}
                      className="flex gap-x-2"
                      {...{inputValue, options}}
                    >
                      <span>
                        <Pencil className="h-4 w-4" />
                      </span>
                      <span>{editItemsLabel ?? 'Edit labels'}</span>
                    </Command.Item>
                  ) : null}
                </Command.Group>
                {onCreateItemsClicked && inputValue.length > 0 ? (
                  <button
                    onSelect={() => {
                      setOpenSelect(false)
                      onCreateItemsClicked(inputValue)
                    }}
                    className="flex w-full items-center gap-x-2 px-2 py-1"
                  >
                    <span>
                      <Plus className="h-4 w-4" />
                    </span>
                    <span>{createNewLabel ?? `Create "${inputValue}"`}</span>
                  </button>
                ) : null}
              </ScrollArea>
            </Command>
          </Popover.Content>
        </Popover>

        <div className="relative mt-3 overflow-y-auto">
          {selectedValues.map(({label, value, color}) => (
            <Badge
              key={value}
              variant="outline"
              style={color ? badgeStyle(color) : undefined}
              className="dark:!bg-opacity/20 bg-muted shadow-outline mb-2 mr-2 border"
            >
              {label}
            </Badge>
          ))}
        </div>
      </div>
    )
  },
)

const MultiSelect = React.forwardRef<
  HTMLInputElement,
  MultiSelectProps & InputProps
>(function MultiSelect(
  {defaultValue, error, name, label, className, description, id, ...props},
  ref,
) {
  const inputId = id ?? name
  const errorId = `${inputId}-error`
  const descriptionId = `${inputId}-description`

  return (
    <Field
      {...{
        description,
        descriptionId,
        error,
        errorId,
        htmlFor: inputId,
        label,
        className,
      }}
    >
      <RawMultiSelect
        hasError={!!error}
        {...(props as MultiSelectProps)}
        ref={ref}
        name={name}
        id={inputId}
        autoComplete={name}
        required
        defaultValue={defaultValue}
        aria-describedby={
          error ? errorId : description ? descriptionId : undefined
        }
      />
    </Field>
  )
})

export {MultiSelect, RawMultiSelect}
