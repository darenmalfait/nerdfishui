import { ScrollArea as ScrollAreaPrimitive } from '@base-ui-components/react/scroll-area'
import { cx } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

export type ScrollAreaProps = ComponentProps<typeof ScrollAreaPrimitive.Root>
export function ScrollArea({ className, children, ...props }: ScrollAreaProps) {
	return (
		<ScrollAreaPrimitive.Root
			data-slot="scroll-area"
			className={cx('relative', className)}
			{...props}
		>
			<ScrollAreaPrimitive.Viewport
				data-slot="scroll-area-viewport"
				className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
			>
				<ScrollAreaPrimitive.Content>{children}</ScrollAreaPrimitive.Content>
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	)
}

export type ScrollBarProps = ComponentProps<
	typeof ScrollAreaPrimitive.Scrollbar
>
export function ScrollBar({
	className,
	orientation = 'vertical',
	...props
}: ScrollBarProps) {
	return (
		<ScrollAreaPrimitive.Scrollbar
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			className={cx(
				'flex touch-none p-px opacity-0 transition-[colors,opacity] delay-300 duration-150 select-none data-[hovering]:opacity-100 data-[hovering]:delay-0 data-[hovering]:duration-75 data-[scrolling]:opacity-100 data-[scrolling]:delay-0 data-[scrolling]:duration-75',
				orientation === 'vertical' &&
					'h-full w-2 border-l border-l-transparent',
				orientation === 'horizontal' &&
					'h-2 flex-col border-t border-t-transparent',
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
