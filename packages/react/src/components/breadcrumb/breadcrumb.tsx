import { mergeProps } from '@base-ui-components/react/merge-props'
import { useRender } from '@base-ui-components/react/use-render'
import { cx } from '@nerdfish/utils'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import {
	type ComponentProps,
	type ReactElement,
	type JSXElementConstructor,
	isValidElement,
} from 'react'

export type BreadcrumbProps = ComponentProps<'nav'>
export function Breadcrumb(props: BreadcrumbProps) {
	return <nav data-slot="breadcrumb" aria-label="breadcrumb" {...props} />
}

export type BreadcrumbListProps = ComponentProps<'ol'>
export function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
	return (
		<ol
			data-slot="breadcrumb-list"
			className={cx(
				'text-foreground-muted gap-bff flex flex-wrap items-center text-sm break-words',
				className,
			)}
			{...props}
		/>
	)
}

export type BreadcrumbItemProps = ComponentProps<'li'>
export function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
	return (
		<li
			data-slot="breadcrumb-item"
			className={cx('gap-bff inline-flex items-center', className)}
			{...props}
		/>
	)
}

export interface BreadcrumbLinkProps extends useRender.ComponentProps<'a'> {
	asChild?: boolean
}
export function BreadcrumbLink({
	render,
	asChild = false,
	children,
	className,
	...props
}: BreadcrumbLinkProps): ReactElement {
	const defaultProps = {
		'data-slot': 'breadcrumb-link',
		className: cx('hover:text-foreground transition-colors', className),
	}

	// Determine render element based on asChild prop
	const renderElement =
		asChild && isValidElement(children)
			? (children as ReactElement<
					Record<string, unknown>,
					string | JSXElementConstructor<unknown>
				>)
			: (render ?? <a />)

	// When using asChild, children becomes the element props, otherwise use children normally
	const finalProps =
		asChild && isValidElement(children)
			? mergeProps(defaultProps, props)
			: mergeProps(defaultProps, { ...props, children })

	const element = useRender({
		render: renderElement,
		props: finalProps,
	})

	return element
}

export type BreadcrumbPageProps = ComponentProps<'span'>
export function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
	return (
		<span
			data-slot="breadcrumb-page"
			role="link"
			aria-disabled="true"
			aria-current="page"
			className={cx('text-foreground font-normal', className)}
			{...props}
		/>
	)
}

export type BreadcrumbSeparatorProps = ComponentProps<'li'>
export function BreadcrumbSeparator({
	children,
	className,
	...props
}: ComponentProps<'li'>) {
	return (
		<li
			data-slot="breadcrumb-separator"
			role="presentation"
			aria-hidden="true"
			className={cx('[&>svg]:h-3.5 [&>svg]:w-3.5', className)}
			{...props}
		>
			{children ?? <ChevronRight className="rtl:rotate-180" />}
		</li>
	)
}

export type BreadcrumbEllipsisProps = ComponentProps<'span'>
export function BreadcrumbEllipsis({
	children,
	className,
	...props
}: BreadcrumbEllipsisProps) {
	const content = children ?? (
		<>
			<MoreHorizontal className="h-4 w-4" />
			<span className="sr-only">More</span>
		</>
	)

	return (
		<span
			data-slot="breadcrumb-ellipsis"
			role="presentation"
			aria-hidden="true"
			className={cx('flex h-9 w-9 items-center justify-center', className)}
			{...props}
		>
			{content}
		</span>
	)
}
