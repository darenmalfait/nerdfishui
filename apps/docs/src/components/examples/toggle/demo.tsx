'use client'

import { Toggle } from '@nerdfish/ui'
import { Italic } from 'lucide-react'
import * as React from 'react'

export function ToggleDemo() {
	return (
		<Toggle aria-label="Toggle italic">
			<Italic className="size-4" />
		</Toggle>
	)
}
