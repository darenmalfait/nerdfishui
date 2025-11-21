import { cn } from '@nerdfish/utils/class'
import { type ComponentProps } from 'react'

export type CardProps = ComponentProps<'div'>
export function Card({ className, ...props }: CardProps) {
	return (
		<div
			data-slot="card"
			className={cn(
				'bg-background text-foreground gap-friends rounded-container py-friends flex w-full flex-col border shadow-md',
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
			className={cn(
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
			className={cn('leading-none font-semibold', className)}
			{...props}
		/>
	)
}

export type CardDescriptionProps = ComponentProps<'div'>
export function CardDescription({ className, ...props }: CardDescriptionProps) {
	return (
		<div
			data-slot="card-description"
			className={cn('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}

export type CardActionProps = ComponentProps<'div'>
export function CardAction({ className, ...props }: CardActionProps) {
	return (
		<div
			data-slot="card-action"
			className={cn(
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
			className={cn('px-friends', className)}
			{...props}
		/>
	)
}

export type CardFooterProps = ComponentProps<'div'>
export function CardFooter({ className, ...props }: CardFooterProps) {
	return (
		<div
			data-slot="card-footer"
			className={cn(
				'px-friends [.border-t]:pt-best-friends flex items-center',
				className,
			)}
			{...props}
		/>
	)
}
