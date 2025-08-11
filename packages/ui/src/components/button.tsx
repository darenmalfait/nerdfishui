'use client'

import { useRender } from '@base-ui-components/react/use-render'
import { type VariantProps, cva } from '@nerdfish/utils'

export const buttonVariants = cva(
	'focus-outline relative inline-flex items-center justify-center hover:scale-[102%] rounded-base border px-[1.5em] py-[1em] font-medium text-sm transition-all active:scale-95 disabled:pointer-events-none',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-foreground text-background hover:bg-foreground/80 disabled:bg-foreground/90 disabled:text-background/60',
				secondary:
					'border-transparent bg-background-muted text-foreground hover:bg-foreground/20 disabled:bg-background-muted/50 disabled:text-foreground-muted/80',
				brand:
					'border-transparent bg-brand text-white hover:bg-brand/75 disabled:bg-brand/20 disabled:text-brand',
				danger:
					'border-danger bg-background-danger text-white hover:bg-background-danger/80 disabled:bg-background-danger-muted disabled:text-foreground-danger',
				success:
					'border-success bg-background-success text-foreground-success-contrast hover:bg-background-success/80 disabled:bg-background-success-muted disabled:text-foreground-success',
				outline:
					'bg-background text-foreground shadow-outline hover:bg-background-muted disabled:text-foreground/50',
				ghost:
					'border-transparent text-foreground hover:bg-background-muted disabled:text-foreground/50',
				accentuate:
					'border-2 border-transparent bg-[linear-gradient(hsl(var(--colors-background-primary)),hsl(var(--colors-background-primary))),linear-gradient(to_right,hsl(var(--colors-info-500)),hsl(var(--colors-brand)))] bg-origin-border text-foreground [background-clip:padding-box,_border-box] hover:bg-[linear-gradient(hsl(var(--colors-background-muted)),hsl(var(--colors-background-muted))),linear-gradient(to_right,hsl(var(--colors-info-500)),hsl(var(--colors-brand)))]',
				link: 'border-none bg-transparent text-foreground underline-offset-4 hover:underline disabled:text-foreground/50',
			},
			size: {
				sm: 'text-xs',
				default: 'text-sm',
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
				size: 'sm',
				className: 'p-0 size-[42px] [&>svg]:size-4',
			},
			{
				icon: true,
				size: 'default',
				className: 'p-0 size-[50px] [&>svg]:size-5',
			},
			{
				icon: true,
				size: 'lg',
				className: 'p-0 size-[66px] [&>svg]:size-6',
			},
			{
				icon: true,
				size: 'lg',
				className: 'p-0 size-[66px] [&>svg]:size-6',
			},
			{
				icon: true,
				size: 'xl',
				className: 'p-0 size-[95px] [&>svg]:size-10',
			},
		],
		defaultVariants: {
			variant: 'default',
			size: 'default',
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
}: ButtonProps) {
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
