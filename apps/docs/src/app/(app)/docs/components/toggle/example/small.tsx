'use client'

import { Toggle } from '@nerdfish/react/toggle'
import { Italic } from 'lucide-react'

export function ToggleSmallExample() {
	return (
		<Toggle size="sm" aria-label="Toggle italic">
			<Italic />
		</Toggle>
	)
}
