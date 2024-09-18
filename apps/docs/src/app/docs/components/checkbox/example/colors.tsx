'use client'

import { Checkbox } from '@nerdfish/ui'

export function CheckboxColorsExample() {
	return (
		<div className="items-top flex flex-col space-x-2">
			<Checkbox
				bgClassName="bg-danger"
				textClassName="text-danger"
				name="newsletters4"
				defaultChecked
			/>
		</div>
	)
}
