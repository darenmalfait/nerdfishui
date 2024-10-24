'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'

export const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cx(
			'bg-primary shadow-outline rounded-semi mb-md relative flex min-w-0 flex-col break-words border-0',
			className,
		)}
		{...props}
	/>
))
Card.displayName = 'Card'

export const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cx(
			'bg-primary border-b-solid rounded-t-semi p-md space-y-sm mb-0 flex flex-col border-b-0 border-b-transparent pb-0',
			className,
		)}
		{...props}
	/>
))
CardHeader.displayName = 'CardHeader'

export const CardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cx(
			'text-lg font-semibold leading-none tracking-tight',
			className,
		)}
		{...props}
	>
		{props.children}
	</h3>
))
CardTitle.displayName = 'CardTitle'

export const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cx('text-muted text-sm', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

export const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cx('p-md', className)} {...props} />
))
CardContent.displayName = 'CardContent'

export const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cx('p-md flex items-center pt-0', className)}
		{...props}
	/>
))
CardFooter.displayName = 'CardFooter'

export type CardProps = React.ComponentProps<typeof Card>
export type CardHeaderProps = React.ComponentProps<typeof CardHeader>
export type CardTitleProps = React.ComponentProps<typeof CardTitle>
export type CardDescriptionProps = React.ComponentProps<typeof CardDescription>
export type CardContentProps = React.ComponentProps<typeof CardContent>
export type CardFooterProps = React.ComponentProps<typeof CardFooter>
