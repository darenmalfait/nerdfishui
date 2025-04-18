'use client'

import { cx } from '@nerdfish/utils'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import * as React from 'react'

import { Button } from './button'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger

export const DialogPortal = ({
	className,
	children,
	...props
}: DialogPrimitive.DialogPortalProps & {
	className?: string
}) => (
	<DialogPrimitive.Portal {...props}>
		<div
			className={cx(
				'fixed inset-0 z-50 flex items-start justify-center sm:items-center',
				className,
			)}
		>
			{children}
		</div>
	</DialogPrimitive.Portal>
)
DialogPortal.displayName = DialogPrimitive.Portal.displayName

export const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cx(
			'data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:animate-out fixed inset-0 z-50 bg-black/5 backdrop-blur-sm transition-all duration-100',
			className,
		)}
		{...props}
	/>
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

export const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={cx(
				'data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0 animate-in gap-md rounded-b-base bg-popover p-lg shadow-outline sm:rounded-base fixed z-50 grid w-full sm:max-w-lg',
				className,
			)}
			{...props}
		>
			{children}
			<DialogPrimitive.Close asChild>
				<Button
					variant="ghost"
					size="iconSm"
					className="top-sm right-sm absolute"
				>
					<XIcon aria-hidden className="size-4" />
					<span className="sr-only">Close</span>
				</Button>
			</DialogPrimitive.Close>
		</DialogPrimitive.Content>
	</DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

export const DialogHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx(
			'space-y-sm flex flex-col text-center sm:text-left',
			className,
		)}
		{...props}
	/>
)
DialogHeader.displayName = 'DialogHeader'

export const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx(
			'sm:space-x-sm flex flex-col-reverse sm:flex-row sm:justify-end',
			className,
		)}
		{...props}
	/>
)
DialogFooter.displayName = 'DialogFooter'

export const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cx('text-lg font-semibold leading-none', className)}
		{...props}
	/>
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

export const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cx('text-foreground-muted text-sm', className)}
		{...props}
	/>
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export type DialogProps = React.ComponentPropsWithoutRef<typeof Dialog>
export type DialogTriggerProps = React.ComponentPropsWithoutRef<
	typeof DialogTrigger
>
export type DialogContentProps = React.ComponentPropsWithoutRef<
	typeof DialogContent
>
export type DialogHeaderProps = React.ComponentPropsWithoutRef<
	typeof DialogHeader
>
export type DialogFooterProps = React.ComponentPropsWithoutRef<
	typeof DialogFooter
>
export type DialogTitleProps = React.ComponentPropsWithoutRef<
	typeof DialogTitle
>
export type DialogDescriptionProps = React.ComponentPropsWithoutRef<
	typeof DialogDescription
>
