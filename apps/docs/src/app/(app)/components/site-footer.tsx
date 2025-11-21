'use client'

import { cn } from '@nerdfish/utils/class'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type * as React from 'react'
import { Icons } from '@/lib/components/icons'
import { GithubLogo } from '@/lib/components/icons/github-logo'
import { stripTrailingSlash } from '@/lib/utils/string'
import { docsNav } from '@/nav'

function PageLink({
	label,
	page,
	previous = false,
}: {
	label: string
	page: { href: string; title: string }
	previous?: boolean
}) {
	return (
		<Link
			className={cn('focus-visible:outline-active group w-full outline-none', {
				'text-right': !previous,
			})}
			href={page.href}
			aria-label={`${label}: ${page.title}`}
		>
			{previous ? (
				<>
					<span className="text-sm">Previous</span>
					<span className="gap-best-friends text-accent flex items-center text-lg font-bold">
						<Icons.ChevronLeft className="size-3" />
						{page.title}
					</span>
				</>
			) : (
				<>
					<span className="text-sm">Next</span>
					<span className="gap-best-friends text-accent flex items-center justify-end text-right text-lg font-bold">
						{page.title}
						<Icons.ChevronRight className="size-3" />
					</span>
				</>
			)}
		</Link>
	)
}

function PageNavigation() {
	const pathname = usePathname()

	const currentPagePath = stripTrailingSlash(pathname)

	const allPages = docsNav.flatMap((group) => group.links)
	const currentPageIndex = allPages.findIndex(
		(page) => page.href === currentPagePath,
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
				<div className="gap-friends flex w-full flex-col items-start">
					<PageLink label="Previous" page={previousPage} previous />
				</div>
			) : null}
			{nextPage ? (
				<div className="gap-friends ml-auto flex w-full flex-col items-end text-right">
					<PageLink label="Next" page={nextPage} />
				</div>
			) : null}
		</div>
	)
}

function TwitterIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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
	icon: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>>
	children: React.ReactNode
}) {
	return (
		<Link href={href} className="group">
			<span className="sr-only">{children}</span>
			<Icon className="text-foreground-muted size-5" />
		</Link>
	)
}

function SmallPrint() {
	return (
		<div className="gap-friends flex flex-col items-center justify-between sm:flex-row">
			<p className="text-foreground-muted text-xs">
				&copy; Copyright {new Date().getFullYear()}. All rights reserved.
			</p>
			<div className="gap-friends text-foreground-muted flex">
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

export function SiteFooter() {
	return (
		<div className="bg-background flex h-(--footer-height) w-full items-center">
			<footer className="container mx-auto w-full">
				<div>
					<PageNavigation />
					<SmallPrint />
				</div>
			</footer>
		</div>
	)
}
