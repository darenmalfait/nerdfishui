'use client'

import * as React from 'react'
import {cx, useControllableState} from '@nerdfish/utils'
import {addDays, format} from 'date-fns'
import {Calendar as CalendarIcon} from 'lucide-react'
import {DateRange} from 'react-day-picker'

import {Badge} from './badge'
import {Button} from './button'
import {Calendar, CalendarProps} from './calendar'
import {Popover} from './popover'

type Preset = {value: string; label: string}

function Presets({
  presets = [],
  onChange,
  className,
}: {
  presets?: Preset[]
  onChange?: (date: Date) => void
  className?: string
}) {
  if (!presets.length) return null

  return (
    <div className={cx('flex max-w-[250px] flex-wrap px-3', className)}>
      {presets.map(({value, label}) => (
        <button
          key={value}
          type="button"
          className="text-primary/50 hover:text-primary/70 m-1 inline-flex text-sm"
          onClick={() => onChange?.(addDays(new Date(), parseInt(value, 10)))}
        >
          <Badge>{label}</Badge>
        </button>
      ))}
    </div>
  )
}

function DatePickerTrigger({
  children,
  selected,
  className,
  placeholder,
}: {
  children?: React.ReactNode
  selected?: Date
  className?: string
  placeholder?: string
}) {
  if (children) return children

  return (
    <Button
      variant="outline"
      className={cx(
        'w-[280px] justify-start text-left font-normal',
        !selected && 'text-muted',
        className,
      )}
    >
      <CalendarIcon className="mr-2 size-4" />
      <span>{selected ? format(selected, 'PPP') : placeholder}</span>
    </Button>
  )
}

function DatePicker({
  className,
  selected: selectedProp,
  onSelect: onSelectProp,
  presets,
  placeholder = 'Pick a date',
  children,
  fromYear,
  toYear,
  ...props
}: CalendarProps & {
  className?: string
  selected?: Date
  onSelect?: (date: Date) => void
  presets?: Preset[]
  placeholder?: string
  children?: React.ReactNode
}) {
  const [selected, onSelect] = useControllableState(
    selectedProp,
    selectedProp,
    onSelectProp,
  )

  return (
    <Popover>
      <Popover.Trigger>
        <DatePickerTrigger
          selected={selected}
          className={className}
          placeholder={placeholder}
        >
          {children}
        </DatePickerTrigger>
      </Popover.Trigger>
      <Popover.Content className="w-auto p-0">
        <Calendar
          {...props}
          mode="single"
          initialFocus
          defaultMonth={selected}
          selected={selected}
          fromYear={fromYear}
          toYear={toYear}
          onSelect={onSelect}
        />
        <Presets presets={presets} className="py-3" onChange={onSelect} />
      </Popover.Content>
    </Popover>
  )
}

function DateRangePickerTrigger({
  children,
  selected,
  className,
  placeholder,
}: {
  children?: React.ReactNode
  className?: string
  selected?: DateRange
  placeholder?: string
}) {
  if (children) return children

  return (
    <Button
      id="date"
      variant="outline"
      className={cx(
        'w-[300px] justify-start text-left font-normal',
        !selected && 'text-muted',
        className,
      )}
    >
      <CalendarIcon className="mr-2 size-4" />
      <span>
        {selected?.from ? (
          selected.to ? (
            <>
              {format(selected.from, 'LLL dd, y')} -{' '}
              {format(selected.to, 'LLL dd, y')}
            </>
          ) : (
            format(selected.from, 'LLL dd, y')
          )
        ) : (
          placeholder
        )}
      </span>
    </Button>
  )
}

function DateRangePicker({
  className,
  selected,
  onSelect,
  children,
  fromYear,
  toYear,
  placeholder,
  ...props
}: CalendarProps & {
  selected?: DateRange
  onSelect?: (date: DateRange) => void
  children?: React.ReactNode
  placeholder?: string
}) {
  return (
    <div className={cx('grid gap-2', className)}>
      <Popover>
        <Popover.Trigger>
          <DateRangePickerTrigger
            selected={selected}
            className={className}
            placeholder={placeholder}
          >
            {children}
          </DateRangePickerTrigger>
        </Popover.Trigger>
        <Popover.Content className="w-auto p-0" align="start">
          <Calendar
            {...props}
            initialFocus
            mode="range"
            defaultMonth={selected?.from}
            selected={selected}
            onSelect={onSelect}
            numberOfMonths={2}
            fromYear={fromYear}
            toYear={toYear}
          />
        </Popover.Content>
      </Popover>
    </div>
  )
}

export {DatePicker, DateRangePicker}
export type {DateRange, Preset}
