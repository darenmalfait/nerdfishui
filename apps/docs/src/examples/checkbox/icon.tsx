'use client'

import { Checkbox } from '@nerdfish/ui'
import { Cross } from 'lucide-react'

export function CheckboxIcon() {
	return (
		<div className="flex items-center space-x-2">
			<Checkbox
				icon={Cross}
				name="newsletter5"
				label="Subscribe to our newsletter"
				defaultChecked
			/>
		</div>
	)
}
