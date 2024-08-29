'use client'

import { cva, cx, deprecateProp, type VariantProps } from '@nerdfish/utils'
import { AlertTriangle, Info, Verified, XCircle } from 'lucide-react'
import * as React from 'react'

const DEFAULT_VARIANT = 'info'

export const alertVariants = cva(
	'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current [&>svg~]*]:pl-7',
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
		className={cx('mb-1 font-semibold leading-none tracking-tight', className)}
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

	return <Icon className={cx('h-4 w-4')} />
}

export const AlertRoot = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithRef<'div'> & {
		variant?: VariantProps<typeof alertVariants>['variant']
		hideIcon?: boolean
		title?: React.ReactNode
		children?: React.ReactNode
		description?: string
	}
>(function AlertRoot(
	{ className, variant, hideIcon, title, children, description, ...props },
	ref,
) {
	deprecateProp(
		description,
		'Alert: description is deprecated, use <Alert.Description /> instead',
	)
	deprecateProp(
		title,
		'Alert: title is deprecated, use <Alert.Title /> instead',
	)

	return (
		<div
			{...props}
			className={cx(alertVariants({ variant }), className)}
			ref={ref}
		>
			<AlertIcon variant={variant} hideIcon={hideIcon} />
			{children}
			{title ? <AlertTitle>{title}</AlertTitle> : null}
			{description ? <AlertDescription>{description}</AlertDescription> : null}
		</div>
	)
})
AlertRoot.displayName = 'Alert'

export type AlertRootProps = React.ComponentPropsWithoutRef<typeof AlertRoot>
export type AlertTitleProps = React.ComponentPropsWithoutRef<typeof AlertTitle>
export type AlertDescriptionProps = React.ComponentPropsWithoutRef<
	typeof AlertDescription
>
