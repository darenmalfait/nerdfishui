'use client'

import { Slider, SliderThumb } from '@nerdfish/react/slider'

export default function SliderExample() {
	return (
		<div className="w-xs max-w-[calc(100vw-3rem)]">
			<Slider defaultValue={[50]} max={100} step={1}>
				<SliderThumb />
			</Slider>
		</div>
	)
}
