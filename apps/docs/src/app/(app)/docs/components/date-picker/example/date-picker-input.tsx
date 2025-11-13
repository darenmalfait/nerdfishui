'use client'

import { parseDate, today, getLocalTimeZone } from '@internationalized/date'
import { Button } from '@nerdfish/react/button'
import { DateField, DateInput } from '@nerdfish/react/date-field'
import { DatePicker } from '@nerdfish/react/date-picker'
import { InputGroup, InputGroupAddon } from '@nerdfish/react/input-group'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useState } from 'react'

export function DatePickerInputExample() {
	const [date, setDate] = useState<string | null | undefined>(
		today(getLocalTimeZone()).toString(),
	)

	return (
		<div className="flex flex-col gap-5">
			<InputGroup>
				<DateField
					value={date ? parseDate(date) : undefined}
					onChange={(e) => {
						setDate(e?.toString() ?? undefined)
					}}
				>
					<DateInput />
				</DateField>
				<InputGroupAddon align="inline-end" className="pr-friends! ml-bff">
					<DatePicker
						selected={date ? new Date(date) : undefined}
						onSelect={(value) =>
							setDate(value ? format(value, 'yyyy-MM-dd') : undefined)
						}
					>
						<Button variant="ghost" size="sm" icon>
							<CalendarIcon className="size-4" />
						</Button>
					</DatePicker>
				</InputGroupAddon>
			</InputGroup>
		</div>
	)
}
