'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import * as React from 'react'

export const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs transition-colors',
	{
		variants: {
			variant: {
				danger: 'border-danger bg-danger-background text-danger-foreground',
				default: 'border-transparent bg-foreground text-background',
				info: 'border-info bg-info-background text-info-foreground',
				outline: 'text-foreground',
				secondary:
					'active-ring border-transparent bg-background-muted text-foreground',
				success:
					'border-success bg-success-background-muted text-success-foreground',
				warning: 'border-warning bg-warning-background text-warning-foreground',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export const Badge = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>
>(({ className, variant, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={cx(badgeVariants({ variant }), className)}
			{...props}
		/>
	)
})
Badge.displayName = 'Badge'

export type BadgeProps = React.ComponentPropsWithoutRef<typeof Badge>
