import {
	ScrollArea,
	SidebarDivider,
	SidebarRoot,
	SidebarSection,
} from '@nerdfish/ui'
import * as React from 'react'
import {
	ComponentNavigation,
	GettingStartedNavigation,
} from '~/app/components/docs-navigation'
import { Footer } from '~/app/components/footer'
import { Prose } from '~/app/components/prose'

interface DocsLayoutProps {
	children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
	return (
		<div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
			<SidebarRoot className="sticky top-[75px] hidden h-[calc(100vh-80px)] overscroll-contain md:block">
				<div className="flex h-full flex-col">
					<SidebarSection className="px-0 pr-4">
						<GettingStartedNavigation />
					</SidebarSection>
					<SidebarDivider />
					<ScrollArea>
						<SidebarSection className="flex-1 px-0 pr-4">
							<ComponentNavigation />
						</SidebarSection>
					</ScrollArea>
				</div>
			</SidebarRoot>

			<div className="mr-auto w-full">
				<Prose as="article" className="max-w-none">
					{children}
				</Prose>
				<Footer />
			</div>
		</div>
	)
}
