'use client'

import { Checkbox } from '@nerdfish/ui'
import * as React from 'react'

export function CheckboxColors() {
	return (
		<div className="items-top flex flex-col space-x-2">
			<Checkbox
				bgClassName="bg-danger"
				textClassName="text-danger"
				name="newsletters4"
				label="Subscribe to our newsletter"
				defaultChecked
			/>
		</div>
	)
}
