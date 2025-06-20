'use client'

import { H2 } from '@nerdfish/ui'

export function TypographyTitleExample() {
	return (
		<div className="flex flex-col">
			<H2>Default</H2>
			<H2 variant="primary">Primary</H2>
			<H2 variant="secondary">Secondary</H2>
			<H2 variant="brand">Nerdfish</H2>
		</div>
	)
}
