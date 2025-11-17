'use client'

import { Dialog as DialogPrimitive } from '@base-ui-components/react'
import { cx } from '@nerdfish/utils'
import { XIcon } from 'lucide-react'
import { type ComponentProps } from 'react'

export type DialogProps = ComponentProps<typeof DialogPrimitive.Root>
export function Dialog({ ...props }: DialogProps) {
	return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

export type DialogPortalProps = ComponentProps<typeof DialogPrimitive.Portal>
export function DialogPortal({ ...props }: DialogPortalProps) {
	return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

export type DialogTriggerProps = ComponentProps<typeof DialogPrimitive.Trigger>
export function DialogTrigger({ ...props }: DialogTriggerProps) {
	return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

export type DialogCloseProps = ComponentProps<typeof DialogPrimitive.Close>
export function DialogClose({ ...props }: DialogCloseProps) {
	return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

export type DialogOverlayProps = ComponentProps<typeof DialogPrimitive.Backdrop>
export function DialogOverlay({ className, ...props }: DialogOverlayProps) {
	return (
		<DialogPrimitive.Backdrop
			data-slot="dialog-overlay"
			className={cx(
				'fixed inset-0 bg-black/50 transition-all duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0',
				className,
			)}
			{...props}
		/>
	)
}

export type DialogContentProps = ComponentProps<
	typeof DialogPrimitive.Popup
> & {
	showCloseButton?: boolean
}
export function DialogContent({
	className,
	children,
	showCloseButton = true,
	...props
}: DialogContentProps) {
	return (
		<DialogPortal data-slot="dialog-portal">
			<DialogOverlay />
			<DialogPrimitive.Popup
				data-slot="dialog-content"
				className={cx(
					'bg-popover text-popover-contrast fixed grid w-full sm:max-w-[calc(100%-2rem)]',
					'p-friends gap-friends rounded-container border shadow-lg duration-200 outline-none sm:max-w-128 sm:scale-[calc(1-0.1*var(--nested-dialogs))]',
					'fixed bottom-0 w-full sm:top-[50%] sm:bottom-auto sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]',
					'duration-200',
					'data-starting-style:translate-y-full data-starting-style:opacity-0',
					'data-ending-style:translate-y-full data-ending-style:opacity-0',
					'data-starting-style:sm:translate-y-[-50%] data-starting-style:sm:scale-95',
					'data-ending-style:sm:translate-y-[-50%] data-ending-style:sm:scale-95',
					className,
				)}
				{...props}
			>
				{children}
				{showCloseButton ? (
					<DialogClose className="ring-offset-popover focus:ring-ring text-foreground-muted rounded-base absolute top-3 right-3 opacity-50 transition-opacity hover:opacity-100 focus:ring-[3px] focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
						<XIcon />
						<span className="sr-only">Close</span>
					</DialogClose>
				) : null}
			</DialogPrimitive.Popup>
		</DialogPortal>
	)
}

export type DialogHeaderProps = ComponentProps<'div'>
export function DialogHeader({ className, ...props }: DialogHeaderProps) {
	return (
		<div
			data-slot="dialog-header"
			className={cx(
				'gap-best-friends flex flex-col text-center sm:text-left',
				className,
			)}
			{...props}
		/>
	)
}

export type DialogFooterProps = ComponentProps<'div'>
export function DialogFooter({ className, ...props }: DialogFooterProps) {
	return (
		<div
			data-slot="dialog-footer"
			className={cx(
				'gap-best-friends flex flex-col-reverse sm:flex-row sm:justify-end',
				className,
			)}
			{...props}
		/>
	)
}

export type DialogTitleProps = ComponentProps<typeof DialogPrimitive.Title>
export function DialogTitle({ className, ...props }: DialogTitleProps) {
	return (
		<DialogPrimitive.Title
			data-slot="dialog-title"
			className={cx('text-lg leading-none font-semibold', className)}
			{...props}
		/>
	)
}

export type DialogDescriptionProps = ComponentProps<
	typeof DialogPrimitive.Description
>
export function DialogDescription({
	className,
	...props
}: DialogDescriptionProps) {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={cx('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}
