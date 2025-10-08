import { ContextMenu as ContextMenuPrimitive } from '@base-ui-components/react/context-menu'
import { cx } from '@nerdfish/utils'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'
import { type ComponentProps } from 'react'
import { Kbd } from '../kbd/kbd'

export type ContextMenuProps = ComponentProps<typeof ContextMenuPrimitive.Root>
export function ContextMenu({ ...props }: ContextMenuProps) {
	return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

export type ContextMenuTriggerProps = ComponentProps<
	typeof ContextMenuPrimitive.Trigger
>
export function ContextMenuTrigger({ ...props }: ContextMenuTriggerProps) {
	return (
		<ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
	)
}

export type ContextMenuGroupProps = ComponentProps<
	typeof ContextMenuPrimitive.Group
>
export function ContextMenuGroup({ ...props }: ContextMenuGroupProps) {
	return (
		<ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
	)
}

export type ContextMenuSubProps = ComponentProps<
	typeof ContextMenuPrimitive.SubmenuRoot
>
export function ContextMenuSub({ ...props }: ContextMenuSubProps) {
	return (
		<ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
	)
}

export type ContextMenuRadioGroupProps = ComponentProps<
	typeof ContextMenuPrimitive.RadioGroup
>
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

export type ContextMenuSubTriggerProps = ComponentProps<
	typeof ContextMenuPrimitive.SubmenuTrigger
> & {
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
				"focus:bg-background-inverted focus:text-foreground-inverted data-[state=open]:bg-background-inverted data-[state=open]:text-accent-foreground rounded-[calc(theme(borderRadius.base)-theme(padding.best-friends))] px-best-friends py-best-friends flex cursor-default items-center text-sm outline-hidden select-none data-[inset]:ps-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
				className,
			)}
			{...props}
		>
			{children}
			<ChevronRightIcon className="ms-auto opacity-60" />
		</ContextMenuPrimitive.SubmenuTrigger>
	)
}

export type ContextMenuSubPopupProps = ComponentProps<
	typeof ContextMenuPrimitive.Popup
>
export function ContextMenuSubPopup({
	className,
	...props
}: ContextMenuSubPopupProps) {
	return (
		<ContextMenuPrimitive.Popup
			data-slot="context-menu-sub-popup"
			className={cx(
				'bg-popover text-popover-contrast data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-base p-best-friends z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto border shadow-md outline-none',
				className,
			)}
			{...props}
		/>
	)
}

export type ContextMenuSubContentProps = ComponentProps<
	typeof ContextMenuPrimitive.Popup
> & {
	align?: ContextMenuPrimitive.Positioner.Props['align']
	sideOffset?: ContextMenuPrimitive.Positioner.Props['sideOffset']
	alignOffset?: ContextMenuPrimitive.Positioner.Props['alignOffset']
	side?: ContextMenuPrimitive.Positioner.Props['side']
	anchor?: ContextMenuPrimitive.Positioner.Props['anchor']
}
export function ContextMenuSubContent({
	className,
	align,
	sideOffset = 4,
	alignOffset = 0,
	side,
	anchor,
	children,
}: ContextMenuSubContentProps) {
	return (
		<ContextMenuPortal>
			<ContextMenuPositioner
				align={align}
				sideOffset={sideOffset}
				alignOffset={alignOffset}
				side={side}
				anchor={anchor}
			>
				<ContextMenuSubPopup className={className}>
					{children}
				</ContextMenuSubPopup>
			</ContextMenuPositioner>
		</ContextMenuPortal>
	)
}

function ContextMenuPopup({
	className,
	...props
}: ComponentProps<typeof ContextMenuPrimitive.Popup>) {
	return (
		<ContextMenuPrimitive.Popup
			data-slot="context-menu-content"
			className={cx(
				'bg-popover text-popover-contrast data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-base p-best-friends z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto border shadow-md outline-none',
				className,
			)}
			{...props}
		/>
	)
}

export type ContextMenuContentProps = ComponentProps<
	typeof ContextMenuPrimitive.Popup
