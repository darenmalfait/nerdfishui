'use client'

import { cx } from '@nerdfish/utils'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

const PopoverContent = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Content
		ref={ref}
		align={align}
		sideOffset={sideOffset}
		className={cx(
			'animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 shadow-outline bg-popover z-50 w-72 rounded-md p-4 shadow-none',
			className,
		)}
		{...props}
	/>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

const Popover = Object.assign(PopoverPrimitive.Root, {
	Content: PopoverContent,
	Trigger: PopoverPrimitive.Trigger,
})

export { Popover }
