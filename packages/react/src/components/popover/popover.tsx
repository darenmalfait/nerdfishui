import { Popover as PopoverPrimitive } from '@base-ui-components/react/popover'

import { cx } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

export type PopoverProps = ComponentProps<typeof PopoverPrimitive.Root>
export function Popover({ ...props }: PopoverProps) {
	return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

export type PopoverPortalProps = ComponentProps<typeof PopoverPrimitive.Portal>
export function PopoverPortal({ ...props }: PopoverPortalProps) {
	return <PopoverPrimitive.Portal data-slot="popover-portal" {...props} />
}

export type PopoverTriggerProps = ComponentProps<
	typeof PopoverPrimitive.Trigger
>
export function PopoverTrigger({ ...props }: PopoverTriggerProps) {
	return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

export type PopoverCloseProps = ComponentProps<typeof PopoverPrimitive.Close>
export function PopoverClose({ ...props }: PopoverCloseProps) {
	return <PopoverPrimitive.Close data-slot="popover-close" {...props} />
}

export type PopoverArrowProps = ComponentProps<typeof PopoverPrimitive.Arrow>
export function PopoverArrow({ ...props }: PopoverArrowProps) {
	return <PopoverPrimitive.Arrow data-slot="popover-arrow" {...props} />
}

export type PopoverPositionerProps = ComponentProps<
	typeof PopoverPrimitive.Positioner
>
export function PopoverPositioner({ ...props }: PopoverPositionerProps) {
	return (
		<PopoverPrimitive.Positioner data-slot="popover-positioner" {...props} />
	)
}

export type PopoverHeaderProps = ComponentProps<'div'>
export function PopoverHeader({ className, ...props }: PopoverHeaderProps) {
	return (
		<div
			data-slot="popover-header"
			className={cx('gap-y-bff relative flex flex-col', className)}
			{...props}
		/>
	)
}

export type PopoverTitleProps = ComponentProps<typeof PopoverPrimitive.Title>
export function PopoverTitle({ className, ...props }: PopoverTitleProps) {
	return (
		<PopoverPrimitive.Title
			data-slot="popover-title"
			className={cx('text-sm font-semibold', className)}
			{...props}
		/>
	)
}

export type PopoverDescriptionProps = ComponentProps<
	typeof PopoverPrimitive.Description
>
export function PopoverDescription({
	className,
	...props
}: PopoverDescriptionProps) {
	return (
		<PopoverPrimitive.Description
			data-slot="popover-description"
			className={cx('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}

export type PopoverContentProps = ComponentProps<
	typeof PopoverPrimitive.Popup
> & {
	align?: PopoverPrimitive.Positioner.Props['align']
	side?: PopoverPrimitive.Positioner.Props['side']
	sideOffset?: PopoverPrimitive.Positioner.Props['sideOffset']
	arrow?: boolean
}
export function PopoverContent({
	children,
	className,
	align = 'center',
	sideOffset = 8,
	side = 'bottom',
	arrow = true,
	...props
}: PopoverContentProps) {
	return (
		<PopoverPortal>
			<PopoverPositioner sideOffset={sideOffset} align={align} side={side}>
				<PopoverPrimitive.Popup
					data-slot="popover-content"
					className={cx(
						'bg-popover text-popover-contrast outline-border rounded-popover p-popover w-72 origin-(--transform-origin) shadow-md outline -outline-offset-1 transition-[transform,scale,opacity] data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0',
						className,
					)}
					{...props}
				>
					{arrow ? (
						<PopoverArrow className="data-[side=bottom]:-top-2 data-[side=left]:-right-3.25 data-[side=left]:rotate-90 data-[side=right]:-left-3.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180">
							<svg width="20" height="10" viewBox="0 0 20 10" fill="none">
								<path
									d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V9H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
									className="fill-popover"
								/>
								<path
									d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
									className="fill-border"
								/>
							</svg>
						</PopoverArrow>
					) : null}
					{children}
				</PopoverPrimitive.Popup>
			</PopoverPositioner>
		</PopoverPortal>
	)
}

export type PopoverFooterProps = ComponentProps<'div'>
export function PopoverFooter({ className, ...props }: PopoverFooterProps) {
	return (
		<div
			data-slot="popover-footer"
			className={cx(
				'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
				className,
			)}
			{...props}
		/>
	)
}
