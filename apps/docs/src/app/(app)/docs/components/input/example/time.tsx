'use client'

import { DateInput, TimeField } from '@nerdfish/react/date-field'
import { InputGroupAddon, InputGroup } from '@nerdfish/react/input-group'
import { ClockIcon } from 'lucide-react'

export function InputTimeExample() {
	return (
		<div className="flex flex-col gap-5">
			<div className="w-80">
				<TimeField>
					<DateInput />
				</TimeField>
			</div>
			<div className="w-80">
				<InputGroup>
					<TimeField className="w-full">
						<DateInput />
					</TimeField>
					<InputGroupAddon align="inline-end" className="pl-friends">
						<ClockIcon />
					</InputGroupAddon>
				</InputGroup>
			</div>
		</div>
	)
}
