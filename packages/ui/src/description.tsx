import { cx } from '@nerdfish/utils'
import * as React from 'react'

export const Description = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
	return (
		<p ref={ref} className={cx('text-muted text-sm', className)} {...props} />
	)
})

Description.displayName = 'Description'

export type DescriptionProps = React.ComponentPropsWithoutRef<
	typeof Description
>

export const ErrorDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
	return (
		<p
			ref={ref}
			className={cx('text-danger text-sm font-medium', className)}
			{...props}
		/>
	)
})

ErrorDescription.displayName = 'ErrorDescription'

export type ErrorDescriptionProps = React.ComponentPropsWithoutRef<
	typeof ErrorDescription
>