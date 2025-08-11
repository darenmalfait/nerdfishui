'use client'

import { ContextMenu as ContextMenuPrimitive } from '@base-ui-components/react/context-menu'
import { cx } from '@nerdfish/utils'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'
import * as React from 'react'

const basePadding = 'p-sm'
const outerRadius = 'rounded-base'
const innerRadius = 'rounded-[calc(theme(borderRadius.base)-theme(padding.sm))]'

export type ContextMenuProps = ContextMenuPrimitive.Root.Props
export function ContextMenu({ ...props }: ContextMenuProps) {
	return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

export type ContextMenuTriggerProps = ContextMenuPrimitive.Trigger.Props
export function ContextMenuTrigger({ ...props }: ContextMenuTriggerProps) {
	return (
		<ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
	)
}

export type ContextMenuGroupProps = ContextMenuPrimitive.Group.Props
export function ContextMenuGroup({ ...props }: ContextMenuGroupProps) {
	return (
		<ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
	)
}

export type ContextMenuPortalProps = ContextMenuPrimitive.Portal.Props
export function ContextMenuPortal({
	...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
	return (
		<ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
	)
}

export type ContextMenuPositionerProps = ContextMenuPrimitive.Positioner.Props
export function ContextMenuPositioner({
	...props
}: ContextMenuPositionerProps) {
	return (
		<ContextMenuPrimitive.Positioner
			data-slot="context-menu-positioner"
			{...props}
		/>
	)
}

export type ContextMenuRadioGroupProps = ContextMenuPrimitive.RadioGroup.Props
export function ContextMenuRadioGroup({
	...props
}: ContextMenuRadioGroupProps) {
	return (
		<ContextMenuPrimitive.RadioGroup
			data-slot="context-menu-radio-group"
			{...props}
		/>
	)
}

export interface ContextMenuContentProps
	extends ContextMenuPrimitive.Popup.Props {
	align?: ContextMenuPrimitive.Positioner.Props['align']
	sideOffset?: ContextMenuPrimitive.Positioner.Props['sideOffset']
}
export function ContextMenuContent({
	className,
	sideOffset = 4,
	align = 'start',
	...props
}: ContextMenuContentProps) {
	return (
		<ContextMenuPortal>
			<ContextMenuPositioner
				className="max-h-[var(--available-height)]"
				align={align}
				sideOffset={sideOffset}
			>
				<ContextMenuPrimitive.Popup
					data-slot="context-menu-content"
					className={cx(
						'bg-popover data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 text-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-[var(--transform-origin)] overflow-hidden border p-1 shadow-md outline-none',
						outerRadius,
						basePadding,
						className,
					)}
					{...props}
				/>
			</ContextMenuPositioner>
		</ContextMenuPortal>
	)
}

export interface ContextMenuItemProps extends ContextMenuPrimitive.Item.Props {
	inset?: boolean
	variant?: 'default' | 'destructive'
}
export function ContextMenuItem({
	className,
	inset,
	variant = 'default',
	...props
}: ContextMenuItemProps) {
	return (
		<ContextMenuPrimitive.Item
			data-slot="context-menu-item"
			data-inset={inset}
			data-variant={variant}
			className={cx(
				"focus:bg-background-muted focus:text-foreground data-[variant=destructive]:text-foreground-danger data-[variant=destructive]:focus:bg-background-danger/20 data-[variant=destructive]:focus:text-foreground-danger data-[variant=destructive]:*:[svg]:!text-foreground-danger focus:data-[variant=destructive]:*:[svg]:!text-foreground-danger [&_svg:not([class*='text-'])]:text-muted-foreground outline-hidden gap-sm relative flex cursor-default select-none items-center rounded-sm text-sm transition-all data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-all",
				basePadding,
				innerRadius,
				className,
			)}
			{...props}
		/>
	)
}

export type ContextMenuCheckboxItemProps =
	ContextMenuPrimitive.CheckboxItem.Props
export function ContextMenuCheckboxItem({
	className,
	children,
	checked,
	...props
}: ContextMenuCheckboxItemProps) {
	return (
		<ContextMenuPrimitive.CheckboxItem
			data-slot="context-menu-checkbox-item"
			className={cx(
				"focus:bg-background-muted focus:text-brand outline-hidden gap-sm relative flex cursor-default select-none items-center rounded-sm pl-8 pr-2 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<ContextMenuPrimitive.CheckboxItemIndicator>
					<CheckIcon className="size-4" />
				</ContextMenuPrimitive.CheckboxItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.CheckboxItem>
	)
}

export type ContextMenuRadioItemProps = ContextMenuPrimitive.RadioItem.Props
export function ContextMenuRadioItem({
	className,
	children,
	...props
}: ContextMenuRadioItemProps) {
	return (
		<ContextMenuPrimitive.RadioItem
			data-slot="context-menu-radio-item"
			className={cx(
				"focus:bg-background-muted focus:text-brand outline-hidden py-sm gap-sm relative flex cursor-default select-none items-center rounded-sm pl-8 pr-2 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<ContextMenuPrimitive.RadioItemIndicator>
					<CircleIcon className="size-2 fill-current" />
				</ContextMenuPrimitive.RadioItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.RadioItem>
	)
}

export interface ContextMenuLabelProps
	extends ContextMenuPrimitive.GroupLabel.Props {
	inset?: boolean
}
export function ContextMenuLabel({
	className,
	inset,
	...props
}: ContextMenuLabelProps) {
	return (
		<ContextMenuPrimitive.GroupLabel
			data-slot="context-menu-label"
			data-inset={inset}
			className={cx(
				'data-[inset]:pl-lg text-xs font-medium',
				basePadding,
				className,
			)}
			{...props}
		/>
	)
}

export type ContextMenuSeparatorProps = ContextMenuPrimitive.Separator.Props
export function ContextMenuSeparator({
	className,
	...props
}: ContextMenuSeparatorProps) {
	return (
		<ContextMenuPrimitive.Separator
			data-slot="context-menu-separator"
			className={cx('bg-background-muted/20 -mx-xs my-xs h-px', className)}
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
			data-slot="context-menu-shortcut"
			className={cx(
				'text-foreground-muted ml-auto text-xs tracking-widest',
				className,
			)}
			{...props}
		/>
	)
}

export type ContextMenuSubProps = ContextMenuPrimitive.SubmenuRoot.Props
export function ContextMenuSub({ ...props }: ContextMenuSubProps) {
	return (
		<ContextMenuPrimitive.SubmenuRoot
			delay={0}
			closeDelay={0}
			data-slot="context-menu-sub"
			{...props}
		/>
	)
}

export interface ContextMenuSubTriggerProps
	extends ContextMenuPrimitive.SubmenuTrigger.Props {
	inset?: boolean
}
export function ContextMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: ContextMenuSubTriggerProps) {
	return (
		<ContextMenuPrimitive.SubmenuTrigger
			data-slot="context-menu-sub-trigger"
			data-inset={inset}
			className={cx(
				'focus:bg-background-muted focus:text-brand data-popup-open:bg-background-muted data-popup-open:text-brand outline-hidden flex cursor-default select-none items-center text-sm data-[inset]:pl-8',
				innerRadius,
				basePadding,
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-4" />
		</ContextMenuPrimitive.SubmenuTrigger>
	)
}

export interface ContextMenuSubContentProps
	extends ContextMenuPrimitive.Popup.Props {
	align?: ContextMenuPrimitive.Positioner.Props['align']
	sideOffset?: ContextMenuPrimitive.Positioner.Props['sideOffset']
}
export function ContextMenuSubContent({
	className,
	sideOffset = 0,
	align = 'start',
	...props
}: ContextMenuSubContentProps) {
	return (
		<ContextMenuPortal>
			<ContextMenuPositioner
				className="max-h-[var(--available-height)]"
				sideOffset={sideOffset}
				align={align}
			>
				<ContextMenuPrimitive.Popup
					data-slot="context-menu-sub-content"
					className={cx(
						'bg-popover text-foreground data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-[var(--transform-origin)] overflow-hidden border p-1 shadow-md',
						innerRadius,
						className,
					)}
					{...props}
				/>
			</ContextMenuPositioner>
		</ContextMenuPortal>
	)
}
