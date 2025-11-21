import { cn } from '@nerdfish/utils/class'
import { type ComponentProps } from 'react'

export interface AspectRatioProps extends ComponentProps<'div'> {
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
			className={cn('relative w-full', className)}
			{...props}
		>
			<div className="absolute inset-0 size-full">{children}</div>
		</div>
	)
}
