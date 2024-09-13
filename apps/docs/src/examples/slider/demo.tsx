'use client'

import { Slider } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export function SliderDemo({ className, ...props }: Slider.RootProps) {
	return (
		<Slider.Root
			defaultValue={[50]}
			max={100}
			step={1}
			className={cx('w-[60%]', className)}
			{...props}
		>
			<Slider.Thumb />
		</Slider.Root>
	)
}
