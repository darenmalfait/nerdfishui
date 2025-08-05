'use client'

import { useRender } from '@base-ui-components/react/use-render'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export type IndicatorProps = React.ComponentProps<'div'>
export function Indicator(props: IndicatorProps) {
	return (
		<div
			{...props}
			className={cx('relative inline-flex w-max', props.className)}
		/>
	)
}

export interface IndicatorItemProps extends useRender.ComponentProps<'div'> {
	top?: boolean
	left?: boolean
	center?: boolean // horizontal
	right?: boolean
	middle?: boolean
	bottom?: boolean // vertical
}

export function IndicatorItem({
	render = <div />,
	className,
	top,
	right,
	left,
	center,
	middle,
	bottom,
	...props
}: IndicatorItemProps) {
	return useRender({
		render,
		props: {
			className: cx(
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
			),
			...props,
		},
	})
}
