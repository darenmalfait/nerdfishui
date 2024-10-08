import {
	NavigationListItem,
	NavigationList,
	Separator,
	Sidebar,
	SidebarSection,
} from '@nerdfish/ui'
import { type Metadata } from 'next'
import * as React from 'react'

export const metadata: Metadata = {
	title: 'Forms',
	description: 'Advanced form example using react-hook-form and Zod.',
}

const sidebarNavItems = [
	{
		title: 'Profile',
		href: '/examples/forms',
	},
]

interface SettingsLayoutProps {
	children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
	return (
		<div className="hidden space-y-6 p-10 pb-16 md:block">
			<div className="space-y-0.5">
				<h2 className="text-2xl font-bold tracking-tight">Settings</h2>
				<p className="text-muted-foreground">
					Manage your account settings and set e-mail preferences.
				</p>
			</div>
			<Separator />
			<div className="flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0">
				<aside className="-m-4 lg:w-1/5">
					<Sidebar className="p-0">
						<SidebarSection>
							<NavigationList>
								{sidebarNavItems.map((item) => (
									<NavigationListItem
										key={item.href}
										title={item.title}
										href={item.href}
									/>
								))}
							</NavigationList>
						</SidebarSection>
					</Sidebar>
				</aside>
				<div className="flex-1 lg:max-w-2xl">{children}</div>
			</div>
		</div>
	)
}
