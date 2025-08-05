'use client'

import { useRender } from '@base-ui-components/react/use-render'
import { cx } from '@nerdfish/utils'

export type GridProps = useRender.ComponentProps<'div'>
export function Grid({ className, render = <div />, ...props }: GridProps) {
	return useRender({
		render,
		props: {
			'data-slot': 'button',
			className: cx(
				'gap-md grid w-full auto-rows-[22rem] grid-cols-3',
				className,
			),
			...props,
		},
	})
}

export type GridCardProps = useRender.ComponentProps<'div'>
export function GridCard({
	className,
	render = <div />,
	...props
}: GridCardProps) {
	return useRender({
		render,
		props: {
			'data-slot': 'button',
			className: cx(
				'rounded-container group relative col-span-3 flex flex-col justify-between overflow-hidden',
				// light styles
				'bg-background shadow-outline [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
				// dark styles
				'transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
				className,
			),
			...props,
		},
	})
}
