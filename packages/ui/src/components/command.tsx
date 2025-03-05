'use client'

import { cx } from '@nerdfish/utils'
import { type DialogProps } from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'

import { Dialog, DialogContent } from './dialog'
import { type InputAddOns, inputVariants } from './input'

const innerRadius = 'rounded-[calc(theme(borderRadius.base)-theme(padding.sm))]'

export type CommandProps = React.ComponentProps<typeof CommandPrimitive>
export function Command({ className, ...props }: CommandProps) {
	return <CommandPrimitive className={className} {...props} />
}

export type CommandLoadingProps = React.ComponentProps<typeof CommandLoading>
export const CommandLoading = CommandPrimitive.Loading

export interface CommandDialogProps extends DialogProps {
	children: React.ReactNode
}
export const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
	return (
		<Dialog {...props}>
			<DialogContent className="overflow-hidden p-0 shadow-2xl [&_[dialog-overlay]]:bg-red-100">
				<Command className="[&_[cmdk-group-heading]]:text-primary [&_[cmdk-group]]:px-sm [&_[cmdk-group-heading]]:px-sm [&_[cmdk-item]]:px-sm [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5">
					{children}
				</Command>
			</DialogContent>
		</Dialog>
	)
}

export interface CommandInputProps
	extends React.ComponentProps<typeof CommandPrimitive.Input>,
		InputAddOns {}

export function CommandInput({
	className,
	icon: Icon,
	inputSize,
	variant,
	...props
}: CommandInputProps) {
	return (
		<div
			className={cx(inputVariants({ inputSize, variant }), className)}
			// eslint-disable-next-line react/no-unknown-property
			cmdk-input-wrapper=""
		>
			{Icon ? (
				<Icon className="mr-sm text-primary size-4 shrink-0 opacity-50" />
			) : null}

			<CommandPrimitive.Input
				className="bg-transparent outline-none"
				{...props}
			/>
		</div>
	)
}

export type CommandListProps = React.ComponentProps<
	typeof CommandPrimitive.List
>

export function CommandList({ className, ...props }: CommandListProps) {
	return (
		<CommandPrimitive.List
			className={cx(
				'max-h-[300px] overflow-y-auto overflow-x-hidden',
				className,
			)}
			{...props}
		/>
	)
}

export type CommandEmptyProps = React.ComponentProps<
	typeof CommandPrimitive.Empty
>
export function CommandEmpty({ className, ...props }: CommandEmptyProps) {
	return (
		<CommandPrimitive.Empty
			className={cx('py-lg text-primary text-center text-sm', className)}
			{...props}
		/>
	)
}

export type CommandGroupProps = React.ComponentProps<
	typeof CommandPrimitive.Group
>

export function CommandGroup({ className, ...props }: CommandGroupProps) {
	return (
		<CommandPrimitive.Group
			className={cx(
				'p-sm text-primary [&_[cmdk-group-heading]]:px-sm [&_[cmdk-group-heading]]:pb-sm [&_[cmdk-group-heading]]:text-primary overflow-hidden [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-semibold',
				className,
			)}
			{...props}
		/>
	)
}

export type CommandSeparatorProps = React.ComponentProps<
	typeof CommandPrimitive.Separator
>
export function CommandSeparator({
	className,
	...props
}: CommandSeparatorProps) {
	return (
		<CommandPrimitive.Separator
			className={cx('-mx-xs bg-muted h-px', className)}
			{...props}
		/>
	)
}

export type CommandItemProps = React.ComponentProps<
	typeof CommandPrimitive.Item
>

export function CommandItem({ className, ...props }: CommandItemProps) {
	return (
		<CommandPrimitive.Item
			className={cx(
				'p-sm text-primary aria-selected:bg-muted data-[disabled=true]:text-muted relative flex cursor-pointer select-none items-center text-sm font-medium outline-none data-[disabled=true]:pointer-events-none',
				className,
				innerRadius,
			)}
			{...props}
		/>
	)
}

export type CommandShortcutProps = React.ComponentProps<'span'>

export function CommandShortcut({ className, ...props }: CommandShortcutProps) {
	return (
		<span
			className={cx('text-primary/50 ml-auto text-xs', className)}
			{...props}
		/>
	)
}
