'use client'

import {
	TimePicker,
	TimePickerSegment,
	TimePickerSeparator,
} from '@nerdfish/ui'

export function TimePickerDemo() {
	return (
		<TimePicker defaultValue={new Date()}>
			<TimePickerSegment segment="hours" />
			<TimePickerSeparator>:</TimePickerSeparator>
			<TimePickerSegment segment="minutes" />
		</TimePicker>
	)
}
