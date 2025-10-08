'use client'

import { Calendar } from '@nerdfish/react/calendar'
import * as React from 'react'

export function CalendarExample() {
	const [date, setDate] = React.useState<Date | undefined>(new Date())

	return (
		<Calendar
			mode="single"
			selected={date}
			onSelect={setDate}
			className="rounded-base border-border border shadow-sm"
			captionLayout="dropdown"
		/>
	)
}
