'use client'

import { cx } from '@nerdfish/utils'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

export type TooltipProviderProps = React.ComponentProps<
	typeof TooltipPrimitive.Provider
>
export const TooltipProvider = TooltipPrimitive.Provider

export type TooltipProps = React.ComponentProps<typeof TooltipPrimitive.Root>
export function Tooltip({ delayDuration = 100, ...props }: TooltipProps) {
	return <TooltipPrimitive.Root delayDuration={delayDuration} {...props} />
}
export type TooltipTriggerProps = React.ComponentProps<
	typeof TooltipPrimitive.Trigger
>
export const TooltipTrigger = TooltipPrimitive.Trigger

export type TooltipContentProps = React.ComponentProps<
	typeof TooltipPrimitive.Content
>
export function TooltipContent({
	className,
	sideOffset = 4,
	...props
}: TooltipContentProps) {
	return (
		<TooltipPrimitive.Content
			sideOffset={sideOffset}
			className={cx(
				'fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 animate-in rounded-base bg-background-muted p-sm text-foreground shadow-outline shadow-soft-xl z-50 overflow-hidden text-sm',
				className,
			)}
			{...props}
		/>
	)
}
