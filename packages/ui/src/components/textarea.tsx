import { type VariantProps, cx } from '@nerdfish/utils'
import * as React from 'react'
import { inputVariants } from './input'

export const Textarea = React.forwardRef<
	HTMLTextAreaElement,
	React.ComponentPropsWithoutRef<'textarea'> &
		VariantProps<typeof inputVariants>
>(({ className, inputSize, variant, ...props }, ref) => {
	return (
		<textarea
			className={cx(
				inputVariants({ inputSize, variant }),
				'focus:outline-brand relative flex min-h-[80px]',
				className,
			)}
			ref={ref}
			{...props}
		/>
	)
})
Textarea.displayName = 'Textarea'
