'use client'

import { cx } from '@nerdfish/utils'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

export type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root>
export const Popover = PopoverPrimitive.Root

export type PopoverTriggerProps = React.ComponentProps<
	typeof PopoverPrimitive.Trigger
>
export const PopoverTrigger = PopoverPrimitive.Trigger

export type PopoverCloseProps = React.ComponentProps<
	typeof PopoverPrimitive.Close
>
export const PopoverClose = PopoverPrimitive.Close

export type PopoverContentProps = React.ComponentProps<
	typeof PopoverPrimitive.Content
>
export function PopoverContent({
	className,
	align = 'center',

	sideOffset = 12,
	children,
	...props
}: PopoverContentProps) {
	return (
		<PopoverPrimitive.Content
			align={align}
			sideOffset={sideOffset}
			className={cx(
				'data-[side=bottom]:slide-in-from-top-sm data-[side=top]:slide-in-from-bottom-sm data-[side=right]:slide-in-from-left-sm data-[side=left]:slide-in-from-right-sm animate-in rounded-base bg-muted p-md shadow-outline z-50 w-[--radix-popper-anchor-width] shadow-none',
				className,
			)}
			{...props}
		>
			{children}
		</PopoverPrimitive.Content>
	)
}
