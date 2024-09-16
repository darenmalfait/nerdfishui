import { cx } from '@nerdfish/utils'
import * as React from 'react'

export const Mockup = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(function Mockup({ children, className, ...props }, ref) {
	return (
		<div
			className={cx(
				'bg-muted text-primary min-w-[18rem] rounded-lg py-5',
				'before:mb-4 before:block before:rounded-full before:opacity-30 before:shadow-[1.4em_0,2.8em_0,4.2em_0] before:content-none',
				'[&_pre]:pr-5 [&_pre]:before:mr-[2ch] [&_pre]:before:content-none',
				'[&_pre[data-prefix]]:before:w-8 [&_pre[data-prefix]]:before:opacity-50 [&_pre[data-prefix]]:before:content-[attr(data-prefix)]',
				'[&_code]:!border-none [&_code]:!shadow-[unset]',
				className,
			)}
			ref={ref}
			{...props}
		>
			{children}
		</div>
	)
})
Mockup.displayName = 'Mockup'

export const MockupWindow = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(function MockupWindow({ children, className, ...props }, ref) {
	return (
		<div
			className={cx(
				'flex flex-col rounded-lg',
				'before:mb-4 before:aspect-square before:h-3 before:shrink-0 before:self-start before:rounded-full before:opacity-30 before:shadow-[1.4em_0,2.8em_0,4.2em_0] before:rtl:self-end',
				className,
			)}
			ref={ref}
			{...props}
		>
			<div className="flex flex-col px-5">{children}</div>
		</div>
	)
})
MockupWindow.displayName = 'MockupWindow'

export type MockupProps = React.ComponentPropsWithoutRef<typeof Mockup>
export type MockupWindowProps = React.ComponentPropsWithoutRef<
	typeof MockupWindow
>
