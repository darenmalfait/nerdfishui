'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import {
	AlertTriangleIcon,
	InfoIcon,
	MegaphoneIcon,
	VerifiedIcon,
	XCircleIcon,
} from 'lucide-react'
import * as React from 'react'
import { deprecateProp } from '../deprecate'

const DEFAULT_VARIANT = 'default'

export const alertVariants = cva(
	'relative w-full rounded-base border p-md [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:top-md [&>svg]:left-md [&>svg]:text-current',
	{
		variants: {
			variant: {
				default:
					'border border-muted/10 bg-background-muted text-foreground [&>[data-slot=description]]:text-muted',
				warning:
					'border border-warning bg-background-warning text-foreground-warning-contrast [&>[data-slot=description]]:text-foreground-warning-contrast/80',
				success:
					'border border-success bg-background-success text-foreground-success-contrast [&>[data-slot=description]]:text-foreground-success-contrast/80',
				info: 'border border-info bg-background-info text-foreground-info-contrast [&>[data-slot=description]]:text-foreground-info-contrast/80',
				danger:
					'border border-danger bg-background-danger text-foreground-danger-contrast [&>[data-slot=description]]:text-foreground-danger-contrast/80',
			},
		},
		defaultVariants: {
			variant: DEFAULT_VARIANT,
		},
	},
)

const IconMap: Record<
	Exclude<VariantProps<typeof alertVariants>['variant'], undefined | null>,
	React.ElementType
> = {
	default: MegaphoneIcon,
	danger: XCircleIcon,
	warning: AlertTriangleIcon,
	success: VerifiedIcon,
	info: InfoIcon,
}

export type AlertTitleProps = React.ComponentProps<'h5'>
export function AlertTitle({ className, ...props }: AlertTitleProps) {
	return <h5 className={cx('mb-0 text-sm font-medium', className)} {...props} />
}

export type AlertDescriptionProps = React.ComponentProps<'p'>
export function AlertDescription({
	className,
	...props
}: React.ComponentProps<'p'>) {
	return (
		<p
			data-slot="description"
			className={cx('text-xs [&_p]:leading-relaxed', className)}
			{...props}
		/>
	)
}

interface AlertIconProps {
	variant?: VariantProps<typeof alertVariants>['variant']
	hideIcon?: boolean
}
function AlertIcon({ variant, hideIcon }: AlertIconProps) {
	if (hideIcon) return null

	const Icon = IconMap[variant ?? DEFAULT_VARIANT]

	return <Icon className={cx('size-[36px]')} />
}

export interface AlertProps extends Omit<React.ComponentProps<'div'>, 'title'> {
	variant?: VariantProps<typeof alertVariants>['variant']
	hideIcon?: boolean
	title?: React.ReactNode
	description?: string
}

export function Alert({
	className,
	variant,
	hideIcon,
	title,
	description,
	children,
	...props
}: AlertProps) {
	deprecateProp(
		description,
		'Alert: description is deprecated, use <AlertDescription /> instead',
	)
	deprecateProp(title, 'Alert: title is deprecated, use <AlertTitle /> instead')

	return (
		<div
			{...props}
			className={cx(
				alertVariants({ variant }),
				{
					'pl-xl': !hideIcon,
				},
				className,
			)}
		>
			<AlertIcon variant={variant} hideIcon={hideIcon} />
			{children}
			{title ? <AlertTitle>{title}</AlertTitle> : null}
			{description ? <AlertDescription>{description}</AlertDescription> : null}
		</div>
	)
}
