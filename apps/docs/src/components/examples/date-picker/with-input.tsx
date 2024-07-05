'use client'

import { DatePicker, Input } from '@nerdfish/ui'
import { addYears, format } from 'date-fns'
import { Calendar } from 'lucide-react'
import * as React from 'react'

export function DatePickerWithInputExample() {
	const [date, setDate] = React.useState<Date>(new Date())

	return (
		<div className="flex w-full gap-2">
			<DatePicker
				className="p-3"
				selected={date}
				onSelect={setDate}
				fromYear={addYears(new Date(), -120).getFullYear()}
				toYear={new Date().getFullYear()}
			>
				<Input
					name="date"
					label="Date"
					placeholder="Date"
					icon={Calendar}
					value={format(date, 'yyyy-MM-dd')}
					onChange={(e) => setDate(new Date(e.target.value))}
					description="Your date of birth"
				/>
			</DatePicker>
		</div>
	)
}
