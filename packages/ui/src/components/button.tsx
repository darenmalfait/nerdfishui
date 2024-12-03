'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

export const buttonVariants = cva(
	'focus-outline relative inline-flex items-center justify-center rounded-container border px-[0.625em] py-[0.5em] font-medium text-sm transition-all active:scale-105 disabled:pointer-events-none',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-inverted text-inverted hover:bg-inverted/80 disabled:bg-inverted/90 disabled:text-inverted/60',
				secondary:
					'border-transparent bg-muted text-primary hover:bg-inverted/20 disabled:bg-muted/50 disabled:text-muted/80',
				accent:
					'border-transparent bg-accent text-white hover:bg-accent/75 disabled:bg-accent/20 disabled:text-accent',
				danger:
					'border-danger bg-danger text-danger hover:bg-danger-muted disabled:bg-danger-muted/50 disabled:text-danger/80',
				success:
					'border-success bg-success text-success hover:bg-success-muted disabled:bg-success-muted/50 disabled:text-success/80',
				outline:
					'bg-primary text-primary shadow-outline hover:bg-muted disabled:text-primary/50',
				ghost:
					'border-transparent text-primary hover:bg-muted disabled:text-primary/50',
				accentuate:
					'border-2 border-transparent bg-[linear-gradient(hsl(var(--colors-background-primary)),hsl(var(--colors-background-primary))),linear-gradient(to_right,hsl(var(--colors-info-500)),hsl(var(--colors-accent)))] bg-origin-border text-primary [background-clip:padding-box,_border-box] hover:bg-[linear-gradient(hsl(var(--colors-background-muted)),hsl(var(--colors-background-muted))),linear-gradient(to_right,hsl(var(--colors-info-500)),hsl(var(--colors-accent)))]',
				link: 'border-none bg-transparent text-primary underline-offset-4 hover:underline disabled:text-primary/50',
			},
			size: {
				default: 'h-10 text-base',
				xs: 'text-xs',
				sm: 'text-sm',
				lg: 'text-lg',
				xl: 'text-[clamp(1.25rem,4.2vw,1.6625rem)]',
				icon: 'flex size-10 items-center justify-center',
				iconSm: 'flex size-8 items-center justify-center',
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
	className,
}: VariantProps<typeof buttonVariants> & {
	className?: string
}) {
	return cx(buttonVariants({ variant, size, className }))
}

export const Button = React.forwardRef<
	HTMLButtonElement,
	React.ButtonHTMLAttributes<HTMLButtonElement> &
		VariantProps<typeof buttonVariants> & {
			asChild?: boolean
		}
>(({ variant, asChild, size, className, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			className={getButtonClassName({
				variant,
				size,
				className,
			})}
			ref={ref}
			{...props}
		/>
	)
})
Button.displayName = 'Button'

export type ButtonProps = React.ComponentPropsWithoutRef<typeof Button>
