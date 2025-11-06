import { Separator as SeparatorPrimitive } from '@base-ui-components/react/separator'
import { cx } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

export type SeparatorProps = ComponentProps<typeof SeparatorPrimitive>

export function Separator({
	className,
	orientation = 'horizontal',
	...props
}: SeparatorProps) {
	return (
		<SeparatorPrimitive
			data-slot="separator"
			orientation={orientation}
			className={cx(
				'bg-border shrink-0',
				'data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
				className,
			)}
			{...props}
		/>
	)
}
