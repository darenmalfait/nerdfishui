'use client'

import * as React from 'react'
import {Button, Calendar, Popover} from '@nerdfish/ui'
import {cx} from '@nerdfish/utils'
import {addDays, format} from 'date-fns'
import {Calendar as CalendarIcon} from 'lucide-react'
import {DateRange} from 'react-day-picker'

export function DateRangePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  return (
    <div className={cx('grid gap-2', className)}>
      <Popover>
        <Popover.Trigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cx(
              'w-[300px] justify-start text-left font-normal',
              !date && 'text-secondary',
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} -{' '}
                  {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </Popover.Trigger>
        <Popover.Content className="w-auto p-0" align="start">
          <Calendar
            className="p-3"
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </Popover.Content>
      </Popover>
    </div>
  )
}
