import { cn } from '@nerdfish/utils/class'
import * as LabelPrimitive from '@radix-ui/react-label'
import { type ComponentProps } from 'react'

export type LabelProps = ComponentProps<typeof LabelPrimitive.Root>
export function Label({ className, ...props }: LabelProps) {
	return (
		<LabelPrimitive.Root
			data-slot="label"
			className={cn(
				'gap-best-friends flex items-center text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	)
}

export type LabelAsteriskProps = Omit<ComponentProps<'span'>, 'children'>
export function LabelAsterisk({ className, ...props }: LabelAsteriskProps) {
	return (
		<span className={cn('ml-bff text-destructive', className)} {...props}>
			*
		</span>
	)
}
