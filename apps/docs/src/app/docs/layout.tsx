import {
	ScrollArea,
	SidebarDivider,
	Sidebar,
	SidebarSection,
} from '@nerdfish/ui'
import * as React from 'react'
import {
	ComponentNavigation,
	GettingStartedNavigation,
} from '~/app/components/docs-navigation'
import { Footer } from '~/app/components/footer'

interface DocsLayoutProps {
	children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
	return (
		<div className="md:gap-md lg:gap-lg flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)]">
			<Sidebar className="sticky top-[75px] hidden h-[calc(100vh-80px)] overscroll-contain md:block">
				<div className="flex h-full flex-col">
					<SidebarSection className="pr-md px-0">
						<GettingStartedNavigation />
					</SidebarSection>
					<SidebarDivider />
					<ScrollArea>
						<SidebarSection className="pr-md flex-1 px-0">
							<ComponentNavigation />
						</SidebarSection>
					</ScrollArea>
				</div>
			</Sidebar>

			<div className="pt-md mr-auto w-full">
				<article className="max-w-none">{children}</article>
				<Footer />
			</div>
		</div>
	)
}
