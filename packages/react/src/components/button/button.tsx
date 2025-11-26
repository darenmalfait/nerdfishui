'use client'

import { useRender } from '@base-ui-components/react/use-render'
import { type VariantProps, cva } from '@nerdfish/utils/class'
import { type ReactElement } from 'react'

export const buttonVariants = cva(
	'focus-within:ring-ring focus-within:ring-[3px] !outline-none relative inline-flex gap-best-friends items-center justify-center rounded-base border font-medium transition-all active:scale-95 disabled:pointer-events-none',
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
					'bg-transparent text-foreground border-border hover:bg-background-muted disabled:text-foreground/50 disabled:border-muted',
				ghost:
					'border-transparent text-current hover:bg-background-muted disabled:text-foreground/50',
				link: 'border-none bg-transparent text-foreground underline-offset-4 hover:underline disabled:text-foreground/50',
			},
			size: {
				xs: 'text-[0.625rem] rounded-compact px-2 py-1',
				sm: 'text-xs px-3 py-1.5',
				md: 'text-sm px-4 py-2',
				lg: 'text-lg px-6 py-3',
				xl: 'text-[clamp(1.25rem,4.2vw,1.6625rem)] px-8 py-4',
			},
			icon: {
				false: null,
				true: 'aspect-square !p-0 items-center justify-center',
			},
		},
		compoundVariants: [
			{
				icon: true,
				size: 'xs',
				className:
					'p-0 size-7 [&_svg:not([class*=size-])]:size-3 rounded-compact',
			},
			{
				icon: true,
				size: 'sm',
				className: 'p-0 size-9 [&_svg:not([class*=size-])]:size-4',
			},
			{
				icon: true,
				size: 'md',
				className: 'p-0 size-10 [&_svg:not([class*=size-])]:size-4',
			},
			{
				icon: true,
				size: 'lg',
				className: 'p-0 size-14 [&_svg:not([class*=size-])]:size-6',
			},
			{
				icon: true,
				size: 'xl',
				className: 'p-0 size-19 [&_svg:not([class*=size-])]:size-8',
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
