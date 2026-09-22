'use client'

import { Label } from '@nerdfish/react/label'
import { Slider, SliderThumb } from '@nerdfish/react/slider'
import { useState } from 'react'

export default function SliderRatingExample() {
	const [value, setValue] = useState([3])

	const labels = ['Awful', 'Poor', 'Okay', 'Good', 'Amazing']

	return (
		<div className="w-xs max-w-[calc(100vw-3rem)] space-y-3">
			<div className="flex items-center justify-between gap-2">
				<Label className="leading-6">Rate your experience</Label>
				<span className="text-sm font-medium">{labels[value[0] ?? 0 - 1]}</span>
			</div>
			<div className="flex items-center gap-2">
				<span className="mr-best-friends text-2xl">😡</span>
				<Slider
					value={value}
					onValueChange={(newValue) => setValue(newValue as number[])}
					min={1}
					max={5}
					aria-label="Rate your experience"
				>
					<SliderThumb />
				</Slider>
				<span className="ml-best-friends text-2xl">😍</span>
			</div>
		</div>
	)
}
