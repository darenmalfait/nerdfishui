'use client'

import { Slider, SliderThumb, type SliderProps } from '@nerdfish/ui'
import * as React from 'react'

export function SliderVariantExample({ className, ...props }: SliderProps) {
	return (
		<div className="gap-lg flex w-full flex-col">
			<Slider
				variant="default"
				defaultValue={[50]}
				max={100}
				step={10}
				{...props}
			>
				<SliderThumb />
			</Slider>
			<Slider
				variant="muted"
				defaultValue={[50]}
				max={100}
				step={10}
				{...props}
			>
				<SliderThumb />
			</Slider>
			<Slider
				variant="accent"
				defaultValue={[50]}
				max={100}
				step={10}
				{...props}
			>
				<SliderThumb />
			</Slider>
			<Slider
				variant="danger"
				defaultValue={[50]}
				max={100}
				step={10}
				{...props}
			>
				<SliderThumb />
			</Slider>
			<Slider
				variant="success"
				defaultValue={[50]}
				max={100}
				step={10}
				{...props}
			>
				<SliderThumb />
			</Slider>
			<Slider
				variant="warning"
				defaultValue={[50]}
				max={100}
				step={10}
				{...props}
			>
				<SliderThumb />
			</Slider>
			<Slider variant="info" defaultValue={[50]} max={100} step={10} {...props}>
				<SliderThumb />
			</Slider>
		</div>
	)
}
