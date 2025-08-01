'use client'

import { Checkbox } from '@nerdfish/ui'

export function CheckboxColorsExample() {
	return (
		<div className="items-top space-x-sm flex flex-col">
			<Checkbox
				bgClassName="bg-background-danger"
				textClassName="text-foreground-danger"
				name="newsletters4"
				defaultChecked
			/>
		</div>
	)
}
