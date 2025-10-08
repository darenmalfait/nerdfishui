'use client'

import { Button } from '@nerdfish/react/button'
import { DatePicker } from '@nerdfish/react/date-picker'
import { CalendarIcon } from 'lucide-react'

export function DatePickerCustomTriggerExample() {
	return (
		<div className="flex flex-row flex-wrap items-center gap-12">
			<DatePicker>
				<Button variant="ghost" icon>
					<CalendarIcon className="mr-sm size-4" />
				</Button>
			</DatePicker>
		</div>
	)
}
