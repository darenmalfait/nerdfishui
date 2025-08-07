'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'

export type CardProps = React.ComponentProps<'div'>
export function Card({ className, ...props }: CardProps) {
	return (
		<div
			className={cx(
				'mb-md rounded-container bg-background shadow-outline relative flex min-w-0 flex-col break-words border-0',
				className,
			)}
			{...props}
		/>
	)
}

export type CardHeaderProps = React.ComponentProps<'div'>
export function CardHeader({ className, ...props }: CardHeaderProps) {
	return (
		<div
			className={cx(
				'space-y-sm rounded-t-base border-b-solid p-lg mb-0 flex flex-col border-b-0 border-b-transparent bg-transparent pb-0',
				className,
			)}
			{...props}
		/>
	)
}

export type CardTitleProps = React.ComponentProps<'h3'>
export function CardTitle({ className, ...props }: CardTitleProps) {
	return (
		<h3
			className={cx('text-lg font-semibold leading-none', className)}
			{...props}
		>
			{props.children}
		</h3>
	)
}

export type CardDescriptionProps = React.ComponentProps<'h3'>
export function CardDescription({ className, ...props }: CardDescriptionProps) {
	return (
		<p className={cx('text-foreground-muted text-sm', className)} {...props} />
	)
}

export type CardContentProps = React.ComponentProps<'div'>
export function CardContent({ className, ...props }: CardContentProps) {
	return <div className={cx('p-lg', className)} {...props} />
}

export type CardFooterProps = React.ComponentProps<'div'>
export function CardFooter({ className, ...props }: CardFooterProps) {
	return (
		<div className={cx('p-lg flex items-center pt-0', className)} {...props} />
	)
}
