'use client'

import {
	Slider,
	SliderRange,
	SliderThumb,
	type SliderProps,
} from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export function SliderRangeExample({ className, ...props }: SliderProps) {
	return (
		<Slider
			defaultValue={[50, 80]}
			max={100}
			step={10}
			className={cx('w-[60%]', className)}
			{...props}
		>
			<SliderThumb />
			<SliderRange />
			<SliderThumb />
		</Slider>
	)
}
