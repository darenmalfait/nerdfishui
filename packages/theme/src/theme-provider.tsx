import { type Dict, type WithCSSVar } from '@nerdfish/utils'
import * as React from 'react'

import { dark as darkTheme, light as lightTheme } from './colors'
import { toCSSVar } from './to-css-var'

const ThemeContext = React.createContext<
	| {
			theme: {
				light: WithCSSVar<typeof lightTheme>
				dark: WithCSSVar<typeof darkTheme>
			}
	  }
	| undefined
>(undefined)

interface ThemeProviderProps {
	children: React.ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
	const light = toCSSVar({
		colors: lightTheme,
	})
	const dark = toCSSVar({
		colors: darkTheme,
	})

	const value = React.useMemo(
		() => ({
			theme: {
				light,
				dark,
			},
		}),
		[dark, light],
	)

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme<T extends Record<string, unknown> = Dict>() {
	const theme = React.useContext(
		ThemeContext as unknown as React.Context<T | undefined>,
	)
	if (!theme) {
		throw Error(
			'useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ThemeProvider />`',
		)
	}

	return theme as WithCSSVar<T>
}

export { ThemeContext, ThemeProvider, useTheme }
export type { ThemeProviderProps }
