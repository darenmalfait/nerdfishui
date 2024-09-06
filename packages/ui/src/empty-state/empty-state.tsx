import { cx } from '@nerdfish/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { ButtonGroup } from '../button'
import { H3, Paragraph } from '../typography'

export const EmptyStateRoot = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(function EmptyStateRoot({ className, ...props }, ref) {
	return (
		<div
			className={cx(
				'flex flex-1 flex-col items-center justify-center gap-0',
				className,
			)}
			ref={ref}
			{...props}
		/>
	)
})
EmptyStateRoot.displayName = 'EmptyStateRoot'

export const EmptyStateTitle = React.forwardRef<
	React.ElementRef<typeof H3>,
	React.ComponentPropsWithoutRef<typeof H3>
>(function EmptyStateTitle(
	{ variant = 'primary', as = 'h2', className, ...props },
	ref,
) {
	return (
		<H3
			as={as}
			variant={variant}
			className={cx('m-0 text-center', className)}
			ref={ref}
			{...props}
		/>
	)
})
EmptyStateTitle.displayName = 'EmptyStateTitle'

export const EmptyStateIcon = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(function EmptyStateIcon({ className, ...props }, ref) {
	return (
		<Slot
			role="presentation"
			className={cx('text-nerdfish mb-4 size-12', className)}
			ref={ref}
			{...props}
		/>
	)
})
EmptyStateIcon.displayName = 'EmptyStateIcon'

export const EmptyStateDescription = React.forwardRef<
	React.ElementRef<typeof Paragraph>,
	React.ComponentPropsWithoutRef<typeof Paragraph>
>(function EmptyStateDescription({ className, ...props }, ref) {
	return (
		<Paragraph
			className={cx('text-muted m-0 text-center', className)}
			ref={ref}
			{...props}
		/>
	)
})
EmptyStateDescription.displayName = 'EmptyStateDescription'

export const EmptyStateActions = React.forwardRef<
	React.ElementRef<typeof ButtonGroup>,
	React.ComponentPropsWithoutRef<typeof ButtonGroup>
>(function EmptyStateActions({ className, ...props }, ref) {
	return <ButtonGroup className={cx('mt-4', className)} ref={ref} {...props} />
})
EmptyStateActions.displayName = 'EmptyStateActions'

export type EmptyStateRootProps = React.ComponentPropsWithoutRef<
	typeof EmptyStateRoot
>

export type EmptyStateIconProps = React.ComponentPropsWithoutRef<
	typeof EmptyStateIcon
>

export type EmptyStateTitleProps = React.ComponentPropsWithoutRef<
	typeof EmptyStateTitle
>

export type EmptyStateDescriptionProps = React.ComponentPropsWithoutRef<
	typeof EmptyStateDescription
>

export type EmptyStateActionsProps = React.ComponentPropsWithoutRef<
	typeof EmptyStateActions
>
