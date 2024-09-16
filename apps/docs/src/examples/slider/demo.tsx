'use client'

import { Slider, SliderThumb, type SliderProps } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export function SliderDemo({ className, ...props }: SliderProps) {
	return (
		<Slider
			defaultValue={[50]}
			max={100}
			step={1}
			className={cx('w-[60%]', className)}
			{...props}
		>
			<SliderThumb />
		</Slider>
	)
}
