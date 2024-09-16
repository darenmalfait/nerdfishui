'use client'

import {
	TimePicker,
	TimePickerSegment,
	TimePickerSeparator,
} from '@nerdfish/ui'

export function TimePickerHourCycleDemo() {
	return (
		<TimePicker options={{ hour12: true }}>
			<TimePickerSegment segment="hours" />
			<TimePickerSeparator>:</TimePickerSeparator>
			<TimePickerSegment segment="minutes" />
			<TimePickerSegment segment="am/pm" />
		</TimePicker>
	)
}
