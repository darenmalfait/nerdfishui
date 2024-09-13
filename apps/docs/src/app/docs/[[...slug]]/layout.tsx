import * as React from 'react'
import { ComponentNavigation } from '~/app/components/component-navigation'
import { Footer } from '~/app/components/footer'
import { Prose } from '~/app/components/prose'

interface DocsLayoutProps {
	children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
	return (
		<div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
			<ComponentNavigation className="hidden md:block" />
			<div className="mr-auto w-full">
				<Prose as="article" className="max-w-none">
					{children}
				</Prose>
				<Footer />
			</div>
		</div>
	)
}
