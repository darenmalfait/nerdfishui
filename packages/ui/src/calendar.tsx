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
      captionLayout="dropdown-buttons"
      className={cx('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center px-10',
        caption_label: 'flex items-center gap-2 text-sm font-medium',
        caption_dropdowns: 'flex gap-4 [&_.rdp-vhidden]:hidden',
        dropdown_month: 'relative inline-flex items-center',
        dropdown_year: 'relative inline-flex items-center',
        dropdown:
          'absolute inset-0 w-full appearance-none opacity-0 z-10 cursor-pointer',
        nav: 'space-x-1 flex items-center',
        nav_button: cx(
          buttonVariants({variant: 'outline'}),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-secondary rounded-md w-9 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: 'h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-secondary [&:has([aria-selected])]:bg-secondary first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
        day: cx(
          buttonVariants({variant: 'ghost'}),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100',
        ),
        day_range_end: 'day-range-end',
        day_selected:
          'bg-inverse rounded-full text-inverse hover:bg-primary hover:text-primary focus:bg-inverse focus:text-inverse',
        day_today: 'bg-nerdfish text-white',
        day_outside:
          'day-outside text-secondary opacity-50 aria-selected:bg-secondary aria-selected:text-secondary aria-selected:opacity-80',
        day_disabled: 'text-secondary opacity-50',
        day_range_middle:
          'aria-selected:bg-secondary aria-selected:text-primary',
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
