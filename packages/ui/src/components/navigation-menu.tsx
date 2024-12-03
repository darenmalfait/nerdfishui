'use client'

import { cva, cx } from '@nerdfish/utils'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

const NavigationMenuViewport = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
	<div className={cx('absolute left-0 top-full flex justify-center')}>
		<NavigationMenuPrimitive.Viewport
			className={cx(
				'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 mt-sm origin-top-center rounded-base bg-popover text-primary shadow-outline data-[state=closed]:animate-out data-[state=open]:animate-in relative h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]',
				className,
			)}
			ref={ref}
			{...props}
		/>
	</div>
))
NavigationMenuViewport.displayName =
	NavigationMenuPrimitive.Viewport.displayName

export const NavigationMenu = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> & {
		viewportClassName?: string
	}
>(({ className, children, viewportClassName, ...props }, ref) => (
	<NavigationMenuPrimitive.Root
		ref={ref}
		className={cx(
			'relative z-10 flex max-w-max flex-1 items-center justify-center',
			className,
		)}
		{...props}
	>
		{children}
		<NavigationMenuViewport className={viewportClassName} />
	</NavigationMenuPrimitive.Root>
))
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName

export const NavigationMenuList = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.List
		ref={ref}
		className={cx(
			'space-x-sm group flex flex-1 list-none items-center justify-center',
			className,
		)}
		{...props}
	/>
))
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName

export const NavigationMenuItem = NavigationMenuPrimitive.Item

export const getNavigationMenuTriggerStyle = cva(
	'group relative inline-flex h-10 w-max items-center justify-center rounded-base bg-primary px-4 py-2 font-medium text-sm transition-colors hover:bg-muted focus:bg-muted focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-muted data-[state=open]:bg-muted',
)

export const NavigationMenuTrigger = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<NavigationMenuPrimitive.Trigger
		ref={ref}
		className={cx(getNavigationMenuTriggerStyle(), 'group', className)}
		{...props}
	>
		{children}{' '}
		<ChevronDown
			className="ml-sm relative top-[1px] size-4 transition duration-200 group-data-[state=open]:rotate-180"
			aria-hidden="true"
		/>
	</NavigationMenuPrimitive.Trigger>
))
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName

export const NavigationMenuContent = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Content
		ref={ref}
		className={cx(
			'data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out left-0 top-0 w-full md:absolute md:w-auto',
			className,
		)}
		{...props}
	/>
))
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName

export const NavigationMenuLink = NavigationMenuPrimitive.Link

export const NavigationMenuIndicator = React.forwardRef<
	React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
	React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
	<NavigationMenuPrimitive.Indicator
		ref={ref}
		className={cx(
			'data-[state=hidden]:fade-out data-[state=visible]:fade-in data-[state=hidden]:animate-out data-[state=visible]:animate-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
			className,
		)}
		{...props}
	>
		<div className="bg-muted relative top-[60%] size-2 rotate-45 rounded-tl-sm shadow-md" />
	</NavigationMenuPrimitive.Indicator>
))
NavigationMenuIndicator.displayName =
	NavigationMenuPrimitive.Indicator.displayName

export type NavigationMenuProps = React.ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Root
>
export type NavigationMenuListProps = React.ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.List
>
export type NavigationMenuItemProps = React.ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Item
>
export type NavigationMenuTriggerProps = React.ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Trigger
>
export type NavigationMenuContentProps = React.ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Content
>
export type NavigationMenuLinkProps = React.ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Link
>
export type NavigationMenuIndicatorProps = React.ComponentPropsWithoutRef<
	typeof NavigationMenuPrimitive.Indicator
>
