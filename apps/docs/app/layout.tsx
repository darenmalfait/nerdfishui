import * as React from 'react'
import {Inter as fontSans} from 'next/font/google'

import '@nerdfish/theme/dist/nerdfishui.css'
import '../styles/global.css'

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
        className={`min-h-screen bg-primary font-sans antialiased ${sans.variable}`}
      >
        <AppProviders>
          <main className={`${sans.variable} bg-primary font-sans`}>
            <Layout>{children}</Layout>
          </main>
        </AppProviders>
      </body>
    </html>
  )
}
