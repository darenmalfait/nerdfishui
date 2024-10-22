'use client'

import { DatePicker, Description, Field, Input, Label } from '@nerdfish/ui'
import { addYears, format } from 'date-fns'
import { Calendar } from 'lucide-react'
import * as React from 'react'

export function DatePickerWithInputExample() {
	const [date, setDate] = React.useState<Date | undefined>(new Date())

	return (
		<div className="gap-sm flex w-full">
			<Field>
				<Label>
					Date
					<Description>Your date of birth</Description>
				</Label>

				<DatePicker
					className="p-sm"
					selected={date}
					onSelect={setDate}
					fromYear={addYears(new Date(), -120).getFullYear()}
					toYear={new Date().getFullYear()}
				>
					<Input
						name="date"
						placeholder="Date"
						icon={Calendar}
						value={date ? format(date, 'yyyy-MM-dd') : ''}
						onChange={(e) => setDate(new Date(e.target.value))}
					/>
				</DatePicker>
			</Field>
		</div>
	)
}
