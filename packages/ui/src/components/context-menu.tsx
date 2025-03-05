'use client'

import { cx } from '@nerdfish/utils'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'
import * as React from 'react'

const basePadding = 'p-sm'
const outerRadius = 'rounded-base'
const innerRadius = 'rounded-[calc(theme(borderRadius.base)-theme(padding.sm))]'

export type ContextMenuProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Root
>
export const ContextMenu = ContextMenuPrimitive.Root

export type ContextMenuTriggerProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Trigger
>
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger

export type ContextMenuGroupProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Group
>
export const ContextMenuGroup = ContextMenuPrimitive.Group

export type ContextMenuPortalProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Portal
>
export const ContextMenuPortal = ContextMenuPrimitive.Portal

export type ContextMenuSubProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Sub
>
export const ContextMenuSub = ContextMenuPrimitive.Sub

export type ContextMenuRadioGroupProps = React.ComponentProps<
	typeof ContextMenuPrimitive.RadioGroup
>
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup

export interface ContextMenuSubTriggerProps
	extends React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> {
	inset?: boolean
}

export function ContextMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: ContextMenuSubTriggerProps) {
	return (
		<ContextMenuPrimitive.SubTrigger
			className={cx(
				'focus:bg-background-muted/90 focus:text-foreground data-[state=open]:bg-background-muted/90 data-[state=open]:text-foreground px-sm py-sm flex cursor-default select-none items-center text-sm outline-none',
				innerRadius,
				inset && 'pl-lg',
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-4" />
		</ContextMenuPrimitive.SubTrigger>
	)
}

export type ContextMenuSubContentProps = React.ComponentProps<
	typeof ContextMenuPrimitive.SubContent
>

export function ContextMenuSubContent({
	className,
	...props
}: ContextMenuSubContentProps) {
	return (
		<ContextMenuPrimitive.SubContent
			className={cx(
				'bg-background text-foreground shadow-outline data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-sm data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] shadow-lg',
				outerRadius,
				basePadding,
				className,
			)}
			{...props}
		/>
	)
}

export type ContextMenuContentProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Content
>

export function ContextMenuContent({
	className,
	...props
}: ContextMenuContentProps) {
	return (
		<ContextMenuPrimitive.Portal>
			<ContextMenuPrimitive.Content
				className={cx(
					'bg-background text-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-sm data-[side=top]:slide-in-from-bottom-2 shadow-outline z-50 min-w-[8rem] shadow-md',
					outerRadius,
					basePadding,
					className,
				)}
				{...props}
			/>
		</ContextMenuPrimitive.Portal>
	)
}

export type ContextMenuItemProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Item
> & {
	inset?: boolean
}

export function ContextMenuItem({
	className,
	inset,
	...props
}: ContextMenuItemProps) {
	return (
		<ContextMenuPrimitive.Item
			className={cx(
				'focus:bg-background-muted/90 focus:text-foreground px-sm py-sm relative flex cursor-default select-none items-center text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				innerRadius,
				inset && 'pl-lg',
				className,
			)}
			{...props}
		/>
	)
}

export type ContextMenuCheckboxItemProps = React.ComponentProps<
	typeof ContextMenuPrimitive.CheckboxItem
>

export function ContextMenuCheckboxItem({
	className,
	children,
	checked,
	...props
}: ContextMenuCheckboxItemProps) {
	return (
		<ContextMenuPrimitive.CheckboxItem
			className={cx(
				'focus:bg-background-muted/90 focus:text-foreground py-sm pl-lg relative flex cursor-default select-none items-center pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				innerRadius,
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="left-sm absolute flex h-3.5 w-3.5 items-center justify-center">
				<ContextMenuPrimitive.ItemIndicator>
					<CheckIcon className="size-4" />
				</ContextMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.CheckboxItem>
	)
}

export type ContextMenuRadioItemProps = React.ComponentProps<
	typeof ContextMenuPrimitive.RadioItem
>

export function ContextMenuRadioItem({
	className,
	children,
	...props
}: ContextMenuRadioItemProps) {
	return (
		<ContextMenuPrimitive.RadioItem
			className={cx(
				'focus:bg-background-muted/90 focus:text-foreground py-sm pl-lg relative flex cursor-default select-none items-center pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				innerRadius,
				className,
			)}
			{...props}
		>
			<span className="left-sm absolute flex h-3.5 w-3.5 items-center justify-center">
				<ContextMenuPrimitive.ItemIndicator>
					<CircleIcon className="size-4 fill-current" />
				</ContextMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.RadioItem>
	)
}

export type ContextMenuLabelProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Label
> & {
	inset?: boolean
}

export function ContextMenuLabel({
	className,
	inset,
	...props
}: ContextMenuLabelProps) {
	return (
		<ContextMenuPrimitive.Label
			className={cx(
				'text-foreground px-sm py-sm text-sm font-semibold',
				inset && 'pl-lg',
				className,
			)}
			{...props}
		/>
	)
}

export type ContextMenuSeparatorProps = React.ComponentProps<
	typeof ContextMenuPrimitive.Separator
>

export function ContextMenuSeparator({
	className,
	...props
}: ContextMenuSeparatorProps) {
	return (
		<ContextMenuPrimitive.Separator
			className={cx('bg-background-muted -mx-xs my-xs h-px', className)}
			{...props}
		/>
	)
}

export type ContextMenuShortcutProps = React.ComponentProps<'span'>

export function ContextMenuShortcut({
	className,
	...props
}: ContextMenuShortcutProps) {
	return (
		<span
			className={cx(
				'text-foreground-muted ml-auto text-xs tracking-widest',
				className,
			)}
			{...props}
		/>
	)
}
