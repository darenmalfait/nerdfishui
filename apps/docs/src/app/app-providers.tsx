'use client'

import { type ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'

type AppProvidersProps = {
	children: ReactNode
}

function AppProviders({ children }: AppProvidersProps) {
	return <ThemeProvider>{children}</ThemeProvider>
}

export { AppProviders }
