'use client'

import { TimeField } from '@nerdfish/ui'
import { Time } from '@nerdfish/utils'

export function TimeFieldDemo() {
	return (
		<TimeField name="TimeField-field-basic" defaultValue={new Time(12, 30)} />
	)
}
