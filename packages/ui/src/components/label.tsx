import { cx } from '@nerdfish/utils'
import type * as LabelPrimitive from '@radix-ui/react-label'
import * as React from 'react'

export const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, children, ...props }, ref) => {
	return (
		<label
			data-slot="label"
			ref={ref}
			className={cx(
				'text-primary space-y-xs block text-sm font-bold',
				'[&_[data-slot=description]]:font-normal',
				className,
			)}
			{...props}
		>
			{children}
		</label>
	)
})
Label.displayName = 'Label'

export const LabelAsterisk = React.forwardRef<
	HTMLSpanElement,
	Omit<React.ComponentPropsWithoutRef<'span'>, 'children'>
>(({ className, ...props }, ref) => {
	return (
		<span ref={ref} className={cx('ml-xs text-danger', className)} {...props}>
			*
		</span>
	)
})
LabelAsterisk.displayName = 'LabelAsterisk'

export type LabelProps = React.ComponentPropsWithoutRef<typeof Label>
export type LabelAsteriskProps = React.ComponentPropsWithoutRef<
	typeof LabelAsterisk
>
