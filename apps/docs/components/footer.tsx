import * as React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {ButtonLink} from '@nerdfish/ui'
import {ArrowLeft, ArrowRight} from 'lucide-react'

import {GithubLogo} from './icons/github-logo'
import {navigation} from './navigation'

function PageLink({
  label,
  page,
  previous = false,
}: {
  label: string
  page: {href: string; title: string}
  previous?: boolean
}) {
  return (
    <ButtonLink
      href={page.href}
      aria-label={`${label}: ${page.title}`}
      className="flex space-x-2"
    >
      {previous ? <ArrowLeft className="h-3 w-3" /> : null}
      <span>{page.title}</span>
      {!previous ? <ArrowRight className="h-3 w-3" /> : null}
    </ButtonLink>
  )
}

function PageNavigation() {
  const router = useRouter()
  const allPages = navigation.flatMap(group => group.links)
  const currentPageIndex = allPages.findIndex(
    page => page.href === router.pathname,
  )

  if (currentPageIndex === -1) {
    return null
  }

  const previousPage =
    currentPageIndex > 0 ? allPages[currentPageIndex - 1] : undefined
  const nextPage =
    currentPageIndex + 1 < allPages.length
      ? allPages[currentPageIndex + 1]
      : undefined

  if (!previousPage && !nextPage) {
    return null
  }

  return (
    <div className="flex">
      {previousPage ? (
        <div className="flex flex-col items-start gap-3">
          <PageLink label="Previous" page={previousPage} previous />
        </div>
      ) : null}
      {nextPage ? (
        <div className="ml-auto flex flex-col items-end gap-3">
          <PageLink label="Next" page={nextPage} />
        </div>
      ) : null}
    </div>
  )
}

function TwitterIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z"
      />
    </svg>
  )
}

function SocialLink({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: React.ComponentType<JSX.IntrinsicElements['svg']>
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="group">
      <span className="sr-only">{children}</span>
      <Icon className="h-5 w-5 text-secondary" />
    </Link>
  )
}

function SmallPrint() {
  return (
    <div className="border-gray-900/5 flex flex-col items-center justify-between gap-5 border-t pt-8 dark:border-white/5 sm:flex-row">
      <p className="text-xs text-secondary">
        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
      </p>
      <div className="flex gap-4 text-secondary">
        <SocialLink href="https://twitter.com/darenmalfait" icon={TwitterIcon}>
          Follow us on Twitter
        </SocialLink>
        <SocialLink
          href="https://github.com/darenmalfait/nerdfishui"
          icon={GithubLogo}
        >
          Follow us on GitHub
        </SocialLink>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl space-y-10 pb-4 pt-8 lg:max-w-5xl">
      <PageNavigation />
      <SmallPrint />
    </footer>
  )
}
