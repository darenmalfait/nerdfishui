'use client'

import { cn } from '@nerdfish/utils/class'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon } from 'lucide-react'
import { type ComponentProps } from 'react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '../dialog/dialog'
import { Kbd } from '../kbd/kbd'

export type CommandProps = ComponentProps<typeof CommandPrimitive>
export function Command({ className, ...props }: CommandProps) {
	return (
		<CommandPrimitive
			data-slot="command"
			className={cn(
				'bg-popover text-popover-contrast flex h-full w-full flex-col overflow-hidden',
				className,
			)}
			{...props}
		/>
	)
}

export type CommandDialogProps = ComponentProps<typeof Dialog> & {
	title?: string
	description?: string
	className?: string
	showCloseButton?: boolean
}
export function CommandDialog({
	title = 'Command Palette',
	description = 'Search for a command to run...',
	children,
	className,
	showCloseButton = true,
	...props
}: CommandDialogProps) {
	return (
		<Dialog {...props}>
			<DialogHeader className="sr-only">
				<DialogTitle>{title}</DialogTitle>
				<DialogDescription>{description}</DialogDescription>
			</DialogHeader>
			<DialogContent
				className={cn('overflow-hidden p-0!', className)}
				showCloseButton={showCloseButton}
			>
				<Command className="[&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
					{children}
				</Command>
			</DialogContent>
		</Dialog>
	)
}

export type CommandInputProps = ComponentProps<typeof CommandPrimitive.Input>
export function CommandInput({ className, ...props }: CommandInputProps) {
	return (
		<div
			data-slot="command-input-wrapper"
			className="gap-best-friends px-best-friends flex items-center border-b"
		>
			<SearchIcon className="size-4 shrink-0 opacity-50" />
			<CommandPrimitive.Input
				data-slot="command-input"
				className={cn(
					'placeholder:text-foreground-muted py-best-friends rounded-compact flex w-full bg-transparent text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
					className,
				)}
				{...props}
			/>
		</div>
	)
}

export type CommandListProps = ComponentProps<typeof CommandPrimitive.List>
export function CommandList({ className, ...props }: CommandListProps) {
	return (
		<CommandPrimitive.List
			data-slot="command-list"
			className={cn(
				'scroll-py-best-friends max-h-75 overflow-x-hidden overflow-y-auto',
				className,
			)}
			{...props}
		/>
	)
}

export type CommandEmptyProps = ComponentProps<typeof CommandPrimitive.Empty>
export function CommandEmpty({ className, ...props }: CommandEmptyProps) {
	return (
		<CommandPrimitive.Empty
			data-slot="command-empty"
			className="py-friends text-center text-sm"
			{...props}
		/>
	)
}

export type CommandGroupProps = ComponentProps<typeof CommandPrimitive.Group>
export function CommandGroup({ className, ...props }: CommandGroupProps) {
	return (
		<CommandPrimitive.Group
			data-slot="command-group"
			className={cn(
				'text-foreground **:[[cmdk-group-heading]]:text-foreground-muted **:[[cmdk-group-heading]]:px-friends **:[[cmdk-group-heading]]:py-best-friends overflow-hidden **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium',
				className,
			)}
			{...props}
		/>
	)
}

export type CommandSeparatorProps = ComponentProps<
	typeof CommandPrimitive.Separator
>
export function CommandSeparator({
	className,
	...props
}: CommandSeparatorProps) {
	return (
		<CommandPrimitive.Separator
			data-slot="command-separator"
			className={cn('bg-border -mx-1 h-px', className)}
			{...props}
		/>
	)
}

export type CommandItemProps = ComponentProps<typeof CommandPrimitive.Item>
export function CommandItem({ className, ...props }: CommandItemProps) {
	return (
		<CommandPrimitive.Item
			data-slot="command-item"
			className={cn(
				"data-[selected=true]:bg-background-inverted data-[selected=true]:text-foreground-inverted data-[selected=true]:[&_svg:not([class*='text-'])]:text-foreground-inverted [&_svg:not([class*='text-'])]:text-foreground-muted px-best-friends py-best-friends gap-best-friends relative flex cursor-default items-center text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	)
}

export type CommandShortcutProps = ComponentProps<'span'>
export function CommandShortcut({ className, ...props }: CommandShortcutProps) {
	return (
		<Kbd
			data-slot="command-shortcut"
			className={cn('ml-auto', className)}
			{...props}
		/>
	)
}
