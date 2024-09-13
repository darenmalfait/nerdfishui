'use client'

import { Toaster } from '@nerdfish/ui'
import * as React from 'react'

import { ComponentNavigation } from './component-navigation'
import { Footer } from './footer'
import { Prose } from './prose'
import { SiteHeader } from './site-header'

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SiteHeader />

			<div className="container mx-auto w-full max-w-screen-2xl px-4">
				<div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
					<ComponentNavigation className="hidden md:block" />
					<div className="mr-auto w-full">
						<Prose as="article" className="max-w-none">
							{children}
						</Prose>
						<Footer />
					</div>
				</div>
			</div>

			<Toaster />
		</>
	)
}
