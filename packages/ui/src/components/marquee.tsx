import { cx } from '@nerdfish/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

export const Marquee = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'> & {
		reverse?: boolean
		pauseOnHover?: boolean
		vertical?: boolean
		repeat?: number
		asChild?: boolean
		duration?: number
	}
>(function Marquee(
	{
		className,
		reverse,
		pauseOnHover = false,
		children,
		vertical = false,
		repeat = 4,
		asChild,
		duration = 40000,
		...props
	},
	ref,
) {
	const Component = asChild ? Slot : 'div'

	return (
		<Component
			ref={ref}
			{...props}
			style={
				{
					'--duration': `${duration}ms`,
				} as React.CSSProperties
			}
			className={cx(
				'gap-md p-sm group flex overflow-hidden',
				{
					'flex-row': !vertical,
					'flex-col': vertical,
				},
				className,
			)}
		>
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
		</Component>
	)
})

export type MarqueeProps = React.ComponentPropsWithoutRef<typeof Marquee>
