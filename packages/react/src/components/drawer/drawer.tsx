'use client'

import { cn } from '@nerdfish/utils/class'
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
			className={cn(className)}
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
			className={cn('fixed inset-0 bg-black/80', className)}
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
				className={cn(
					// default
					'bg-background shadow-outline group fixed flex flex-col',
					// top
					'data-[vaul-drawer-direction=top]:mb-2xl data-[vaul-drawer-direction=top]:rounded-b-container data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0',
					// bottom
					'data-[vaul-drawer-direction=bottom]:mt-2xl data-[vaul-drawer-direction=bottom]:rounded-t-container data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0',
					// left
					'data-[vaul-drawer-direction=left]:mr-2xl data-[vaul-drawer-direction=left]:rounded-r-base data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-auto',
					// right
					'data-[vaul-drawer-direction=right]:ml-2xl data-[vaul-drawer-direction=right]:rounded-l-base data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-auto',
					// other
					className,
				)}
				{...props}
			>
				<div className="relative max-h-screen overflow-y-auto">
					<div
						data-role="drawer-handle"
						className="top-friends mt-friends mb-friends bg-background-muted sticky mx-auto hidden h-2 w-12.5 rounded-full opacity-0 group-data-[vaul-drawer-direction=bottom]:block group-data-[vaul-drawer-direction=bottom]:opacity-100"
					/>
					{children}
					<div
						data-role="drawer-handle"
						className="bottom-friends mt-friends mb-friends bg-background-muted sticky mx-auto hidden h-2 w-12.5 rounded-full opacity-0 group-data-[vaul-drawer-direction=top]:block group-data-[vaul-drawer-direction=top]:opacity-100"
					/>
				</div>
			</DrawerPrimitive.Content>
		</DrawerPortal>
	)
}

export type DrawerHeaderProps = HTMLAttributes<HTMLDivElement>
export const DrawerHeader = ({ className, ...props }: DrawerHeaderProps) => (
	<div
		data-slot="drawer-header"
		className={cn(
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
		className={cn(
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
			className={cn(
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
			className={cn('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}
