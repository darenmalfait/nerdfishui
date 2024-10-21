'use client'

import {
	Button,
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	NavigationList,
	NavigationListItem,
	Separator,
} from '@nerdfish/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from 'site.config'
import { useMobileNav } from '../mobile-nav-provider'
import {
	ComponentNavigation,
	GettingStartedNavigation,
} from './docs-navigation'
import { Icons } from './icons'
import { Logo } from './icons/logo'
import { stripTrailingSlash } from '~/lib/utils/string'

export function MobileNavigation() {
	const { isOpen, toggle, close } = useMobileNav()
	const pathname = usePathname()

	return (
		<>
			<Button
				size="icon"
				variant="ghost"
				type="button"
				className="md:hidden"
				aria-label="Toggle navigation"
				onClick={toggle}
			>
				<Icons.Menu className="text-primary size-4" />
			</Button>
			<Drawer
				direction="right"
				open={isOpen}
				onOpenChange={(open) => {
					if (!open) close()
				}}
			>
				<DrawerOverlay />
				<DrawerContent hideCloseButton className="!w-full max-w-[300px] px-4">
					<DrawerHeader>
						<div className="flex flex-row items-center justify-between gap-4">
							<Link href="/" aria-label="Home">
								<div className="flex items-center space-x-3">
									<Logo className="h-6" />
									<span className="text-primary ml-2 flex items-center space-x-2 text-lg font-semibold">
										Nerdfish
										<span className="border-muted ml-1 rounded-lg border p-1 text-[8px] leading-snug">
											UI
										</span>
									</span>
								</div>
							</Link>
							<DrawerClose className="-mr-4">
								<Button variant="ghost" size="icon">
									<Icons.Close className="size-4" />
								</Button>
							</DrawerClose>
						</div>
					</DrawerHeader>
					<Separator />
					<NavigationList>
						{siteConfig.mainNav.length
							? siteConfig.mainNav.map((item) => (
									<NavigationListItem
										key={item.title}
										href={item.href}
										title={item.title}
									/>
								))
							: null}
					</NavigationList>
					{stripTrailingSlash(pathname).includes('/docs') ? (
						<div className="flex flex-col gap-4">
							<GettingStartedNavigation />
							<ComponentNavigation />
						</div>
					) : null}
				</DrawerContent>
			</Drawer>
		</>
	)
}
