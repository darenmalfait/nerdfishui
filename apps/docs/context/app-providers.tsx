import * as React from 'react'
import {MDXProvider} from '@mdx-js/react'
import {ThemeProvider as NerdfishThemeProvider} from '@nerdfish/theme'
import {ToastProvider} from '@nerdfish/ui'
import {ExtractProps} from '@nerdfish/utils'

import * as mdxComponents from '../components/mdx'
import {MobileNavProvider} from './mobile-nav-provider'
import {SectionProvider} from './section-provider'
import {ThemeProvider} from './theme-provider'

type AppProvidersProps = ExtractProps<typeof SectionProvider> & {
  children: React.ReactNode
}

function AppProviders({children, sections}: AppProvidersProps) {
  return (
    <ThemeProvider>
      <NerdfishThemeProvider>
        <MobileNavProvider>
          <ToastProvider>
            <MDXProvider components={mdxComponents as any}>
              <SectionProvider sections={sections}>{children}</SectionProvider>
            </MDXProvider>
          </ToastProvider>
        </MobileNavProvider>
      </NerdfishThemeProvider>
    </ThemeProvider>
  )
}

export {AppProviders}
