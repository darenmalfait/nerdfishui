'use client'

import { DatePicker } from '@nerdfish/ui'
import { addYears } from 'date-fns'

export function DatePickerExample() {
	return (
		<DatePicker
			presets={[
				{
					value: '0',
					label: 'Today',
				},
				{
					value: '1',
					label: 'Tomorrow',
				},
				{
					value: '7',
					label: 'Next week',
				},
			]}
			onSelect={(date) => console.info(date)}
			fromYear={addYears(new Date(), -3).getFullYear()}
			toYear={addYears(new Date(), 3).getFullYear()}
		/>
	)
}
