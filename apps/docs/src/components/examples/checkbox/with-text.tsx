'use client'

import { Checkbox } from '@nerdfish/ui'

export function CheckboxWithText() {
	return (
		<div className="items-top flex flex-col space-y-2">
			<Checkbox name="newsletters3" label="Subscribe to our newsletter" />
			<p className="text-muted mt-2 text-sm">
				We&apos;ll send you the latest news and updates.
			</p>
		</div>
	)
}
