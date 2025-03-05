import {
	NavigationList,
	NavigationListItem,
	Separator,
	Sidebar,
	SidebarSection,
} from '@nerdfish/ui'
import { type Metadata } from 'next'
import type * as React from 'react'

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
		<div className="space-y-md p-lg pb-xl hidden md:block">
			<div className="space-y-sm">
				<h2 className="text-2xl font-bold">Settings</h2>
				<p className="text-foreground-muted">
					Manage your account settings and set e-mail preferences.
				</p>
			</div>
			<Separator />
			<div className="lg:space-x-lg flex flex-col lg:flex-row lg:space-y-0">
				<aside className="-m-md lg:w-1/5">
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
