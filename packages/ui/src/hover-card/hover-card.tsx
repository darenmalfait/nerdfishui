'use client'

import { cx } from '@nerdfish/utils'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import * as React from 'react'

export const HoverCardRoot = HoverCardPrimitive.Root
export const HoverCardTrigger = HoverCardPrimitive.Trigger

export const HoverCardContent = React.forwardRef<
	React.ElementRef<typeof HoverCardPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
	<HoverCardPrimitive.Content
		ref={ref}
		align={align}
		sideOffset={sideOffset}
		className={cx(
			'shadow-outline bg-muted shadow-soft-xl animate-in zoom-in-90 z-50 w-64 rounded-lg p-4 outline-none',
			className,
		)}
		{...props}
	/>
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export type HoverCardRootProps = React.ComponentPropsWithoutRef<
	typeof HoverCardPrimitive.Root
>
export type HoverCardTriggerProps = React.ComponentPropsWithoutRef<
	typeof HoverCardPrimitive.Trigger
>
export type HoverCardContentProps = React.ComponentPropsWithoutRef<
	typeof HoverCardPrimitive.Content
>
