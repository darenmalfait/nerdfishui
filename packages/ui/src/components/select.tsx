'use client'

import { cx } from '@nerdfish/utils'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'
import * as React from 'react'
import { type InputAddOns, inputVariants } from './input'

const basePadding = 'p-sm'
const outerRadius = 'rounded-base'
const innerRadius = 'rounded-[calc(theme(borderRadius.base)-theme(padding.sm))]'

export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root>
export const Select = SelectPrimitive.Root

export type SelectGroupProps = React.ComponentProps<
	typeof SelectPrimitive.Group
>
export const SelectGroup = SelectPrimitive.Group

export type SelectValueProps = React.ComponentProps<
	typeof SelectPrimitive.Value
>
export const SelectValue = SelectPrimitive.Value

export interface SelectTriggerProps
	extends React.ComponentProps<typeof SelectPrimitive.Trigger>,
		InputAddOns {}
export function SelectTrigger({
	className,
	children,
	variant,
	inputSize,
	...props
}: SelectTriggerProps) {
	return (
		<SelectPrimitive.Trigger
			className={cx(
				inputVariants({ variant, inputSize }),
				'focus-within:outline-active flex items-center justify-between',
				className,
			)}
			{...props}
		>
			{children}
			<SelectPrimitive.Icon asChild>
				<ChevronDown className="ml-sm h-4 w-4 opacity-50" />
			</SelectPrimitive.Icon>
		</SelectPrimitive.Trigger>
	)
}

export type SelectScrollUpButtonProps = React.ComponentProps<
	typeof SelectPrimitive.ScrollUpButton
>
export function SelectScrollUpButton({
	className,
	...props
}: SelectScrollUpButtonProps) {
	return (
		<SelectPrimitive.ScrollUpButton
			className={cx(
				'py-sm flex cursor-default items-center justify-center',
				className,
			)}
			{...props}
		>
			<ChevronUp className="h-4 w-4" />
		</SelectPrimitive.ScrollUpButton>
	)
}

export type SelectScrollDownButtonProps = React.ComponentProps<
	typeof SelectPrimitive.ScrollDownButton
>
export function SelectScrollDownButton({
	className,
	...props
}: SelectScrollDownButtonProps) {
	return (
		<SelectPrimitive.ScrollDownButton
			className={cx(
				'py-sm flex cursor-default items-center justify-center',
				className,
			)}
			{...props}
		>
			<ChevronDown className="h-4 w-4" />
		</SelectPrimitive.ScrollDownButton>
	)
}

export type SelectContentProps = React.ComponentProps<
	typeof SelectPrimitive.Content
>
export function SelectContent({
	className,
	children,
	position = 'popper',
	...props
}: SelectContentProps) {
	return (
		<SelectPrimitive.Portal>
			<SelectPrimitive.Content
				className={cx(
					outerRadius,
					'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 bg-popover text-foreground shadow-outline data-[state=closed]:animate-out data-[state=open]:animate-in relative z-50 max-h-96 min-w-[8rem] overflow-hidden shadow-md',
					position === 'popper' &&
						'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
					className,
				)}
				position={position}
				{...props}
			>
				<SelectScrollUpButton />
				<SelectPrimitive.Viewport
					className={cx(
						basePadding,
						position === 'popper' &&
							'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
					)}
				>
					{children}
				</SelectPrimitive.Viewport>
				<SelectScrollDownButton />
			</SelectPrimitive.Content>
		</SelectPrimitive.Portal>
	)
}

export type SelectLabelProps = React.ComponentProps<
	typeof SelectPrimitive.Label
>
export function SelectLabel({ className, ...props }: SelectLabelProps) {
	return (
		<SelectPrimitive.Label
			className={cx('py-sm pr-sm pl-lg text-sm font-semibold', className)}
			{...props}
		/>
	)
}

export type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item>

export function SelectItem({ className, children, ...props }: SelectItemProps) {
	return (
		<SelectPrimitive.Item
			className={cx(
				'py-sm pr-sm pl-lg focus:bg-background-muted focus:text-foreground relative flex w-full cursor-default select-none items-center text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				innerRadius,
				className,
			)}
			{...props}
		>
			<span className="left-sm absolute flex h-3.5 w-3.5 items-center justify-center">
				<SelectPrimitive.ItemIndicator>
					<Check className="h-4 w-4" />
				</SelectPrimitive.ItemIndicator>
			</span>

			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
		</SelectPrimitive.Item>
	)
}

export type SelectSeparatorProps = React.ComponentProps<
	typeof SelectPrimitive.Separator
>
export function SelectSeparator({ className, ...props }: SelectSeparatorProps) {
	return (
		<SelectPrimitive.Separator
			className={cx('-mx-sm my-sm bg-background-muted h-px', className)}
			{...props}
		/>
	)
}
