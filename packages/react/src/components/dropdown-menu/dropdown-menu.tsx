'use client'

import { Menu as BaseMenu } from '@base-ui-components/react/menu'
import { cx } from '@nerdfish/utils'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'
import { type ComponentProps } from 'react'
import { Kbd } from '../kbd/kbd'

export type DropdownMenuProps = ComponentProps<typeof BaseMenu.Root>
export function DropdownMenu({ ...props }: DropdownMenuProps) {
	return <BaseMenu.Root data-slot="dropdown-menu" {...props} />
}

export type DropdownMenuPortalProps = ComponentProps<typeof BaseMenu.Portal>
export function DropdownMenuPortal({ ...props }: DropdownMenuPortalProps) {
	return <BaseMenu.Portal data-slot="dropdown-menu-portal" {...props} />
}

export type DropdownMenuTriggerProps = ComponentProps<typeof BaseMenu.Trigger>
export function DropdownMenuTrigger({ ...props }: DropdownMenuTriggerProps) {
	return <BaseMenu.Trigger data-slot="dropdown-menu-trigger" {...props} />
}

export type DropdownMenuPositionerProps = ComponentProps<
	typeof BaseMenu.Positioner
>
export function DropdownMenuPositioner({
	...props
}: DropdownMenuPositionerProps) {
	return <BaseMenu.Positioner data-slot="dropdown-menu-positioner" {...props} />
}

export interface DropdownMenuContentProps
	extends ComponentProps<typeof BaseMenu.Popup> {
	align?: BaseMenu.Positioner.Props['align']
	sideOffset?: BaseMenu.Positioner.Props['sideOffset']
	side?: BaseMenu.Positioner.Props['side']
}
export function DropdownMenuContent({
	className,
	sideOffset = 4,
	align = 'center',
	side = 'bottom',
	...props
}: DropdownMenuContentProps) {
	return (
		<DropdownMenuPortal>
			<DropdownMenuPositioner
				className="max-h-[var(--available-height)]"
				sideOffset={sideOffset}
				side={side}
				align={align}
			>
				<BaseMenu.Popup
					data-slot="dropdown-menu-content"
					className={cx(
						'bg-popover border-border p-best-friends rounded-popover border shadow-md',
						'data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 text-popover-contrast data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-[var(--transform-origin)] overflow-hidden',
						className,
					)}
					{...props}
				/>
			</DropdownMenuPositioner>
		</DropdownMenuPortal>
	)
}

export type DropdownMenuGroupProps = ComponentProps<typeof BaseMenu.Group>
export function DropdownMenuGroup({ ...props }: DropdownMenuGroupProps) {
	return <BaseMenu.Group data-slot="dropdown-menu-group" {...props} />
}

