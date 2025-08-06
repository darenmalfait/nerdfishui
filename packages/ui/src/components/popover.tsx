'use client'

import { Popover as PopoverPrimitive } from '@base-ui-components/react/popover'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root>
export const Popover = PopoverPrimitive.Root

export type PopoverTriggerProps = React.ComponentProps<
	typeof PopoverPrimitive.Trigger
>
export const PopoverTrigger = PopoverPrimitive.Trigger

export type PopoverCloseProps = React.ComponentProps<
	typeof PopoverPrimitive.Close
>
export const PopoverClose = PopoverPrimitive.Close

export interface PopoverContentProps extends PopoverPrimitive.Popup.Props {
	align?: PopoverPrimitive.Positioner.Props['align']
	sideOffset?: PopoverPrimitive.Positioner.Props['sideOffset']
}

export function PopoverContent({
	className,
	align = 'center',
	sideOffset = 12,
	children,
	...props
}: PopoverContentProps) {
	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Positioner sideOffset={sideOffset} align={align}>
				<PopoverPrimitive.Popup
					className={cx(
						'bg-muted text-foreground outline-border rounded-base shadow-outline origin-[var(--transform-origin)] p-4 shadow-sm outline outline-1 -outline-offset-1 transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:shadow-none',
						className,
					)}
					{...props}
				>
					{children}
				</PopoverPrimitive.Popup>
			</PopoverPrimitive.Positioner>
		</PopoverPrimitive.Portal>
	)
}
