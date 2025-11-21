'use client'

import { Tooltip as TooltipPrimitive } from '@base-ui-components/react/tooltip'
import { cn } from '@nerdfish/utils/class'
import { type ComponentProps } from 'react'

export type TooltipProviderProps = ComponentProps<
	typeof TooltipPrimitive.Provider
>
export function TooltipProvider({ ...props }: TooltipProviderProps) {
	return <TooltipPrimitive.Provider data-slot="tooltip-provider" {...props} />
}

export type TooltipProps = ComponentProps<typeof TooltipPrimitive.Root>
export function Tooltip({ ...props }: TooltipProps) {
	return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

export type TooltipTriggerProps = ComponentProps<
	typeof TooltipPrimitive.Trigger
>
export function TooltipTrigger({
	...props
}: ComponentProps<typeof TooltipPrimitive.Trigger>) {
	return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipPortal({
	...props
}: ComponentProps<typeof TooltipPrimitive.Portal>) {
	return <TooltipPrimitive.Portal data-slot="tooltip-portal" {...props} />
}

function TooltipPositioner({
	...props
}: ComponentProps<typeof TooltipPrimitive.Positioner>) {
	return (
		<TooltipPrimitive.Positioner data-slot="tooltip-positioner" {...props} />
	)
}

function TooltipArrow({
	...props
}: ComponentProps<typeof TooltipPrimitive.Arrow>) {
	return <TooltipPrimitive.Arrow data-slot="tooltip-arrow" {...props} />
}

export interface TooltipContentProps
	extends ComponentProps<typeof TooltipPrimitive.Popup> {
	align?: TooltipPrimitive.Positioner.Props['align']
	side?: TooltipPrimitive.Positioner.Props['side']
	sideOffset?: TooltipPrimitive.Positioner.Props['sideOffset']
}
export function TooltipContent({
	className,
	align = 'center',
	sideOffset = 8,
	side = 'top',
	children,
	...props
}: TooltipContentProps) {
	return (
		<TooltipPortal>
			<TooltipPositioner sideOffset={sideOffset} align={align} side={side}>
				<TooltipPrimitive.Popup
					data-slot="tooltip-content"
					className={cn(
						'bg-background-inverted text-foreground-inverted outline-border rounded-compact px-friends py-best-friends w-fit origin-(--transform-origin) text-xs text-balance shadow-sm outline -outline-offset-1 transition-[transform,scale,opacity] data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0',
						className,
					)}
					{...props}
				>
					{children}
					<TooltipArrow className="data-[side=bottom]:-top-2 data-[side=left]:-right-3.25 data-[side=left]:rotate-90 data-[side=right]:-left-3.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180">
						<svg width="20" height="10" viewBox="0 0 20 10" fill="none">
							<path
								d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V9H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
								className="fill-background-inverted"
							/>
							<path
								d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
								className="fill-border"
							/>
						</svg>
					</TooltipArrow>
				</TooltipPrimitive.Popup>
			</TooltipPositioner>
		</TooltipPortal>
	)
}
