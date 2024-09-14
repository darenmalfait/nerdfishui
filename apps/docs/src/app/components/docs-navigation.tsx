'use client'

import { Badge, NavigationList } from '@nerdfish/ui'
import { useSelectedLayoutSegment } from 'next/navigation'
import * as React from 'react'
import { docs } from '~/config/docs'
import { stripPreSlash } from '~/lib/utils/string'

export const GettingStartedNavigation = React.forwardRef<
	React.ElementRef<typeof NavigationList.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationList.Root>
>(function GettingStartedNavigation({ ...props }, ref) {
	const segment = useSelectedLayoutSegment() ?? '/'

	const globalItems = docs.navigation.find(
		(item) => item.title === 'Getting Started',
	)

	return (
		<NavigationList.Root {...props} ref={ref}>
			<NavigationList.Title title="Getting Started" />
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

GettingStartedNavigation.displayName = 'GettingStartedNavigation'

export const ComponentNavigation = React.forwardRef<
	React.ElementRef<typeof NavigationList.Root>,
	React.ComponentPropsWithoutRef<typeof NavigationList.Root>
>(function ComponentNavigation({ ...props }, ref) {
	const segment = useSelectedLayoutSegment() ?? '/'

	const sections = docs.navigation.filter(
		(item) => item.title !== 'Getting Started',
	)

	return (
		<NavigationList.Root {...props} ref={ref}>
			<NavigationList.Title title="Components" />
			{sections.map((item) => (
				<NavigationList.Section key={item.title}>
					<NavigationList.Title
						key={item.title}
						className="text-base font-bold"
						{...item}
					/>
					{item.links.map(({ isNew, isDeprecated, title, ...link }) => (
						<NavigationList.Item
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
				</NavigationList.Section>
			))}
		</NavigationList.Root>
	)
})

ComponentNavigation.displayName = 'ComponentNavigation'
