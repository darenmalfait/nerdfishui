'use client'

import { cx } from '@nerdfish/utils'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

export const Popover = PopoverPrimitive.Root
export const PopoverTrigger = PopoverPrimitive.Trigger
export const PopoverClose = PopoverPrimitive.Close

export const PopoverContent = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Content
		ref={ref}
		align={align}
		sideOffset={sideOffset}
		className={cx(
			'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 animate-in rounded-base bg-popover p-md shadow-outline z-50 w-[--radix-popper-anchor-width] shadow-none',
			className,
		)}
		{...props}
	/>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export type PopoverProps = React.ComponentPropsWithoutRef<
	typeof PopoverPrimitive.Root
>
export type PopoverTriggerProps = React.ComponentPropsWithoutRef<
	typeof PopoverPrimitive.Trigger
>
export type PopoverContentProps = React.ComponentPropsWithoutRef<
	typeof PopoverPrimitive.Content
>

export type PopoverCloseProps = React.ComponentPropsWithoutRef<
	typeof PopoverPrimitive.Close
>
