'use client'

import { ScrollArea as ScrollAreaPrimitive } from '@base-ui-components/react/scroll-area'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export function ScrollArea({
	className,
	children,
	orientation,
	...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root> & {
	orientation?: 'horizontal' | 'vertical'
}) {
	return (
		<ScrollAreaPrimitive.Root
			data-slot="scroll-area"
			className={cx('relative', className)}
			{...props}
		>
			<ScrollAreaPrimitive.Viewport
				data-slot="scroll-area-viewport"
				className="focus-visible:ring-foreground/50 size-full overscroll-contain rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline focus-visible:ring-[3px]"
			>
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar orientation={orientation} />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	)
}

function ScrollBar({
	className,
	orientation = 'vertical',
	...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Scrollbar>) {
	return (
		<ScrollAreaPrimitive.Scrollbar
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			className={cx(
				'data-hovering:opacity-100 data-hovering:delay-0 data-hovering:duration-100 data-scrolling:opacity-100 data-scrolling:delay-0 data-scrolling:duration-100 m-1 flex touch-none select-none p-px opacity-0 transition-[colors,opacity] delay-200',
				orientation === 'vertical' && 'w-2.5 border-l border-l-transparent',
				orientation === 'horizontal' &&
					'h-2.5 flex-col border-t border-t-transparent',
				className,
			)}
			{...props}
		>
			<ScrollAreaPrimitive.Thumb
				data-slot="scroll-area-thumb"
				className="bg-border relative flex-1 rounded-full"
			/>
		</ScrollAreaPrimitive.Scrollbar>
	)
}
