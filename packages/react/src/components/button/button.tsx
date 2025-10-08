'use client'

import { useRender } from '@base-ui-components/react/use-render'
import { type VariantProps, cva } from '@nerdfish/utils'
import { type ReactElement } from 'react'

export const buttonVariants = cva(
	'focus-within:ring-ring focus-within:ring-[3px] !outline-none relative inline-flex gap-best-friends items-center justify-center rounded-base border px-[1.5em] py-[1em] font-medium transition-all active:scale-95 disabled:pointer-events-none',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-foreground text-background hover:bg-foreground/80 disabled:bg-foreground/90 disabled:text-background/60',
				secondary:
					'border-transparent bg-background-muted text-foreground hover:bg-foreground/20 disabled:bg-background-muted/50 disabled:text-foreground-muted/80',
				accent:
					'border-transparent bg-accent text-accent-contrast hover:bg-accent/75 disabled:bg-accent/20 disabled:text-accent',
				destructive:
					'border-destructive bg-destructive-background text-destructive hover:bg-destructive-background/80 disabled:bg-destructive-background/50 disabled:border-destructive/20 disabled:text-destructive/50',
				success:
					'border-success bg-success-background text-success hover:bg-success-background/80 disabled:bg-success-background/50 disabled:border-success/20 disabled:text-success/50',
				outline:
					'bg-transparent text-foreground border-border hover:bg-background-inverted/5 disabled:text-foreground/50 disabled:border-muted',
				ghost:
					'border-transparent text-current hover:bg-background-inverted/10 disabled:text-foreground/50',
				link: 'border-none bg-transparent text-foreground underline-offset-4 hover:underline disabled:text-foreground/50',
			},
			size: {
				xs: 'text-[0.625rem] !rounded-compact',
				sm: 'text-xs',
				md: 'text-sm',
				lg: 'text-lg',
				xl: 'text-[clamp(1.25rem,4.2vw,1.6625rem)]',
			},
			icon: {
				false: null,
				true: 'aspect-1 !p-0 items-center justify-center',
			},
		},
		compoundVariants: [
			{
				icon: true,
				size: 'xs',
				className:
					'p-0 size-[2.313rem] [&_svg:not([class*=size-])]:size-4 rounded-compact',
			},
			{
				icon: true,
				size: 'sm',
				className: 'p-0 size-[2.625rem] [&_svg:not([class*=size-])]:size-4',
			},
			{
				icon: true,
				size: 'md',
				className: 'p-0 size-[3.125rem] [&_svg:not([class*=size-])]:size-5',
			},
			{
				icon: true,
				size: 'lg',
				className: 'p-0 size-[4.125rem] [&_svg:not([class*=size-])]:size-6',
			},
			{
				icon: true,
				size: 'xl',
				className: 'p-0 size-[5.938rem] [&_svg:not([class*=size-])]:size-10',
			},
		],
		defaultVariants: {
			variant: 'default',
			size: 'md',
			icon: false,
		},
	},
)

export interface ButtonProps
	extends useRender.ComponentProps<'button'>,
		VariantProps<typeof buttonVariants> {}

export function Button({
	variant,
	size,
	render = <button />,
	icon,
	className,
	...props
}: ButtonProps): ReactElement {
	return useRender({
		render,
		props: {
			'data-slot': 'button',
			className: buttonVariants({
				variant,
				size,
				icon,
				className,
			}),
			...props,
		},
	})
}
