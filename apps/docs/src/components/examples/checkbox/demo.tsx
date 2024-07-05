'use client'

import { Checkbox } from '@nerdfish/ui'

export function CheckboxDemo() {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox name="newsletter" label="Subscribe to our newsletter" />
		</div>
	)
}
