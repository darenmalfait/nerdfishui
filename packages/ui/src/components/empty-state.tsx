import { useRender } from '@base-ui-components/react/use-render'
import { cx } from '@nerdfish/utils'
import * as React from 'react'
import { H3, Paragraph, type ParagraphProps } from './typography'

export type EmptyStateProps = React.ComponentProps<'div'>
export function EmptyState({ className, ...props }: EmptyStateProps) {
	return (
		<div
			className={cx(
				'flex flex-1 flex-col items-center justify-center gap-0',
				className,
			)}
			{...props}
		/>
	)
}

export type EmptyStateTitleProps = React.ComponentProps<typeof H3>
export function EmptyStateTitle({
	variant = 'primary',
	as = 'h2',
	className,
	...props
}: EmptyStateTitleProps) {
	return (
		<H3
			as={as}
			variant={variant}
			className={cx('mb-xs m-0 !mt-0 text-center', className)}
			{...props}
		/>
	)
}

export type EmptyStateIconProps = useRender.ComponentProps<'div'>
export function EmptyStateIcon({
	className,
	render = <div />,
	...props
}: EmptyStateIconProps) {
	return useRender({
		render,
		props: {
			role: 'presentation',
			'data-slot': 'button',
			className: cx('mb-lg text-brand size-12', className),
			...props,
		},
	})
}

export type EmptyStateDescriptionProps = ParagraphProps
export function EmptyStateDescription({
	className,
	...props
}: EmptyStateDescriptionProps) {
	return (
		<Paragraph
			className={cx('text-foreground-muted m-0 mt-0 text-center', className)}
			{...props}
		/>
	)
}

export type EmptyStateActionsProps = React.ComponentProps<'div'>
export function EmptyStateActions({
	className,
	...props
}: EmptyStateActionsProps) {
	return <div className={cx('mt-lg gap-sm flex', className)} {...props} />
}
