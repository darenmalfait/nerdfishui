import { Select as SelectPrimitive } from '@base-ui-components/react/select'
import { cx } from '@nerdfish/utils'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import { type ComponentProps } from 'react'
import { inputVariants, type InputVariants } from '../input/input'

export type SelectProps = ComponentProps<typeof SelectPrimitive.Root>
export function Select({ ...props }: SelectProps) {
	return <SelectPrimitive.Root data-slot="select" {...props} />
}

export type SelectGroupProps = ComponentProps<typeof SelectPrimitive.Group>
export function SelectGroup({ ...props }: SelectGroupProps) {
	return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

export type SelectPortalProps = ComponentProps<typeof SelectPrimitive.Portal>
export function SelectPortal({ ...props }: SelectPortalProps) {
	return <SelectPrimitive.Portal data-slot="select-portal" {...props} />
}

export type SelectPositionerProps = ComponentProps<
	typeof SelectPrimitive.Positioner
>
export function SelectPositioner({ ...props }: SelectPositionerProps) {
	return <SelectPrimitive.Positioner data-slot="select-positioner" {...props} />
}

export type SelectValueProps = ComponentProps<typeof SelectPrimitive.Value>
export function SelectValue({ className, ...props }: SelectValueProps) {
	return (
		<SelectPrimitive.Value
			data-slot="select-value"
			className={cx('text-sm', className)}
			{...props}
		/>
	)
}

export interface SelectTriggerProps
	extends ComponentProps<typeof SelectPrimitive.Trigger>,
		InputVariants {}

export function SelectTrigger({
	className,
	size = 'md',
	variant = 'default',
	children,
	...props
}: SelectTriggerProps) {
	return (
		<SelectPrimitive.Trigger
			data-slot="select-trigger"
			className={cx(
				inputVariants({ size, variant }),
				'group flex cursor-pointer items-center justify-between whitespace-nowrap',
				className,
			)}
			{...props}
		>
			{children}
			<SelectPrimitive.Icon>
				<ChevronDownIcon
					data-slot="select-icon"
					className="size-4 opacity-50 transition-transform duration-200"
				/>
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	)
}

export type SelectContentProps = ComponentProps<
	typeof SelectPrimitive.Popup
> & {
	sideOffset?: SelectPrimitive.Positioner.Props['sideOffset']
	position?: 'popper' | 'item-aligned'
}
export function SelectContent({
	className,
	children,
	sideOffset = 4,
	position = 'item-aligned',
	...props
}: SelectContentProps) {
	return (
		<SelectPortal>
			<SelectPositioner
				className="z-10 outline-none select-none"
				sideOffset={sideOffset}
				alignItemWithTrigger={position === 'item-aligned'}
			>
				<SelectPrimitive.Popup
					data-slot="select-content"
					className={cx(
						'p-popover-compact bg-popover text-popover-contrast rounded-popover',
						'group origin-[var(--transform-origin)] bg-[canvas] bg-clip-padding shadow-lg transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[side=none]:data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none',
						'border-border border shadow-lg',
						'[&_*[data-slot=select-item]]:min-w-[var(--anchor-width)]',
						className,
					)}
					{...props}
				>
					<SelectScrollUpButton />
					<SelectPrimitive.List className="scroll-py-casual relative max-h-[var(--available-height)] overflow-y-auto">
						{children}
					</SelectPrimitive.List>
					<SelectScrollDownButton />
				</SelectPrimitive.Popup>
			</SelectPositioner>
		</SelectPortal>
	)
}

export type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>
export function SelectItem({ className, children, ...props }: SelectItemProps) {
	return (
		<SelectPrimitive.Item
			data-slot="select-item"
			className={cx(
				"data-highlighted:bg-background-inverted data-highlighted:text-foreground-inverted data-highlighted:[&_svg:not([class*='text-'])]:text-foreground-inverted [&_svg:not([class*='text-'])]:text-foreground-muted gap-best-friends *:[span]:last:gap-best-friends pl-best-friends relative flex w-full cursor-default items-center pr-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center",
				'py-best-friends rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
				className,
			)}
			{...props}
		>
			<span className="absolute right-2 flex size-3.5 items-center justify-center">
				<SelectPrimitive.ItemIndicator>
					<CheckIcon className="size-4" />
				</SelectPrimitive.ItemIndicator>
			</span>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	)
}

export type SelectLabelProps = ComponentProps<typeof SelectPrimitive.GroupLabel>
export function SelectLabel({ className, ...props }: SelectLabelProps) {
	return (
		<SelectPrimitive.GroupLabel
			data-slot="select-label"
			className={cx(
				'text-foreground-muted px-best-friends py-best-friends top-0 bg-transparent text-xs font-medium',
				className,
			)}
			{...props}
		/>
	)
}

export type SelectSeparatorProps = ComponentProps<
	typeof SelectPrimitive.Separator
>
export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
	return (
		<SelectPrimitive.Separator
			data-slot="select-separator"
			className={cx(
				'bg-border my-best-friendsf pointer-events-none -mx-1 h-px',
				className,
			)}
			{...props}
		/>
	)
}

export type SelectScrollUpButtonProps = ComponentProps<
	typeof SelectPrimitive.ScrollUpArrow
>
export function SelectScrollUpButton({
	className,
	...props
}: SelectScrollUpButtonProps) {
	return (
		<SelectPrimitive.ScrollUpArrow
			data-slot="select-scroll-up-button"
			className={cx(
				'bg-popover/70 text-foreground-muted rounded-t-base py-best-friends top-px left-[1px] z-[100] flex w-[calc(100%-2px)] cursor-default items-center justify-center backdrop-blur-sm',
				className,
			)}
			{...props}
		>
			<ChevronUpIcon className="size-4" />
		</SelectPrimitive.ScrollUpArrow>
	)
}

export type SelectScrollDownButtonProps = ComponentProps<
	typeof SelectPrimitive.ScrollDownArrow
>
export function SelectScrollDownButton({
	className,
	...props
}: SelectScrollDownButtonProps) {
	return (
		<SelectPrimitive.ScrollDownArrow
			data-slot="select-scroll-down-button"
			className={cx(
				'bg-popover/70 rounded-b-base py-best-friends bottom-px left-[1px] z-[100] flex w-[calc(100%-2px)] cursor-default items-center justify-center backdrop-blur-sm',
				className,
			)}
			{...props}
		>
			<ChevronDownIcon className="size-4" />
		</SelectPrimitive.ScrollDownArrow>
	)
}
