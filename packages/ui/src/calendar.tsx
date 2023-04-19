'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import {ChevronLeft, ChevronRight} from 'lucide-react'
import {DayPicker} from 'react-day-picker'

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
      showOutsideDays={showOutsideDays}
      className={cx('p-3', className)}
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
          'text-gray-600 dark:text-gray-400 rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-secondary first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cx(
          buttonVariants({variant: 'ghost'}),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 flex items-center justify-center',
        ),
        day_selected:
          'bg-primary text-primary hover:bg-primary hover:text-primary focus:bg-primary focus:text-primary',
        day_today: 'bg-nerdfish-500 text-white',
        day_outside: 'text-gray-400 dark:text-gray-600 opacity-50',
        day_disabled: 'text-gray-400 dark:text-gray-600 opacity-50',
        day_range_middle:
          'aria-selected:bg-gray-400 aria-selected:text-primary',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeft className="h-4 w-4" />,
        IconRight: () => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'

export {Calendar}
