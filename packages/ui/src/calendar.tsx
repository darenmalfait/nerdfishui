'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import {addYears} from 'date-fns'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {DayPicker, type DateRange} from 'react-day-picker'

import {getButtonClassName} from './button'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  fromYear = addYears(new Date(), -10).getFullYear(),
  toYear = addYears(new Date(), +10).getFullYear(),
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      fromYear={fromYear}
      toYear={toYear}
      today={new Date()}
      showOutsideDays={showOutsideDays}
      classNames={{
        cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-white/5 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cx(
          getButtonClassName({variant: 'ghost'}),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 text-black dark:text-white',
        ),
        day_today:
          'rounded-full bg-nerdfish hover:bg-black/20 dark:hover:bg-white/20 text-black dark:text-white',
        day_selected: 'rounded-full bg-secondary !text-black',
        caption_label: 'hidden',
        caption_dropdowns:
          'flex w-full items-center justify-center space-x-2 mb-2',
        nav_button_previous: 'hidden',
        nav_button_next: 'hidden',
        months: 'space-y-4',
        day_range_middle: 'bg-white',
        ...classNames,
      }}
      className={className}
      {...props}
      components={{
        ...props.components,
        Dropdown: ({...rest}) => (
          <div className="focus-outline:none flex w-full space-x-0 rounded-md bg-black/5 px-3 text-sm text-black outline-none transition-all duration-300 hover:bg-black/10 dark:bg-white/5 dark:text-white  dark:hover:bg-white/10">
            <select
              autoFocus
              {...rest}
              className="h-full w-full bg-transparent py-2"
            />
          </div>
        ),
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4 " />,
      }}
      captionLayout="dropdown-buttons"
    />
  )
}
Calendar.displayName = 'Calendar'

export {Calendar, type DateRange}
