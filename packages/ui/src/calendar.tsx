'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {DayPicker, type DateRange} from 'react-day-picker'

import {buttonVariants} from './button'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      today={new Date()}
      showOutsideDays={showOutsideDays}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-sm font-medium',
        nav: 'space-x-1 flex items-center',
        nav_button: cx(
          buttonVariants({variant: 'outline'}),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1 flex items-center justify-center',
        nav_button_next: 'absolute right-1 flex items-center justify-center',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell:
          'text-gray-800 dark:text-gray-200 rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-secondary first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: 'h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-full flex items-center justify-center hover:bg-inverse hover:text-inverse hover:scale-105 active:scale-100 transition-transform',
        day_selected:
          '!bg-inverse !text-inverse border border-gray-900 dark:!border-white rounded-full',
        day_today:
          '!bg-nerdfish-500 !text-white hover:!bg-nerdfish-500 hover:!text-white',
        day_outside: 'text-gray-200 dark:text-gray-800 opacity-50',
        day_disabled: 'text-gray-200 dark:text-gray-800 opacity-50',
        day_range_middle:
          'aria-selected:bg-secondary aria-selected:text-secondary !border-none',
        day_hidden: 'invisible',
        ...classNames,
      }}
      className={className}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export {Calendar, type DateRange}
