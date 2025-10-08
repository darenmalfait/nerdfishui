import { useRender } from '@base-ui-components/react/use-render'
import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { type ReactElement, type ComponentProps } from 'react'
import { Separator } from '../separator/separator'

export const buttonGroupVariants = cva(
	"flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-best-friends",
	{
		variants: {
			orientation: {
				horizontal:
					'[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-of-type)]:rounded-r-none',
				vertical:
					'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-of-type)]:rounded-b-none',
			},
		},
		defaultVariants: {
			orientation: 'horizontal',
		},
	},
)

export interface ButtonGroupProps
	extends useRender.ComponentProps<'div'>,
		VariantProps<typeof buttonGroupVariants> {}
export function ButtonGroup({
	className,
	orientation,
	render = <div />,
	...props
}: ButtonGroupProps): ReactElement {
	return useRender({
		render,
		props: {
			className: cx(buttonGroupVariants({ orientation }), className),
			...props,
		},
	})
}

export type ButtonGroupTextProps = useRender.ComponentProps<'span'>
export function ButtonGroupText({
	className,
	...props
}: ButtonGroupTextProps): ReactElement {
	return useRender({
		render: <span />,
		props: {
			className: cx(
				"bg-background-muted gap-best-friends rounded-base px-friends flex items-center border text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
				className,
			),
			...props,
		},
	})
}

export type ButtonGroupSeparatorProps = ComponentProps<typeof Separator>
export function ButtonGroupSeparator({
	className,
	orientation = 'vertical',
	...props
}: ButtonGroupSeparatorProps) {
	return (
		<Separator
			data-slot="button-group-separator"
			orientation={orientation}
			className={cx(
				'bg-background-muted relative !m-0 self-stretch data-[orientation=vertical]:h-auto',
				className,
			)}
			{...props}
		/>
	)
}
