'use client'

import { Slider, SliderThumb, type SliderProps } from '@nerdfish/ui'
import * as React from 'react'

export function SliderCustomExample({ className, ...props }: SliderProps) {
	return (
		<div className="gap-lg flex w-full flex-col">
			<Slider
				defaultValue={[50]}
				max={100}
				step={10}
				className="text-green-500"
				{...props}
			>
				<SliderThumb />
			</Slider>
		</div>
	)
}
