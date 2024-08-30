'use client'

import { cx } from '@nerdfish/utils'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

export const TooltipProvider = TooltipPrimitive.Provider

export const TooltipRoot = TooltipPrimitive.Root
export const TooltipTrigger = TooltipPrimitive.Trigger

export const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		className={cx(
			'shadow-outline bg-muted text-primary shadow-soft-xl animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm',
			className,
		)}
		{...props}
	/>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export type TooltipRootProps = React.ComponentProps<typeof TooltipRoot>
export type TooltipTriggerProps = React.ComponentProps<typeof TooltipTrigger>
export type TooltipContentProps = React.ComponentProps<typeof TooltipContent>
export type TooltipProviderProps = React.ComponentProps<typeof TooltipProvider>
