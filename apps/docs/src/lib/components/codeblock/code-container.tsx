import { Mockup, MockupWindow } from '@nerdfish/ui'
import React from 'react'

export function CodeContainer({
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<Mockup {...props}>
			<MockupWindow>{children}</MockupWindow>
		</Mockup>
	)
}
