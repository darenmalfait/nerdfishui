import { useRender } from '@base-ui-components/react/use-render'
import { cx } from '@nerdfish/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { type ReactElement, type ComponentProps } from 'react'
import { Separator } from '../../components/separator/separator'

export type ItemGroupProps = ComponentProps<'div'>
export function ItemGroup({ className, ...props }: ItemGroupProps) {
	return (
		<div
			role="list"
			data-slot="item-group"
			className={cx('group/item-group flex flex-col', className)}
			{...props}
		/>
	)
}

export type ItemSeparatorProps = ComponentProps<typeof Separator>
export function ItemSeparator({ className, ...props }: ItemSeparatorProps) {
	return (
		<Separator
			data-slot="item-separator"
			orientation="horizontal"
			className={cx('my-0', className)}
			{...props}
		/>
	)
}

export const itemVariants = cva(
	'group/item flex items-center border text-sm rounded-base transition-colors [a]:hover:bg-background-inverted/10 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
	{
		variants: {
			variant: {
				default: 'bg-transparent border-transparent',
				outline: 'border-border',
				muted: 'bg-background-muted',
			},
			size: {
				default:
					'p-friends gap-friends [&_[data-slot=item-media]]:rounded-[calc(theme(borderRadius.base)-theme(padding.friends))]',
				sm: 'p-best-friends gap-best-friends [&_[data-slot=item-media]]:rounded-[calc(theme(borderRadius.base)-theme(padding.best-friends))]',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export type ItemProps = useRender.ComponentProps<'div'> &
	VariantProps<typeof itemVariants>
export function Item({
	className,
	variant = 'default',
	size = 'default',
	render = <div />,
	...props
}: ItemProps): ReactElement {
	return useRender({
		render,
		props: {
			'data-slot': 'item',
			'data-variant': variant,
			'data-size': size,
			className: itemVariants({
				variant,
				size,
				className,
			}),
			...props,
		},
	})
}

export const itemMediaVariants = cva(
	'flex shrink-0 items-center rounded-base justify-center gap-best-friends group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5',
	{
		variants: {
			variant: {
				default: 'bg-transparent',
				icon: "size-8 border bg-background-muted [&_svg:not([class*='size-'])]:size-4",
				image: 'size-10 overflow-hidden [&_img]:size-full [&_img]:object-cover',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export type ItemMediaProps = ComponentProps<'div'> &
	VariantProps<typeof itemMediaVariants>
export function ItemMedia({
	className,
	variant = 'default',
	...props
}: ItemMediaProps) {
	return (
		<div
			data-slot="item-media"
			data-variant={variant}
			className={cx(itemMediaVariants({ variant, className }))}
			{...props}
		/>
	)
}

export type ItemContentProps = ComponentProps<'div'>
export function ItemContent({ className, ...props }: ItemContentProps) {
	return (
		<div
			data-slot="item-content"
			className={cx(
				'gap-bff flex flex-1 flex-col [&+[data-slot=item-content]]:flex-none',
				className,
			)}
			{...props}
		/>
	)
}

export type ItemTitleProps = ComponentProps<'div'>
export function ItemTitle({ className, ...props }: ItemTitleProps) {
	return (
		<div
			data-slot="item-title"
			className={cx(
				'gap-best-friends flex w-fit items-center text-sm leading-snug font-medium',
				className,
			)}
			{...props}
		/>
	)
}

export type ItemDescriptionProps = ComponentProps<'p'>
export function ItemDescription({ className, ...props }: ItemDescriptionProps) {
	return (
		<p
			data-slot="item-description"
			className={cx(
				'text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance',
				'[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
				className,
			)}
			{...props}
		/>
	)
}

export type ItemActionsProps = ComponentProps<'div'>
export function ItemActions({ className, ...props }: ItemActionsProps) {
	return (
		<div
			data-slot="item-actions"
			className={cx('gap-best-friends flex items-center', className)}
			{...props}
		/>
	)
}

export type ItemHeaderProps = ComponentProps<'div'>
export function ItemHeader({ className, ...props }: ItemHeaderProps) {
	return (
		<div
			data-slot="item-header"
			className={cx(
				'gap-best-friends flex basis-full items-center justify-between',
				className,
			)}
			{...props}
		/>
	)
}

export type ItemFooterProps = ComponentProps<'div'>
export function ItemFooter({ className, ...props }: ItemFooterProps) {
	return (
		<div
			data-slot="item-footer"
			className={cx(
				'gap-best-friends flex basis-full items-center justify-between',
				className,
			)}
			{...props}
		/>
	)
}
