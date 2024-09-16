'use client'

import {
	Badge,
	NavigationList,
	NavigationListTitle,
	NavigationListItem,
	NavigationListSection,
} from '@nerdfish/ui'
import { useSelectedLayoutSegment } from 'next/navigation'
import * as React from 'react'
import { docs } from '~/config/docs'
import { stripPreSlash } from '~/lib/utils/string'

export const GettingStartedNavigation = React.forwardRef<
	React.ElementRef<typeof NavigationList>,
	React.ComponentPropsWithoutRef<typeof NavigationList>
>(function GettingStartedNavigation({ ...props }, ref) {
	const segment = useSelectedLayoutSegment() ?? '/'

	const globalItems = docs.navigation.find(
		(item) => item.title === 'Getting Started',
	)

	return (
		<NavigationList {...props} ref={ref}>
			<NavigationListTitle title="Getting Started" />
			{globalItems?.links.map(({ isNew, title, ...item }) => (
				<NavigationListItem
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
		</NavigationList>
	)
})

GettingStartedNavigation.displayName = 'GettingStartedNavigation'

export const ComponentNavigation = React.forwardRef<
	React.ElementRef<typeof NavigationList>,
	React.ComponentPropsWithoutRef<typeof NavigationList>
>(function ComponentNavigation({ ...props }, ref) {
	const segment = useSelectedLayoutSegment() ?? '/'

	const sections = docs.navigation.filter(
		(item) => item.title !== 'Getting Started',
	)

	return (
		<NavigationList {...props} ref={ref}>
			<NavigationListTitle title="Components" />
			{sections.map((item) => (
				<NavigationListSection key={item.title}>
					<NavigationListTitle
						key={item.title}
						className="text-base font-bold"
						{...item}
					/>
					{item.links.map(({ isNew, isDeprecated, title, ...link }) => (
						<NavigationListItem
							{...link}
							key={title}
							title={
								<span className="flex justify-between gap-2">
									{title}
									{isNew ? <Badge variant="info">New</Badge> : null}
									{isDeprecated ? (
										<Badge variant="outline">Deprecated</Badge>
									) : null}
								</span>
							}
							active={segment === stripPreSlash(link.href)}
						/>
					))}
				</NavigationListSection>
			))}
		</NavigationList>
	)
})

ComponentNavigation.displayName = 'ComponentNavigation'
