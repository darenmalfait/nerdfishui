'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'
import { mergeProps, useFocusRing } from 'react-aria'

export const sliderVariants = cva('', {
	variants: {
		variant: {
			default: 'text-current',
			muted: 'text-foreground-muted',
			primary: 'text-foreground',
			secondary: 'text-foreground-secondary',
			danger: 'text-danger-foreground',
			success: 'text-success-foreground',
			warning: 'text-warning-foreground',
			info: 'text-info-foreground',
			accent: 'text-accent',
		},
		inputSize: {
			sm: '[&_[data-slot=thumb]]:size-[16px] [&_[data-slot=thumb]]:after:size-2 [&_[data-slot=track]]:h-[16px]',
			md: '[&_[data-slot=thumb]]:size-[24px] [&_[data-slot=thumb]]:after:size-4 [&_[data-slot=track]]:h-[24px]',
			lg: '[&_[data-slot=thumb]]:size-[32px] [&_[data-slot=thumb]]:after:size-6 [&_[data-slot=track]]:h-[32px]',
			xl: '[&_[data-slot=thumb]]:size-[40px] [&_[data-slot=thumb]]:after:size-8 [&_[data-slot=track]]:h-[40px]',
		},
	},

	defaultVariants: {
		inputSize: 'md',
		variant: 'accent',
	},
})

export const SliderTrack = SliderPrimitive.Track
export const SliderRange = SliderPrimitive.Range

export const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> &
		VariantProps<typeof sliderVariants>
>(({ className, children, inputSize, variant, ...props }, ref) => {
	const value = props.value ?? props.defaultValue ?? []
	const hasSingleThumb = Array.isArray(value) ? value.length <= 1 : false

	return (
		<SliderPrimitive.Root
			ref={ref}
			className={cx(
				sliderVariants({ inputSize, variant }),
				'gap-sm relative flex w-full items-center',
				className,
			)}
			{...props}
		>
			<SliderPrimitive.Track
				data-slot="track"
				className={cx(
					'bg-background-muted relative my-[calc((theme(spacing.7)-theme(spacing.5))/2)] flex w-full rounded-full border-x-[calc(theme(spacing.7)/2)] border-x-transparent border-s-current',
					!hasSingleThumb && 'border-s-muted',
					hasSingleThumb && 'border-s-current',
				)}
			>
				<SliderPrimitive.Range
					data-slot="range"
					className="absolute h-full bg-current"
				/>
			</SliderPrimitive.Track>
			{children}
		</SliderPrimitive.Root>
	)
})
Slider.displayName = SliderPrimitive.Root.displayName

export const SliderThumb = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Thumb>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Thumb>
>((props, ref) => {
	// focus-visible is broken in radix slider, so we are doing a custom implementation
	const { isFocusVisible, focusProps } = useFocusRing()

	return (
		<SliderPrimitive.Thumb
			data-slot="thumb"
			ref={ref}
			{...mergeProps(focusProps, props)}
			data-focus-visible={isFocusVisible}
			className={cx(
				'top-1/2 z-10 flex cursor-grab items-center justify-center rounded-full border-0 border-current bg-current outline-none outline-2 outline-offset-2 ring-transparent before:absolute before:h-11 before:w-11 before:rounded-full active:cursor-grabbing data-[focus-visible=true]:outline-current',
				// The fill of the thumb
				'after:bg-background after:shadow-small after:rounded-full after:transition-all active:after:scale-75 motion-reduce:after:transition-none',
				props.className,
			)}
		/>
	)
})
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
