'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { AlertTriangle, Info, Verified, XCircle } from 'lucide-react'
import * as React from 'react'
import { deprecateProp } from '../deprecate'

const DEFAULT_VARIANT = 'info'

export const alertVariants = cva(
	'relative w-full rounded-container border p-md [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-md [&>svg]:text-current [&>svg~]*]:pl-7',
	{
		variants: {
			variant: {
				warning: 'border-warning bg-warning-muted text-warning border',
				success: 'border-success bg-success-muted text-success border',
				info: 'border-info bg-info-muted text-info border',
				danger: 'border-danger bg-danger-muted text-danger border',
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
	danger: XCircle,
	warning: AlertTriangle,
	success: Verified,
	info: Info,
}

export const AlertTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h5
		ref={ref}
		className={cx('mb-sm font-semibold leading-none', className)}
		{...props}
	/>
))
AlertTitle.displayName = 'AlertTitle'

export const AlertDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cx('text-sm text-current [&_p]:leading-relaxed', className)}
		{...props}
	/>
))
AlertDescription.displayName = 'AlertDescription'

function AlertIcon({
	variant,
	hideIcon,
}: {
	variant?: VariantProps<typeof alertVariants>['variant']
	hideIcon?: boolean
}) {
	if (hideIcon) return null

	const Icon = IconMap[variant ?? DEFAULT_VARIANT]

	return <Icon className={cx('size-6')} />
}

export const Alert = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithRef<'div'> & {
		variant?: VariantProps<typeof alertVariants>['variant']
		hideIcon?: boolean
		title?: React.ReactNode
		children?: React.ReactNode
		description?: string
	}
>(function Alert(
	{ className, variant, hideIcon, title, children, description, ...props },
	ref,
) {
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
				!hideIcon && 'pl-xl',
				className,
			)}
			ref={ref}
		>
			<AlertIcon variant={variant} hideIcon={hideIcon} />
			{children}
			{title ? <AlertTitle>{title}</AlertTitle> : null}
			{description ? <AlertDescription>{description}</AlertDescription> : null}
		</div>
	)
})
Alert.displayName = 'Alert'

export type AlertProps = React.ComponentPropsWithoutRef<typeof Alert>
export type AlertTitleProps = React.ComponentPropsWithoutRef<typeof AlertTitle>
export type AlertDescriptionProps = React.ComponentPropsWithoutRef<
	typeof AlertDescription
>
