'use client'

import { H2 } from '@nerdfish/ui'
import * as React from 'react'

export function TypographyTitle() {
	return (
		<div className="flex flex-col">
			<H2>Default</H2>
			<H2 variant="primary">Primary</H2>
			<H2 variant="secondary">Secondary</H2>
			<H2 variant="nerdfish">Nerdfish</H2>
		</div>
	)
}
