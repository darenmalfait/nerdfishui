import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cn, cva, type VariantProps } from '@nerdfish/utils/class'
import {
	type ComponentProps,
	type JSXElementConstructor,
	type ReactElement,
	isValidElement,
} from 'react'

const bubbleVariants = cva(
	'group/bubble relative flex w-fit max-w-[80%] min-w-0 flex-col gap-bff group-data-[align=end]/message:self-end data-[align=end]:self-end data-[variant=ghost]:max-w-full',
	{
		variants: {
			variant: {
				default:
					'*:data-[slot=bubble-content]:bg-foreground *:data-[slot=bubble-content]:text-background [&>[data-slot=bubble-content]:is(button,a):hover]:bg-foreground/80',
				secondary:
					'*:data-[slot=bubble-content]:bg-background-muted *:data-[slot=bubble-content]:text-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:bg-background-muted/80',
				muted:
					'*:data-[slot=bubble-content]:bg-background-muted [&>[data-slot=bubble-content]:is(button,a):hover]:bg-background-muted/80',
				tinted:
					'*:data-[slot=bubble-content]:bg-accent/10 *:data-[slot=bubble-content]:text-foreground [&>[data-slot=bubble-content]:is(button,a):hover]:bg-accent/15',
				outline:
					'*:data-[slot=bubble-content]:border-border *:data-[slot=bubble-content]:bg-background [&>[data-slot=bubble-content]:is(button,a):hover]:bg-background-muted',
				ghost:
					'border-none *:data-[slot=bubble-content]:rounded-none *:data-[slot=bubble-content]:bg-transparent *:data-[slot=bubble-content]:p-0 [&>[data-slot=bubble-content]:is(button,a):hover]:bg-background-muted',
				destructive:
					'*:data-[slot=bubble-content]:bg-destructive-background-muted *:data-[slot=bubble-content]:text-destructive [&>[data-slot=bubble-content]:is(button,a):hover]:bg-destructive-background',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export type BubbleProps = ComponentProps<'div'> &
	VariantProps<typeof bubbleVariants> & {
		align?: 'start' | 'end'
	}

export function Bubble({
	variant = 'default',
	align = 'start',
	className,
	...props
}: BubbleProps) {
	return (
		<div
			data-slot="bubble"
			data-variant={variant}
			data-align={align}
			className={cn(bubbleVariants({ variant }), className)}
			{...props}
		/>
	)
}

export type BubbleContentProps = useRender.ComponentProps<'div'> & {
	asChild?: boolean
}

export function BubbleContent({
	render,
	asChild = false,
	children,
	className,
	...props
}: BubbleContentProps): ReactElement {
	const defaultProps = {
		'data-slot': 'bubble-content',
		className: cn(
			'rounded-base px-friends py-best-friends [button,a]:duration-fast [button,a]:ease-standard [button,a]:focus-visible:border-ring [button,a]:focus-visible:ring-ring/50 w-fit max-w-full min-w-0 overflow-hidden border border-transparent text-sm leading-relaxed wrap-break-word group-data-[align=end]/bubble:self-end [button]:text-left [button,a]:transition-[color,box-shadow] [button,a]:outline-none [button,a]:focus-visible:ring-[3px]',
			className,
		),
	}

	const renderElement =
		asChild && isValidElement(children)
			? (children as ReactElement<
					Record<string, unknown>,
					string | JSXElementConstructor<unknown>
				>)
			: (render ?? <div />)

	const finalProps =
		asChild && isValidElement(children)
			? mergeProps(defaultProps, props)
			: mergeProps(defaultProps, { ...props, children })

	return useRender({
		render: renderElement,
		props: finalProps,
	})
}

const bubbleReactionsVariants = cva(
	'bg-background-muted ring-background-surface absolute z-10 flex w-fit shrink-0 items-center justify-center gap-bff rounded-full px-bff py-bff text-sm ring-[3px] has-[button]:p-0',
	{
		variants: {
			side: {
				top: 'top-0 -translate-y-3/4',
				bottom: 'bottom-0 translate-y-3/4',
			},
			align: {
				start: 'left-friends',
				end: 'right-friends',
			},
		},
		defaultVariants: {
			side: 'bottom',
			align: 'end',
		},
	},
)

export type BubbleReactionsProps = ComponentProps<'div'> & {
	align?: 'start' | 'end'
	side?: 'top' | 'bottom'
}

export function BubbleReactions({
	side = 'bottom',
	align = 'end',
	className,
	...props
}: BubbleReactionsProps) {
	return (
		<div
			data-slot="bubble-reactions"
			data-align={align}
			data-side={side}
			className={cn(bubbleReactionsVariants({ side, align }), className)}
			{...props}
		/>
	)
}

export type BubbleGroupProps = ComponentProps<'div'>

export function BubbleGroup({ className, ...props }: BubbleGroupProps) {
	return (
		<div
			data-slot="bubble-group"
			className={cn(
				'group/bubble-group gap-best-friends flex min-w-0 flex-col',
				className,
			)}
			{...props}
		/>
	)
}
