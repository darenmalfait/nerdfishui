import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui-components/react/navigation-menu'
import { cva, cx } from '@nerdfish/utils'
import { ChevronDownIcon } from 'lucide-react'
import { type ComponentProps, type CSSProperties } from 'react'
import { buttonVariants } from '../button/button'

export type NavigationMenuProps = ComponentProps<
	typeof NavigationMenuPrimitive.Root
>
export function NavigationMenu({
	className,
	children,
	...props
}: NavigationMenuProps) {
	return (
		<NavigationMenuPrimitive.Root
			data-slot="navigation-menu"
			className={cx(
				'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
				className,
			)}
			{...props}
		>
			{children}
		</NavigationMenuPrimitive.Root>
	)
}

export type NavigationMenuListProps = ComponentProps<
	typeof NavigationMenuPrimitive.List
>
export function NavigationMenuList({
	className,
	...props
}: NavigationMenuListProps) {
	return (
		<NavigationMenuPrimitive.List
			data-slot="navigation-menu-list"
			className={cx(
				'group gap-bff flex flex-1 list-none items-center justify-center',
				className,
			)}
			{...props}
		/>
	)
}

export type NavigationMenuItemProps = ComponentProps<
	typeof NavigationMenuPrimitive.Item
>
export function NavigationMenuItem({
	className,
	...props
}: NavigationMenuItemProps) {
	return (
		<NavigationMenuPrimitive.Item
			data-slot="navigation-menu-item"
			className={cx('relative', className)}
			{...props}
		/>
	)
}

export const navigationMenuTriggerStyle = cva(
	buttonVariants({
		variant: 'ghost',
		size: 'md',
		className:
			'group inline-flex w-max px-friends py-best-friends rounded-compact items-center justify-center disabled:pointer-events-none disabled:opacity-50 data-[popup-open]:hover:bg-background-muted data-[popup-open]:text-foreground data-[popup-open]:focus:bg-background-muted data-[popup-open]:bg-background-muted/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1',
	}),
)

export type NavigationMenuTriggerProps = ComponentProps<
	typeof NavigationMenuPrimitive.Trigger
>
export function NavigationMenuTrigger({
	className,
	children,
	...props
}: NavigationMenuTriggerProps) {
	return (
		<NavigationMenuPrimitive.Trigger
			data-slot="navigation-menu-trigger"
			className={cx(navigationMenuTriggerStyle(), 'group', className)}
			{...props}
		>
			{children}{' '}
			<ChevronDownIcon
				className="relative top-px ms-1 size-3 transition duration-300 group-data-popup-open:rotate-180"
				aria-hidden="true"
			/>
		</NavigationMenuPrimitive.Trigger>
	)
}

export type NavigationMenuContentProps = ComponentProps<
	typeof NavigationMenuPrimitive.Content
>
export function NavigationMenuContent({
	className,
	...props
}: NavigationMenuContentProps) {
	return (
		<NavigationMenuPrimitive.Content
			data-slot="navigation-menu-content"
			className={cx(
				'xs:min-w-[400px] p-popover-compact h-full w-[calc(100vw-40px)] sm:w-max',
				'transition-[opacity,transform,translate] duration-(--duration) ease-(--easing)',
				'data-ending-style:opacity-0 data-starting-style:opacity-0',
				'data-starting-style:data-[activation-direction=left]:translate-x-[-50%]',
				'data-starting-style:data-[activation-direction=right]:translate-x-[50%]',
				'data-ending-style:data-[activation-direction=left]:translate-x-[50%]',
				'data-ending-style:data-[activation-direction=right]:translate-x-[-50%]',
				className,
			)}
			{...props}
		/>
	)
}

export type NavigationMenuPortalProps = ComponentProps<
	typeof NavigationMenuPrimitive.Portal
>
export function NavigationMenuPortal({ ...props }: NavigationMenuPortalProps) {
	return (
		<NavigationMenuPrimitive.Portal
			data-slot="navigation-menu-portal"
			{...props}
		/>
	)
}

