'use client'

import { cx } from '@nerdfish/utils'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import * as React from 'react'

export type HoverCardProps = React.ComponentProps<
	typeof HoverCardPrimitive.Root
>
export const HoverCard = HoverCardPrimitive.Root

export type HoverCardTriggerProps = React.ComponentProps<
	typeof HoverCardPrimitive.Trigger
>
export const HoverCardTrigger = HoverCardPrimitive.Trigger

export type HoverCardContentProps = React.ComponentProps<
	typeof HoverCardPrimitive.Content
>
export function HoverCardContent({
	className,
	align = 'center',
	sideOffset = 4,
	...props
}: HoverCardContentProps) {
	return (
		<HoverCardPrimitive.Content
			align={align}
			sideOffset={sideOffset}
			className={cx(
				'zoom-in-90 animate-in rounded-base bg-background-muted p-md shadow-outline shadow-soft-xl z-50 w-64 outline-none',
				className,
			)}
			{...props}
		/>
	)
}
