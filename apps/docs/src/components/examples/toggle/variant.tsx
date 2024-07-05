'use client'

import { Toggle } from '@nerdfish/ui'
import { Bold, Italic } from 'lucide-react'

export function ToggleVariant() {
	return (
		<div className="flex flex-wrap gap-3">
			<Toggle variant="default" aria-label="Toggle italic">
				<Italic className="size-4" />
			</Toggle>
			<Toggle variant="outline" aria-label="Toggle bold">
				<Bold className="size-4" />
			</Toggle>
		</div>
	)
}
