'use client'

import { Toggle } from '@nerdfish/react/toggle'
import { Italic } from 'lucide-react'

export default function ToggleWithTextExample() {
	return (
		<Toggle aria-label="Toggle italic">
			<Italic />
			Italic
		</Toggle>
	)
}
