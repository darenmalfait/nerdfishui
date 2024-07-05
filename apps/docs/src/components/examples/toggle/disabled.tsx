'use client'

import { Toggle } from '@nerdfish/ui'
import { Italic } from 'lucide-react'
import * as React from 'react'

export function ToggleDisabled() {
	return (
		<Toggle aria-label="Toggle italic" disabled>
			<Italic className="size-4" />
		</Toggle>
	)
}
