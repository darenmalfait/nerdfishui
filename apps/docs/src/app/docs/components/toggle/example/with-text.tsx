'use client'

import { Toggle } from '@nerdfish/ui'
import { Italic } from 'lucide-react'

export function ToggleWithTextExample() {
	return (
		<Toggle aria-label="Toggle italic">
			<Italic className="mr-sm size-4" />
			Italic
		</Toggle>
	)
}
