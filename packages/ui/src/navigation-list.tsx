'use client'

import { cva, cx } from '@nerdfish/utils'
import * as React from 'react'

import { Tooltip } from './tooltip'

const navItemVariants = cva(
	'inline-flex min-w-0 max-w-full items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-muted text-primary hover:bg-inverted/20',
				ghost: 'hover:bg-muted hover:text-primary',
			},
			size: {
				default: 'h-10 px-4 py-2',
				sm: 'h-9 rounded-md px-3',
				lg: 'h-11 rounded-md px-8',
				icon: 'size-10',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

type NavItemProps = React.ComponentPropsWithoutRef<'a'> & {
	isCollapsed?: boolean
	icon?: React.ElementType
	active?: boolean
	label?: string
	title?: React.ReactNode
	as?: React.ElementType
}

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

function Item<T>({
	as,
	className,
	icon: Icon,
	isCollapsed,
	active,
	title,
	label,
	...props
}: NavItemProps & T) {
	const Link = as ?? 'a'

	if (isCollapsed) {
		return (
			<Tooltip delayDuration={0}>
				<Tooltip.Trigger asChild>
					<Link
						className={cx(
							navItemVariants({
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
				</Tooltip.Trigger>

				<Tooltip.Content side="right" className="flex items-center gap-4">
					{title}
					<ItemLabel label={label} className="text-muted" />
				</Tooltip.Content>
			</Tooltip>
		)
	}

	return (
		<Link
			className={cx(
				navItemVariants({ variant: active ? 'default' : 'ghost', size: 'sm' }),
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

function Title({
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
				<Tooltip.Trigger asChild>
					<h2
						className={cx(
							navItemVariants({
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
				</Tooltip.Trigger>

				<Tooltip.Content side="right" className="flex items-center gap-4">
					{title}
					<ItemLabel label={label} className="text-muted" />
				</Tooltip.Content>
			</Tooltip>
		)
	}

	return (
		<h2
			className={cx(
				navItemVariants({ variant: 'ghost', size: 'sm' }),
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

function Section({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) {
	return <div className={cx('grid gap-1 pb-4', className)}>{children}</div>
}

const NavigationListRoot = React.forwardRef<
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

const NavigationList = Object.assign(NavigationListRoot, {
	Item,
	Title,
	Section,
})

export { NavigationList }