export type NavigationMenuPositionerProps = ComponentProps<
	typeof NavigationMenuPrimitive.Positioner
>
export function NavigationMenuPositioner({
	className,
	children,
	...props
}: NavigationMenuPositionerProps) {
	return (
		<NavigationMenuPortal>
			<NavigationMenuPrimitive.Positioner
				data-slot="navigation-menu-positioner"
				sideOffset={10}
				collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
				collisionAvoidance={{ side: 'none' }}
				className={cx(
					"box-border h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-(--duration) ease-(--easing) before:absolute before:content-[''] data-instant:transition-none data-[side=bottom]:before:-top-2.5 data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:-right-2.5 data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:-left-2.5 data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:-bottom-2.5 data-[side=top]:before:left-0 data-[side=top]:before:h-2.5",
					className,
				)}
				style={
					{
						'--duration': '0.35s',
						'--easing': 'cubic-bezier(0.22, 1, 0.36, 1)',
					} as CSSProperties
				}
				{...props}
			>
				{children}
			</NavigationMenuPrimitive.Positioner>
		</NavigationMenuPortal>
	)
}

export type NavigationMenuPopupProps = ComponentProps<
	typeof NavigationMenuPrimitive.Popup
>
export function NavigationMenuPopup({
	className,
	children,
	...props
}: NavigationMenuPopupProps) {
	return (
		<NavigationMenuPrimitive.Popup
			className={cx(
				'data-[ending-style]:easing-[ease] bg-popover outline-border xs:w-[var(--popup-width)] rounded-popover relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) shadow-lg outline-1 transition-[opacity,transform,width,height,scale,translate] duration-(--duration) ease-(--easing) data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0',
				className,
			)}
			{...props}
		>
			{children}
			<NavigationMenuViewport />
		</NavigationMenuPrimitive.Popup>
	)
}

export type NavigationMenuViewportProps = ComponentProps<
	typeof NavigationMenuPrimitive.Viewport
>
export function NavigationMenuViewport({
	className,
	...props
}: NavigationMenuViewportProps) {
	return (
		<NavigationMenuPrimitive.Viewport
			className={cx('relative h-full w-full overflow-hidden', className)}
			{...props}
		/>
	)
}

export type NavigationMenuLinkProps = ComponentProps<
	typeof NavigationMenuPrimitive.Link
>
export function NavigationMenuLink({
	className,
	...props
}: NavigationMenuLinkProps) {
	return (
		<NavigationMenuPrimitive.Link
			data-slot="navigation-menu-link"
			className={cx(
				'rounded-[calc(var(--radius-popover)-theme(padding.popover-compact))]',
				"data-active:focus:bg-background-muted data-active:hover:bg-background-muted data-active:bg-background-muted/50 data-active:text-foreground hover:bg-background-muted hover:text-foreground focus:bg-background-muted focus:text-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground gap-bff p-popover flex flex-col text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	)
}

export type NavigationMenuArrowProps = ComponentProps<
	typeof NavigationMenuPrimitive.Arrow
>
export function NavigationMenuArrow({
	className,
	...props
}: NavigationMenuArrowProps) {
	return (
		<NavigationMenuPrimitive.Arrow
			data-slot="navigation-menu-arrow"
			className={cx(
				'flex transition-[left] duration-(--duration) ease-(--easing) data-[side=bottom]:-top-2 data-[side=left]:-right-3.25 data-[side=left]:rotate-90 data-[side=right]:-left-3.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180',
				className,
			)}
			{...props}
		>
			<ArrowSvg />
		</NavigationMenuPrimitive.Arrow>
	)
}

type ArrowSvgProps = ComponentProps<'svg'>
function ArrowSvg(props: ArrowSvgProps) {
	return (
		<svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
			<path
				d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
				className="fill-popover"
			/>
			<path
				d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
				className="fill-border"
			/>
			<path d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z" />
		</svg>
	)
}
