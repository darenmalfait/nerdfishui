import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cn, cva, type VariantProps } from '@nerdfish/utils/class'
import { type ComponentProps, type ReactElement } from 'react'
import { Button } from '../button/button'

const attachmentVariants = cva(
	'group/attachment relative flex w-fit max-w-full min-w-0 shrink-0 flex-wrap rounded-container border border-border bg-background-surface text-foreground outline-none transition-[color,box-shadow] duration-fast focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] has-[>a,>button]:hover:bg-background-muted data-[state=error]:border-destructive/30 data-[state=idle]:border-dashed',
	{
		variants: {
			size: {
				default:
					'gap-best-friends text-sm has-data-[slot=attachment-content]:px-best-friends has-data-[slot=attachment-content]:py-best-friends has-data-[slot=attachment-media]:p-best-friends',
				sm: 'gap-best-friends text-xs has-data-[slot=attachment-content]:px-best-friends has-data-[slot=attachment-content]:py-bff has-data-[slot=attachment-media]:p-bff',
				xs: 'gap-bff rounded-base text-xs has-data-[slot=attachment-content]:px-bff has-data-[slot=attachment-content]:py-bff has-data-[slot=attachment-media]:p-bff',
			},
			orientation: {
				horizontal: 'min-w-40 items-center',
				vertical: 'w-24 flex-col has-data-[slot=attachment-content]:w-30',
			},
		},
	},
)

export type AttachmentProps = ComponentProps<'div'> &
	VariantProps<typeof attachmentVariants> & {
		state?: 'idle' | 'uploading' | 'processing' | 'error' | 'done'
	}

export function Attachment({
	className,
	state = 'done',
	size = 'default',
	orientation = 'horizontal',
	...props
}: AttachmentProps) {
	return (
		<div
			data-slot="attachment"
			data-state={state}
			data-size={size}
			data-orientation={orientation}
			className={cn(attachmentVariants({ size, orientation }), className)}
			{...props}
		/>
	)
}

const attachmentMediaVariants = cva(
	"relative flex aspect-square h-auto w-10 shrink-0 items-center justify-center overflow-hidden rounded-base bg-background-muted text-foreground group-data-[orientation=vertical]/attachment:w-full group-data-[size=sm]/attachment:w-8 group-data-[size=xs]/attachment:w-7 group-data-[size=xs]/attachment:rounded-compact group-data-[state=error]/attachment:bg-destructive-background-muted group-data-[state=error]/attachment:text-destructive group-data-[orientation=vertical]/attachment:*:data-[slot=spinner]:size-6! [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 group-data-[orientation=vertical]/attachment:[&_svg:not([class*='size-'])]:size-6 group-data-[size=xs]/attachment:[&_svg:not([class*='size-'])]:size-3.5",
	{
		variants: {
			variant: {
				icon: '',
				image:
					'opacity-60 group-data-[state=done]/attachment:opacity-100 group-data-[state=idle]/attachment:opacity-100 [&>span]:block [&>span]:size-full [&_img]:size-full [&_img]:object-cover',
			},
		},
		defaultVariants: {
			variant: 'icon',
		},
	},
)

export type AttachmentMediaProps = ComponentProps<'div'> &
	VariantProps<typeof attachmentMediaVariants>

export function AttachmentMedia({
	className,
	variant = 'icon',
	...props
}: AttachmentMediaProps) {
	return (
		<div
			data-slot="attachment-media"
			data-variant={variant}
			className={cn(attachmentMediaVariants({ variant }), className)}
			{...props}
		/>
	)
}

export type AttachmentContentProps = ComponentProps<'div'>

export function AttachmentContent({
	className,
	...props
}: AttachmentContentProps) {
	return (
		<div
			data-slot="attachment-content"
			className={cn(
				'group-data-[orientation=vertical]/attachment:px-bff max-w-full min-w-0 flex-1 leading-snug',
				className,
			)}
			{...props}
		/>
	)
}

export type AttachmentTitleProps = ComponentProps<'span'>

export function AttachmentTitle({ className, ...props }: AttachmentTitleProps) {
	return (
		<span
			data-slot="attachment-title"
			className={cn(
				'group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer block max-w-full min-w-0 truncate text-sm font-medium',
				className,
			)}
			{...props}
		/>
	)
}

export type AttachmentDescriptionProps = ComponentProps<'span'>

export function AttachmentDescription({
	className,
	...props
}: AttachmentDescriptionProps) {
	return (
		<span
			data-slot="attachment-description"
			className={cn(
				'mt-bff text-foreground-muted group-data-[state=error]/attachment:text-destructive-muted block max-w-full min-w-0 truncate text-xs',
				className,
			)}
			{...props}
		/>
	)
}

export type AttachmentActionsProps = ComponentProps<'div'>

export function AttachmentActions({
	className,
	...props
}: AttachmentActionsProps) {
	return (
		<div
			data-slot="attachment-actions"
			className={cn(
				'group-data-[orientation=vertical]/attachment:top-friends group-data-[orientation=vertical]/attachment:right-friends group-data-[orientation=vertical]/attachment:gap-bff relative z-20 flex shrink-0 items-center group-data-[orientation=vertical]/attachment:absolute',
				className,
			)}
			{...props}
		/>
	)
}

export type AttachmentActionProps = ComponentProps<typeof Button>

export function AttachmentAction({
	className,
	variant,
	size = 'xs',
	icon = true,
	...props
}: AttachmentActionProps) {
	return (
		<Button
			data-slot="attachment-action"
			variant={variant ?? 'ghost'}
			size={size}
			icon={icon}
			className={cn(className)}
			{...props}
		/>
	)
}

export type AttachmentTriggerProps = useRender.ComponentProps<'button'>

export function AttachmentTrigger({
	className,
	render,
	type,
	...props
}: AttachmentTriggerProps): ReactElement {
	return useRender({
		defaultTagName: 'button',
		props: mergeProps<'button'>(
			{
				type: render ? type : (type ?? 'button'),
				className: cn('absolute inset-0 z-10 outline-none', className),
			},
			props,
		),
		render,
		state: {
			slot: 'attachment-trigger',
		},
	})
}

export type AttachmentGroupProps = ComponentProps<'div'>

export function AttachmentGroup({ className, ...props }: AttachmentGroupProps) {
	return (
		<div
			data-slot="attachment-group"
			className={cn(
				'scroll-fade-x scroll-px-bff no-scrollbar gap-friends py-bff flex min-w-0 snap-x snap-mandatory overflow-x-auto overscroll-x-contain *:data-[slot=attachment]:flex-none *:data-[slot=attachment]:snap-start',
				className,
			)}
			{...props}
		/>
	)
}
