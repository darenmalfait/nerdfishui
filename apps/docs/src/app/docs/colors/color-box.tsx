import { cx } from '@nerdfish/utils'
import * as React from 'react'

export function ColorBox({
	className,
	value,
}: {
	className?: string
	value: string
}) {
	return (
		<div>
			<div className={cx('rounded-semi p-sm inline-block w-auto', className)}>
				<span className="text-current">{value}</span>
			</div>
		</div>
	)
}
