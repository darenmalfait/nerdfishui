'use client'

import { Slider, SliderThumb } from '@nerdfish/react/slider'

export function SliderExample() {
	return (
		<div className="w-full max-w-xs">
			<Slider defaultValue={[50]} max={100} step={1}>
				<SliderThumb />
			</Slider>
		</div>
	)
}
