'use client'

import * as React from 'react'
import {cx, useControllableState} from '@nerdfish/utils'
import {addDays, addYears, format} from 'date-fns'
import {AlertCircle, Calendar as CalendarIcon} from 'lucide-react'

import {Badge} from './badge'
import {Calendar} from './calendar'
import {
  getInputClassName,
  InputError,
  InputProps,
  Label,
  RawInputProps,
} from './input'
import {Popover} from './popover'

const Datepicker = React.forwardRef<
  HTMLInputElement,
  InputProps & {
    selected?: Date
    defaultSelected?: Date
    onSelect?: (date: Date | undefined) => void
    presets?: {value: string; label: string}[] | false
    placeholder?: string
  } & Pick<RawInputProps, 'inputSize' | 'icon'>
>(function Datepicker({
  presets = [
    {value: '0', label: 'Today'},
    {value: '1', label: 'Tomorrow'},
    {value: '3', label: 'In 3 days'},
    {value: '7', label: 'In a week'},
  ],
  name,
  label,
  error,
  icon: Icon = CalendarIcon,
  description,
  inputSize,
  placeholder = 'Pick a date',
  className: classNameProp,
  selected: selectedProp,
  defaultSelected,
  onSelect,
}) {
  const [selected, setSelected] = useControllableState<Date | undefined>(
    selectedProp,
    defaultSelected,
  )

  const inputId = name
  const errorId = `${inputId}-error`
  const descriptionId = `${inputId}-description`

  const className = getInputClassName(
    `flex justify-between${classNameProp}`,
    !!error,
    inputSize,
  )

  const handleChange = React.useCallback<(s: Date | undefined) => void>(
    s => {
      setSelected(s)
      onSelect?.(s)
    },
    [onSelect, setSelected],
  )

  return (
    <div className="w-full">
      {label ? (
        <div className="flex flex-col justify-between gap-y-1 md:flex-row md:gap-x-1 md:gap-y-0">
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
      <Popover>
        <Popover.Trigger asChild>
          <div className="relative w-full shadow-sm">
            <input type="hidden" name={name} value={selected?.toISOString()} />
            <button
              type="button"
              className={cx(className, !selected && 'text-secondary')}
            >
              {selected ? format(selected, 'PPP') : <span>{placeholder}</span>}
              {!error ? (
                <Icon
                  width="20px"
                  height="20px"
                  className="text-gray-300' absolute right-5 top-0 z-10 flex h-full items-center justify-center p-0"
                />
              ) : (
                <div className="absolute right-5 top-0 z-10 flex h-full items-center justify-center p-0">
                  <AlertCircle
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              )}
            </button>
          </div>
        </Popover.Trigger>
        <Popover.Content className="flex w-auto flex-col space-y-2 p-2">
          <div className="rounded-2xl">
            <Calendar
              mode="single"
              captionLayout="dropdown-buttons"
              fromYear={addYears(new Date(), -1).getFullYear()}
              toYear={addYears(new Date(), 1).getFullYear()}
              className="p-3"
              selected={selected}
              onSelect={handleChange}
            />
          </div>
          {presets && presets.length > 0 ? (
            <div className="flex max-w-[250px] flex-wrap px-3">
              {presets.map(({value, label: title}) => (
                <button
                  key={value}
                  type="button"
                  className="m-1 inline-flex text-sm text-gray-500 hover:text-gray-700"
                  onClick={() =>
                    handleChange(addDays(new Date(), parseInt(value, 10)))
                  }
                >
                  <Badge>{title}</Badge>
                </button>
              ))}
            </div>
          ) : null}
        </Popover.Content>
      </Popover>
      {error ? (
        <InputError className="mt-2" id={errorId}>
          {error}
        </InputError>
      ) : null}
    </div>
  )
})

export {Datepicker}
