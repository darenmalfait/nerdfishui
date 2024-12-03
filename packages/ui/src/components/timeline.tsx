import { type VariantProps, cva, cx } from '@nerdfish/utils'
import React from 'react'

export const timelineVariants = cva(['flex flex-col justify-center'], {
	variants: {
		variant: {
			solid: '',
			outline:
				'[&_[data-slot=dot]]:border-2 [&_[data-slot=dot]]:border-current [&_[data-slot=dot]]:bg-transparent',
		},
		size: {
			sm: '[&_[data-slot=icon]]:min-h-2 [&_[data-slot=icon]]:min-w-2',
		},
	},
	defaultVariants: {
		variant: 'solid',
		size: 'sm',
	},
})

export const Timeline = React.forwardRef<
	HTMLUListElement,
	React.ComponentPropsWithoutRef<'ul'> & VariantProps<typeof timelineVariants>
>(({ children, className, style, variant, size, ...rest }, ref) => {
	return (
		<ul
			{...rest}
			ref={ref}
			className={cx(timelineVariants({ variant, size }), className)}
			style={
				{
					'--row-start': 'minmax(0,1fr)',
					'--row-end': 'minmax(0,1fr)',
					'--col-start': 'auto',
					'--col-end': '2fr',
					...style,
				} as React.CSSProperties
			}
			data-orientation="vertical"
		>
			{children}
		</ul>
	)
})

Timeline.displayName = 'Timeline'

export type TimelineProps = React.ComponentPropsWithoutRef<typeof Timeline>

export const TimelineItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentPropsWithoutRef<'li'>
>(({ children, className, ...rest }, ref) => {
	return (
		<li
			ref={ref}
			className={cx(
				'grid grid-cols-[var(--col-start)_var(--col-end)] grid-rows-[var(--row-start)]',
				'relative items-center justify-items-start',
				className,
			)}
			{...rest}
		>
			{children}
		</li>
	)
})

TimelineItem.displayName = 'TimelineItem'

export type TimelineItemProps = React.ComponentPropsWithoutRef<
	typeof TimelineItem
>

export const TimelineContent = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ children, className, ...rest }, ref) => {
	return (
		<div
			ref={ref}
			className={cx(
				'px-2 first:col-start-1 last:col-start-2 last:justify-self-start',
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	)
})

TimelineContent.displayName = 'TimelineContent'

export type TimelineContentProps = React.ComponentPropsWithoutRef<
	typeof TimelineContent
>

export const TimelineSeparator = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ children, className, ...rest }, ref) => {
	return (
		<div
			ref={ref}
			data-slot="separator"
			className={cx(
				'flex flex-shrink-0 flex-col items-center',
				'grid-col-start-1 grid-row-start-1 gap-sm mx-1 h-full min-w-6 flex-shrink-0',
				'before:empty-content before:block before:min-h-[0.5em] before:flex-1',
				'after:empty-content after:block after:min-h-[0.5em] after:flex-1',
				'has-[[data-slot=track]:first-of-type]:before:hidden has-[[data-slot=track]:last-of-type]:after:hidden',
				className,
			)}
			{...rest}
		>
			{children}
		</div>
	)
})

TimelineSeparator.displayName = 'TimelineSeparator'

export type TimelineSeparatorProps = React.ComponentPropsWithoutRef<
	typeof TimelineSeparator
>

const TimelineDot = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ children, className, ...rest }, ref) => {
	return (
		<div
			ref={ref}
			data-slot="dot"
			className={cx('size-2 rounded-full bg-current', className)}
			{...rest}
		>
			{children}
		</div>
	)
})

TimelineDot.displayName = 'TimelineDot'

export type TimelineDotProps = React.ComponentPropsWithoutRef<
	typeof TimelineDot
>

export const TimelineIcon = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ children, className, ...rest }, ref) => {
	return (
		<div
			ref={ref}
			data-slot="icon"
			className={cx('z-1 text-muted flex items-center', className)}
			{...rest}
		>
			{children ?? <TimelineDot />}
		</div>
	)
})

TimelineIcon.displayName = 'TimelineIcon'

export type TimelineIconProps = React.ComponentPropsWithoutRef<
	typeof TimelineIcon
>

export const TimelineTrack = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ children, className, ...rest }, ref) => {
	return (
		<div
			ref={ref}
			data-slot="track"
			className={cx('bg-inverted/10 min-h-[0.5em] w-px flex-1', className)}
			{...rest}
		>
			{children}
		</div>
	)
})

TimelineTrack.displayName = 'TimelineTrack'

export type TimelineTrackProps = React.ComponentPropsWithoutRef<
	typeof TimelineTrack
>
