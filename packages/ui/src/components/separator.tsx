'use client'

import { Separator as SeparatorPrimitive } from '@base-ui-components/react'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export type SeparatorProps = React.ComponentProps<typeof SeparatorPrimitive>

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
				'bg-foreground/20 shrink-0',
				orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
				className,
			)}
			{...props}
		/>
	)
}
