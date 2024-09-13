'use client'

import { Toggle } from '@nerdfish/ui'
import { Italic } from 'lucide-react'

export function ToggleDisabled() {
	return (
		<Toggle aria-label="Toggle italic" disabled>
			<Italic className="size-4" />
		</Toggle>
	)
}
