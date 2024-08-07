import { GeistSans } from 'geist/font/sans'
import * as React from 'react'

import '@nerdfish/theme/dist/nerdfishui.css'
import '../styles/global.css'

import { Layout } from '../components/layout'
import { AppProviders } from '../context/app-providers'

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
					<main className={`${GeistSans.variable} bg-primary font-sans`}>
						<Layout>{children}</Layout>
					</main>
				</AppProviders>
			</body>
		</html>
	)
}
