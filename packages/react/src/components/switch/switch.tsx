import { Switch as SwitchPrimitive } from '@base-ui-components/react/switch'
import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { createContext, useContext, type ComponentProps } from 'react'
import { type InputVariants } from '../input/input'

// Define a context for `size` state
const SwitchContext = createContext<InputVariants | null>({
	size: 'md',
})

const useSwitchContext = () => {
	const context = useContext(SwitchContext)

	if (!context) {
		throw new Error('SwitchThumb must be used within a Switch component')
	}
	return context
}

type SizeVariants = NonNullable<InputVariants['size']>

// Define the variants for the Switch using cva.
export const switchVariants = cva<{
	size: {
		[key in SizeVariants]: string
	}
}>(
	`
    peer data-[checked]:bg-success data-[unchecked]:bg-background-inverted/15 focus-visible:border-ring focus-visible:ring-ring/50  
    aria-invalid:border-destructive/60 aria-invalid:ring-destructive/10 
    inline-flex shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] 
    disabled:cursor-not-allowed disabled:opacity-50 
  `,
	{
		variants: {
			size: {
				xs: 'h-3 w-4',
				sm: 'h-4 w-6',
				md: 'h-5 w-8',
				lg: 'h-6 w-10',
				xl: 'h-7 w-12',
			},
		},
		defaultVariants: {
			size: 'md',
		},
	},
)

const switchThumbVariants = cva<{
	size: {
		[key in SizeVariants]: string
	}
}>(
	'bg-foreground data-[checked]:bg-success-contrast pointer-events-none rounded-full ring-0 transition-transform flex items-center justify-center',
	{
		variants: {
			size: {
				xs: 'size-2 data-[checked]:translate-x-[calc(100%-2px)] data-[unchecked]:translate-x-0',
				sm: 'size-3 data-[checked]:translate-x-[calc(100%-2px)] data-[unchecked]:translate-x-0',
				md: 'size-4 data-[checked]:translate-x-[calc(100%-2px)] data-[unchecked]:translate-x-0',
				lg: 'size-5 data-[checked]:translate-x-[calc(100%-2px)] data-[unchecked]:translate-x-0',
				xl: 'size-6 data-[checked]:translate-x-[calc(100%-2px)] data-[unchecked]:translate-x-0',
			},
		},
		defaultVariants: {
			size: 'md',
		},
	},
)

export interface SwitchThumbProps
	extends ComponentProps<typeof SwitchPrimitive.Thumb>,
		Partial<VariantProps<typeof switchThumbVariants>> {}
export function SwitchThumb({ className, size, ...props }: SwitchThumbProps) {
	const context = useSwitchContext()
	const effectiveSize = size ?? context.size

	return (
		<SwitchPrimitive.Thumb
			data-slot="switch-thumb"
			className={cx(switchThumbVariants({ size: effectiveSize }), className)}
			{...props}
		/>
	)
}

export interface SwitchProps
	extends ComponentProps<typeof SwitchPrimitive.Root>,
		VariantProps<typeof switchVariants> {}
export function Switch({
	className,
	children,
	size = 'md',
	...props
}: SwitchProps) {
	const effectiveSize = size ?? 'md'
	return (
		<SwitchContext.Provider value={{ size: effectiveSize }}>
			<SwitchPrimitive.Root
				data-slot="switch"
				className={cx(switchVariants({ size: effectiveSize }), className)}
				{...props}
			>
				{children ?? <SwitchThumb />}
			</SwitchPrimitive.Root>
		</SwitchContext.Provider>
	)
}
