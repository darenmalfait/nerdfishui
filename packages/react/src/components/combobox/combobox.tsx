'use client'

import { Combobox as ComboboxPrimitive } from '@base-ui-components/react/combobox'
import { cx, type VariantProps } from '@nerdfish/utils'
import { CheckIcon, ChevronDownIcon, XIcon } from 'lucide-react'
import { type ComponentProps } from 'react'
import { Badge } from '../badge/badge'
import { inputVariants } from '../input/input'

// Root - Groups all parts of the combobox
export type ComboboxProps = ComponentProps<typeof ComboboxPrimitive.Root>
export function Combobox({ ...props }: ComboboxProps) {
	return <ComboboxPrimitive.Root data-slot="combobox" {...props} />
}

// Input and Clear controls
export type ComboboxControlProps = ComponentProps<'div'>
export function ComboboxControl({ className, ...props }: ComboboxControlProps) {
	return (
		<span
			data-slot="combobox-control"
			className={cx('relative', className)}
			{...props}
		/>
	)
}

// Value - Displays the selected value
export type ComboboxValueProps = ComponentProps<typeof ComboboxPrimitive.Value>
export function ComboboxValue({ ...props }: ComboboxValueProps) {
	return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />
}

// Input - The input element for typing
export interface ComboboxInputProps
	extends Omit<ComponentProps<typeof ComboboxPrimitive.Input>, 'size'>,
		VariantProps<typeof inputVariants> {}
export function ComboboxInput({
	className,
	variant = 'default',
	size,
	...props
}: ComboboxInputProps) {
	return (
		<ComboboxPrimitive.Input
			data-slot="combobox-input"
			data-variant={variant}
			className={cx(inputVariants({ variant, size }), 'max-h-full', className)}
			{...props}
		/>
	)
}

// Status - Displays the status of the combobox
export type ComboboxStatusProps = ComponentProps<
	typeof ComboboxPrimitive.Status
