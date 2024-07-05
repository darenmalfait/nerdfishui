import { cx } from '@nerdfish/utils'
import * as React from 'react'

export function Prose({
	as: Component = 'div',
	className,
	...props
}: {
	as?: React.ElementType
	className?: string
	[key: string]: any
}) {
	return (
		<Component
			className={cx(className, 'mx-auto max-w-screen-lg')}
			{...props}
		/>
	)
}
