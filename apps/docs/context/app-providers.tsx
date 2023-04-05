import * as React from 'react'
import {ThemeProvider as NerdfishThemeProvider} from '@nerdfish/theme'
import {ToastProvider} from '@nerdfish/ui'

import {MobileNavProvider} from './mobile-nav-provider'
import {ThemeProvider} from './theme-provider'

type AppProvidersProps = {
  children: React.ReactNode
}

function AppProviders({children}: AppProvidersProps) {
  return (
    <ThemeProvider>
      <NerdfishThemeProvider>
        <MobileNavProvider>
          <ToastProvider>{children}</ToastProvider>
        </MobileNavProvider>
      </NerdfishThemeProvider>
    </ThemeProvider>
  )
}

export {AppProviders}
