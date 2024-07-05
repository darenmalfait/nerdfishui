'use client'

import { DateRangePicker, type DateRange } from '@nerdfish/ui'
import { addDays, addYears } from 'date-fns'
import * as React from 'react'

export function DateRangePickerExample() {
	const [date, setDate] = React.useState<DateRange | undefined>({
		from: new Date(2022, 0, 20),
		to: addDays(new Date(2022, 0, 20), 20),
	})

	return (
		<DateRangePicker
			className="p-3"
			selected={date}
			onSelect={setDate}
			fromYear={addYears(new Date(), -3).getFullYear()}
			toYear={addYears(new Date(), 3).getFullYear()}
		/>
	)
}
