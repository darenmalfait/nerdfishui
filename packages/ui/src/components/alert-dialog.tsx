'use client'

import { AlertDialog as AlertDialogPrimitive } from '@base-ui-components/react/alert-dialog'
import { cx } from '@nerdfish/utils'
import * as React from 'react'
import { type ButtonProps } from 'react-day-picker'
import { Button } from './button'

export type AlertDialogProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Root
>
export function AlertDialog({ ...props }: AlertDialogProps) {
	return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

export type AlertDialogTriggerProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Trigger
>
export function AlertDialogTrigger({ ...props }: AlertDialogTriggerProps) {
	return (
		<AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
	)
}

export type AlertDialogCloseProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Close
>
export function AlertDialogClose({ ...props }: AlertDialogCloseProps) {
	return (
		<AlertDialogPrimitive.Close data-slot="alert-dialog-close" {...props} />
	)
}

export type AlertDialogPortalProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Portal
>
function AlertDialogPortal({ ...props }: AlertDialogPortalProps) {
	return (
		<AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
	)
}

export type AlertDialogOverlayProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Backdrop
>
function AlertDialogOverlay({ className, ...props }: AlertDialogOverlayProps) {
	return (
		<AlertDialogPrimitive.Backdrop
			data-slot="alert-dialog-overlay"
			className={cx(
				'data-ending-style:opacity-0 data-starting-style:opacity-0 fixed inset-0 bg-black/5 backdrop-blur-sm transition-all duration-200 ease-out',
				className,
			)}
			{...props}
		/>
	)
}

export type AlertDialogContentProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Popup
>
export function AlertDialogContent({
	className,
	children,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Popup>) {
	return (
		<AlertDialogPortal>
			<AlertDialogOverlay />
			<AlertDialogPrimitive.Popup
				data-slot="alert-dialog-content"
				className={cx(
					'bg-popover text-popover-foreground z-50 grid w-full sm:max-w-[calc(100%-2rem)]',
					'fixed bottom-0 w-full sm:bottom-auto sm:left-[50%] sm:top-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]',
					'gap-md p-md rounded-base shadow-outline shadow-lg outline-none sm:max-w-lg sm:scale-[calc(1-0.1*var(--nested-dialogs))]',
					'duration-200',
					'data-[starting-style]:translate-y-full data-[starting-style]:opacity-0',
					'data-[ending-style]:translate-y-full data-[ending-style]:opacity-0',
					'data-[starting-style]:sm:translate-y-[-50%] data-[starting-style]:sm:scale-95',
					'data-[ending-style]:sm:translate-y-[-50%] data-[ending-style]:sm:scale-95',
					className,
				)}
				{...props}
			>
				{children}
			</AlertDialogPrimitive.Popup>
		</AlertDialogPortal>
	)
}

export type AlertDialogHeaderProps = React.ComponentProps<'div'>
export function AlertDialogHeader({
	className,
	...props
}: AlertDialogHeaderProps) {
	return (
		<div
			data-slot="alert-dialog-header"
			className={cx('gap-sm flex flex-col text-center sm:text-left', className)}
			{...props}
		/>
	)
}

export type AlertDialogFooterProps = React.ComponentProps<'div'>
export function AlertDialogFooter({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			data-slot="alert-dialog-footer"
			className={cx(
				'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
				className,
			)}
			{...props}
		/>
	)
}

export type AlertDialogTitleProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Title
>
export function AlertDialogTitle({
	className,
	...props
}: AlertDialogTitleProps) {
	return (
		<AlertDialogPrimitive.Title
			data-slot="alert-dialog-title"
			className={cx('text-foreground text-lg font-semibold', className)}
			{...props}
		/>
	)
}

export type AlertDialogDescriptionProps = React.ComponentProps<
	typeof AlertDialogPrimitive.Description
>
export function AlertDialogDescription({
	className,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
	return (
		<AlertDialogPrimitive.Description
			data-slot="alert-dialog-description"
			className={cx('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}

export type AlertDialogActionProps = ButtonProps
export function AlertDialogAction({
	className,
	...props
}: AlertDialogActionProps) {
	return (
		<AlertDialogPrimitive.Close
			render={<Button variant="default" {...props} />}
		/>
	)
}

export type AlertDialogCancelProps = ButtonProps
export function AlertDialogCancel({
	className,
	...props
}: AlertDialogCancelProps) {
	return (
		<AlertDialogPrimitive.Close
			render={<Button variant="secondary" {...props} />}
		/>
	)
}
