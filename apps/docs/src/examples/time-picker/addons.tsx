'use client'

import {
	Button,
	H3,
	TimePicker,
	TimePickerSegment,
	TimePickerSeparator,
} from '@nerdfish/ui'
import { ClockIcon } from 'lucide-react'

export function TimePickerAddonsDemo() {
	return (
		<div className="flex w-full flex-col items-center gap-2">
			<H3>Built-In Addons</H3>
			<TimePicker
				addOnTrailing={
					<Button variant="default" size="iconSm">
						<ClockIcon />
					</Button>
				}
			>
				<TimePickerSegment segment="hours" />
				<TimePickerSeparator>:</TimePickerSeparator>
				<TimePickerSegment segment="minutes" />
			</TimePicker>
			<H3>Custom Addons</H3>
			<TimePicker>
				<span className="flex flex-1 items-center justify-start">
					<TimePickerSegment segment="hours" />
					<TimePickerSeparator>:</TimePickerSeparator>
					<TimePickerSegment segment="minutes" />
				</span>
				<Button variant="default" size="iconSm">
					<ClockIcon />
				</Button>
			</TimePicker>
		</div>
	)
}
