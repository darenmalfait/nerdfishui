import { Toaster } from '@nerdfish/ui'
import { GeistSans } from 'geist/font/sans'
import { Loader2 as Spinner } from 'lucide-react'
import * as React from 'react'
import { AppProviders } from './app-providers'
import { SiteHeader } from './components/site-header'
import { MobileNavProvider } from './mobile-nav-provider'

import '@nerdfish/theme/dist/nerdfishui.css'
import '../styles/global.css'

interface RootLayoutProps {
	children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={`bg-primary min-h-screen font-sans antialiased ${GeistSans.variable}`}
			>
				<React.Suspense
					fallback={
						<div className="bg-popover inset-0 flex h-screen w-screen items-center justify-center">
							<Spinner className="size-6 animate-spin" />
						</div>
					}
				>
					<AppProviders>
						<MobileNavProvider>
							<main className={`${GeistSans.variable} bg-primary font-sans`}>
								<SiteHeader />
								<div className="container mx-auto w-full max-w-screen-2xl px-4 pt-2">
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
