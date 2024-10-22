'use client'

import { Checkbox } from '@nerdfish/ui'
import { Cross } from 'lucide-react'

export function CheckboxIconExample() {
	return (
		<div className="space-x-sm flex items-center">
			<Checkbox icon={Cross} name="newsletter5" defaultChecked />
		</div>
	)
}
