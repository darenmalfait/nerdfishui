'use client'

import { Toggle } from '@nerdfish/ui'
import { Bold, Italic } from 'lucide-react'

export function ToggleSizeExample() {
	return (
		<div className="gap-md flex flex-wrap">
			<Toggle size="lg" aria-label="Toggle italic">
				<Italic className="size-4" />
			</Toggle>
			<Toggle size="sm" aria-label="Toggle bold">
				<Bold className="size-4" />
			</Toggle>
		</div>
	)
}
