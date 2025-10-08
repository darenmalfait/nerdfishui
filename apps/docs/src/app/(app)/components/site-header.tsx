import { Button } from '@nerdfish/react/button'
import Link from 'next/link'
import { MainNavigation } from './main-navigation'
import { MobileNav } from './mobile-navigation'
import { ThemeToggle } from './theme-toggle'
import { Icons } from '@/lib/components/icons'

export function SiteHeader() {
	return (
		<header className="bg-background sticky top-0 z-50 w-full">
			<div className="container mx-auto">
				<div className="space-x-acquaintances flex h-(--header-height) items-center sm:justify-between">
					<MobileNav />

					<MainNavigation />
					<div className="space-x-friends flex w-full flex-1 shrink-0 items-center justify-end">
						<nav className="space-x-best-friends flex items-center">
							<ThemeToggle />
							<Button
								variant="ghost"
								icon
								size="xs"
								render={
									<Link
										href="https://github.com/darenmalfait/nerdfishui"
										// rel="noopener noreferrer"
										target="_blank"
									/>
								}
							>
								<Icons.GitHub className="size-4" />
							</Button>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}
