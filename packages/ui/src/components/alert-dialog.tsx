'use client'

import { cx } from '@nerdfish/utils'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import * as React from 'react'

export const AlertDialog = AlertDialogPrimitive.Root
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger

export const AlertDialogPortal = ({
	className,
	children,
	...props
}: AlertDialogPrimitive.AlertDialogPortalProps & {
	className?: string
}) => (
	<AlertDialogPrimitive.Portal {...props}>
		<div
			className={cx(
				'fixed inset-0 z-50 flex items-end justify-center sm:items-center',
				className,
			)}
		>
			{children}
		</div>
	</AlertDialogPrimitive.Portal>
)
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName

export const AlertDialogOverlay = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, children, ...props }, ref) => (
	<AlertDialogPrimitive.Overlay
		className={cx(
			'animate-in fade-in fixed inset-0 z-50 bg-black/5 backdrop-blur-sm transition-opacity',
			className,
		)}
		{...props}
		ref={ref}
	/>
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

export const AlertDialogContent = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
	<AlertDialogPortal>
		<AlertDialogOverlay />
		<AlertDialogPrimitive.Content
			ref={ref}
			className={cx(
				'animate-in fade-in-90 shadow-outline slide-in-from-bottom-10 sm:zoom-in-90 sm:slide-in-from-bottom-0 bg-popover sm:rounded-semi fixed z-50 grid w-full max-w-lg scale-100 gap-4 p-6 opacity-100 md:w-full',
				className,
			)}
			{...props}
		/>
	</AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

export const AlertDialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx(
			'flex flex-col space-y-2 text-center sm:text-left',
			className,
		)}
		{...props}
	/>
)
AlertDialogHeader.displayName = 'AlertDialogHeader'

export const AlertDialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx(
			'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
			className,
		)}
		{...props}
	/>
)
AlertDialogFooter.displayName = 'AlertDialogFooter'

export const AlertDialogTitle = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Title
		ref={ref}
		className={cx('text-primary text-lg font-semibold', className)}
		{...props}
	/>
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

export const AlertDialogDescription = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Description
		ref={ref}
		className={cx('text-muted text-sm', className)}
		{...props}
	/>
))
AlertDialogDescription.displayName =
	AlertDialogPrimitive.Description.displayName

export const AlertDialogAction = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Action>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Action
		ref={ref}
		className={cx(
			'bg-inverted text-inverted hover:bg-inverted/80 rounded-semi inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900',
			className,
		)}
		{...props}
	/>
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

export const AlertDialogCancel = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Cancel
		ref={ref}
		className={cx(
			'text-primary hover:bg-muted rounded-semi mt-2 inline-flex h-10 items-center justify-center border border-gray-200 bg-transparent px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:mt-0 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900',
			className,
		)}
		{...props}
	/>
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export type AlertDialogProps = React.ComponentPropsWithoutRef<
	typeof AlertDialog
>
export type AlertDialogPortalProps = React.ComponentPropsWithoutRef<
	typeof AlertDialogPortal
>
export type AlertDialogOverlayProps = React.ComponentPropsWithoutRef<
	typeof AlertDialogOverlay
>
export type AlertDialogTriggerProps = React.ComponentPropsWithoutRef<
	typeof AlertDialogTrigger
>
export type AlertDialogContentProps = React.ComponentPropsWithoutRef<
	typeof AlertDialogContent
>
export type AlertDialogHeaderProps = React.ComponentPropsWithoutRef<
	typeof AlertDialogHeader
>
export type AlertDialogFooterProps = React.ComponentPropsWithoutRef<
	typeof AlertDialogFooter
>
export type AlertDialogTitleProps = React.ComponentPropsWithoutRef<
	typeof AlertDialogTitle
>
export type AlertDialogDescriptionProps = React.ComponentPropsWithoutRef<
	typeof AlertDialogDescription
>
export type AlertDialogActionProps = React.ComponentPropsWithoutRef<
	typeof AlertDialogAction
>
export type AlertDialogCancelProps = React.ComponentPropsWithoutRef<
	typeof AlertDialogCancel
>
