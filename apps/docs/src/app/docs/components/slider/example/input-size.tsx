'use client'

import { Slider, SliderThumb } from '@nerdfish/ui'
import * as React from 'react'

export function SliderInputSizeExample() {
	return (
		<div className="gap-lg flex w-full flex-col">
			<Slider inputSize="sm" defaultValue={[50]} max={100} step={10}>
				<SliderThumb />
			</Slider>
			<Slider inputSize="md" defaultValue={[50]} max={100} step={10}>
				<SliderThumb />
			</Slider>
			<Slider inputSize="lg" defaultValue={[50]} max={100} step={10}>
				<SliderThumb />
			</Slider>
			<Slider inputSize="xl" defaultValue={[50]} max={100} step={10}>
				<SliderThumb />
			</Slider>
		</div>
	)
}
