import { cx } from '@nerdfish/utils'
import * as React from 'react'

export interface AspectRatioProps extends React.ComponentProps<'div'> {
	ratio?: number
}

export function AspectRatio({
	children,
	className,
	ratio = 1,
	style,
	...props
}: AspectRatioProps) {
	return (
		<div
			data-slot="aspect-ratio"
			style={{
				...style,
				paddingBottom: `${(1 / ratio) * 100}%`,
			}}
			className={cx('relative w-full', className)}
			{...props}
		>
			<div className="absolute inset-0 size-full">{children}</div>
		</div>
	)
}
