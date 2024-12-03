'use client'

import { cx } from '@nerdfish/utils'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

export const TooltipProvider = TooltipPrimitive.Provider

export const Tooltip = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

export const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		className={cx(
			'fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 animate-in rounded-base bg-muted p-sm text-primary shadow-outline shadow-soft-xl z-50 overflow-hidden text-sm',
			className,
		)}
		{...props}
	/>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export type TooltipProps = React.ComponentProps<typeof Tooltip>
export type TooltipTriggerProps = React.ComponentProps<typeof TooltipTrigger>
export type TooltipContentProps = React.ComponentProps<typeof TooltipContent>
export type TooltipProviderProps = React.ComponentProps<typeof TooltipProvider>
