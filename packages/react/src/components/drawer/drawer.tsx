'use client'

import { cx } from '@nerdfish/utils'
import { type ComponentProps, type HTMLAttributes } from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

export type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root>
export function Drawer({
	shouldScaleBackground = true,
	...props
}: DrawerProps) {
	return (
		<DrawerPrimitive.Root
			shouldScaleBackground={shouldScaleBackground}
			{...props}
		/>
	)
}

export type DrawerTriggerProps = ComponentProps<typeof DrawerPrimitive.Trigger>
export function DrawerTrigger({ className, ...props }: DrawerTriggerProps) {
	return (
		<DrawerPrimitive.Trigger
			data-slot="drawer-trigger"
			className={cx(className)}
			{...props}
		/>
	)
}

export type DrawerPortalProps = ComponentProps<typeof DrawerPrimitive.Portal>
export function DrawerPortal({ ...props }: DrawerPortalProps) {
	return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

export type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.Close>
export function DrawerClose({ ...props }: DrawerCloseProps) {
	return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

export type DrawerOverlayProps = ComponentProps<typeof DrawerPrimitive.Overlay>
export function DrawerOverlay({ className, ...props }: DrawerOverlayProps) {
	return (
		<DrawerPrimitive.Overlay
			data-slot="drawer-overlay"
			className={cx('fixed inset-0 z-50 bg-black/80', className)}
			{...props}
		/>
	)
}

export type DrawerContentProps = ComponentProps<typeof DrawerPrimitive.Content>
export function DrawerContent({
	className,
	children,
	...props
}: DrawerContentProps) {
	return (
		<DrawerPortal>
			<DrawerOverlay />
			<DrawerPrimitive.Content
				data-slot="drawer-content"
				className={cx(
					'bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border',
					className,
				)}
				{...props}
			>
				<div className="bg-background-muted mt-friends mx-auto h-2 w-[100px] rounded-full" />
				{children}
			</DrawerPrimitive.Content>
		</DrawerPortal>
	)
}

export type DrawerHeaderProps = HTMLAttributes<HTMLDivElement>
export const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => (
	<div
		data-slot="drawer-header"
		className={cx(
			'gap-best-friends p-friends grid text-center sm:text-left',
			className,
		)}
		{...props}
	/>
)

export type DrawerFooterProps = HTMLAttributes<HTMLDivElement>
export const DrawerFooter = ({ className, ...props }: DrawerFooterProps) => (
	<div
		data-slot="drawer-footer"
		className={cx(
			'gap-best-friends p-friends mt-auto flex flex-col',
			className,
		)}
		{...props}
	/>
)

export type DrawerTitleProps = ComponentProps<typeof DrawerPrimitive.Title>
export function DrawerTitle({ className, ...props }: DrawerTitleProps) {
	return (
		<DrawerPrimitive.Title
			data-slot="drawer-title"
			className={cx(
				'text-lg leading-none font-semibold tracking-tight',
				className,
			)}
			{...props}
		/>
	)
}

export type DrawerDescriptionProps = ComponentProps<
	typeof DrawerPrimitive.Description
>
export function DrawerDescription({
	className,
	...props
}: DrawerDescriptionProps) {
	return (
		<DrawerPrimitive.Description
			data-slot="drawer-description"
			className={cx('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}