> & {
	align?: ContextMenuPrimitive.Positioner.Props['align']
	sideOffset?: ContextMenuPrimitive.Positioner.Props['sideOffset']
	alignOffset?: ContextMenuPrimitive.Positioner.Props['alignOffset']
	side?: ContextMenuPrimitive.Positioner.Props['side']
	anchor?: ContextMenuPrimitive.Positioner.Props['anchor']
}
export function ContextMenuContent({
	className,
	align = 'start',
	sideOffset = 4,
	alignOffset = 0,
	side = 'bottom',
	anchor,
	children,
}: ContextMenuContentProps) {
	return (
		<ContextMenuPortal>
			<ContextMenuPositioner
				align={align}
				sideOffset={sideOffset}
				alignOffset={alignOffset}
				side={side}
				anchor={anchor}
			>
				<ContextMenuPopup className={className}>{children}</ContextMenuPopup>
			</ContextMenuPositioner>
		</ContextMenuPortal>
	)
}

export type ContextMenuItemProps = ComponentProps<
	typeof ContextMenuPrimitive.Item
> & {
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
				"focus:bg-background-inverted focus:text-foreground-inverted data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-foreground-muted rounded-[calc(theme(borderRadius.base)-theme(padding.best-friends))] px-best-friends py-best-friends gap-best-friends relative flex cursor-default items-center text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:ps-7 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	)
}

export type ContextMenuCheckboxItemProps = ComponentProps<
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
			data-slot="context-menu-checkbox-item"
			className={cx(
				"focus:bg-background-inverted focus:text-foreground-inverted rounded-[calc(theme(borderRadius.base)-theme(padding.best-friends))] py-best-friends gap-best-friends relative flex cursor-default items-center ps-7 pe-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			checked={checked}
			{...props}
		>
			<span className="pointer-events-none absolute start-2 flex size-3.5 items-center justify-center">
				<ContextMenuPrimitive.CheckboxItemIndicator>
					<CheckIcon className="text-foreground size-4" />
				</ContextMenuPrimitive.CheckboxItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.CheckboxItem>
	)
}

export type ContextMenuRadioItemProps = ComponentProps<
	typeof ContextMenuPrimitive.RadioItem
>
export function ContextMenuRadioItem({
	className,
	children,
	...props
}: ContextMenuRadioItemProps) {
	return (
		<ContextMenuPrimitive.RadioItem
			data-slot="context-menu-radio-item"
			className={cx(
				"focus:bg-background-inverted focus:text-foreground-inverted rounded-[calc(theme(borderRadius.base)-theme(padding.best-friends))] py-best-friends gap-best-friends relative flex cursor-default items-center ps-7 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		>
			<span className="pointer-events-none absolute start-2 flex size-3.5 items-center justify-center">
				<ContextMenuPrimitive.RadioItemIndicator>
					<CircleIcon className="fill-foreground size-1.5" />
				</ContextMenuPrimitive.RadioItemIndicator>
			</span>
			{children}
		</ContextMenuPrimitive.RadioItem>
	)
}

export type ContextMenuGroupLabelProps = ComponentProps<
	typeof ContextMenuPrimitive.GroupLabel
> & {
	inset?: boolean
}
export function ContextMenuGroupLabel({
	className,
	inset,
	...props
}: ContextMenuGroupLabelProps) {
	return (
		<ContextMenuPrimitive.GroupLabel
			data-slot="context-menu-group-label"
			data-inset={inset}
			className={cx(
				'text-foreground-muted px-best-friends py-best-friends text-xs font-medium data-[inset]:ps-7',
				className,
			)}
			{...props}
		/>
	)
}

export type ContextMenuSeparatorProps = ComponentProps<
	typeof ContextMenuPrimitive.Separator
>
export function ContextMenuSeparator({
	className,
	...props
}: ContextMenuSeparatorProps) {
	return (
		<ContextMenuPrimitive.Separator
			data-slot="context-menu-separator"
			className={cx('bg-border my-best-friends -mx-1 h-px', className)}
			{...props}
		/>
	)
}

export type ContextMenuShortcutProps = ComponentProps<'span'>
export function ContextMenuShortcut({
	className,
	...props
}: ContextMenuShortcutProps) {
	return (
		<Kbd
			data-slot="context-menu-shortcut"
			className={cx('ms-auto', className)}
			{...props}
		/>
	)
}

export type ContextMenuPositionerProps = ComponentProps<
	typeof ContextMenuPrimitive.Positioner
>
export function ContextMenuPositioner({
	...props
}: ContextMenuPositionerProps) {
	return (
		<ContextMenuPrimitive.Positioner
			data-slot="context-menu-positioner"
			className="z-50 outline-none"
			{...props}
		/>
	)
}

export type ContextMenuPortalProps = ComponentProps<
	typeof ContextMenuPrimitive.Portal
>
export function ContextMenuPortal({ ...props }: ContextMenuPortalProps) {
	return (
		<ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
	)
}
