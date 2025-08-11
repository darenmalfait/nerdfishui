import { cx } from '@nerdfish/utils'
import * as React from 'react'

export type DescriptionProps = React.ComponentProps<'p'>
export function Description({ className, ...props }: DescriptionProps) {
	return (
		<p
			data-slot="description"
			className={cx('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}

export type ErrorDescriptionProps = React.ComponentProps<'p'>
export function ErrorDescription({
	className,
	...props
}: ErrorDescriptionProps) {
	return (
		<p
			className={cx('text-foreground-danger text-sm font-medium', className)}
			{...props}
		/>
	)
}
