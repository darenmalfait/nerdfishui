'use client'

import { Toggle } from '@nerdfish/react/toggle'
import { Underline } from 'lucide-react'

export function ToggleDisabledExample() {
	return (
		<Toggle aria-label="Toggle italic" disabled>
			<Underline className="h-4 w-4" />
		</Toggle>
	)
}
