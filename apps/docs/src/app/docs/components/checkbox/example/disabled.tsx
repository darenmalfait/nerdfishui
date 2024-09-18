'use client'

import { Checkbox } from '@nerdfish/ui'

export function CheckboxDisabledExample() {
	return (
		<div className="flex flex-col items-center gap-6 space-x-2">
			<Checkbox name="newsletter2" disabled />
			<Checkbox checked name="newsletter3" disabled />
		</div>
	)
}
