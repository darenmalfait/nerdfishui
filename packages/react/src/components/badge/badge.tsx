import { useRender } from '@base-ui-components/react/use-render'
import { cva, cn, type VariantProps } from '@nerdfish/utils/class'
import { type ReactElement, type HTMLAttributes } from 'react'

export const badgeVariants = cva(
	'inline-flex items-center justify-center border border-transparent font-medium focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 [&_svg]:-ms-px [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default: 'bg-background-inverted text-foreground-inverted',
				muted: 'bg-background-muted text-foreground',
				success: 'bg-success text-success-contrast',
				warning: 'bg-warning text-warning-contrast',
				info: 'bg-info text-info-contrast',
				outline: 'bg-transparent border border-border text-foreground',
				destructive: 'bg-destructive text-destructive-contrast',
			},
			appearance: {
				default: '',
				muted: '',
				outline: '',
				ghost: 'border-transparent bg-transparent',
			},
			disabled: {
				true: 'opacity-50 pointer-events-none',
			},
			size: {
				lg: 'rounded-compact px-[0.5rem] h-7 min-w-7 gap-1.5 text-xs [&_svg]:size-3.5',
				md: 'rounded-compact px-[0.45rem] h-6 min-w-6 gap-1.5 text-xs [&_svg]:size-3.5 ',
				sm: 'rounded-[calc(theme(borderRadius.compact)/2)] px-[0.325rem] h-5 min-w-5 gap-1 text-[0.6875rem] leading-[0.75rem] [&_svg]:size-3',
				xs: 'rounded-[calc(theme(borderRadius.compact)/2)] px-[0.25rem] h-4 min-w-4 gap-1 text-[0.625rem] leading-[0.5rem] [&_svg]:size-3',
			},
			shape: {
				default: '',
				circle: 'rounded-full',
			},
		},
		compoundVariants: [
			/* Light */
			{
				variant: 'default',
				appearance: 'muted',
				className: 'bg-background-inverted/70 text-foreground-inverted',
			},
			{
				variant: 'muted',
				appearance: 'muted',
				className: 'bg-background-muted/70 text-foreground',
			},
			{
				variant: 'success',
				appearance: 'muted',
				className: 'bg-success-background text-success',
			},
			{
				variant: 'warning',
				appearance: 'muted',
				className: 'bg-warning-background text-warning',
			},
			{
				variant: 'info',
				appearance: 'muted',
				className: 'bg-info-background text-info',
			},
			{
				variant: 'destructive',
				appearance: 'muted',
				className: 'bg-destructive-background text-destructive',
			},
			/* Outline */
			{
				variant: 'default',
				appearance: 'outline',
				className: 'bg-transparent border border-border text-foreground',
			},
			{
				variant: 'muted',
				appearance: 'outline',
				className: 'bg-transparent border border-border text-foreground-muted',
			},
			{
				variant: 'success',
				appearance: 'outline',
				className: 'bg-transparent border-success text-success',
			},
			{
				variant: 'warning',
				appearance: 'outline',
				className: 'bg-transparent border-warning text-warning',
			},
			{
				variant: 'info',
				appearance: 'outline',
				className: 'bg-transparent border-info text-info',
			},
			{
				variant: 'destructive',
				appearance: 'outline',
				className: 'bg-transparent border-destructive text-destructive',
			},
			/* Ghost */
			{
				variant: 'default',
				appearance: 'ghost',
				className: 'text-foreground',
			},
			{
				variant: 'muted',
				appearance: 'ghost',
				className: 'text-foreground',
			},
			{
				variant: 'success',
				appearance: 'ghost',
				className: 'text-success',
			},
			{
				variant: 'warning',
				appearance: 'ghost',
				className: 'text-warning',
			},
			{
				variant: 'info',
				appearance: 'ghost',
				className: 'text-info',
			},
			{
				variant: 'destructive',
				appearance: 'ghost',
				className: 'text-destructive',
			},

			{ size: 'lg', appearance: 'ghost', className: 'px-0' },
			{ size: 'md', appearance: 'ghost', className: 'px-0' },
			{ size: 'sm', appearance: 'ghost', className: 'px-0' },
			{ size: 'xs', appearance: 'ghost', className: 'px-0' },
		],
		defaultVariants: {
			variant: 'default',
			appearance: 'default',
			size: 'md',
		},
	},
)

const badgeButtonVariants = cva(
	'cursor-pointer transition-all inline-flex items-center justify-center leading-none size-3.5 [&>svg]:opacity-100! [&>svg]:size-3.5 p-0 rounded-md -me-0.5 opacity-60 hover:opacity-100',
	{
		variants: {
			variant: {
				default: '',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export interface BadgeProps
	extends useRender.ComponentProps<'span'>,
		VariantProps<typeof badgeVariants> {
	dotClassName?: string
	disabled?: boolean
}
export function Badge({
	render,
	className,
	variant,
	size,
	appearance,
	shape,
	disabled,
	...props
}: BadgeProps): ReactElement {
	return useRender({
		render,

		props: {
			'data-slot': 'badge',
			className: cn(
				badgeVariants({ variant, size, appearance, shape, disabled }),
				className,
			),
			...props,
		},
	})
}

export interface BadgeButtonProps
	extends useRender.ComponentProps<'button'>,
		VariantProps<typeof badgeButtonVariants> {}
export function BadgeButton({
	render,
	className,
	variant,
	...props
}: BadgeButtonProps): ReactElement {
	return useRender({
		render,
		props: {
			'data-slot': 'badge-button',
			role: 'button' as const,
			className: cn(badgeButtonVariants({ variant, className })),
			...props,
		},
	})
}

export type BadgeDotProps = HTMLAttributes<HTMLSpanElement>
export function BadgeDot({ className, ...props }: BadgeDotProps) {
	return (
		<span
			data-slot="badge-dot"
			className={cn(
				'size-1.5 rounded-full bg-[currentColor] opacity-75',
				className,
			)}
			{...props}
		/>
	)
}
