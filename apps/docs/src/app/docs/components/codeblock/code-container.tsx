import { Mockup } from '@nerdfish/ui'
import React from 'react'

export function CodeContainer({
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<Mockup.Root {...props}>
			<Mockup.Window>{children}</Mockup.Window>
		</Mockup.Root>
	)
}
