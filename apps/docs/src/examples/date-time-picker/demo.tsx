'use client'

import { DateTimePicker } from '@nerdfish/ui'

export function DateTimePickerDemo() {
	return <DateTimePicker withTime defaultValue={new Date()} />
}
