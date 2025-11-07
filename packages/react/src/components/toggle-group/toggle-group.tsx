'use client'

import { Toggle as TogglePrimitive } from '@base-ui-components/react/toggle'
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui-components/react/toggle-group'
import { cx, type VariantProps } from '@nerdfish/utils'
import {
	type ComponentProps,
	createContext,
	type CSSProperties,
	useContext,
} from 'react'
import { toggleVariants } from '../toggle/toggle'

const ToggleGroupContext = createContext<
	VariantProps<typeof toggleVariants> & {
		spacing?: number
	}
>({
	size: 'default',
	variant: 'default',
	spacing: 0,
})

export interface ToggleGroupProps
	extends ComponentProps<typeof ToggleGroupPrimitive>,
		VariantProps<typeof toggleVariants> {
	spacing?: number
}
export function ToggleGroup({
	className,
	variant,
	size,
	children,
	spacing,
	style,
	...props
}: ToggleGroupProps) {
	return (
		<ToggleGroupPrimitive
			data-slot="toggle-group"
			data-variant={variant}
			data-size={size}
			data-spacing={spacing}
			style={{ ...style, '--gap': spacing } as CSSProperties}
			className={cx(
				'group/toggle-group flex items-center gap-1 data-[variant=outline]:shadow-xs',
				'gap-[--spacing(var(--gap))]',
				className,
			)}
			{...props}
		>
			<ToggleGroupContext.Provider value={{ variant, size, spacing }}>
				{children}
			</ToggleGroupContext.Provider>
		</ToggleGroupPrimitive>
	)
}

export interface ToggleGroupItemProps
	extends ComponentProps<typeof TogglePrimitive>,
		VariantProps<typeof toggleVariants> {
	value: string
}
export function ToggleGroupItem({
	className,
	children,
	variant,
	size,
	value,
	...props
}: ToggleGroupItemProps) {
	const context = useContext(ToggleGroupContext)

	return (
		<TogglePrimitive
			data-slot="toggle-group-item"
			data-variant={context.variant ?? variant}
			data-size={context.size ?? size}
			data-spacing={context.spacing ?? 0}
			value={value}
			className={cx(
				toggleVariants({
					variant: context.variant ?? variant,
					size: context.size ?? size,
				}),
				'px-best-friends w-auto min-w-0 shrink-0 focus:z-10 focus-visible:z-10 data-[spacing=0]:rounded-none',
				'data-[spacing=0]:first:rounded-l-compact! data-[spacing=0]:last:rounded-r-compact! data-[spacing=0]:shadow-none data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l',
				className,
			)}
			{...props}
		>
			{children}
		</TogglePrimitive>
	)
}
