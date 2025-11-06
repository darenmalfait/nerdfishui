'use client'

import { Calendar } from '@nerdfish/react/calendar'
import * as React from 'react'

export function CalendarCellSizeExample() {
	const [date, setDate] = React.useState<Date | undefined>(new Date())

	return (
		<Calendar
			mode="single"
			cellSize="56px"
			selected={date}
			onSelect={setDate}
			className="rounded-base border-border p-friends border shadow-sm"
			captionLayout="dropdown"
		/>
	)
}
