'use client'

import { cx } from '@nerdfish/utils'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import * as React from 'react'

export const ScrollBar = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
	React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => {
	return (
		<ScrollAreaPrimitive.ScrollAreaScrollbar
			ref={ref}
			orientation={orientation}
			className={cx(
				'flex touch-none select-none transition-colors',
				orientation === 'vertical' &&
					'h-full w-2.5 border-l border-l-transparent p-[1px]',
				orientation === 'horizontal' &&
					'h-2.5 border-t border-t-transparent p-[1px]',
				className,
			)}
			{...props}
		>
			<ScrollAreaPrimitive.ScrollAreaThumb className="bg-inverted/30 relative flex-1 rounded-full" />
		</ScrollAreaPrimitive.ScrollAreaScrollbar>
	)
})
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export const ScrollArea = React.forwardRef<
	React.ElementRef<typeof ScrollAreaPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => {
	return (
		<ScrollAreaPrimitive.Root
			ref={ref}
			className={cx('relative overflow-hidden', className)}
			{...props}
		>
			<ScrollAreaPrimitive.Viewport className="size-full rounded-[inherit]">
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	)
})
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

export type ScrollAreaProps = React.ComponentPropsWithoutRef<typeof ScrollArea>
export type ScrollBarProps = React.ComponentPropsWithoutRef<typeof ScrollBar>
