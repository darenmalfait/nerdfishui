'use client'

import { TimeField } from '@nerdfish/ui'

export function TimeFieldHourCycleDemo() {
	return (
		<TimeField
			label="Hour Cycle"
			description="12 or 24"
			name="TimeField-field-hour-cycle"
			hourCycle={12}
		/>
	)
}
