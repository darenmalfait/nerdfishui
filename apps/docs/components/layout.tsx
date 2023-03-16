import * as React from 'react'
import {ButtonLink, Container, Grid, ScrollArea} from '@nerdfish/ui'

import {Footer} from './footer'
import {GithubLogo} from './icons/github-logo'
import {Navigation} from './navigation'
import {Prose} from './prose'
import {Seo} from './seo'
import {SiteHeader} from './site-header'

export function Layout({
  metaTitle: title,
  children,
  path,
  description,
  pkg,
  image,
}: {
  metaTitle?: string
  path?: string
  children: React.ReactNode
  description?: string
  pkg?: string
  image?: string
}) {
  return (
    <>
      <Seo
        image={image}
        url={path ?? '/'}
        title={`${title ?? pkg ?? ''} | Nerdfishui`}
        description={description ?? ''}
      />
      <SiteHeader />
      <Grid>
        <Container size="full">
          <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
            <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-r-gray-100 dark:border-r-gray-700 md:sticky md:block">
              <ScrollArea className="pr-6 lg:py-10">
                <Navigation />
              </ScrollArea>
            </aside>
            <div className="py-6">
              {pkg ? (
                <div className="mx-auto max-w-5xl">
                  <ButtonLink
                    size="sm"
                    variant="subtle"
                    href={`https://github.com/darenmalfait/nerdfishui/tree/main/packages/${pkg}`}
                    className="mb-12 inline-flex space-x-2 text-gray-900 dark:text-white"
                    external
                  >
                    <GithubLogo className="h-5 w-5" />
                    <span>View on Github</span>
                  </ButtonLink>
                </div>
              ) : null}
              <Prose as="article">{children}</Prose>
              <Footer />
            </div>
          </div>
        </Container>
      </Grid>
    </>
  )
}
