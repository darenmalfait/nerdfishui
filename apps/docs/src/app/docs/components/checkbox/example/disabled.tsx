'use client'

import { Checkbox } from '@nerdfish/ui'

export function CheckboxDisabledExample() {
	return (
		<div className="gap-md space-x-sm flex flex-col items-center">
			<Checkbox name="newsletter2" disabled />
			<Checkbox checked name="newsletter3" disabled />
		</div>
	)
}
