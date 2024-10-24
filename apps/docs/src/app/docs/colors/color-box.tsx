import { cx } from '@nerdfish/utils'
import * as React from 'react'

export function ColorBox({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) {
	return (
		<div>
			<div className={cx('rounded-semi p-sm inline-block w-auto', className)}>
				{children}
			</div>
		</div>
	)
}
