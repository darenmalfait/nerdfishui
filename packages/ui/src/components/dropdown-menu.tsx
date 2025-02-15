'use client'

import { cx } from '@nerdfish/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import * as React from 'react'

export const DropdownMenu = DropdownMenuPrimitive.Root
export const DropdownMenuGroup = DropdownMenuPrimitive.Group
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup
export const DropdownMenuSub = DropdownMenuPrimitive.Sub
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

export const DropdownMenuSubTrigger = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
		inset?: boolean
	}
>(({ className, inset, children, ...props }, ref) => (
	<DropdownMenuPrimitive.SubTrigger
		ref={ref}
		className={cx(
			'rounded-base px-sm py-sm text-primary focus:bg-muted data-[state=open]:bg-muted flex cursor-default select-none items-center text-sm font-medium outline-none',
			inset && 'pl-lg',
			className,
		)}
		{...props}
	>
		{children}
		<ChevronRight className="ml-auto size-4" />
	</DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName =
	DropdownMenuPrimitive.SubTrigger.displayName

export const DropdownMenuSubContent = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.SubContent
		ref={ref}
		className={cx(
			'slide-in-from-left-1 animate-in rounded-base bg-muted p-md text-inverted/700 shadow-outline shadow-soft-xl z-50 min-w-[8rem] overflow-hidden',
			className,
		)}
		{...props}
	/>
))
DropdownMenuSubContent.displayName =
	DropdownMenuPrimitive.SubContent.displayName

export const DropdownMenuContent = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<DropdownMenuPrimitive.Portal>
		<DropdownMenuPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cx(
				'data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 animate-in rounded-base bg-primary p-md text-primary shadow-outline shadow-soft-xl z-50 min-w-[8rem] overflow-hidden',
				className,
			)}
			{...props}
		/>
	</DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

export const DropdownMenuItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
		inset?: boolean
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Item
		ref={ref}
		className={cx(
			'rounded-base px-sm py-sm text-primary focus:bg-muted relative flex cursor-default select-none items-center text-sm font-medium outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
			inset && 'pl-lg',
			className,
		)}
		{...props}
	/>
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

export const DropdownMenuCheckboxItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<DropdownMenuPrimitive.CheckboxItem
		ref={ref}
		className={cx(
			'rounded-base py-sm pr-sm pl-lg focus:bg-muted relative flex cursor-default select-none items-center text-sm font-medium outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
			className,
		)}
		checked={checked}
		{...props}
	>
		<span className="left-sm absolute flex size-4 items-center justify-center">
			<DropdownMenuPrimitive.ItemIndicator>
				<Check className="size-4" />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName =
	DropdownMenuPrimitive.CheckboxItem.displayName

export const DropdownMenuRadioItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
	<DropdownMenuPrimitive.RadioItem
		ref={ref}
		className={cx(
			'rounded-base py-sm pr-sm pl-lg focus:bg-muted relative flex cursor-default select-none items-center text-sm font-medium outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
			className,
		)}
		{...props}
	>
		<span className="left-sm absolute flex size-4 items-center justify-center">
			<DropdownMenuPrimitive.ItemIndicator>
				<Circle className="size-2 fill-current" />
			</DropdownMenuPrimitive.ItemIndicator>
		</span>
		{children}
	</DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

export const DropdownMenuLabel = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
		inset?: boolean
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Label
		ref={ref}
		className={cx(
			'px-sm py-sm text-primary text-sm font-semibold',
			inset && 'pl-lg',
			className,
		)}
		{...props}
	/>
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

export const DropdownMenuSeparator = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.Separator
		ref={ref}
		className={cx('-mx-xs my-xs bg-muted h-px', className)}
		{...props}
	/>
))
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName

export const DropdownMenuShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cx('text-primary/50 ml-auto text-xs', className)}
			{...props}
		/>
	)
}
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'

export type DropdownMenuCheckboxItemProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuCheckboxItem
>
export type DropdownMenuContentProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuContent
>
export type DropdownMenuGroupProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuGroup
>
export type DropdownMenuItemProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuItem
>
export type DropdownMenuLabelProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuLabel
>
export type DropdownMenuPortalProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuPortal
>
export type DropdownMenuRadioGroupProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuRadioGroup
>
export type DropdownMenuRadioItemProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuRadioItem
>
export type DropdownMenuProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenu
>
export type DropdownMenuSeparatorProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuSeparator
>
export type DropdownMenuShortcutProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuShortcut
>
export type DropdownMenuSubContentProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuSubContent
>
export type DropdownMenuSubTriggerProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuSubTrigger
>
export type DropdownMenuTriggerProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuTrigger
>
export type DropdownMenuSubProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuSub
>
