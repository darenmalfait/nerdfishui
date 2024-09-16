'use client'

import {
	Button,
	Drawer,
	NavigationList,
	DrawerOverlay,
	DrawerContent,
} from '@nerdfish/ui'
import { usePathname } from 'next/navigation'
import { useMobileNav } from '../mobile-nav-provider'
import {
	ComponentNavigation,
	GettingStartedNavigation,
} from './docs-navigation'
import { Icons } from './icons'
import { siteConfig } from '~/config/site'
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
				<DrawerContent className="!w-full max-w-[300px] px-4">
					<NavigationList.Root>
						{siteConfig.mainNav.length
							? siteConfig.mainNav.map((item) => (
									<NavigationList.Item
										key={item.title}
										href={item.href}
										title={item.title}
									/>
								))
							: null}
					</NavigationList.Root>
					{stripTrailingSlash(pathname ?? '').includes('/docs') ? (
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
