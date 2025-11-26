'use client'

import { Radio as RadioPrimitive } from '@base-ui-components/react/radio'
import { RadioGroup as RadioGroupPrimitive } from '@base-ui-components/react/radio-group'
import { cva, cn, type VariantProps } from '@nerdfish/utils/class'
import { CircleIcon } from 'lucide-react'
import { type ComponentProps, createContext, useContext } from 'react'
import { type InputVariants } from '../input/input'

type SizeVariants = InputVariants['size']

export const radioItemVariants = cva<{
	size: {
		[key in NonNullable<SizeVariants>]: string
	}
}>(
	`
    peer border-border text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 
    aria-invalid:border-destructive aspect-square shrink-0 
    rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50
    disabled:[&+[data-slot=label]]:opacity-50
  `,
	{
		variants: {
			size: {
				xs: 'size-2 [&_svg]:size-1',
				sm: 'size-3 [&_svg]:size-1.5',
				md: 'size-4 [&_svg]:size-2',
				lg: 'size-5 [&_svg]:size-2.5',
				xl: 'size-6 [&_svg]:size-3',
			},
		},
		defaultVariants: {
			size: 'md',
		},
	},
)

const RadioGroupContext = createContext<{
	size: SizeVariants
}>({ size: 'md' })

export interface RadioGroupProps
	extends ComponentProps<typeof RadioGroupPrimitive>,
		VariantProps<typeof radioItemVariants> {}
export function RadioGroup({
	className,
	size = 'md',
	...props
}: RadioGroupProps) {
	return (
		<RadioGroupContext.Provider value={{ size }}>
			<RadioGroupPrimitive
				data-slot="radio-group"
				className={cn('gap-friends grid', className)}
				{...props}
			/>
		</RadioGroupContext.Provider>
	)
}

export interface RadioGroupItemProps
	extends ComponentProps<typeof RadioPrimitive.Root>,
		VariantProps<typeof radioItemVariants> {}
export function RadioGroupItem({
	className,
	size,
	...props
}: RadioGroupItemProps) {
	// Use the size from context if not provided at the item level.
	const { size: contextSize } = useContext(RadioGroupContext)
	const effectiveSize = size ?? contextSize

	return (
		<RadioPrimitive.Root
			data-slot="radio-group-item relative"
			className={cn(radioItemVariants({ size: effectiveSize }), className)}
			{...props}
		>
			<RadioPrimitive.Indicator
				data-slot="radio-group-indicator"
				className="relative flex size-full items-center justify-center"
			>
				<CircleIcon className="fill-foreground" />
			</RadioPrimitive.Indicator>
		</RadioPrimitive.Root>
	)
}
