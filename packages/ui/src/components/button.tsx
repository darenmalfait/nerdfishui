'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

export const buttonVariants = cva(
	'inline-flex px-[0.625em] py-[0.5em] items-center relative focus-outline justify-center rounded-large border text-sm font-medium transition-all active:scale-95 disabled:pointer-events-none',
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
				accentuate:
					'text-primary hover:bg-[linear-gradient(hsl(var(--colors-background-muted)),hsl(var(--colors-background-muted))),linear-gradient(to_right,hsl(var(--colors-info-500)),hsl(var(--colors-accent)))] bg-[linear-gradient(hsl(var(--colors-background-primary)),hsl(var(--colors-background-primary))),linear-gradient(to_right,hsl(var(--colors-info-500)),hsl(var(--colors-accent)))] border-2 border-transparent bg-origin-border [background-clip:padding-box,_border-box]',
				link: 'text-primary disabled:text-primary/50 border-none bg-transparent underline-offset-4 hover:underline',
			},
			size: {
				default: 'text-base h-10',
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
