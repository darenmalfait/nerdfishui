import * as React from 'react'
import {Container, Grid} from '@nerdfish/ui'

import {MainNav} from './main-nav'
import {ThemeToggle} from './theme-toggle'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-gray-200 bg-secondary dark:border-b-gray-700 dark:bg-gray-900">
      <Grid>
        <Container
          size="full"
          className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0"
        >
          <MainNav />
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <ThemeToggle />
            </nav>
          </div>
        </Container>
      </Grid>
    </header>
  )
}
