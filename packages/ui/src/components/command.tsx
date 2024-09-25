'use client'

import { cx } from '@nerdfish/utils'
import { type DialogProps } from '@radix-ui/react-dialog'
import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'

import { Dialog, DialogContent } from './dialog'
import { inputVariants, type InputProps } from './input'

export const Command = CommandPrimitive
Command.displayName = CommandPrimitive.displayName

export const CommandLoading = CommandPrimitive.Loading
export type CommandLoadingProps = React.ComponentPropsWithoutRef<
	typeof CommandLoading
>

export const CommandDialog = ({ children, ...props }: DialogProps) => {
	return (
		<Dialog {...props}>
			<DialogContent className="overflow-hidden p-0 shadow-2xl [&_[dialog-overlay]]:bg-red-100">
				<Command className="[&_[cmdk-group-heading]]:text-primary [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:size-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:size-5">
					{children}
				</Command>
			</DialogContent>
		</Dialog>
	)
}

export const CommandInput = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Input>,
	InputProps & React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, icon: Icon, inputSize, variant, ...props }, ref) => (
	<div
		className={cx(inputVariants({ inputSize, variant }), className)}
		// eslint-disable-next-line react/no-unknown-property
		cmdk-input-wrapper=""
	>
		{Icon ? (
			<Icon className="text-primary mr-2 size-4 shrink-0 opacity-50" />
		) : null}

		<CommandPrimitive.Input
			className="bg-transparent outline-none"
			ref={ref}
			{...props}
		/>
	</div>
))

CommandInput.displayName = CommandPrimitive.Input.displayName

export const CommandList = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.List
		ref={ref}
		className={cx('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
		{...props}
	/>
))

CommandList.displayName = CommandPrimitive.List.displayName

export const CommandEmpty = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Empty>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
	<CommandPrimitive.Empty
		ref={ref}
		className="text-primary py-6 text-center text-sm"
		{...props}
	/>
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

export const CommandGroup = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Group>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Group
		ref={ref}
		className={cx(
			'text-primary [&_[cmdk-group-heading]]:text-primary overflow-hidden px-2 py-3 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-semibold',
			className,
		)}
		{...props}
	/>
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

export const CommandSeparator = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Separator
		ref={ref}
		className={cx('bg-muted -mx-1 h-px', className)}
		{...props}
	/>
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

export const CommandItem = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
	<CommandPrimitive.Item
		ref={ref}
		className={cx(
			'aria-selected:bg-muted data-[disabled=true]:text-muted text-primary relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-sm font-medium outline-none data-[disabled=true]:pointer-events-none',
			className,
		)}
		{...props}
	/>
))

CommandItem.displayName = CommandPrimitive.Item.displayName

export const CommandShortcut = ({
	className,
	...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
	return (
		<span
			className={cx(
				'text-primary/50 ml-auto text-xs tracking-widest',
				className,
			)}
			{...props}
		/>
	)
}
CommandShortcut.displayName = 'CommandShortcut'

export type CommandProps = React.ComponentPropsWithoutRef<typeof Command>
export type CommandDialogProps = React.ComponentPropsWithoutRef<
	typeof CommandDialog
>
export type CommandInputProps = React.ComponentPropsWithoutRef<
	typeof CommandInput
>
export type CommandListProps = React.ComponentPropsWithoutRef<
	typeof CommandList
>
export type CommandEmptyProps = React.ComponentPropsWithoutRef<
	typeof CommandEmpty
>
export type CommandGroupProps = React.ComponentPropsWithoutRef<
	typeof CommandGroup
>
export type CommandSeparatorProps = React.ComponentPropsWithoutRef<
	typeof CommandSeparator
>
export type CommandItemProps = React.ComponentPropsWithoutRef<
	typeof CommandItem
>
export type CommandShortcutProps = React.ComponentPropsWithoutRef<
	typeof CommandShortcut
>
