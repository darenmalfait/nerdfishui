'use client'

import { NavigationList } from '@nerdfish/ui'
import { useSelectedLayoutSegment } from 'next/navigation'
import * as React from 'react'
import { docs } from '~/config/docs'
import { stripPreSlash } from '~/lib/utils/string'

export function Navigation(props: React.ComponentPropsWithoutRef<'nav'>) {
	const segment = useSelectedLayoutSegment() ?? '/'

	return (
		<nav {...props}>
			<NavigationList>
				{docs.navigation.map((item) => (
					<NavigationList.Section key={item.title}>
						<NavigationList.Title
							key={item.title}
							{...item}
							className="hover:!bg-transparent"
						/>
						{docs.navigation
							.find((group) => group.title === item.title)
							?.links.map((link) => {
								return (
									<NavigationList.Item
										key={link.title}
										active={segment === stripPreSlash(link.href)}
										{...link}
									/>
								)
							})}
					</NavigationList.Section>
				))}
			</NavigationList>
		</nav>
	)
}
