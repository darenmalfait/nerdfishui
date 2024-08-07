'use client'

import { ThemeProvider as NerdfishThemeProvider } from '@nerdfish/theme'
import * as React from 'react'

import { MobileNavProvider } from './mobile-nav-provider'
import { ThemeProvider } from './theme-provider'

type AppProvidersProps = {
	children: React.ReactNode
}

function AppProviders({ children }: AppProvidersProps) {
	return (
		<ThemeProvider>
			<NerdfishThemeProvider>
				<MobileNavProvider>{children}</MobileNavProvider>
			</NerdfishThemeProvider>
		</ThemeProvider>
	)
}

export { AppProviders }
