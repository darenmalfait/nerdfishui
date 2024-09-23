'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

export const buttonVariants = cva(
	'inline-flex items-center relative focus-outline justify-center rounded-3xl border text-sm font-medium transition-all active:scale-95 disabled:pointer-events-none',
	{
		variants: {
			variant: {
				default:
					'bg-inverted text-inverted hover:bg-inverted/80 disabled:bg-inverted/90 disabled:text-inverted/60 border-transparent',
				secondary:
					'bg-muted text-primary hover:bg-inverted/20 disabled:bg-muted/50 disabled:text-muted/80 border-transparent',
				accent:
					'bg-accent hover:bg-accent/75 disabled:bg-accent/20 disabled:text-accent border-transparent text-white',
				danger:
					'bg-danger hover:bg-danger-muted border-danger disabled:bg-danger-muted/50 disabled:text-danger/80 text-danger',
				success:
					'bg-success hover:bg-success-muted border-success disabled:bg-success-muted/50 disabled:text-success/80 text-success',
				outline:
					'shadow-outline text-primary bg-primary hover:bg-muted disabled:text-primary/50',
				ghost:
					'text-primary hover:bg-muted disabled:text-primary/50 border-transparent',
				link: 'text-primary disabled:text-primary/50 border-none bg-transparent underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-10 px-4 py-2',
				xs: 'h-6 rounded-3xl px-2',
				sm: 'h-9 rounded-3xl px-3',
				lg: 'h-11 rounded-3xl px-8',
				xl: 'h-12 rounded-3xl px-10',
				icon: 'flex size-10 items-center justify-center rounded-3xl',
				iconSm: 'flex size-8 items-center justify-center rounded-3xl',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export function getButtonClassName({
	variant = 'default',
	size = 'default',
	accentuate,
	className,
}: VariantProps<typeof buttonVariants> & {
	className?: string
	accentuate?: boolean
}) {
	return cx(
		buttonVariants({ variant, size, className }),
		accentuate &&
			'select-none rounded-full shadow-[0px_16px_6px_-16px_#ff4,4px_2px_4px_-2px_#f4f,-4px_2px_4px_-2px_#4f4] hover:shadow-[0px_16px_6px_-12px_#ff4,4px_6px_6px_-2px_#f4f,-4px_6px_6px_-2px_#4f4] active:translate-y-0 active:shadow-[0px_10px_3px_-16px_#ff4,8px_0px_2px_-2px_#f4f,-8px_0px_2px_-2px_#4f4]',
	)
}

export const Button = React.forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement> &
		VariantProps<typeof buttonVariants> & {
			asChild?: boolean
			accentuate?: boolean
		}
>(({ variant, asChild, size, className, accentuate, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			className={getButtonClassName({
				variant,
				size,
				accentuate,
				className,
			})}
			ref={ref}
			{...props}
		/>
	)
})
Button.displayName = 'Button'

export const ButtonGroup = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithRef<'div'>
>(function ButtonGroup({ className, ...props }, ref) {
	return (
		<div
			ref={ref}
			className={cx(
				'flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0',
				className,
			)}
			{...props}
		/>
	)
})
ButtonGroup.displayName = 'ButtonGroup'

export type ButtonProps = React.ComponentPropsWithoutRef<typeof Button>
