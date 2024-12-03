'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import * as React from 'react'

export const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold text-xs transition-colors',
	{
		variants: {
			variant: {
				danger: 'border-danger bg-danger text-danger',
				default: 'border-transparent bg-inverted text-inverted',
				info: 'border-info bg-info text-info',
				outline: 'text-primary',
				secondary: 'active-ring border-transparent bg-muted text-primary',
				success: 'border-success bg-success-muted text-success',
				warning: 'border-warning bg-warning text-warning',
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
