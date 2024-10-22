'use client'

import {
	NavigationList,
	NavigationListTitle,
	NavigationListItem,
	NavigationListSection,
} from '@nerdfish/ui'
import { docs } from 'docs.config'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { StatusBadge } from './status-badge'
import { stripPreSlash } from '~/lib/utils/string'

export const GettingStartedNavigation = React.forwardRef<
	React.ElementRef<typeof NavigationList>,
	React.ComponentPropsWithoutRef<typeof NavigationList>
>(function GettingStartedNavigation({ ...props }, ref) {
	const pathname = usePathname()

	const globalItems = docs.navigation.find(
		(item) => item.title === 'Getting Started',
	)

	return (
		<NavigationList {...props} ref={ref}>
			<NavigationListTitle title="Getting Started" />
			{globalItems?.links.map(({ status, title, ...item }) => (
				<NavigationListItem
					key={title}
					{...item}
					active={stripPreSlash(pathname) === stripPreSlash(item.href)}
					title={
						<span className="gap-sm flex justify-between">
							{title}
							<StatusBadge status={status} />
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
	const pathname = usePathname()

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
					{item.links.map(({ status, title, ...link }) => {
						return (
							<NavigationListItem
								{...link}
								key={title}
								title={
									<span className="gap-sm flex">
										{title}
										<StatusBadge status={status} />
									</span>
								}
								active={stripPreSlash(pathname) === stripPreSlash(link.href)}
							/>
						)
					})}
				</NavigationListSection>
			))}
		</NavigationList>
	)
})

ComponentNavigation.displayName = 'ComponentNavigation'
