'use client'

import { cx } from '@nerdfish/utils'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import * as React from 'react'

export const Breadcrumb = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<'nav'> & {
		separator?: React.ReactNode
	}
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />)
Breadcrumb.displayName = 'Breadcrumb'

export const BreadcrumbList = React.forwardRef<
	HTMLOListElement,
	React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
	<ol
		ref={ref}
		className={cx(
			'text-muted flex flex-wrap items-center gap-1.5 break-words text-sm sm:gap-2.5',
			className,
		)}
		{...props}
	/>
))
BreadcrumbList.displayName = 'BreadcrumbList'

export const BreadcrumbItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		className={cx('inline-flex items-center gap-1.5', className)}
		{...props}
	/>
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

export const BreadcrumbLink = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentPropsWithoutRef<'a'> & {
		asChild?: boolean
	}
>(({ asChild, className, ...props }, ref) => {
	const Comp = asChild ? Slot : 'a'

	return (
		<Comp
			ref={ref}
			className={cx('hover:text-primary transition-colors', className)}
			{...props}
		/>
	)
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

export const BreadcrumbPage = React.forwardRef<
	HTMLSpanElement,
	React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		role="link"
		aria-disabled="true"
		aria-current="page"
		className={cx('text-primary font-normal', className)}
		{...props}
	/>
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

export const BreadcrumbSeparator = ({
	children,
	className,
	...props
}: React.ComponentProps<'li'>) => (
	<li
		role="presentation"
		aria-hidden="true"
		className={cx('[&>svg]:size-3.5', className)}
		{...props}
	>
		{children ?? <ChevronRight />}
	</li>
)
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

export const BreadcrumbEllipsis = ({
	className,
	label = 'More',
	...props
}: React.ComponentProps<'span'> & {
	label?: string
}) => (
	<span
		role="presentation"
		aria-hidden="true"
		className={cx('flex h-9 w-9 items-center justify-center', className)}
		{...props}
	>
		<MoreHorizontal className="size-4" />
		<span className="sr-only">{label}</span>
	</span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'

export type BreadcrumbProps = React.ComponentPropsWithoutRef<typeof Breadcrumb>
export type BreadcrumbListProps = React.ComponentPropsWithoutRef<
	typeof BreadcrumbList
>
export type BreadcrumbItemProps = React.ComponentPropsWithoutRef<
	typeof BreadcrumbItem
>
export type BreadcrumbLinkProps = React.ComponentPropsWithoutRef<
	typeof BreadcrumbLink
>
export type BreadcrumbPageProps = React.ComponentPropsWithoutRef<
	typeof BreadcrumbPage
>
export type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<
	typeof BreadcrumbSeparator
>
export type BreadcrumbEllipsisProps = React.ComponentPropsWithoutRef<
	typeof BreadcrumbEllipsis
>
