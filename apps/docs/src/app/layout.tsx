import './styles.css'

import { Spinner } from '@nerdfish/react/spinner'
import { Toaster } from '@nerdfish/react/toast'
import { cx } from '@nerdfish/utils'
import { GeistSans } from 'geist/font/sans'
import * as React from 'react'
import { AppProviders } from './app-providers'

interface RootLayoutProps {
	children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={cx(
					`bg-background min-h-screen font-sans antialiased ${GeistSans.variable}`,
					'[--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]',
				)}
			>
				<div className="isolate">
					<React.Suspense
						fallback={
							<div className="bg-background inset-0 flex h-screen w-screen items-center justify-center backdrop-blur-sm">
								<Spinner />
							</div>
						}
					>
						<AppProviders>{children}</AppProviders>
					</React.Suspense>
					<Toaster />
				</div>
			</body>
		</html>
	)
}
