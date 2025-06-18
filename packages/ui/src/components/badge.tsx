'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import * as React from 'react'

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
