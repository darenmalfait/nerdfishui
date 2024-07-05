'use client'

import { cx } from '@nerdfish/utils'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import * as React from 'react'

const HoverCardContent = React.forwardRef<
	React.ElementRef<typeof HoverCardPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
	<HoverCardPrimitive.Content
		ref={ref}
		align={align}
		sideOffset={sideOffset}
		className={cx(
			'shadow-outline bg-muted shadow-soft-xl animate-in zoom-in-90 z-50 w-64 rounded-md p-4 outline-none',
			className,
		)}
		{...props}
	/>
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

const HoverCard = Object.assign(HoverCardPrimitive.Root, {
	Content: HoverCardContent,
	Trigger: HoverCardPrimitive.Trigger,
})

export { HoverCard }
