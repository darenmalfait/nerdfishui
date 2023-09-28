import * as React from 'react'
import {Inter as fontSans} from '@next/font/google'

import '@nerdfish/theme/dist/nerdfishui.css'
import 'tailwindcss/tailwind.css'

import {cx} from '@nerdfish/utils'

import {Layout} from '../components/layout'
import {AppProviders} from '../context/app-providers'

const sans = fontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cx(
          'min-h-screen bg-white font-sans text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-50',
          sans.variable,
        )}
      >
        <AppProviders>
          <main className={`${sans.variable} font-sans bg-secondary`}>
            <Layout>{children}</Layout>
          </main>
        </AppProviders>
      </body>
    </html>
  )
}
