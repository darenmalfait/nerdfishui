'use client'

import { Dialog as BaseSheet } from '@base-ui-components/react/dialog'
import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { XIcon } from 'lucide-react'
import * as React from 'react'
import { Button } from './button'

export type SheetProps = BaseSheet.Root.Props
export function Sheet({ ...props }: SheetProps) {
	return <BaseSheet.Root data-slot="sheet" {...props} />
}

export type SheetTriggerProps = BaseSheet.Trigger.Props
export function SheetTrigger({ ...props }: SheetTriggerProps) {
	return <BaseSheet.Trigger data-slot="sheet-trigger" {...props} />
}

export type SheetCloseProps = BaseSheet.Close.Props
export function SheetClose({ ...props }: SheetCloseProps) {
	return <BaseSheet.Close data-slot="sheet-close" {...props} />
}

export type SheetPortalProps = BaseSheet.Portal.Props
export function SheetPortal({ ...props }: SheetPortalProps) {
	return <BaseSheet.Portal data-slot="sheet-portal" {...props} />
}

export type SheetOverlayProps = BaseSheet.Backdrop.Props
export function SheetOverlay({ className, ...props }: SheetOverlayProps) {
	return (
		<BaseSheet.Backdrop
			data-slot="sheet-overlay"
			className={cx(
				'fixed inset-0 bg-black/50 transition-all duration-200 [&[data-ending-style]]:opacity-0 [&[data-starting-style]]:opacity-0',
				className,
			)}
			{...props}
		/>
	)
}

export const sheetVariants = cva(
	'bg-popover text-foreground relative outline-hidden shadow-outline data-closed:duration-300 data-open:duration-500 fixed z-50 flex max-h-[calc(100vh-2rem)] flex-col gap-md rounded-base shadow-lg transition ease-in-out p-md',
	{
		variants: {
			side: {
				top: 'inset-x-0 top-0 mx-auto h-auto w-[calc(100vw-2rem)] origin-top translate-y-4 [&[data-ending-style]]:-translate-y-full [&[data-starting-style]]:-translate-y-full',
				bottom:
					'inset-x-0 bottom-0 mx-auto h-auto w-[calc(100vw-2rem)] origin-bottom -translate-y-4 [&[data-ending-style]]:translate-y-full [&[data-starting-style]]:translate-y-full',
				left: 'inset-y-0 left-0 top-md h-full w-3/4 origin-left translate-x-4 sm:max-w-sm [&[data-ending-style]]:-translate-x-full [&[data-starting-style]]:-translate-x-full',
				right:
					'inset-y-0 right-0 top-md h-full w-3/4 origin-right -translate-x-4 sm:max-w-sm [&[data-ending-style]]:translate-x-full [&[data-starting-style]]:translate-x-full',
			},
		},
		defaultVariants: {
			side: 'right',
		},
	},
)

export interface SheetContentProps
	extends BaseSheet.Popup.Props,
		VariantProps<typeof sheetVariants> {}
export function SheetContent({
	className,
	children,
	side = 'right',
	...props
}: SheetContentProps) {
	return (
		<SheetPortal>
			<SheetOverlay />
			<BaseSheet.Popup
				data-slot="sheet-content"
				className={cx(sheetVariants({ side }), className)}
				{...props}
			>
				{children}
				<div className="absolute right-2 top-2">
					<SheetClose
						render={
							<Button icon variant="ghost" size="sm">
								<XIcon className="size-4" />
								<span className="sr-only">Close</span>
							</Button>
						}
					/>
				</div>
			</BaseSheet.Popup>
		</SheetPortal>
	)
}

export type SheetHeaderProps = React.ComponentProps<'div'>
export function SheetHeader({ className, ...props }: SheetHeaderProps) {
	return (
		<div
			data-slot="sheet-header"
			className={cx('gap-sm flex flex-col', className)}
			{...props}
		/>
	)
}

export type SheetTitleProps = BaseSheet.Title.Props
export function SheetTitle({ className, ...props }: SheetTitleProps) {
	return (
		<BaseSheet.Title
			data-slot="sheet-title"
			className={cx('text-foreground font-semibold', className)}
			{...props}
		/>
	)
}

export type SheetDescriptionProps = BaseSheet.Description.Props
export function SheetDescription({
	className,
	...props
}: SheetDescriptionProps) {
	return (
		<BaseSheet.Description
			data-slot="sheet-description"
			className={cx('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}

export type SheetFooterProps = React.ComponentProps<'div'>
export function SheetFooter({ className, ...props }: SheetFooterProps) {
	return (
		<div
			data-slot="sheet-footer"
			className={cx('gap-sm mt-auto flex flex-col', className)}
			{...props}
		/>
	)
}
