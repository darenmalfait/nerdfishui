'use client'

import { Badge, NavigationList, ScrollArea, Sidebar } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import { useSelectedLayoutSegment } from 'next/navigation'
import * as React from 'react'
import { docs } from '~/config/docs'
import { stripPreSlash } from '~/lib/utils/string'

export const ComponentNavigation = React.forwardRef<
	React.ElementRef<typeof Sidebar.Root>,
	React.ComponentPropsWithoutRef<typeof Sidebar.Root>
>(function ComponentNavigation({ className, ...props }, ref) {
	const segment = useSelectedLayoutSegment() ?? '/'

	const globalItems = docs.navigation.find(
		(item) => item.title === 'Getting Started',
	)
	const others = docs.navigation.filter(
		(item) => item.title !== 'Getting Started',
	)

	return (
		<Sidebar.Root
			{...props}
			className={cx(
				'sticky top-[75px] h-[calc(100vh-80px)] overscroll-contain',
				className,
			)}
			ref={ref}
		>
			<div className="flex h-full flex-col">
				<Sidebar.Section className="px-0 pr-4">
					<NavigationList.Root>
						<NavigationList.Title title="Getting Started" />
						{globalItems?.links.map(({ isNew, title, ...item }) => (
							<NavigationList.Item
								key={title}
								{...item}
								title={
									<span className="flex justify-between gap-2">
										{title}
										{isNew ? <Badge variant="info">New</Badge> : null}
									</span>
								}
							/>
						))}
					</NavigationList.Root>
				</Sidebar.Section>
				<Sidebar.Divider />
				<ScrollArea>
					<Sidebar.Section className="flex-1 px-0 pr-4">
						<NavigationList.Root>
							<NavigationList.Title title="Components" />
							{others.map((item) => (
								<NavigationList.Section key={item.title}>
									<NavigationList.Title
										key={item.title}
										className="text-base font-bold"
										{...item}
									/>
									{item.links.map(({ isNew, title, ...link }) => (
										<NavigationList.Item
											{...link}
											key={title}
											title={
												<span className="flex justify-between gap-2">
													{title}
													{isNew ? <Badge variant="info">New</Badge> : null}
												</span>
											}
											active={segment === stripPreSlash(link.href)}
										/>
									))}
								</NavigationList.Section>
							))}
						</NavigationList.Root>
					</Sidebar.Section>
				</ScrollArea>
			</div>
		</Sidebar.Root>
	)
})

ComponentNavigation.displayName = 'ComponentNavigation'
