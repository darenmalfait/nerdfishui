'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import * as React from 'react'
import { Button } from './button'

export const Sheet = SheetPrimitive.Root

export const SheetTrigger = SheetPrimitive.Trigger

export const SheetClose = SheetPrimitive.Close

export const SheetPortal = SheetPrimitive.Portal

function SheetOverlay({
	className,
	...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
	return (
		<SheetPrimitive.Overlay
			className={cx(
				'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
				className,
			)}
			{...props}
		/>
	)
}

export const sheetVariants = cva(
	'fixed z-50 gap-4 bg-primary p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
	{
		variants: {
			side: {
				top: 'inset-x-0 top-0 border-b-muted data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
				bottom:
					'inset-x-0 bottom-0 border-t-muted data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
				left: 'inset-y-0 left-0 h-full w-3/4 border-r-muted data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
				right:
					'inset-y-0 right-0 h-full w-3/4  border-l-muted data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
			},
		},
		defaultVariants: {
			side: 'right',
		},
	},
)

export interface SheetContentProps
	extends React.ComponentProps<typeof SheetPrimitive.Content>,
		VariantProps<typeof sheetVariants> {}

export function SheetContent({
	side = 'right',
	className,
	children,
	...props
}: SheetContentProps) {
	return (
		<SheetPortal>
			<SheetOverlay />
			<SheetPrimitive.Content
				className={cx(sheetVariants({ side }), className)}
				{...props}
			>
				{children}
				<SheetPrimitive.Close asChild>
					<Button
						variant="ghost"
						size="iconSm"
						className="top-sm right-sm absolute"
					>
						<XIcon aria-hidden className="size-4" />
						<span className="sr-only">Close</span>
					</Button>
				</SheetPrimitive.Close>
			</SheetPrimitive.Content>
		</SheetPortal>
	)
}

export function SheetHeader({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cx(
				'flex flex-col space-y-2 text-center sm:text-left',
				className,
			)}
			{...props}
		/>
	)
}

export function SheetFooter({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cx(
				'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
				className,
			)}
			{...props}
		/>
	)
}

export function SheetTitle({
	className,
	...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
	return (
		<SheetPrimitive.Title
			className={cx('text-primary text-lg font-semibold', className)}
			{...props}
		/>
	)
}

export function SheetDescription({
	className,
	...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
	return (
		<SheetPrimitive.Description
			className={cx('text-muted text-sm', className)}
			{...props}
		/>
	)
}
