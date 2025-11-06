import { type ReactNode } from 'react'
import { SiteFooter } from './components/site-footer'
import { SiteHeader } from './components/site-header'

export default function AppLayout({ children }: { children: ReactNode }) {
	return (
		<div className="bg-background relative flex min-h-svh flex-col">
			<SiteHeader />
			<main className="flex flex-1 flex-col">{children}</main>
			<SiteFooter />
		</div>
	)
}
