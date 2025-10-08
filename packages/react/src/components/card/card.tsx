import { cx } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

export type CardProps = ComponentProps<'div'>
export function Card({ className, ...props }: CardProps) {
	return (
		<div
			data-slot="card"
			className={cx(
				'bg-background text-foreground gap-friends rounded-base py-friends flex w-full flex-col border shadow-sm',
				className,
			)}
			{...props}
		/>
	)
}

export type CardHeaderProps = ComponentProps<'div'>
export function CardHeader({ className, ...props }: CardHeaderProps) {
	return (
		<div
			data-slot="card-header"
			className={cx(
				'px-friends [.border-b]:pb-friends @container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 has-data-[slot=card-action]:grid-cols-[1fr_auto]',
				className,
			)}
			{...props}
		/>
	)
}

export type CardTitleProps = ComponentProps<'div'>
export function CardTitle({ className, ...props }: CardTitleProps) {
	return (
		<div
			data-slot="card-title"
			className={cx('leading-none font-semibold', className)}
			{...props}
		/>
	)
}

export type CardDescriptionProps = ComponentProps<'div'>
export function CardDescription({ className, ...props }: CardDescriptionProps) {
	return (
		<div
			data-slot="card-description"
			className={cx('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}

export type CardActionProps = ComponentProps<'div'>
export function CardAction({ className, ...props }: CardActionProps) {
	return (
		<div
			data-slot="card-action"
			className={cx(
				'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
				className,
			)}
			{...props}
		/>
	)
}

export type CardContentProps = ComponentProps<'div'>
export function CardContent({ className, ...props }: CardContentProps) {
	return (
		<div
			data-slot="card-content"
			className={cx('px-friends', className)}
			{...props}
		/>
	)
}

export type CardFooterProps = ComponentProps<'div'>
export function CardFooter({ className, ...props }: CardFooterProps) {
	return (
		<div
			data-slot="card-footer"
			className={cx(
				'px-friends [.border-t]:pt-best-friends flex items-center',
				className,
			)}
			{...props}
		/>
	)
}
