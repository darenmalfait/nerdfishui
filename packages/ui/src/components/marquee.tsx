import { useRender } from '@base-ui-components/react/use-render'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export interface MarqueeProps extends useRender.ComponentProps<'div'> {
	reverse?: boolean
	pauseOnHover?: boolean
	vertical?: boolean
	repeat?: number
	duration?: number
}

export function Marquee({
	className,
	reverse,
	pauseOnHover = false,
	children,
	vertical = false,
	repeat = 4,
	duration = 40000,
	render = <div />,
	...props
}: MarqueeProps) {
	return useRender({
		render,
		props: {
			'data-slot': 'marquee',
			style: {
				'--duration': `${duration}ms`,
			} as React.CSSProperties,

			className: cx(
				'gap-md p-sm group flex overflow-hidden',
				{
					'flex-row': !vertical,
					'flex-col': vertical,
				},
				className,
			),
			children: (
				<>
					{Array(repeat)
						.fill(0)
						.map((_, i) => (
							<div
								key={i}
								aria-hidden={i > 0}
								className={cx(
									'gap-md flex shrink-0 justify-around [animation-duration:var(--duration)]',
									{
										'animate-marquee flex-row': !vertical,
										'animate-marquee-vertical flex-col': vertical,
										'group-hover:[animation-play-state:paused]': pauseOnHover,
										'[animation-direction:reverse]': reverse,
									},
								)}
							>
								{children}
							</div>
						))}
				</>
			),
			...props,
		},
	})
}
