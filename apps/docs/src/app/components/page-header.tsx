import { H1 } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import type * as React from 'react'

export function PageHeader({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<section
			className={cx(
				'gap-sm mx-auto flex w-full flex-col items-start md:pb-8 lg:pb-10',
				className,
			)}
			{...props}
		>
			{children}
		</section>
	)
}

export function PageHeaderHeading({
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return <H1 {...props} />
}

export function PageHeaderDescription({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={cx(
				'text-primary max-w-2xl text-balance text-lg font-light',
				className,
			)}
			{...props}
		/>
	)
}

export function PageActions({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cx(
				'gap-sm flex w-full items-center justify-start py-2',
				className,
			)}
			{...props}
		/>
	)
}
