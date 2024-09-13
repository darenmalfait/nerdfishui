import { Toaster } from '@nerdfish/ui'
import { GeistSans } from 'geist/font/sans'
import * as React from 'react'
import { AppProviders } from './app-providers'
import { SiteHeader } from './components/site-header'
import { MobileNavProvider } from './mobile-nav-provider'

import '@nerdfish/theme/dist/nerdfishui.css'
import '../styles/global.css'

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={`bg-primary min-h-screen font-sans antialiased ${GeistSans.variable}`}
			>
				<AppProviders>
					<MobileNavProvider>
						<main className={`${GeistSans.variable} bg-primary font-sans`}>
							<SiteHeader />
							<div className="container mx-auto w-full max-w-screen-2xl px-4">
								{children}
							</div>
						</main>
						<Toaster />
					</MobileNavProvider>
				</AppProviders>
			</body>
		</html>
	)
}
