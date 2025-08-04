'use client'

import { useRender } from '@base-ui-components/react/use-render'
import { type VariantProps, cva } from '@nerdfish/utils'

export const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs transition-colors',
	{
		variants: {
			variant: {
				danger:
					'border-danger bg-background-danger text-foreground-danger-contrast',
				default: 'border-transparent bg-foreground text-background',
				info: 'border-info bg-background-info text-foreground-info-contrast',
				outline: 'text-foreground',
				secondary:
					'active-ring border-transparent bg-background-muted text-foreground',
				success:
					'border-success bg-background-success text-foreground-success-contrast',
				warning:
					'border-warning bg-background-warning text-foreground-warning-contrast',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export interface BadgeProps
	extends useRender.ComponentProps<'div'>,
		VariantProps<typeof badgeVariants> {}

export function Badge({
	variant,
	render = <div />,
	className,
	...props
}: BadgeProps) {
	return useRender({
		render,
		props: {
			'data-slot': 'badge',
			className: badgeVariants({
				variant,
				className,
			}),
			...props,
		},
	})
}
