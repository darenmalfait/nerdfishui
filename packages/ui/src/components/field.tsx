import { cx } from '@nerdfish/utils'
import * as React from 'react'

export const Field = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
	return <div ref={ref} className={cx('space-y-sm', className)} {...props} />
})

Field.displayName = 'Field'

export type FieldProps = React.ComponentPropsWithoutRef<typeof Field>
