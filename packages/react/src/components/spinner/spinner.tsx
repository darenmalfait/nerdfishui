import { cn } from '@nerdfish/utils/class'
import { Loader2Icon } from 'lucide-react'
import { type ComponentProps } from 'react'

export type SpinnerProps = ComponentProps<'svg'>
export function Spinner({ className, ...props }: SpinnerProps) {
	return (
		<Loader2Icon
			role="status"
			aria-label="Loading"
			className={cn('size-4 animate-spin', className)}
			{...props}
		/>
	)
}
