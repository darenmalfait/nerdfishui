'use client'

import { DateField, DateInput } from '@nerdfish/react/date-field'
import { InputGroupAddon, InputGroup } from '@nerdfish/react/input-group'
import { CalendarDays } from 'lucide-react'

export function InputDatetimeExample() {
	return (
		<div className="flex flex-col gap-5">
			<div className="w-80">
				<DateField granularity="minute">
					<DateInput />
				</DateField>
			</div>
			<div className="w-80">
				<InputGroup>
					<DateField className="pr-friends w-full" granularity="minute">
						<DateInput />
					</DateField>
					<InputGroupAddon align="inline-end">
						<CalendarDays />
					</InputGroupAddon>
				</InputGroup>
			</div>
		</div>
	)
}
