import { cn } from '@nerdfish/utils/class'
import { type ComponentProps, type ReactNode, useMemo, useRef } from 'react'

interface MarqueeProps extends ComponentProps<'div'> {
	/**
	 * Whether to reverse the animation direction
	 * @default false
	 */
	reverse?: boolean
	/**
	 * Whether to pause the animation on hover
	 * @default false
	 */
	pauseOnHover?: boolean
	/**
	 * Content to be displayed in the marquee
	 */
	children: ReactNode
	/**
	 * Whether to animate vertically instead of horizontally
	 * @default false
	 */
	vertical?: boolean
	/**
	 * Number of times to repeat the content
	 * @default 4
	 */
	repeat?: number
	/**
	 * If true, automatically repeats children enough to fill the visible area
	 */
	autoFill?: boolean
	/**
	 * ARIA label for accessibility
	 */
	ariaLabel?: string
	/**
	 * ARIA live region politeness
	 */
	ariaLive?: 'off' | 'polite' | 'assertive'
	/**
	 * ARIA role
	 */
	ariaRole?: string
}

export function Marquee({
	className,
	reverse = false,
	pauseOnHover = false,
	children,
	vertical = false,
	repeat = 4,
	ariaLabel,
	ariaLive = 'off',
	ariaRole = 'marquee',
	...props
}: MarqueeProps) {
	const marqueeRef = useRef<HTMLDivElement>(null)

	return (
		<div
			{...props}
			ref={marqueeRef}
			data-slot="marquee"
			className={cn(
				'group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]',
				{
					'flex-row': !vertical,
					'flex-col': vertical,
				},
				className,
			)}
			aria-label={ariaLabel}
			aria-live={ariaLive}
			role={ariaRole}
			tabIndex={0}
		>
			{useMemo(
				() => (
					<>
						{Array.from({ length: repeat }, (_, i) => (
							<div
								key={i}
								className={cn(
									!vertical ? 'flex-row gap-(--gap)' : 'flex-col gap-(--gap)',
									'flex shrink-0 justify-around',
									!vertical && 'animate-marquee flex-row',
									vertical && 'animate-marquee-vertical flex-col',
									pauseOnHover && 'group-hover:paused',
									reverse && 'direction-[reverse]',
								)}
							>
								{children}
							</div>
						))}
					</>
				),
				[repeat, children, vertical, pauseOnHover, reverse],
			)}
		</div>
	)
}