>
export function ComboboxStatus({ className, ...props }: ComboboxStatusProps) {
	return (
		<ComboboxPrimitive.Status
			data-slot="combobox-status"
			className={cx('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}

// Portal - A portal element that moves the popup to a different part of the DOM
export type ComboboxPortalProps = ComponentProps<
	typeof ComboboxPrimitive.Portal
>
export function ComboboxPortal({ ...props }: ComboboxPortalProps) {
	return <ComboboxPrimitive.Portal data-slot="combobox-portal" {...props} />
}

// Backdrop - An overlay displayed beneath the combobox popup
export type ComboboxBackdropProps = ComponentProps<
	typeof ComboboxPrimitive.Backdrop
>
export function ComboboxBackdrop({ ...props }: ComboboxBackdropProps) {
	return <ComboboxPrimitive.Backdrop data-slot="combobox-backdrop" {...props} />
}

export interface ComboboxContentProps
	extends ComponentProps<typeof ComboboxPrimitive.Popup> {
	align?: ComboboxPrimitive.Positioner.Props['align']
	sideOffset?: ComboboxPrimitive.Positioner.Props['sideOffset']
	alignOffset?: ComboboxPrimitive.Positioner.Props['alignOffset']
	anchor?: ComboboxPrimitive.Positioner.Props['anchor']
	side?: ComboboxPrimitive.Positioner.Props['side']
	showBackdrop?: boolean
}
export function ComboboxContent({
	className,
	children,
	showBackdrop = false,
	align = 'start',
	sideOffset = 8,
	alignOffset = 0,
	side = 'bottom',
	anchor,
	...props
}: ComboboxContentProps) {
	return (
		<ComboboxPortal>
			{showBackdrop ? <ComboboxBackdrop /> : null}
			<ComboboxPositioner
				align={align}
				sideOffset={sideOffset}
				alignOffset={alignOffset}
				side={side}
				anchor={anchor}
			>
				<ComboboxPopup className={className} {...props}>
					{children}
				</ComboboxPopup>
			</ComboboxPositioner>
		</ComboboxPortal>
	)
}

// Positioner - Positions the combobox popup against the input
export type ComboboxPositionerProps = ComponentProps<
	typeof ComboboxPrimitive.Positioner
>
export function ComboboxPositioner({
	className,
	...props
}: ComboboxPositionerProps) {
	return (
		<ComboboxPrimitive.Positioner
			data-slot="combobox-positioner"
			className={cx('z-50 outline-none', className)}
			{...props}
		/>
	)
}

// Popup - A container for the combobox options
export type ComboboxPopupProps = ComponentProps<typeof ComboboxPrimitive.Popup>
export function ComboboxPopup({ className, ...props }: ComboboxPopupProps) {
	return (
		<ComboboxPrimitive.Popup
			data-slot="combobox-popup"
			className={cx(
				'p-popover-compact',
				'max-h-[min(var(--available-height),20rem)] w-[var(--anchor-width)] max-w-[var(--available-width)]',
				'scroll-pt-best-friends scroll-pb-best-friends overflow-y-auto overscroll-contain bg-[canvas]',
				'border-border bg-popover text-popover-contrast rounded-popover border shadow-md shadow-black/5',
				'origin-[var(--transform-origin)] transition-[transform,scale,opacity] data-[ending-style]:scale-90',
				'data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0',
				className,
			)}
			{...props}
		/>
	)
}

// List - A container for the combobox options
export type ComboboxListProps = ComponentProps<typeof ComboboxPrimitive.List>
export function ComboboxList({ className, ...props }: ComboboxListProps) {
	return (
		<ComboboxPrimitive.List
			data-slot="combobox-list"
			className={cx('space-y-bff empty:!p-0', className)}
			{...props}
		/>
	)
}

// Collection - A collection of combobox items
export type ComboboxCollectionProps = ComponentProps<
	typeof ComboboxPrimitive.Collection
>
export function ComboboxCollection({ ...props }: ComboboxCollectionProps) {
	return (
		<ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
	)
}

// Row - A row container for combobox items
export type ComboboxRowProps = ComponentProps<typeof ComboboxPrimitive.Row>
export function ComboboxRow({ className, ...props }: ComboboxRowProps) {
	return (
		<ComboboxPrimitive.Row
			data-slot="combobox-row"
			className={cx('gap-best-friends flex items-center', className)}
			{...props}
		/>
	)
}

// Item - An individual selectable option in the combobox
export type ComboboxItemProps = ComponentProps<typeof ComboboxPrimitive.Item>
export function ComboboxItem({ className, ...props }: ComboboxItemProps) {
	return (
		<ComboboxPrimitive.Item
			data-slot="combobox-item"
			className={cx(
				'relative flex cursor-default items-center',
				'py-best-friends rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
				'text-foreground gap-best-friends relative items-center ps-7 pe-2 text-sm outline-hidden transition-colors select-none data-disabled:pointer-events-none data-disabled:opacity-50',
				'[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4 [&_svg:not([role=img]):not([class*=text-])]:opacity-60',
				'data-[highlighted]:text-foreground-inverted data-[highlighted]:bg-background-inverted data-[highlighted]:[&_svg:not([role=img])]:text-foreground-inverted',
				className,
			)}
			{...props}
		/>
	)
}

// ItemIndicator - An indicator for selected items
export type ComboboxItemIndicatorProps = ComponentProps<
	typeof ComboboxPrimitive.ItemIndicator
>
export function ComboboxItemIndicator({
	className,
	...props
}: ComboboxItemIndicatorProps) {
	return (
		<ComboboxPrimitive.ItemIndicator
			data-slot="combobox-item-indicator"
			className={cx(
				'absolute start-2.5 top-1/2 flex -translate-y-1/2 items-center justify-center',
				className,
			)}
			{...props}
		>
			<CheckIcon className="text-foreground h-4 w-4" />
		</ComboboxPrimitive.ItemIndicator>
	)
}

// Group - Groups related combobox items with the corresponding label
export type ComboboxGroupProps = ComponentProps<typeof ComboboxPrimitive.Group>
export function ComboboxGroup({ ...props }: ComboboxGroupProps) {
	return <ComboboxPrimitive.Group data-slot="combobox-group" {...props} />
}

// GroupLabel - An accessible label that is automatically associated with its parent group
export type ComboboxGroupLabelProps = ComponentProps<
	typeof ComboboxPrimitive.GroupLabel
>
export function ComboboxGroupLabel({
	className,
	...props
}: ComboboxGroupLabelProps) {
	return (
		<ComboboxPrimitive.GroupLabel
			data-slot="combobox-group-label"
			className={cx(
				'text-foreground-muted py-best-friends px-best-friends text-xs font-medium',
				className,
			)}
			{...props}
		/>
	)
}

// Empty - A component to display when no options are available
export type ComboboxEmptyProps = ComponentProps<typeof ComboboxPrimitive.Empty>
export function ComboboxEmpty({ className, ...props }: ComboboxEmptyProps) {
	return (
		<ComboboxPrimitive.Empty
			data-slot="combobox-empty"
			className={cx(
				'text-foreground-muted py-best-friends px-friends text-sm empty:m-0 empty:p-0',
				className,
			)}
			{...props}
		/>
	)
}

// Clear - A button to clear the input value
export type ComboboxClearProps = ComponentProps<typeof ComboboxPrimitive.Clear>
export function ComboboxClear({
	className,
	children,
	...props
}: ComboboxClearProps) {
	return (
		<Badge
			variant="default"
			appearance="ghost"
			shape="circle"
			render={
				<ComboboxPrimitive.Clear
					data-slot="combobox-clear"
					className={cx(
						'ring-offset-background rounded-base absolute end-6 top-1/2 -translate-y-1/2 cursor-pointer opacity-70',
						'focus:ring-ring opacity-60 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none',
						'data-[disabled]:pointer-events-none',
						className,
					)}
					{...props}
				>
					{children ?? <XIcon className="size-3.5 opacity-100" />}
				</ComboboxPrimitive.Clear>
			}
		/>
	)
}

// Icon - An icon element for the combobox
export type ComboboxIconProps = ComponentProps<typeof ComboboxPrimitive.Icon>
export function ComboboxIcon({
	className,
	children,
	...props
}: ComboboxIconProps) {
	return (
		<ComboboxPrimitive.Icon
			data-slot="combobox-icon"
			className={cx(
				'ring-offset-background rounded-base absolute end-2 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 transition-opacity',
				'focus:ring-ring opacity-60 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none',
				'data-[disabled]:pointer-events-none',
				className,
			)}
			{...props}
		>
			{children ?? <ChevronDownIcon className="size-3.5 opacity-100" />}
		</ComboboxPrimitive.Icon>
	)
}

// Arrow - Displays an element positioned against the combobox anchor
export type ComboboxArrowProps = ComponentProps<typeof ComboboxPrimitive.Arrow>
export function ComboboxArrow({ className, ...props }: ComboboxArrowProps) {
	return (
		<ComboboxPrimitive.Arrow
			data-slot="combobox-arrow"
			className={cx('', className)}
			{...props}
		/>
	)
}

// Trigger - A button that opens the combobox
export type ComboboxTriggerProps = ComponentProps<
	typeof ComboboxPrimitive.Trigger
>
export function ComboboxTrigger({ className, ...props }: ComboboxTriggerProps) {
	return (
		<ComboboxPrimitive.Trigger
			data-slot="combobox-trigger"
			className={cx('relative', className)}
			{...props}
		/>
	)
}

// Chips - A container for selected items as chips (for multi-select)
export interface ComboboxChipsProps
	extends ComponentProps<typeof ComboboxPrimitive.Chips>,
		VariantProps<typeof inputVariants> {}
export function ComboboxChips({
	className,
	variant = 'default',
	size,
	...props
}: ComboboxChipsProps) {
	return (
		<ComboboxPrimitive.Chips
			data-slot="combobox-chips"
			className={cx(
				'[&_[data-slot=combobox-input]]:px-0 [&_[data-slot=combobox-input]]:py-0',
				'[&_[data-slot=combobox-input]]:min-h-0 [&_[data-slot=combobox-input]]:flex-1',
				'[&_[data-slot=combobox-input]]:rounded-none [&_[data-slot=combobox-input]]:border-0 [&_[data-slot=combobox-input]]:shadow-none',
				'[&_[data-slot=combobox-input]]:ring-0 [&_[data-slot=combobox-input]]:outline-none',
				inputVariants({ variant, size }),
				'gap-bff flex flex-wrap items-center',
				className,
			)}
			{...props}
		/>
	)
}

// Chip - An individual chip representing a selected item
export type ComboboxChipProps = ComponentProps<typeof ComboboxPrimitive.Chip>
export function ComboboxChip({ ...props }: ComboboxChipProps) {
	return (
		<Badge
			render={<ComboboxPrimitive.Chip data-slot="combobox-chip" {...props} />}
		/>
	)
}

// ChipRemove - A button to remove a chip
export type ComboboxChipRemoveProps = ComponentProps<
	typeof ComboboxPrimitive.ChipRemove
>
export function ComboboxChipRemove({
	className,
	children,
	...props
}: ComboboxChipRemoveProps) {
	return (
		<Badge
			variant="default"
			appearance="default"
			size="xs"
			shape="circle"
			render={
				<ComboboxPrimitive.ChipRemove
					data-slot="combobox-chip-remove"
					className={cx(
						'hover:bg-background-muted/10 ms-1 -mr-1 cursor-pointer p-0 [&_svg]:opacity-60 hover:[&_svg]:opacity-100',
						className,
					)}
					{...props}
				>
					{children ?? <XIcon className="size-3.5 text-current" />}
				</ComboboxPrimitive.ChipRemove>
			}
		/>
	)
}

// Separator - A separator element accessible to screen readers
export type ComboboxSeparatorProps = ComponentProps<
	typeof ComboboxPrimitive.Separator
>
export function ComboboxSeparator({
	className,
	...props
}: ComboboxSeparatorProps) {
	return (
		<ComboboxPrimitive.Separator
			data-slot="combobox-separator"
			className={cx('bg-background-muted my-1.5 h-px', className)}
			{...props}
		/>
	)
}
