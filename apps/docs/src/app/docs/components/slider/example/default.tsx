'use client'

import { Slider, SliderThumb } from '@nerdfish/ui'
import * as React from 'react'

export function SliderExample() {
	return (
		<Slider defaultValue={[50]} max={100} step={1}>
			<SliderThumb />
		</Slider>
	)
}
