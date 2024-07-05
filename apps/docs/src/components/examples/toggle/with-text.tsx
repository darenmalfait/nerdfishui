'use client'

import { Toggle } from '@nerdfish/ui'
import { Italic } from 'lucide-react'
import * as React from 'react'

export function ToggleWithText() {
	return (
		<Toggle aria-label="Toggle italic">
			<Italic className="mr-2 size-4" />
			Italic
		</Toggle>
	)
}
