import { cx } from '@nerdfish/utils'
import * as React from 'react'

export type FieldProps = React.ComponentProps<'div'>

export function Field({ className, ...props }: FieldProps) {
	return <div className={cx('space-y-sm', className)} {...props} />
}
