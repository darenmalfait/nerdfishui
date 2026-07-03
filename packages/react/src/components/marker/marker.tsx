import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { cn, cva, type VariantProps } from '@nerdfish/utils/class'
import {
	type ComponentProps,
	type JSXElementConstructor,
	type ReactElement,
	isValidElement,
} from 'react'

export const markerVariants = cva(
	"group/marker text-foreground-muted relative flex min-h-4 w-full items-center gap-best-friends text-left text-sm [&_svg:not([class*='size-'])]:size-4 [a]:underline [a]:underline-offset-3 [a]:hover:text-foreground",
	{
		variants: {
			variant: {
				default: '',
				separator:
					'before:bg-border after:bg-border before:mr-bff before:h-px before:min-w-0 before:flex-1 after:ml-bff after:h-px after:min-w-0 after:flex-1',
				border: 'border-border border-b pb-best-friends',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export interface MarkerProps
	extends useRender.ComponentProps<'div'>, VariantProps<typeof markerVariants> {
	asChild?: boolean
}

export function Marker({
	className,
	variant = 'default',
	render,
	asChild = false,
	children,
	...props
}: MarkerProps): ReactElement {
	const defaultProps = {
		'data-slot': 'marker',
		'data-variant': variant,
		className: cn(markerVariants({ variant }), className),
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

export type MarkerIconProps = ComponentProps<'span'>

export function MarkerIcon({ className, ...props }: MarkerIconProps) {
	return (
		<span
			data-slot="marker-icon"
			aria-hidden="true"
			className={cn(
				"size-4 shrink-0 [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	)
}

export type MarkerContentProps = ComponentProps<'span'>

export function MarkerContent({ className, ...props }: MarkerContentProps) {
	return (
		<span
			data-slot="marker-content"
			className={cn(
				'*:[a]:hover:text-foreground min-w-0 wrap-break-word group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center *:[a]:underline *:[a]:underline-offset-3',
				className,
			)}
			{...props}
		/>
	)
}
