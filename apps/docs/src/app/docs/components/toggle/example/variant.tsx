'use client'

import { Toggle } from '@nerdfish/ui'
import { Bold, Italic } from 'lucide-react'

export function ToggleVariantExample() {
	return (
		<div className="gap-md flex flex-wrap">
			<Toggle variant="default" aria-label="Toggle italic">
				<Italic className="size-4" />
			</Toggle>
			<Toggle variant="outline" aria-label="Toggle bold">
				<Bold className="size-4" />
			</Toggle>
		</div>
	)
}
