'use client'

import { Badge, NavigationList } from '@nerdfish/ui'
import { useSelectedLayoutSegment } from 'next/navigation'
import * as React from 'react'
import { docs } from '~/config/docs'
import { stripPreSlash } from '~/lib/utils/string'

export const ComponentNavigation = React.forwardRef<
	React.ElementRef<typeof NavigationList.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationList.Root>
>(function ComponentNavigation({ ...props }, ref) {
	const segment = useSelectedLayoutSegment() ?? '/'

	const globalItems = docs.navigation.find(
		(item) => item.title !== 'Getting Started',
	)

	return (
		<NavigationList.Root {...props} ref={ref}>
			<NavigationList.Title title="Components" />
			{globalItems?.links.map(({ isNew, title, ...item }) => (
				<NavigationList.Item
					key={title}
					{...item}
					active={segment === stripPreSlash(item.href)}
					title={
						<span className="flex justify-between gap-2">
							{title}
							{isNew ? <Badge variant="info">New</Badge> : null}
						</span>
					}
				/>
			))}
		</NavigationList.Root>
	)
})

ComponentNavigation.displayName = 'ComponentNavigation'
