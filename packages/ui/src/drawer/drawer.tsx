// https://ui.shadcn.com/docs/components/drawer
'use client'

import { cx } from '@nerdfish/utils'
import { XIcon } from 'lucide-react'
import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { Button } from '../button'

export const DrawerRoot = ({
	shouldScaleBackground = true,
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
	<DrawerPrimitive.Root
		shouldScaleBackground={shouldScaleBackground}
		{...props}
	/>
)
DrawerRoot.displayName = 'DrawerRoot'

export const DrawerOverlay = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Overlay
		ref={ref}
		className={cx('fixed inset-0 z-50 bg-black/80', className)}
		{...props}
	/>
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

export const DrawerContent = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
	return (
		<DrawerPrimitive.Portal>
			<DrawerOverlay className="bg-primary/80" />
			<DrawerPrimitive.Content
				ref={ref}
				className={cx(
					// default
					'shadow-outline bg-popover group fixed z-50 flex flex-col',
					// top
					'[&[vaul-drawer-direction=top]]:inset-x-0 [&[vaul-drawer-direction=top]]:top-0 [&[vaul-drawer-direction=top]]:mb-24 [&[vaul-drawer-direction=top]]:rounded-b-[10px]',
					// bottom
					'[&[vaul-drawer-direction=bottom]]:inset-x-0 [&[vaul-drawer-direction=bottom]]:bottom-0 [&[vaul-drawer-direction=bottom]]:mt-24 [&[vaul-drawer-direction=bottom]]:rounded-t-[10px]',
					// left
					'[&[vaul-drawer-direction=left]]:inset-y-0 [&[vaul-drawer-direction=left]]:left-0 [&[vaul-drawer-direction=left]]:mr-24 [&[vaul-drawer-direction=left]]:w-auto [&[vaul-drawer-direction=left]]:rounded-r-[10px]',
					// right
					'[&[vaul-drawer-direction=right]]:inset-y-0 [&[vaul-drawer-direction=right]]:right-0 [&[vaul-drawer-direction=right]]:ml-24 [&[vaul-drawer-direction=right]]:w-auto [&[vaul-drawer-direction=right]]:rounded-l-[10px]',
					// other
					className,
				)}
				{...props}
			>
				<div
					data-role="drawer-handle"
					className="bg-inverted/10 mx-auto mb-3 mt-4 h-2 w-[100px] rounded-full opacity-0 group-[[vaul-drawer-direction=bottom]]:opacity-100"
				/>
				<DrawerPrimitive.Close
					asChild
					className="absolute right-0 top-0 mr-2 mt-2"
				>
					<Button variant="ghost" size="icon" aria-label="Close">
						<XIcon aria-hidden className="size-4" />
					</Button>
				</DrawerPrimitive.Close>
				<div className="h-full overflow-y-auto">{children}</div>
				<div
					data-role="drawer-handle"
					className="bg-muted mx-auto mb-3 mt-4 h-2 w-[100px] rounded-full opacity-0 group-[[vaul-drawer-direction=top]]:opacity-100"
				/>
			</DrawerPrimitive.Content>
		</DrawerPrimitive.Portal>
	)
})
DrawerContent.displayName = 'DrawerContent'

export const DrawerHeader = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx('grid gap-1.5 p-4 text-center sm:text-left', className)}
		{...props}
	/>
)
DrawerHeader.displayName = 'DrawerHeader'

export const DrawerFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx('mt-auto flex flex-col gap-2 p-4', className)}
		{...props}
	/>
)
DrawerFooter.displayName = 'DrawerFooter'

export const DrawerTitle = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Title
		ref={ref}
		className={cx(
			'text-lg font-semibold leading-none tracking-tight',
			className,
		)}
		{...props}
	/>
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

export const DrawerDescription = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Description
		ref={ref}
		className={cx('text-muted text-sm', className)}
		{...props}
	/>
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export const DrawerTrigger = DrawerPrimitive.Trigger
export const DrawerPortal = DrawerPrimitive.Portal
export const DrawerClose = DrawerPrimitive.Close

export type DrawerRootProps = React.ComponentProps<typeof DrawerRoot>
export type DrawerOverlayProps = React.ComponentProps<typeof DrawerOverlay>
export type DrawerContentProps = React.ComponentProps<typeof DrawerContent>
export type DrawerHeaderProps = React.ComponentProps<typeof DrawerHeader>
export type DrawerFooterProps = React.ComponentProps<typeof DrawerFooter>
export type DrawerTitleProps = React.ComponentProps<typeof DrawerTitle>
export type DrawerDescriptionProps = React.ComponentProps<
	typeof DrawerDescription
>
export type DrawerTriggerProps = React.ComponentProps<typeof DrawerTrigger>
export type DrawerPortalProps = React.ComponentProps<typeof DrawerPortal>
export type DrawerCloseProps = React.ComponentProps<typeof DrawerClose>
