'use client'

import { cx } from '@nerdfish/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import * as React from 'react'

export const DropdownMenuRoot = DropdownMenuPrimitive.Root
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
			'focus:bg-muted data-[state=open]:bg-muted text-primary flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none',
			inset && 'pl-8',
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
			'animate-in slide-in-from-left-1 shadow-outline bg-muted text-inverted/700 shadow-soft-xl z-50 min-w-[8rem] overflow-hidden rounded-lg p-1',
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
				'animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 bg-primary text-primary shadow-soft-xl shadow-outline z-50 min-w-[8rem] overflow-hidden rounded-lg p-1',
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
			'focus:bg-muted text-primary relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
			inset && 'pl-8',
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
			'focus:bg-muted relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
			className,
		)}
		checked={checked}
		{...props}
	>
		<span className="absolute left-2 flex size-3.5 items-center justify-center">
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
			'focus:bg-muted relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
			className,
		)}
		{...props}
	>
		<span className="absolute left-2 flex size-3.5 items-center justify-center">
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
			'text-primary px-2 py-1.5 text-sm font-semibold',
			inset && 'pl-8',
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
		className={cx('bg-muted -mx-1 my-1 h-px', className)}
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
			className={cx(
				'text-primary/50 ml-auto text-xs tracking-widest',
				className,
			)}
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
export type DropdownMenuRootProps = React.ComponentPropsWithoutRef<
	typeof DropdownMenuRoot
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
