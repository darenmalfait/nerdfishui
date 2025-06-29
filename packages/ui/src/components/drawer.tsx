// https://ui.shadcn.com/docs/components/drawer
'use client'

import { cx } from '@nerdfish/utils'
import { XIcon } from 'lucide-react'
import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'
import { Button } from './button'

export const Drawer = ({
	shouldScaleBackground = true,
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
	<DrawerPrimitive.Root
		shouldScaleBackground={shouldScaleBackground}
		{...props}
	/>
)
Drawer.displayName = 'Drawer'

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
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> & {
		hideCloseButton?: boolean
	}
>(({ className, children, hideCloseButton, ...props }, ref) => {
	return (
		<DrawerPrimitive.Portal>
			<DrawerOverlay className="bg-background/80" />

			<DrawerPrimitive.Content
				ref={ref}
				className={cx(
					// default
					'bg-background shadow-outline group fixed z-50 flex flex-col',
					// top
					'[&[data-vaul-drawer-direction=top]]:mb-2xl [&[data-vaul-drawer-direction=top]]:rounded-b-container [&[data-vaul-drawer-direction=top]]:inset-x-0 [&[data-vaul-drawer-direction=top]]:top-0',
					// bottom
					'[&[data-vaul-drawer-direction=bottom]]:mt-2xl [&[data-vaul-drawer-direction=bottom]]:rounded-t-container [&[data-vaul-drawer-direction=bottom]]:inset-x-0 [&[data-vaul-drawer-direction=bottom]]:bottom-0',
					// left
					'[&[data-vaul-drawer-direction=left]]:mr-2xl [&[data-vaul-drawer-direction=left]]:rounded-r-base [&[data-vaul-drawer-direction=left]]:inset-y-0 [&[data-vaul-drawer-direction=left]]:left-0 [&[data-vaul-drawer-direction=left]]:w-auto',
					// right
					'[&[data-vaul-drawer-direction=right]]:ml-2xl [&[data-vaul-drawer-direction=right]]:rounded-l-base [&[data-vaul-drawer-direction=right]]:inset-y-0 [&[data-vaul-drawer-direction=right]]:right-0 [&[data-vaul-drawer-direction=right]]:w-auto',
					// other
					className,
				)}
				{...props}
			>
				{hideCloseButton ? null : (
					<DrawerPrimitive.Close
						asChild
						className="mt-md mr-md absolute right-0 top-0 z-30"
					>
						<Button variant="ghost" icon aria-label="Close">
							<XIcon aria-hidden className="size-4" />
						</Button>
					</DrawerPrimitive.Close>
				)}
				<div className="relative max-h-[100vh] overflow-y-auto">
					<div
						data-role="drawer-handle"
						className="top-md mt-md mb-md bg-background-muted sticky mx-auto hidden h-2 w-[50px] rounded-full opacity-0 group-[[data-vaul-drawer-direction=bottom]]:block group-[[data-vaul-drawer-direction=bottom]]:opacity-100"
					/>
					{children}
					<div
						data-role="drawer-handle"
						className="bottom-md mt-md mb-md bg-background-muted sticky mx-auto hidden h-2 w-[50px] rounded-full opacity-0 group-[[data-vaul-drawer-direction=top]]:block group-[[data-vaul-drawer-direction=top]]:opacity-100"
					/>
				</div>
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
		className={cx('gap-sm p-md grid text-center sm:text-left', className)}
		{...props}
	/>
)
DrawerHeader.displayName = 'DrawerHeader'

export const DrawerFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cx('gap-sm p-md mt-auto flex flex-col', className)}
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
		className={cx('text-lg font-semibold leading-none', className)}
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
		className={cx('text-foreground-muted text-sm', className)}
		{...props}
	/>
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

export const DrawerTrigger = DrawerPrimitive.Trigger
export const DrawerPortal = DrawerPrimitive.Portal
export const DrawerClose = DrawerPrimitive.Close

export type DrawerProps = React.ComponentProps<typeof Drawer>
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
