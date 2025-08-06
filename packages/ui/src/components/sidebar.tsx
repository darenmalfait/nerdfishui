import { useRender } from '@base-ui-components/react/use-render'
import { type VariantProps, cva, cx } from '@nerdfish/utils'
import * as React from 'react'

export const sidebarVariants = cva(
	'flex flex-col border-foreground/20 border-r',
	{
		variants: {
			variant: {
				default: 'w-full max-w-64 py-3 lg:max-w-72',
				compact: 'w-full max-w-16 py-3',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export const sidebarSectionVariants: typeof sidebarVariants = cva(
	'flex flex-col gap-sm px-md',
	{
		variants: {
			variant: {
				default: '',
				compact: '',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export interface SidebarProps
	extends useRender.ComponentProps<'nav'>,
		VariantProps<typeof sidebarVariants> {}

export function Sidebar({
	className,
	render = <nav />,
	variant,
	...props
}: SidebarProps) {
	return useRender({
		render,
		props: {
			'data-slot': 'sidebar',
			className: sidebarVariants({
				variant,
				className,
			}),
			...props,
		},
	})
}

export interface SidebarSectionProps
	extends useRender.ComponentProps<'div'>,
		VariantProps<typeof sidebarSectionVariants> {}

export function SidebarSection({
	className,
	render = <nav />,
	variant,
	...props
}: SidebarProps) {
	return useRender({
		render,
		props: {
			'data-slot': 'sidebar',
			className: sidebarSectionVariants({
				variant,
				className,
			}),
			...props,
		},
	})
}

export type SidebarDividerProps = React.ComponentProps<'div'>

export function SidebarDivider({ className, ...props }: SidebarDividerProps) {
	return <div className={cx('bg-foreground/20 h-px w-full')} {...props} />
}
