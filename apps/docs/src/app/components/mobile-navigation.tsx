'use client'

import { Button, Drawer, NavigationList } from '@nerdfish/ui'
import { usePathname } from 'next/navigation'
import { useMobileNav } from '../mobile-nav-provider'
import { ComponentNavigation } from './component-navigation'
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
			<Drawer.Root
				direction="right"
				open={isOpen}
				onOpenChange={(open) => {
					if (!open) close()
				}}
			>
				<Drawer.Overlay />
				<Drawer.Content className="!w-full max-w-[300px] px-4">
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
					{stripTrailingSlash(pathname ?? '') === '/docs' ? (
						<ComponentNavigation />
					) : null}
				</Drawer.Content>
			</Drawer.Root>
		</>
	)
}
