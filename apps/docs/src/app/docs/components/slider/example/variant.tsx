'use client'

import { Slider, SliderThumb } from '@nerdfish/ui'
import * as React from 'react'

const variants = [
	'default',
	'muted',
	'accent',
	'danger',
	'success',
	'warning',
	'info',
] as const

export function SliderVariantExample() {
	return (
		<div className="gap-lg flex w-full flex-col">
			{variants.map((variant) => (
				<Slider key={variant} variant={variant}>
					<SliderThumb />
				</Slider>
			))}
		</div>
	)
}
