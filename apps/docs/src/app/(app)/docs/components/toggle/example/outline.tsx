'use client'

import { Toggle } from '@nerdfish/react/toggle'
import { Italic } from 'lucide-react'

export function ToggleOutlineExample() {
	return (
		<Toggle variant="outline" aria-label="Toggle italic">
			<Italic />
		</Toggle>
	)
}
