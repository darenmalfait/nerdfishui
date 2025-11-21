import { Select as SelectPrimitive } from '@base-ui-components/react/select'
import { cn } from '@nerdfish/utils/class'
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
	return (
		<SelectPrimitive.Positioner
			className="z-500"
			data-slot="select-positioner"
			{...props}
		/>
	)
}

export type SelectValueProps = ComponentProps<typeof SelectPrimitive.Value>
export function SelectValue({ className, ...props }: SelectValueProps) {
	return (
		<SelectPrimitive.Value
			data-slot="select-value"
			className={cn('text-sm', className)}
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
			className={cn(
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
	side?: SelectPrimitive.Positioner.Props['side']
	align?: SelectPrimitive.Positioner.Props['align']
	alignOffset?: SelectPrimitive.Positioner.Props['alignOffset']
	position?: 'popper' | 'item-aligned'
}
export function SelectContent({
	className,
	children,
	sideOffset = 4,
	position = 'item-aligned',
	side = 'bottom',
	align = 'center',
	alignOffset = 0,
	...props
}: SelectContentProps) {
	return (
		<SelectPortal>
			<SelectPositioner
				className="outline-none select-none"
				side={side}
				sideOffset={sideOffset}
				alignItemWithTrigger={position === 'item-aligned'}
				align={align}
				alignOffset={alignOffset}
			>
				<SelectScrollUpButton />

				<SelectPrimitive.Popup
					data-slot="select-content"
					className={cn(
						'relative max-h-(--available-height) min-w-(--anchor-width) overflow-x-hidden overflow-y-auto',
						'p-popover-compact bg-popover text-popover-contrast rounded-popover',
						'origin-(--transform-origin)',
						'border-border border shadow-md',
						'data-open:animate-in data-closed:animate-out',
						'data-closed:fade-out-0 data-open:fade-in-0',
						'data-closed:zoom-out-95 data-open:zoom-in-95',
						'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
						'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
						position === 'item-aligned' &&
							'[&_*[data-slot=select-item]]:min-w-(--anchor-width)',
						className,
					)}
					{...props}
				>
					<SelectPrimitive.List className="scroll-py-casual relative max-h-(--available-height) overflow-y-auto">
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
			className={cn(
				"data-highlighted:bg-background-inverted data-highlighted:text-foreground-inverted data-highlighted:[&_svg:not([class*='text-'])]:text-foreground-inverted [&_svg:not([class*='text-'])]:text-foreground-muted gap-best-friends *:[span]:last:gap-best-friends pl-best-friends relative flex w-full cursor-default items-center pr-8 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center",
				'py-best-friends rounded-[calc(var(--radius-popover)-theme(padding.popover-compact))]',
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
			className={cn(
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
			className={cn(
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
			className={cn(
				'bg-popover/70 text-foreground-muted rounded-t-base py-best-friends top-px left-px z-100 flex w-[calc(100%-2px)] cursor-default items-center justify-center backdrop-blur-sm',
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
			className={cn(
				'bg-popover/70 rounded-b-base py-best-friends bottom-px left-px z-100 flex w-[calc(100%-2px)] cursor-default items-center justify-center backdrop-blur-sm',
				className,
			)}
			{...props}
		>
			<ChevronDownIcon className="size-4" />
		</SelectPrimitive.ScrollDownArrow>
	)
}
