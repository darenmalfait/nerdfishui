'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

export const buttonVariants = cva(
	'focus-outline relative inline-flex items-center justify-center hover:scale-[102%] rounded-subtle border px-[1.5em] py-[1em] font-medium text-sm transition-all active:scale-95 disabled:pointer-events-none',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-foreground text-background hover:bg-foreground/80 disabled:bg-foreground/90 disabled:text-background/60',
				secondary:
					'border-transparent bg-background-muted text-foreground hover:bg-foreground/20 disabled:bg-background-muted/50 disabled:text-foreground-muted/80',
				accent:
					'border-transparent bg-accent text-white hover:bg-accent/75 disabled:bg-accent/20 disabled:text-accent',
				danger:
					'border-danger bg-danger-background text-danger-foreground hover:bg-danger-background-muted disabled:bg-danger-background-muted/50 disabled:text-danger-foreground/80',
				success:
					'border-success bg-success-background text-success-foreground hover:bg-success-background-muted disabled:bg-success-background-muted/50 disabled:text-success-foreground/80',
				outline:
					'bg-background text-foreground shadow-outline hover:bg-background-muted disabled:text-foreground/50',
				ghost:
					'border-transparent text-foreground hover:bg-background-muted disabled:text-foreground/50',
				accentuate:
					'border-2 border-transparent bg-[linear-gradient(hsl(var(--colors-background-primary)),hsl(var(--colors-background-primary))),linear-gradient(to_right,hsl(var(--colors-info-500)),hsl(var(--colors-accent)))] bg-origin-border text-foreground [background-clip:padding-box,_border-box] hover:bg-[linear-gradient(hsl(var(--colors-background-muted)),hsl(var(--colors-background-muted))),linear-gradient(to_right,hsl(var(--colors-info-500)),hsl(var(--colors-accent)))]',
				link: 'border-none bg-transparent text-foreground underline-offset-4 hover:underline disabled:text-foreground/50',
			},
			size: {
				xs: 'text-xs',
				default: 'text-sm',
				lg: 'text-lg',
				xl: 'text-[clamp(1.25rem,4.2vw,1.6625rem)]',
				icon: 'flex size-[50px] p-0 items-center justify-center',
				iconSm: 'flex size-[42px] p-0 items-center justify-center',
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

export interface ButtonProps
	extends React.ComponentProps<'button'>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

export function Button({
	variant,
	size,
	asChild,
	className,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			className={getButtonClassName({
				variant,
				size,
				className,
			})}
			{...props}
		/>
	)
}
