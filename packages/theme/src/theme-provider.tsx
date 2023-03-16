import * as React from 'react'
import {Dict, WithCSSVar} from '@nerdfish/utils'

import {colors} from './colors'
import {toCSSVar} from './to-css-var'

const ThemeContext = React.createContext<
  | {
      theme: WithCSSVar<Dict>
    }
  | undefined
>(undefined)

interface ThemeProviderProps {
  children: React.ReactNode
}

function ThemeProvider({children}: ThemeProviderProps) {
  const theme = toCSSVar({
    colors,
  })

  const value = React.useMemo(
    () => ({
      theme,
    }),
    [theme],
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

export {ThemeContext, ThemeProvider, useTheme}
export type {ThemeProviderProps}
