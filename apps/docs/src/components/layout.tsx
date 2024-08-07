'use client'

import { ScrollArea, Toaster } from '@nerdfish/ui'
import * as React from 'react'

import { Footer } from './footer'
import { Navigation } from './navigation'
import { Prose } from './prose'
import { SiteHeader } from './site-header'

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SiteHeader />

			<div className="container mx-auto px-4">
				<div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
					<aside className="border-muted fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
						<ScrollArea className="pr-6 lg:py-10">
							<Navigation />
						</ScrollArea>
					</aside>
					<div className="py-6">
						<Prose as="article">{children}</Prose>
						<Footer />
					</div>
				</div>
			</div>

			<Toaster />
		</>
	)
}
