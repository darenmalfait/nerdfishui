import { cx } from '@nerdfish/utils'
import { Loader2Icon } from 'lucide-react'
import { type ComponentProps } from 'react'

export type SpinnerProps = ComponentProps<'svg'>
export function Spinner({ className, ...props }: SpinnerProps) {
	return (
		<Loader2Icon
			role="status"
			aria-label="Loading"
			className={cx('size-4 animate-spin', className)}
			{...props}
		/>
	)
}
