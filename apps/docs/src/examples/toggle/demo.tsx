'use client'

import { Toggle } from '@nerdfish/ui'
import { Italic } from 'lucide-react'

export function ToggleDemo() {
	return (
		<Toggle aria-label="Toggle italic">
			<Italic className="size-4" />
		</Toggle>
	)
}
