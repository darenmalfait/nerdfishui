'use client'

import * as React from 'react'
import {Calendar} from '@nerdfish/ui'

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const currentYear = new Date().getFullYear()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border p-3"
      fromYear={currentYear - 10}
      toYear={currentYear + 10}
    />
  )
}
