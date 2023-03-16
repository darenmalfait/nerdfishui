import * as React from 'react'
import {cx} from '@nerdfish/utils'
import {Check, ChevronsUpDown} from 'lucide-react'

import {Command} from './command'
import {getInputClassName} from './input'
import {Popover} from './popover'

const Combobox = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<'input'> & {
    items?: {
      value: string
      label: string
    }[]
    placeholder?: string
    emptyString?: string
    searchDisabled?: boolean
  }
>(function Combobox(
  {
    className,
    placeholder = 'Search...',
    emptyString = 'No items found.',
    items = [],
    defaultValue = '',
    searchDisabled,
    ...props
  },
  ref,
) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(defaultValue)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          role="combobox"
          aria-haspopup="listbox"
          aria-controls="listbox"
          aria-expanded={open}
          className={cx(
            getInputClassName(),
            'flex justify-between items-center',
            className,
          )}
        >
          <input
            ref={ref}
            type="hidden"
            defaultValue={defaultValue}
            value={value}
            {...props}
          />

          {value
            ? items.find(item => item.value === value)?.label
            : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </Popover.Trigger>
      <Popover.Content className="w-[200px] p-0">
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
                onSelect={currentValue => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}
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
Combobox.displayName = 'Combobox'

export {Combobox}
