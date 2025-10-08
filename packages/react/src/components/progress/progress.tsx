import { Progress as ProgressPrimitive } from '@base-ui-components/react/progress'
import { cx } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

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
