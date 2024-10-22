import { cx } from '@nerdfish/utils'
import type * as LabelPrimitive from '@radix-ui/react-label'
import * as React from 'react'

export const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
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
		/>
	)
})
Label.displayName = 'Label'

export type LabelProps = React.ComponentPropsWithoutRef<typeof Label>
