'use client'

import * as React from 'react'
import {cx, useControllableState} from '@nerdfish/utils'
import {addDays, format} from 'date-fns'
import {AlertCircle, Calendar as CalendarIcon} from 'lucide-react'

import {Button} from './button'
import {Calendar} from './calendar'
import {Combobox} from './combobox'
import {
  InputError,
  InputProps,
  Label,
  RawInputProps,
  getInputClassName,
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

  const className = getInputClassName(classNameProp, !!error, inputSize)

  const offset = React.useMemo(() => {
    if (!selected) return undefined
    return Math.abs(addDays(new Date(), -1).getDate() - selected.getDate()) - 1
  }, [selected])

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
      <Popover>
        <Popover.Trigger asChild>
          <div className="relative w-full shadow-sm">
            <input type="hidden" name={name} value={selected?.toISOString()} />
            <Button
              type="button"
              variant="outline"
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
            </Button>
          </div>
        </Popover.Trigger>
        <Popover.Content className="flex w-auto flex-col space-y-2 p-2">
          {presets && presets.length > 0 ? (
            <Combobox
              name={`${name}-presets`}
              value={
                offset !== undefined
                  ? presets.find(preset => preset.value === offset.toString())
                      ?.value ?? ''
                  : ''
              }
              items={presets}
              onChange={value =>
                handleChange(addDays(new Date(), parseInt(value, 10)))
              }
            />
          ) : null}
          <div className="rounded-md">
            <Calendar
              mode="single"
              className="p-3"
              selected={selected}
              onSelect={handleChange}
            />
          </div>
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
