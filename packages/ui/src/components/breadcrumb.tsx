'use client'

import { useRender } from '@base-ui-components/react/use-render'
import { cx } from '@nerdfish/utils'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import * as React from 'react'

export type BreadcrumbProps = React.ComponentProps<'nav'>
export function Breadcrumb(props: BreadcrumbProps) {
	return <nav aria-label="breadcrumb" {...props} />
}

export type BreadcrumbListProps = React.ComponentProps<'ol'>
export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
	return (
		<ol
			className={cx(
				'gap-md text-foreground-muted flex flex-wrap items-center break-words text-sm',
				className,
			)}
			{...props}
		/>
	)
}

export type BreadcrumbItemProps = React.ComponentProps<'li'>
export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
	return (
		<li
			className={cx('gap-sm inline-flex items-center', className)}
			{...props}
		/>
	)
}

export type BreadcrumbLinkProps = useRender.ComponentProps<'a'>
export function BreadcrumbLink({
	render = <a />,
	className,
	...props
}: BreadcrumbLinkProps) {
	return useRender({
		render,
		props: {
			className: cx('hover:text-foreground transition-colors', className),
			...props,
		},
	})
}

export type BreadcrumbPageProps = React.ComponentProps<'span'>
export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
	return (
		<span
			role="link"
			aria-disabled="true"
			aria-current="page"
			className={cx('text-foreground font-normal', className)}
			{...props}
		/>
	)
}

export type BreadcrumbSeparatorProps = React.ComponentProps<'li'>
export function BreadcrumbSeparator({
	className,
	children,
	...props
}: BreadcrumbSeparatorProps) {
	return (
		<li
			role="presentation"
			aria-hidden="true"
			className={cx('[&>svg]:size-3.5', className)}
			{...props}
		>
			{children ?? <ChevronRight />}
		</li>
	)
}

export interface BreadcrumbEllipsisProps extends React.ComponentProps<'span'> {
	label?: string
}
export function BreadcrumbEllipsis({
	className,
	label = 'More',
	...props
}: BreadcrumbEllipsisProps) {
	return (
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
}
