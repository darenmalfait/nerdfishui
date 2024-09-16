'use client'

import { cx } from '@nerdfish/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

export const Indicator = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithRef<'div'>
>(function Indicator(props, ref) {
	return (
		<div
			ref={ref}
			{...props}
			className={cx('relative inline-flex w-max', props.className)}
		/>
	)
})
Indicator.displayName = 'Indicator'

export const IndicatorItem = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithRef<'div'> & {
		asChild?: boolean
		top?: boolean
		left?: boolean
		center?: boolean // horizontal
		right?: boolean
		middle?: boolean
		bottom?: boolean // vertical
	}
>(function IndicatorItem(
	{ asChild, className, top, right, left, center, middle, bottom, ...props },
	ref,
) {
	const Comp = asChild ? Slot : 'div'

	return (
		<Comp
			ref={ref}
			{...props}
			className={cx(
				'absolute bottom-auto end-0 start-auto top-0 z-10 inline-block -translate-y-1/2 translate-x-1/2 transform whitespace-nowrap rtl:-translate-x-1/2',
				{
					'end-auto start-0 -translate-x-1/2 rtl:translate-x-1/2': left,
					'end-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2': center,
					'end-0 start-auto translate-x-1/2 rtl:-translate-x-1/2': right,
					'bottom-0 top-auto translate-y-1/2': bottom,
					'bottom-1/2 top-1/2 !-translate-y-1/2': middle,
					'bottom-auto top-0 -translate-y-1/2': top,
				},
				className,
			)}
		/>
	)
})
IndicatorItem.displayName = 'IndicatorItem'

export type IndicatorProps = React.ComponentPropsWithoutRef<typeof Indicator>
export type IndicatorItemProps = React.ComponentPropsWithoutRef<
	typeof IndicatorItem
>
