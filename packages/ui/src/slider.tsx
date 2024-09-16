'use client'

import { cx } from '@nerdfish/utils'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

export const SliderTrack = SliderPrimitive.Track
export const SliderRange = SliderPrimitive.Range

export const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, children, ...props }, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cx(
			'relative flex w-full touch-none select-none items-center',
			className,
		)}
		{...props}
	>
		<SliderPrimitive.Track className="bg-inverted/10 dark:bg-inverted/20 relative h-2 w-full grow overflow-hidden rounded-full">
			<SliderPrimitive.Range className="bg-inverted absolute h-full" />
		</SliderPrimitive.Track>
		{children}
	</SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export const SliderThumb = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Thumb>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>
>((props, ref) => (
	<SliderPrimitive.Thumb
		ref={ref}
		{...props}
		className={cx(
			'border-muted bg-primary focus-outline dark:ring-offset-inverted block h-4 w-4 rounded-full border-2 ring-offset-gray-100 transition-colors disabled:pointer-events-none disabled:opacity-50',
			props.className,
		)}
	/>
))
SliderThumb.displayName = SliderPrimitive.Thumb.displayName

export type SliderProps = React.ComponentPropsWithoutRef<typeof Slider>
export type SliderThumbProps = React.ComponentPropsWithoutRef<
	typeof SliderThumb
>
export type SliderTrackProps = React.ComponentPropsWithoutRef<
	typeof SliderTrack
>
export type SliderRangeProps = React.ComponentPropsWithoutRef<
	typeof SliderRange
>
