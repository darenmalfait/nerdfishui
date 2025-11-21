import { cn } from '@nerdfish/utils/class'
import { type ComponentProps, type HTMLAttributes } from 'react'

export function PageHeader({
	className,
	children,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<section
			className={cn(
				'gap-friends mt-casual mb-acquaintances mx-auto flex w-full flex-col items-start',
				className,
			)}
			{...props}
		>
			{children}
		</section>
	)
}

export function PageHeaderHeading({
	className,
	...props
}: ComponentProps<'h1'>) {
	return <h1 className={cn('typography-heading', className)} {...props} />
}

export function PageHeaderDescription({
	className,
	...props
}: HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={cn('typography-subtitle max-w-2xl text-balance', className)}
			{...props}
		/>
	)
}

export function PageActions({
	className,
	...props
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				'gap-best-friends flex w-full items-center justify-start py-2',
				className,
			)}
			{...props}
		/>
	)
}
