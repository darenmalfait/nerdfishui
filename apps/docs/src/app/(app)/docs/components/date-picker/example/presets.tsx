'use client'

import { DatePicker } from '@nerdfish/react/date-picker'
import { addDays } from 'date-fns'

export function DatePickerPresetsExample() {
	return (
		<div className="flex flex-row flex-wrap items-center gap-12">
			<DatePicker
				presets={[
					{
						value: new Date(),
						label: 'Today',
					},
					{
						value: addDays(new Date(), 1),
						label: 'Tomorrow',
					},
					{
						value: addDays(new Date(), 7),
						label: 'In a week',
					},
				]}
			/>
		</div>
	)
}
