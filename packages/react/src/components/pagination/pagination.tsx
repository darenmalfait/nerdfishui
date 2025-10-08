import { cx } from '@nerdfish/utils'
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	MoreHorizontalIcon,
} from 'lucide-react'
import { type ComponentProps } from 'react'
import { buttonVariants, type Button } from '../button/button'

export type PaginationProps = ComponentProps<'nav'>
export function Pagination({ className, ...props }: PaginationProps) {
	return (
		<nav
			role="navigation"
			aria-label="pagination"
			data-slot="pagination"
			className={cx('mx-auto flex w-full justify-center', className)}
			{...props}
		/>
	)
}

export type PaginationContentProps = ComponentProps<'ul'>
export function PaginationContent({
	className,
	...props
}: PaginationContentProps) {
	return (
		<ul
			data-slot="pagination-content"
			className={cx('gap-bff flex flex-row items-center', className)}
			{...props}
		/>
	)
}

export type PaginationItemProps = ComponentProps<'li'>
export function PaginationItem({ ...props }: PaginationItemProps) {
	return <li data-slot="pagination-item" {...props} />
}

export type PaginationLinkProps = {
	isActive?: boolean
} & Pick<ComponentProps<typeof Button>, 'size' | 'icon'> &
	ComponentProps<'a'>
export function PaginationLink({
	className,
	isActive,
	size = 'md',
	icon = true,
	...props
}: PaginationLinkProps) {
	return (
		<a
			aria-current={isActive ? 'page' : undefined}
			data-slot="pagination-link"
			data-active={isActive}
			className={cx(
				buttonVariants({
					icon,
					variant: isActive ? 'outline' : 'ghost',
					size,
				}),
				className,
			)}
			{...props}
		/>
	)
}

export type PaginationPreviousProps = ComponentProps<typeof PaginationLink>
export function PaginationPrevious({
	className,
	...props
}: PaginationPreviousProps) {
	return (
		<PaginationLink
			aria-label="Go to previous page"
			icon={false}
			className={cx('gap-bff', className)}
			{...props}
		>
			<ChevronLeftIcon className="size-4" />
			<span className="hidden sm:block">Previous</span>
		</PaginationLink>
	)
}

export type PaginationNextProps = ComponentProps<typeof PaginationLink>
export function PaginationNext({ className, ...props }: PaginationNextProps) {
	return (
		<PaginationLink
			aria-label="Go to next page"
			icon={false}
			className={cx('gap-bff', className)}
			{...props}
		>
			<span className="hidden sm:block">Next</span>
			<ChevronRightIcon className="size-4" />
		</PaginationLink>
	)
}

export type PaginationEllipsisProps = ComponentProps<'span'>
export function PaginationEllipsis({
	className,
	...props
}: PaginationEllipsisProps) {
	return (
		<span
			aria-hidden
			data-slot="pagination-ellipsis"
			className={cx('flex size-9 items-center justify-center', className)}
			{...props}
		>
			<MoreHorizontalIcon className="size-4" />
			<span className="sr-only">More pages</span>
		</span>
	)
}
