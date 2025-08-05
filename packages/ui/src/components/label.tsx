import { Field as LabelPrimitive } from '@base-ui-components/react/field'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export type LabelProps = React.ComponentProps<typeof LabelPrimitive.Label>
export function Label({ className, ...props }: LabelProps) {
	return (
		<LabelPrimitive.Root>
			<LabelPrimitive.Label
				data-slot="label"
				className={cx(
					'space-y-xs text-foreground block text-sm font-bold',
					'[&_[data-slot=description]]:font-normal',
					className,
				)}
				{...props}
			/>
		</LabelPrimitive.Root>
	)
}

export type LabelAsteriskProps = React.ComponentProps<'span'>
export function LabelAsterisk({
	className,
	children,
	...props
}: LabelAsteriskProps) {
	return (
		<span className={cx('ml-xs text-foreground-danger', className)} {...props}>
			*{children}
		</span>
	)
}
