import { AlertDialog as AlertDialogPrimitive } from '@base-ui-components/react/alert-dialog'
import { cx } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

export type AlertDialogProps = ComponentProps<typeof AlertDialogPrimitive.Root>
export function AlertDialog({ ...props }: AlertDialogProps) {
	return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

export type AlertDialogTriggerProps = ComponentProps<
	typeof AlertDialogPrimitive.Trigger
>
export function AlertDialogTrigger({ ...props }: AlertDialogTriggerProps) {
	return (
		<AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
	)
}

export type AlertDialogPortalProps = ComponentProps<
	typeof AlertDialogPrimitive.Portal
>
export function AlertDialogPortal({ ...props }: AlertDialogPortalProps) {
	return (
		<AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
	)
}

export type AlertDialogCloseProps = ComponentProps<
	typeof AlertDialogPrimitive.Close
>
export function AlertDialogClose({ ...props }: AlertDialogCloseProps) {
	return (
		<AlertDialogPrimitive.Close data-slot="alert-dialog-close" {...props} />
	)
}

export type AlertDialogOverlayProps = ComponentProps<
	typeof AlertDialogPrimitive.Backdrop
>
export function AlertDialogOverlay({
	className,
	...props
}: AlertDialogOverlayProps) {
	return (
		<AlertDialogPrimitive.Backdrop
			data-slot="alert-dialog-overlay"
			className={cx(
				'fixed inset-0 bg-black/50 transition-all duration-200 ease-out data-ending-style:opacity-0 data-starting-style:opacity-0',
				className,
			)}
			{...props}
		/>
	)
}

export type AlertDialogContentProps = ComponentProps<
	typeof AlertDialogPrimitive.Popup
>
export function AlertDialogContent({
	className,
	children,
	...props
}: AlertDialogContentProps) {
	return (
		<AlertDialogPortal>
			<AlertDialogOverlay />
			<AlertDialogPrimitive.Popup
				data-slot="alert-dialog-content"
				className={cx(
					'bg-popover text-popover-contrast z-50 grid w-full sm:max-w-[calc(100%-2rem)]',
					'fixed bottom-0 w-full sm:top-[50%] sm:bottom-auto sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]',
					'rounded-container gap-friends p-friends border shadow-lg outline-none sm:max-w-128 sm:scale-[calc(1-0.1*var(--nested-dialogs))]',
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
			</AlertDialogPrimitive.Popup>
		</AlertDialogPortal>
	)
}

export type AlertDialogHeaderProps = ComponentProps<'div'>
export function AlertDialogHeader({
	className,
	...props
}: AlertDialogHeaderProps) {
	return (
		<div
			data-slot="alert-dialog-header"
			className={cx(
				'gap-best-friends flex flex-col text-center sm:text-left',
				className,
			)}
			{...props}
		/>
	)
}

export type AlertDialogFooterProps = ComponentProps<'div'>
export function AlertDialogFooter({
	className,
	...props
}: AlertDialogFooterProps) {
	return (
		<div
			data-slot="alert-dialog-footer"
			className={cx(
				'gap-best-friends flex flex-col-reverse sm:flex-row sm:justify-end',
				className,
			)}
			{...props}
		/>
	)
}

export type AlertDialogTitleProps = ComponentProps<
	typeof AlertDialogPrimitive.Title
>
export function AlertDialogTitle({
	className,
	...props
}: AlertDialogTitleProps) {
	return (
		<AlertDialogPrimitive.Title
			data-slot="alert-dialog-title"
			className={cx('text-lg font-semibold', className)}
			{...props}
		/>
	)
}

export type AlertDialogDescriptionProps = ComponentProps<
	typeof AlertDialogPrimitive.Description
>
export function AlertDialogDescription({
	className,
	...props
}: AlertDialogDescriptionProps) {
	return (
		<AlertDialogPrimitive.Description
			data-slot="alert-dialog-description"
			className={cx('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}
