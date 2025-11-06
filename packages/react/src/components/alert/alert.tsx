import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

const alertVariants = cva(
	'relative w-full rounded-base border border-transparent p-friends text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-friends gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
	{
		variants: {
			variant: {
				default: 'bg-background-muted text-foreground',
				info: 'bg-info-background text-info [&>svg]:text-current *:data-[slot=alert-description]:text-info/80',
				destructive:
					'bg-destructive-background text-destructive [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/80',
				warning:
					'bg-warning-background text-warning [&>svg]:text-current *:data-[slot=alert-description]:text-warning/80',
				success:
					'bg-success-background text-success [&>svg]:text-current *:data-[slot=alert-description]:text-success/80',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export interface AlertProps
	extends ComponentProps<'div'>,
		VariantProps<typeof alertVariants> {}
export function Alert({ className, variant, ...props }: AlertProps) {
	return (
		<div
			data-slot="alert"
			role="alert"
			className={cx(alertVariants({ variant }), className)}
			{...props}
		/>
	)
}

export type AlertTitleProps = ComponentProps<'div'>
export function AlertTitle({ className, ...props }: AlertTitleProps) {
	return (
		<div
			data-slot="alert-title"
			className={cx(
				'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
				className,
			)}
			{...props}
		/>
	)
}

export type AlertDescriptionProps = ComponentProps<'div'>
export function AlertDescription({
	className,
	...props
}: AlertDescriptionProps) {
	return (
		<div
			data-slot="alert-description"
			className={cx(
				'text-foreground-muted gap-bff col-start-2 grid justify-items-start text-sm [&_p]:leading-relaxed',
				className,
			)}
			{...props}
		/>
	)
}
