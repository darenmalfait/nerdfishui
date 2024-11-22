'use client'

import { Slider, SliderThumb } from '@nerdfish/ui'
import * as React from 'react'

export function SliderRangeExample() {
	return (
		<Slider defaultValue={[50, 80]} max={100} step={10}>
			<SliderThumb />
			<SliderThumb />
		</Slider>
	)
}
