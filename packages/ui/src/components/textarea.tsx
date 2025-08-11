import { type VariantProps, cx } from '@nerdfish/utils'
import * as React from 'react'
import { inputVariants } from './input'

export interface TextareaProps
	extends React.ComponentProps<'textarea'>,
		VariantProps<typeof inputVariants> {}
export function Textarea({
	className,
	inputSize,
	variant,
	...props
}: TextareaProps) {
	return (
		<textarea
			className={cx(
				inputVariants({ inputSize, variant }),
				'focus:outline-brand relative flex min-h-[80px]',
				className,
			)}
			{...props}
		/>
	)
}
