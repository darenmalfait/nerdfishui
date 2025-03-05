'use client'

import { cx } from '@nerdfish/utils'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Check, ChevronRight, Circle } from 'lucide-react'
import * as React from 'react'

export type DropdownMenuProps = React.ComponentProps<typeof DropdownMenu>
export const DropdownMenu = DropdownMenuPrimitive.Root

export type DropdownMenuGroupProps = React.ComponentProps<
	typeof DropdownMenuGroup
>
export const DropdownMenuGroup = DropdownMenuPrimitive.Group

export type DropdownMenuPortalProps = React.ComponentProps<
	typeof DropdownMenuPortal
>
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal

export type DropdownMenuRadioGroupProps = React.ComponentProps<
	typeof DropdownMenuRadioGroup
>
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

export type DropdownMenuSubProps = React.ComponentProps<typeof DropdownMenuSub>
export const DropdownMenuSub = DropdownMenuPrimitive.Sub

export type DropdownMenuTriggerProps = React.ComponentProps<
	typeof DropdownMenuTrigger
>
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const basePadding = 'p-sm'
const outerRadius = 'rounded-base'
const innerRadius = 'rounded-[calc(theme(borderRadius.base)-theme(padding.sm))]'

export interface DropdownMenuSubTriggerProps
	extends React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> {
	inset?: boolean
}
export function DropdownMenuSubTrigger({
	inset,
	className,
	children,
	...props
}: DropdownMenuSubTriggerProps) {
	return (
		<DropdownMenuPrimitive.SubTrigger
			className={cx(
				'px-sm py-sm text-primary focus:bg-muted data-[state=open]:bg-muted flex cursor-default select-none items-center text-sm font-medium outline-none',
				innerRadius,
				inset && 'pl-lg',
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRight className="ml-auto size-4" />
		</DropdownMenuPrimitive.SubTrigger>
	)
}

export type DropdownMenuSubContentProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.SubContent
>
export function DropdownMenuSubContent({
	className,
	...props
}: DropdownMenuSubContentProps) {
	return (
		<DropdownMenuPrimitive.SubContent
			className={cx(
				'slide-in-from-left-1 animate-in bg-primary shadow-outline shadow-soft-xl z-50 min-w-[8rem] overflow-hidden',
				outerRadius,
				basePadding,
				className,
			)}
			{...props}
		/>
	)
}

export type DropdownMenuContentProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.Content
>
export function DropdownMenuContent({
	sideOffset = 4,
	className,
	...props
}: DropdownMenuContentProps) {
	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				sideOffset={sideOffset}
				className={cx(
					'data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 animate-in bg-primary text-primary shadow-outline shadow-soft-xl z-50 min-w-[8rem] overflow-hidden',
					basePadding,
					outerRadius,
					className,
				)}
				{...props}
			/>
		</DropdownMenuPrimitive.Portal>
	)
}

export interface DropdownMenuItemProps
	extends React.ComponentProps<typeof DropdownMenuPrimitive.Item> {
	inset?: boolean
}
export function DropdownMenuItem({
	className,
	inset,
	...props
}: DropdownMenuItemProps) {
	return (
		<DropdownMenuPrimitive.Item
			className={cx(
				'px-sm py-sm text-primary focus:bg-muted relative flex cursor-default select-none items-center text-sm font-medium outline-none aria-[disabled=true]:pointer-events-none aria-[disabled=true]:opacity-50',
				innerRadius,
				inset && 'pl-lg',
				className,
			)}
			{...props}
		/>
	)
}

export type DropdownMenuCheckboxItemProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.CheckboxItem
>
export function DropdownMenuCheckboxItem({
	className,
	checked,
	children,
	...props
}: DropdownMenuCheckboxItemProps) {
	return (
		<DropdownMenuPrimitive.CheckboxItem
			className={cx(
				'py-sm pr-sm pl-lg focus:bg-muted relative flex cursor-default select-none items-center text-sm font-medium outline-none aria-[disabled=true]:pointer-events-none aria-[disabled=true]:opacity-50',
				innerRadius,
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
	)
}

export type DropdownMenuRadioItemProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.RadioItem
>
export function DropdownMenuRadioItem({
	className,
	children,
	...props
}: DropdownMenuRadioItemProps) {
	return (
		<DropdownMenuPrimitive.RadioItem
			className={cx(
				'py-sm pr-sm pl-lg focus:bg-muted relative flex cursor-default select-none items-center text-sm font-medium outline-none aria-[disabled=true]:pointer-events-none aria-[disabled=true]:opacity-50',
				innerRadius,
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
	)
}

export interface DropdownMenuLabelProps
	extends React.ComponentProps<typeof DropdownMenuPrimitive.Label> {
	inset?: boolean
}

export function DropdownMenuLabel({
	className,
	inset,
	...props
}: DropdownMenuLabelProps) {
	return (
		<DropdownMenuPrimitive.Label
			className={cx(
				'px-sm py-sm text-primary text-sm font-semibold',
				inset && 'pl-lg',
				className,
			)}
			{...props}
		/>
	)
}

export type DropdownMenuSeparatorProps = React.ComponentProps<
	typeof DropdownMenuPrimitive.Separator
>
export function DropdownMenuSeparator({
	className,
	...props
}: DropdownMenuSeparatorProps) {
	return (
		<DropdownMenuPrimitive.Separator
			className={cx('-mx-xs my-xs bg-muted h-px', className)}
			{...props}
		/>
	)
}

export type DropdownMenuShortcutProps = React.ComponentProps<'span'>

export function DropdownMenuShortcut({
	className,
	...props
}: DropdownMenuShortcutProps) {
	return (
		<span
			className={cx('text-primary/50 ml-auto text-xs', className)}
			{...props}
		/>
	)
}
