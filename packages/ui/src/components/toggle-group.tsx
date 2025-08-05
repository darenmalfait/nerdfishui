'use client'

import { Toggle as TogglePrimitive } from '@base-ui-components/react/toggle'
import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui-components/react/toggle-group'
import { type VariantProps, cx } from '@nerdfish/utils'
import * as React from 'react'
import { toggleVariants } from './toggle'

const ToggleGroupContext = React.createContext<
	VariantProps<typeof toggleVariants>
>({
	size: 'default',
	variant: 'default',
})

export interface ToggleGroupProps
	extends React.ComponentProps<typeof ToggleGroupPrimitive>,
		VariantProps<typeof toggleVariants> {}

export function ToggleGroup({
	className,
	variant,
	size,
	children,
	...props
}: ToggleGroupProps) {
	return (
		<ToggleGroupPrimitive
			data-slot="toggle-group"
			data-variant={variant}
			data-size={size}
			className={cx(
				'group/toggle-group gap-sm flex items-center justify-center',
				className,
			)}
			{...props}
		>
			<ToggleGroupContext value={{ variant, size }}>
				{children}
			</ToggleGroupContext>
		</ToggleGroupPrimitive>
	)
}

export interface ToggleGroupItemProps
	extends React.ComponentProps<typeof TogglePrimitive>,
		VariantProps<typeof toggleVariants> {}

export function ToggleGroupItem({
	className,
	children,
	variant,
	size,
	...props
}: ToggleGroupItemProps) {
	const context = React.useContext(ToggleGroupContext)

	return (
		<TogglePrimitive
			data-slot="toggle-group-item"
			data-variant={context.variant ?? variant}
			data-size={context.size ?? size}
			className={cx(
				toggleVariants({
					variant: context.variant ?? variant,
					size: context.size ?? size,
				}),
				className,
			)}
			render={(buttonProps) => (
				<button type="button" {...buttonProps}>
					{children}
				</button>
			)}
			{...props}
		/>
	)
}
