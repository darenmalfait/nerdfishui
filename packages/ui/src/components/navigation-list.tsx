'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import * as React from 'react'

import { Tooltip, TooltipTrigger, TooltipContent } from './tooltip'

export const navigationListItemVariants = cva(
	'inline-flex min-w-0 max-w-full items-center justify-center whitespace-nowrap rounded-semi text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-muted text-primary hover:bg-inverted/20',
				ghost: 'hover:bg-muted hover:text-primary',
			},
			size: {
				default: 'h-10 px-4 py-2 min-h-10',
				sm: 'h-9 px-3 min-h-9',
				lg: 'h-11 px-8 min-h-11',
				icon: 'size-10 min-h-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

type NavItemProps = Omit<React.ComponentPropsWithoutRef<'a'>, 'title'> & {
	isCollapsed?: boolean
	icon?: React.ElementType
	active?: boolean
	label?: string
	// TODO: do not override base html title
	title?: React.ReactNode
	as?: React.ElementType
} & VariantProps<typeof navigationListItemVariants>

function ItemIcon({
	icon: Icon,
	isCollapsed,
}: {
	icon?: React.ElementType
	isCollapsed?: boolean
}) {
	if (!Icon) return null

	if (isCollapsed) {
		return <Icon className="size-4" />
	}

	return <Icon className="mr-2 size-4" />
}

function ItemLabel({
	label,
	className,
}: {
	label?: string
	className?: string
}) {
	if (!label) return null

	return <span className={cx('ml-auto', className)}>{label}</span>
}

export function NavigationListItem<T>({
	as,
	className,
	icon: Icon,
	isCollapsed,
	active,
	title,
	label,
	size,
	variant,
	...props
}: NavItemProps & T) {
	const Link = as ?? 'a'

	if (isCollapsed) {
		return (
			<Tooltip delayDuration={0}>
				<TooltipTrigger asChild>
					<Link
						className={cx(
							navigationListItemVariants({
								variant: active ? 'default' : 'ghost',
								size: 'icon',
							}),
							'h-9 w-9',
							className,
						)}
						{...props}
					>
						<ItemIcon icon={Icon} isCollapsed={isCollapsed} />
						<span className="sr-only">{title}</span>
					</Link>
				</TooltipTrigger>

				<TooltipContent side="right" className="flex items-center gap-4">
					{title}
					<ItemLabel label={label} className="text-muted" />
				</TooltipContent>
			</Tooltip>
		)
	}

	return (
		<Link
			className={cx(
				navigationListItemVariants({
					variant: variant ? variant : active ? 'default' : 'ghost',
					size,
				}),
				'justify-start',
				className,
			)}
			{...props}
		>
			<ItemIcon icon={Icon} isCollapsed={isCollapsed} />
			<span className="min-w-0 max-w-full flex-1 truncate">{title}</span>
			<ItemLabel label={label} />
		</Link>
	)
}

export function NavigationListTitle({
	title,
	className,
	icon: Icon,
	isCollapsed,
	label,
}: {
	title: React.ReactNode
	className?: string
	icon?: React.ElementType
	isCollapsed?: boolean
	label?: string
}) {
	if (isCollapsed) {
		return (
			<Tooltip delayDuration={0}>
				<TooltipTrigger asChild>
					<h2
						className={cx(
							navigationListItemVariants({
								variant: 'ghost',
								size: 'icon',
							}),
							'h-9 w-9 hover:bg-transparent',
							className,
						)}
					>
						<ItemIcon icon={Icon} isCollapsed={isCollapsed} />
						<span className="sr-only">{title}</span>
					</h2>
				</TooltipTrigger>

				<TooltipContent side="right" className="flex items-center gap-4">
					{title}
					<ItemLabel label={label} className="text-muted" />
				</TooltipContent>
			</Tooltip>
		)
	}

	return (
		<h2
			className={cx(
				navigationListItemVariants({ variant: 'ghost', size: 'sm' }),
				'justify-start text-lg font-semibold tracking-tight hover:bg-transparent',
				className,
			)}
		>
			<ItemIcon icon={Icon} isCollapsed={isCollapsed} />
			<span className="min-w-0 max-w-full flex-1 truncate">{title}</span>
			<ItemLabel label={label} />
		</h2>
	)
}

export function NavigationListSection({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return <div className={cx('grid gap-1 pb-4', className)}>{children}</div>
}

export const NavigationList = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithRef<'nav'>
>(function NavigationList({ className, children, ...props }, ref) {
	return (
		<nav
			{...props}
			ref={ref}
			className={cx(
				'group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2',
				className,
			)}
		>
			<div
				className={cx(
					'grid gap-1 group-[[data-collapsed=true]]:justify-center',
					className,
				)}
			>
				{children}
			</div>
		</nav>
	)
})

export type NavigationListProps = React.ComponentPropsWithRef<
	typeof NavigationList
>

export type NavigationListItemProps = React.ComponentPropsWithoutRef<
	typeof NavigationListItem
>

export type NavigationListTitleProps = React.ComponentPropsWithoutRef<
	typeof NavigationListTitle
>

export type NavigationListSectionProps = React.ComponentPropsWithoutRef<
	typeof NavigationListSection
>
