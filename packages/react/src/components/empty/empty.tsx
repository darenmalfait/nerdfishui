import { cx, type VariantProps, cva } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

export function Empty({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			data-slot="empty"
			className={cx(
				'gap-casual rounded-base p-casual flex min-w-0 flex-1 flex-col items-center justify-center border-dashed text-center text-balance',
				className,
			)}
			{...props}
		/>
	)
}

export function EmptyHeader({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			data-slot="empty-header"
			className={cx(
				'gap-best-friends flex max-w-[400px] flex-col items-center text-center',
				className,
			)}
			{...props}
		/>
	)
}

export const emptyMediaVariants = cva(
	'flex shrink-0 items-center justify-center mbbest-friends [&_svg]:pointer-events-none [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default: 'bg-transparent',
				icon: "bg-background-buted text-foreground flex size-8 shrink-0 items-center justify-center rounded-base [&_svg:not([class*='size-'])]:size-6",
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export function EmptyMedia({
	className,
	variant = 'default',
	...props
}: ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>) {
	return (
		<div
			data-slot="empty-icon"
			data-variant={variant}
			className={cx(emptyMediaVariants({ variant, className }))}
			{...props}
		/>
	)
}

export function EmptyTitle({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			data-slot="empty-title"
			className={cx('text-lg font-medium tracking-tight', className)}
			{...props}
		/>
	)
}

export function EmptyDescription({ className, ...props }: ComponentProps<'p'>) {
	return (
		<div
			data-slot="empty-description"
			className={cx(
				'text-foreground-muted [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4',
				className,
			)}
			{...props}
		/>
	)
}

export function EmptyContent({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			data-slot="empty-content"
			className={cx(
				'gap-friends flex w-full max-w-[400px] min-w-0 flex-col items-center text-sm text-balance',
				className,
			)}
			{...props}
		/>
	)
}
