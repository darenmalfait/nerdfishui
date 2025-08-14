import { cx } from '@nerdfish/utils'
import * as React from 'react'

export type MockupProps = React.ComponentProps<'div'>
export function Mockup({ children, className, ...props }: MockupProps) {
	return (
		<div
			className={cx(
				'rounded-base bg-background-muted py-md text-foreground min-w-[18rem]',
				'before:mb-md before:block before:rounded-full before:opacity-30 before:shadow-[1em_0,2.5em_0,4em_0] before:content-none',
				'[&_pre]:pr-lg [&_pre]:before:mr-[2ch] [&_pre]:before:content-none',
				'[&_pre[data-prefix]]:before:w-8 [&_pre[data-prefix]]:before:opacity-50 [&_pre[data-prefix]]:before:content-[attr(data-prefix)]',
				'[&_code]:!border-none [&_code]:!shadow-[unset]',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export type MockupWindowProps = React.ComponentProps<'div'>
export function MockupWindow({
	children,
	className,
	...props
}: MockupWindowProps) {
	return (
		<div
			className={cx(
				'rounded-base flex flex-col',
				'before:mb-md before:aspect-square before:h-3 before:w-3 before:shrink-0 before:self-start before:rounded-full before:opacity-30 before:shadow-[1em_0,2.5em_0,4em_0] before:rtl:self-end',
				className,
			)}
			{...props}
		>
			<div className="px-md flex flex-col">{children}</div>
		</div>
	)
}
