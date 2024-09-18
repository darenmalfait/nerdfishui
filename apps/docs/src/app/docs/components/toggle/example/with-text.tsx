'use client'

import { Toggle } from '@nerdfish/ui'
import { Italic } from 'lucide-react'

export function ToggleWithTextExample() {
	return (
		<Toggle aria-label="Toggle italic">
			<Italic className="mr-2 size-4" />
			Italic
		</Toggle>
	)
}
