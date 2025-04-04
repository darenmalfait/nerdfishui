import { LoadingAnimation, Toaster } from '@nerdfish/ui'
import { GeistSans } from 'geist/font/sans'
import * as React from 'react'
import { AppProviders } from './app-providers'
import { SiteHeader } from './components/site-header'
import { MobileNavProvider } from './mobile-nav-provider'

import '@nerdfish/theme/dist/nerdfishui.css'
import '@repo/tailwind-config/styles/global.css'

interface RootLayoutProps {
	children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={`bg-background min-h-screen font-sans antialiased ${GeistSans.variable}`}
			>
				<React.Suspense
					fallback={
						<div className="bg-popover inset-0 flex h-screen w-screen items-center justify-center">
							<LoadingAnimation />
						</div>
					}
				>
					<AppProviders>
						<MobileNavProvider>
							<main className={`${GeistSans.variable} bg-background font-sans`}>
								<SiteHeader />
								<div className="px-md pt-sm container mx-auto w-full max-w-screen-2xl">
									{children}
								</div>
							</main>
							<Toaster />
						</MobileNavProvider>
					</AppProviders>
				</React.Suspense>
			</body>
		</html>
	)
}