export interface DropdownMenuItemProps
	extends ComponentProps<typeof BaseMenu.Item> {
	inset?: boolean
	variant?: 'default' | 'destructive'
}
export function DropdownMenuItem({
	className,
	inset,
	variant = 'default',
	...props
}: DropdownMenuItemProps) {
	return (
		<BaseMenu.Item
			data-slot="dropdown-menu-item"
			data-inset={inset}
			data-variant={variant}
			className={cx(
				'focus:bg-background-inverted focus:text-foreground-inverted p-popover-compact',
				'rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
				"data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive-background/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive focus:data-[variant=destructive]:*:[svg]:!text-destructive focus:[&_svg:not([class*='text-'])]:text-foreground-inverted [&_svg:not([class*='text-'])]:text-foreground-muted gap-best-friends relative flex cursor-default items-center px-2 py-1.5 text-sm outline-hidden transition-all select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-all [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	)
}

export type DropdownMenuShortcutProps = ComponentProps<'span'>
export function DropdownMenuShortcut({
	className,
	...props
}: DropdownMenuShortcutProps) {
	return (
		<Kbd
			data-slot="dropdown-menu-shortcut"
			className={cx('ml-auto', className)}
			{...props}
		/>
	)
}

export type DropdownMenuSeparatorProps = ComponentProps<
	typeof BaseMenu.Separator
>
export function DropdownMenuSeparator({
	className,
	...props
}: DropdownMenuSeparatorProps) {
	return (
		<BaseMenu.Separator
			data-slot="dropdown-menu-separator"
			className={cx('bg-border my-best-friends -mx-1 h-px', className)}
			{...props}
		/>
	)
}

export interface DropdownMenuLabelProps
	extends ComponentProps<typeof BaseMenu.GroupLabel> {
	inset?: boolean
}
export function DropdownMenuLabel({
	className,
	inset,
	...props
}: DropdownMenuLabelProps) {
	return (
		<BaseMenu.GroupLabel
			data-slot="dropdown-menu-label"
			data-inset={inset}
			className={cx(
				'p-best-friends text-xs font-medium data-[inset]:pl-8',
				className,
			)}
			{...props}
		/>
	)
}

export type DropdownMenuCheckboxItemProps = ComponentProps<
	typeof BaseMenu.CheckboxItem
>
export function DropdownMenuCheckboxItem({
	className,
	children,
	checked,
	...props
}: DropdownMenuCheckboxItemProps) {
	return (
		<BaseMenu.CheckboxItem
			data-slot="dropdown-menu-checkbox-item"
			className={cx(
				'focus:bg-background-inverted focus:text-foreground-inverted p-best-friends',
				'rounded-[calc(theme(borderRadius.base)-theme(padding.best-friends))]',
				"relative flex cursor-default items-center py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<BaseMenu.CheckboxItemIndicator>
					<CheckIcon className="size-4" />
				</BaseMenu.CheckboxItemIndicator>
			</span>
			{children}
		</BaseMenu.CheckboxItem>
	)
}

export type DropdownMenuRadioGroupProps = ComponentProps<
	typeof BaseMenu.RadioGroup
>
export function DropdownMenuRadioGroup({
	...props
}: DropdownMenuRadioGroupProps) {
	return (
		<BaseMenu.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />
	)
}

export type DropdownMenuRadioItemProps = ComponentProps<
	typeof BaseMenu.RadioItem
>
export function DropdownMenuRadioItem({
	className,
	children,
	...props
}: DropdownMenuRadioItemProps) {
	return (
		<BaseMenu.RadioItem
			data-slot="dropdown-menu-radio-item"
			className={cx(
				'focus:bg-background-inverted focus:text-foreground-inverted p-best-friends',
				'rounded-[calc(theme(borderRadius.base)-theme(padding.best-friends))]',
				"relative flex cursor-default items-center pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<BaseMenu.RadioItemIndicator>
					<CircleIcon className="size-2 fill-current" />
				</BaseMenu.RadioItemIndicator>
			</span>
			{children}
		</BaseMenu.RadioItem>
	)
}

export type DropdownMenuSubProps = ComponentProps<typeof BaseMenu.SubmenuRoot>
export function DropdownMenuSub({ ...props }: DropdownMenuSubProps) {
	return (
		<BaseMenu.SubmenuRoot
			closeDelay={0}
			delay={0}
			data-slot="dropdown-menu-sub"
			{...props}
		/>
	)
}

export interface DropdownMenuSubTriggerProps
	extends ComponentProps<typeof BaseMenu.SubmenuTrigger> {
	inset?: boolean
}
export function DropdownMenuSubTrigger({
	className,
	inset,
	children,
	...props
}: DropdownMenuSubTriggerProps) {
	return (
		<BaseMenu.SubmenuTrigger
			data-slot="dropdown-menu-sub-trigger"
			data-inset={inset}
			className={cx(
				'focus:bg-background-inverted focus:text-foreground-inverted p-best-friends',
				'rounded-[calc(theme(borderRadius.base)-theme(padding.best-friends))]',
				'data-popup-open:bg-background-inverted data-popup-open:text-foreground-inverted flex cursor-default items-center text-sm outline-hidden select-none data-[inset]:pl-8',
				"[&_svg:not([class*='text-'])]:text-foreground-muted gap-best-friends relative flex cursor-default items-center px-2 py-1.5 text-sm outline-hidden transition-all select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-all [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-4" />
		</BaseMenu.SubmenuTrigger>
	)
}

export interface DropdownMenuSubContentProps
	extends ComponentProps<typeof BaseMenu.Popup> {
	align?: BaseMenu.Positioner.Props['align']
	sideOffset?: BaseMenu.Positioner.Props['sideOffset']
}
export function DropdownMenuSubContent({
	className,
	sideOffset = 0,
	align = 'start',
	...props
}: DropdownMenuSubContentProps) {
	return (
		<DropdownMenuPortal>
			<DropdownMenuPositioner
				className="max-h-[var(--available-height)]"
				sideOffset={sideOffset}
				align={align}
			>
				<BaseMenu.Popup
					data-slot="dropdown-menu-content"
					className={cx(
						'border-border bg-popover text-popover-contrast rounded-popover p-popover-compact border shadow-md',
						'z-50 min-w-[12rem] origin-[var(--transform-origin)] overflow-hidden',
						'data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
						className,
					)}
					{...props}
				/>
			</DropdownMenuPositioner>
		</DropdownMenuPortal>
	)
}
