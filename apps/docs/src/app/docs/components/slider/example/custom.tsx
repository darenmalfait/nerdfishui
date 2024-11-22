'use client'

import { Slider, SliderThumb } from '@nerdfish/ui'
import * as React from 'react'

export function SliderCustomExample() {
	return (
		<div className="gap-lg flex w-full flex-col">
			<Slider
				defaultValue={[50]}
				max={100}
				step={10}
				className="text-green-500"
			>
				<SliderThumb />
			</Slider>
		</div>
	)
}
