'use client'

import * as React from 'react'
import {cx, useControllableState} from '@nerdfish/utils'
import {PopoverTrigger} from '@radix-ui/react-popover'
import {addDays, format} from 'date-fns'
import {Calendar as CalendarIcon} from 'lucide-react'
import {DateRange} from 'react-day-picker'

import {Badge} from './badge'
import {Button} from './button'
import {Calendar, CalendarProps} from './calendar'
import {Popover} from './popover'

type Preset = {value: string; label: string}

function Presets({
  presets,
  onChange,
  className,
}: {
  presets: Preset[]
  onChange?: (date: Date) => void
  className?: string
}) {
  return (
    <div className={cx('flex max-w-[250px] flex-wrap px-3', className)}>
      {presets.map(({value, label}) => (
        <button
          key={value}
          type="button"
          className="m-1 inline-flex text-sm text-gray-500 hover:text-gray-700"
          onClick={() => onChange?.(addDays(new Date(), parseInt(value, 10)))}
        >
          <Badge>{label}</Badge>
        </button>
      ))}
    </div>
  )
}

export function DatePicker({
  className,
  selected: selectedProp,
  onSelect: onSelectProp,
  presets,
  placeholder = 'Pick a date',
  children,
  fromYear,
  toYear,
}: Pick<CalendarProps, 'fromYear' | 'toYear'> & {
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
      <PopoverTrigger asChild>
        {children ? (
          children
        ) : (
          <Button
            variant="outline"
            className={cx(
              'w-[280px] justify-start text-left font-normal',
              !selected && 'text-muted',
              className,
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected ? format(selected, 'PPP') : <span>{placeholder}</span>}
          </Button>
        )}
      </PopoverTrigger>
      <Popover.Content className="w-auto p-0">
        <Calendar
          mode="single"
          initialFocus
          defaultMonth={selected}
          selected={selected}
          onSelect={onSelect}
          fromYear={fromYear}
          toYear={toYear}
        />
        {presets?.length ? (
          <Presets presets={presets} className="py-3" onChange={onSelect} />
        ) : null}
      </Popover.Content>
    </Popover>
  )
}

export function DateRangePicker({
  className,
  selected,
  onSelect,
  children,
  fromYear,
  toYear,
}: React.HTMLAttributes<HTMLDivElement> &
  Pick<CalendarProps, 'fromYear' | 'toYear'> & {
    selected?: DateRange
    onSelect?: (date: DateRange) => void
    children?: React.ReactNode
  }) {
  return (
    <div className={cx('grid gap-2', className)}>
      <Popover>
        <PopoverTrigger asChild>
          {children ? (
            children
          ) : (
            <Button
              id="date"
              variant="outline"
              className={cx(
                'w-[300px] justify-start text-left font-normal',
                !selected && 'text-muted',
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
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
                <span>Pick a date</span>
              )}
            </Button>
          )}
        </PopoverTrigger>
        <Popover.Content className="w-auto p-0" align="start">
          <Calendar
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
