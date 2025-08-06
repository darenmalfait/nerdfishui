'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'

export type TableProps = React.ComponentProps<'table'>
export function Table({ className, ...props }: TableProps) {
	return (
		<div className="w-full overflow-auto">
			<table
				className={cx(
					'text-foreground-muted mb-0 w-full caption-bottom items-center justify-center align-top',
					className,
				)}
				{...props}
			/>
		</div>
	)
}

export type TableHeaderProps = React.ComponentProps<'thead'>
export function TableHeader({ className, ...props }: TableHeaderProps) {
	return (
		<thead
			className={cx(
				'border-b border-b-black/5 align-bottom dark:border-b-white/5',
				className,
			)}
			{...props}
		/>
	)
}

export type TableBodyProps = React.ComponentProps<'tbody'>
export function TableBody({ className, ...props }: TableBodyProps) {
	return (
		<tbody className={cx('[&_tr:last-child]:border-0', className)} {...props} />
	)
}

export type TableFooterProps = React.ComponentProps<'tfoot'>
export function TableFooter({ className, ...props }: TableBodyProps) {
	return <tfoot className={cx(className)} {...props} />
}

export type TableRowProps = React.ComponentProps<'tr'>
export function TableRow({ className, ...props }: TableRowProps) {
	return (
		<tr
			className={cx(
				'hover:bg-background-muted/50 data-[state=selected]:bg-background-muted border-b border-b-black/5 transition-colors last:border-b-0 dark:border-b-white/5',
				className,
			)}
			{...props}
		/>
	)
}

export type TableHeadProps = React.ComponentProps<'th'>
export function TableHead({ className, ...props }: TableHeadProps) {
	return (
		<th
			className={cx(
				'py-md pr-md text-foreground-muted whitespace-nowrap bg-transparent text-left align-middle text-[10px] font-bold uppercase opacity-70 shadow-none [&:has([role=checkbox])]:pr-0',
				className,
			)}
			{...props}
		/>
	)
}

export type TableCellProps = React.ComponentProps<'td'>
export function TableCell({ className, ...props }: TableCellProps) {
	return (
		<td
			className={cx(
				'p-md whitespace-nowrap text-sm sm:pl-0 [&:has([role=checkbox])]:pr-0',
				className,
			)}
			{...props}
		/>
	)
}

export type TableCaptionProps = React.ComponentProps<'caption'>
export function TableCaption({ className, ...props }: TableCaptionProps) {
	return (
		<caption
			className={cx('mt-md text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}
