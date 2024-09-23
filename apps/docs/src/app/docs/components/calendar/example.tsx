'use client'

import { Calendar } from '@nerdfish/ui'
import * as React from 'react'

export function CalendarExample() {
	const [date, setDate] = React.useState<Date | undefined>(new Date())
	const currentYear = new Date().getFullYear()

	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			className="rounded-3xl border p-3"
			fromYear={currentYear - 10}
			toYear={currentYear + 10}
		/>
	)
}
