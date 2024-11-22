'use client'

import { Slider, SliderThumb, type SliderProps } from '@nerdfish/ui'
import * as React from 'react'

export function SliderExample({ className, ...props }: SliderProps) {
	return (
		<Slider defaultValue={[50]} max={100} step={1} {...props}>
			<SliderThumb />
		</Slider>
	)
}
