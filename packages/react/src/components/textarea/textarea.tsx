import { cn } from '@nerdfish/utils/class'
import { type ComponentProps } from 'react'
import { inputVariants, type InputVariants } from '../input/input'

export interface TextareaProps
	extends ComponentProps<'textarea'>,
		InputVariants {}
export function Textarea({
	className,
	size,
	variant,
	...props
}: TextareaProps) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				inputVariants({ size, variant }),
				'field-sizing-content min-h-16',
				className,
			)}
			{...props}
		/>
	)
}
