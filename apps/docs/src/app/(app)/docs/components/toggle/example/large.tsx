'use client'

import { Toggle } from '@nerdfish/react/toggle'
import { Italic } from 'lucide-react'

export function ToggleLargeExample() {
	return (
		<Toggle size="lg" aria-label="Toggle italic">
			<Italic />
		</Toggle>
	)
}
