'use client'

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from '@nerdfish/react/navigation-menu'
import Link from 'next/link'
import { Logo } from '@/lib/components/icons/logo'
import { mainNav } from '@/nav'

export function MainNavigation() {
	return (
		<div className="gap-friends flex items-center">
			<Link href="/" aria-label="Home">
				<div className="space-x-friends flex items-center">
					<Logo className="h-4 md:h-6" />
					<span className="rounded-base border-border p-best-friends border text-[8px] leading-snug">
						UI
					</span>
				</div>
			</Link>
			{mainNav.length ? (
				<NavigationMenu className="hidden md:flex">
					<NavigationMenuList>
						{mainNav.map(
							(item) =>
								item.href && (
									<NavigationMenuItem key={item.href}>
										<NavigationMenuLink
											render={
												<Link
													href={item.href}
													className={navigationMenuTriggerStyle()}
												>
													{item.title}
												</Link>
											}
										/>
									</NavigationMenuItem>
								),
						)}
					</NavigationMenuList>
				</NavigationMenu>
			) : null}
		</div>
	)
}
