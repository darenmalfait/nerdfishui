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

export function SliderVariantExample({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = [50],
}: {
  min?: number
  max?: number
  step?: number
  defaultValue?: number[]
}) {
	return (
		<div className="gap-lg flex w-full flex-col">
			{variants.map((variant) => (
				<Slider
					key={variant}
					variant={variant}
					min={min}
					max={max}
					step={step}
					defaultValue={defaultValue}
					aria-label={`${variant} variant slider`}
				>
					<SliderThumb />
				</Slider>
			))}
		</div>
	)
}
