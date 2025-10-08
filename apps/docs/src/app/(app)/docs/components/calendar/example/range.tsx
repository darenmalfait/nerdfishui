'use client'

import { Calendar, type DateRange } from '@nerdfish/react/calendar'
import { useState } from 'react'

export function CalendarRangeExample() {
	const [range, setRange] = useState<DateRange | undefined>({
		from: new Date(),
		to: new Date(),
	})

	return (
		<div className="max-w-sm">
			<Calendar
				mode="range"
				numberOfMonths={2}
				selected={range}
				onSelect={setRange}
				cellSize="32px"
				className="rounded-base border-border border shadow-sm"
				captionLayout="dropdown"
			/>
		</div>
	)
}
