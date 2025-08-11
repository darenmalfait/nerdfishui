'use client'

import { Dialog as SheetPrimitive } from '@base-ui-components/react/dialog'
import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { XIcon } from 'lucide-react'
import * as React from 'react'
import { Button } from './button'

export type SheetProps = React.ComponentProps<typeof SheetPrimitive.Root>
export function Sheet({ ...props }: SheetProps) {
	return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

export type SheetTriggerProps = React.ComponentProps<
	typeof SheetPrimitive.Trigger
>
export function SheetTrigger({ ...props }: SheetTriggerProps) {
	return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

export type SheetCloseProps = React.ComponentProps<typeof SheetPrimitive.Close>
export function SheetClose({ ...props }: SheetCloseProps) {
	return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

export type SheetPortalProps = React.ComponentProps<
	typeof SheetPrimitive.Portal
>
export function SheetPortal({ ...props }: SheetPortalProps) {
	return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

export type SheetOverlayProps = React.ComponentProps<
	typeof SheetPrimitive.Backdrop
>
export function SheetOverlay({ className, ...props }: SheetOverlayProps) {
	return (
		<SheetPrimitive.Backdrop
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
	extends React.ComponentProps<typeof SheetPrimitive.Popup>,
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
			<SheetPrimitive.Popup
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
			</SheetPrimitive.Popup>
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

export type SheetTitleProps = React.ComponentProps<typeof SheetPrimitive.Title>
export function SheetTitle({ className, ...props }: SheetTitleProps) {
	return (
		<SheetPrimitive.Title
			data-slot="sheet-title"
			className={cx('text-foreground font-semibold', className)}
			{...props}
		/>
	)
}

export type SheetDescriptionProps = React.ComponentProps<
	typeof SheetPrimitive.Description
>
export function SheetDescription({
	className,
	...props
}: SheetDescriptionProps) {
	return (
		<SheetPrimitive.Description
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
