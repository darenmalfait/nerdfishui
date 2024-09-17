'use client'

import {
	TimePicker,
	TimePickerSegment,
	TimePickerSeparator,
} from '@nerdfish/ui'
import { ClockIcon } from 'lucide-react'

export function TimePickerDemo() {
	return (
		<TimePicker defaultValue={new Date()} icon={ClockIcon}>
			<TimePickerSegment segment="hours" />
			<TimePickerSeparator>:</TimePickerSeparator>
			<TimePickerSegment segment="minutes" />
		</TimePicker>
	)
}
