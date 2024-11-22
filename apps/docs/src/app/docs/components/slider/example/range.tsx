'use client'

import { Slider, SliderThumb, type SliderProps } from '@nerdfish/ui'
import * as React from 'react'

export function SliderRangeExample({ className, ...props }: SliderProps) {
	return (
		<Slider defaultValue={[50, 80]} max={100} step={10} {...props}>
			<SliderThumb />
			<SliderThumb />
		</Slider>
	)
}
