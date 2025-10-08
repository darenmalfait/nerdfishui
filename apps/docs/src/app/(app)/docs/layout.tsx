import { SidebarProvider } from '@nerdfish/react/sidebar'
import type * as React from 'react'
import { DocsSidebar } from '../components/docs-sidebar'

interface DocsLayoutProps {
	children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
	return (
		<div className="flex flex-1 flex-col">
			<SidebarProvider className="min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px]">
				<DocsSidebar />
				<div className="container mx-auto h-full w-full">
					<div className="mx-auto max-w-4xl">{children}</div>
				</div>
			</SidebarProvider>
		</div>
	)
}
