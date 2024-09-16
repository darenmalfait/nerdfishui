'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'

export const Table = React.forwardRef<
	HTMLTableElement,
	React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
	<div className="w-full overflow-auto">
		<table
			ref={ref}
			className={cx(
				'text-muted mb-0 w-full caption-bottom items-center justify-center align-top',
				className,
			)}
			{...props}
		/>
	</div>
))
Table.displayName = 'Table'

export const TableHeader = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<thead
		ref={ref}
		className={cx(
			'border-b border-b-black/5 align-bottom dark:border-b-white/5',
			className,
		)}
		{...props}
	/>
))
TableHeader.displayName = 'TableHeader'

export const TableBody = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tbody
		ref={ref}
		className={cx('[&_tr:last-child]:border-0', className)}
		{...props}
	/>
))
TableBody.displayName = 'TableBody'

export const TableFooter = React.forwardRef<
	HTMLTableSectionElement,
	React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
	<tfoot ref={ref} className={cx(className)} {...props} />
))
TableFooter.displayName = 'TableFooter'

export const TableRow = React.forwardRef<
	HTMLTableRowElement,
	React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
	<tr
		ref={ref}
		className={cx(
			'hover:bg-muted/50 data-[state=selected]:bg-muted border-b border-b-black/5 transition-colors last:border-b-0 dark:border-b-white/5',
			className,
		)}
		{...props}
	/>
))
TableRow.displayName = 'TableRow'

export const TableHead = React.forwardRef<
	HTMLTableCellElement,
	React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<th
		ref={ref}
		className={cx(
			'tracking-none text-muted whitespace-nowrap bg-transparent py-3 pr-6 text-left align-middle text-[10px] font-bold uppercase opacity-70 shadow-none [&:has([role=checkbox])]:pr-0',
			className,
		)}
		{...props}
	/>
))
TableHead.displayName = 'TableHead'

export const TableCell = React.forwardRef<
	HTMLTableCellElement,
	React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
	<td
		ref={ref}
		className={cx(
			'whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0 [&:has([role=checkbox])]:pr-0',
			className,
		)}
		{...props}
	/>
))
TableCell.displayName = 'TableCell'

export const TableCaption = React.forwardRef<
	HTMLTableCaptionElement,
	React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
	<caption
		ref={ref}
		className={cx('text-muted mt-4 text-sm', className)}
		{...props}
	/>
))
TableCaption.displayName = 'TableCaption'

export type TableProps = React.ComponentPropsWithoutRef<typeof Table>
export type TableHeaderProps = React.ComponentPropsWithoutRef<
	typeof TableHeader
>
export type TableBodyProps = React.ComponentPropsWithoutRef<typeof TableBody>
export type TableFooterProps = React.ComponentPropsWithoutRef<
	typeof TableFooter
>
export type TableRowProps = React.ComponentPropsWithoutRef<typeof TableRow>
export type TableHeadProps = React.ComponentPropsWithoutRef<typeof TableHead>
export type TableCellProps = React.ComponentPropsWithoutRef<typeof TableCell>
export type TableCaptionProps = React.ComponentPropsWithoutRef<
	typeof TableCaption
>
