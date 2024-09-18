'use client'

import { Toggle } from '@nerdfish/ui'
import { Italic } from 'lucide-react'

export function ToggleDisabledExample() {
	return (
		<Toggle aria-label="Toggle italic" disabled>
			<Italic className="size-4" />
		</Toggle>
	)
}
