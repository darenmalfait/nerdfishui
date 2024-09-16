'use client'

import {
	Badge,
	NavigationList,
	NavigationListItem,
	NavigationListTitle,
} from '@nerdfish/ui'
import { useSelectedLayoutSegment } from 'next/navigation'
import * as React from 'react'
import { docs } from '~/config/docs'
import { stripPreSlash } from '~/lib/utils/string'

export const ComponentNavigation = React.forwardRef<
	React.ElementRef<typeof NavigationList>,
	React.ComponentPropsWithoutRef<typeof NavigationList>
>(function ComponentNavigation({ ...props }, ref) {
	const segment = useSelectedLayoutSegment() ?? '/'

	const globalItems = docs.navigation.find(
		(item) => item.title !== 'Getting Started',
	)

	return (
		<NavigationList {...props} ref={ref}>
			<NavigationListTitle title="Components" />
			{globalItems?.links.map(({ isNew, isDeprecated, title, ...item }) => (
				<NavigationListItem
					key={title}
					{...item}
					active={segment === stripPreSlash(item.href)}
					title={
						<span className="flex justify-between gap-2">
							{title}
							{isNew ? <Badge variant="info">New</Badge> : null}
							{isDeprecated ? (
								<Badge variant="outline">Deprecated</Badge>
							) : null}
						</span>
					}
				/>
			))}
		</NavigationList>
	)
})

ComponentNavigation.displayName = 'ComponentNavigation'
