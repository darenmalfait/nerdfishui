import { Progress as ProgressPrimitive } from '@base-ui-components/react/progress'
import { cx } from '@nerdfish/utils'
import { type ReactNode, type ComponentProps } from 'react'

export type ProgressProps = ComponentProps<typeof ProgressPrimitive.Root>
export function Progress({ className, children, ...props }: ProgressProps) {
	return (
		<ProgressPrimitive.Root
			data-slot="progress"
			className="relative"
			{...props}
		>
			<ProgressPrimitive.Track
				data-slot="progress-track"
				className={cx(
					'bg-background-muted block h-1.5 w-full overflow-hidden rounded-full',
					className,
				)}
			>
				<ProgressPrimitive.Indicator
					data-slot="progress-indicator"
					className="bg-background-inverted block h-full w-full transition-all duration-200"
				/>
			</ProgressPrimitive.Track>
			{children}
		</ProgressPrimitive.Root>
	)
}

export type ProgressValueProps = ComponentProps<typeof ProgressPrimitive.Value>
export function ProgressValue({ className, ...props }: ProgressValueProps) {
	return (
		<ProgressPrimitive.Value
			data-slot="progress-value"
			className={cx(
				'text-foreground mt-1.5 flex justify-end text-sm font-medium',
				className,
			)}
			{...props}
		/>
	)
}

export interface ProgressCircleProps extends ComponentProps<'div'> {
	value?: number
	size?: number
	strokeWidth?: number
	indicatorClassName?: string
	trackClassName?: string
	children?: ReactNode
}

export function ProgressCircle({
	className,
	indicatorClassName,
	trackClassName,
	value = 0,
	size = 48,
	strokeWidth = 4,
	children,
	...props
}: ProgressCircleProps) {
	const radius = (size - strokeWidth) / 2
	const circumference = radius * 2 * Math.PI
	const offset = circumference - (value / 100) * circumference

	return (
		<div
			data-slot="progress-circle"
			className={cx(
				'relative inline-flex items-center justify-center',
				className,
			)}
			style={{ width: size, height: size }}
			{...props}
		>
			<svg
				className="absolute inset-0 -rotate-90"
				width={size}
				height={size}
				viewBox={`0 0 ${size} ${size}`}
			>
				<circle
					data-slot="progress-circle-track"
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke="currentColor"
					strokeWidth={strokeWidth}
					fill="none"
					className={cx('text-secondary', trackClassName)}
				/>
				<circle
					data-slot="progress-circle-indicator"
					cx={size / 2}
					cy={size / 2}
					r={radius}
					stroke="currentColor"
					strokeWidth={strokeWidth}
					fill="none"
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					strokeLinecap="round"
					className={cx(
						'text-primary transition-all duration-300 ease-in-out',
						indicatorClassName,
					)}
				/>
			</svg>
			{children ? (
				<div
					data-slot="progress-circle-content"
					className="relative z-10 flex items-center justify-center text-sm font-medium"
				>
					{children}
				</div>
			) : null}
		</div>
	)
}
