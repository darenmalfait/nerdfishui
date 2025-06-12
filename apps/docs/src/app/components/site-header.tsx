import { Button } from '@nerdfish/ui'
import Link from 'next/link'
import { Icons } from './icons'
import { MainNavigation } from './main-navigation'
import { MobileNavigation } from './mobile-navigation'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader() {
	return (
		<header className="border-muted/20 bg-popover sticky top-0 z-40 w-full border border-b">
			<div className="space-x-md container mx-auto flex h-16 max-w-screen-2xl items-center px-4 sm:justify-between sm:space-x-0">
				<MainNavigation />
				<div className="space-x-md flex flex-1 items-center justify-end">
					<nav className="space-x-sm flex items-center">
						<ThemeToggle />
						<Button variant="ghost" icon asChild>
							<Link
								href="https://github.com/darenmalfait/nerdfishui"
								// rel="noopener noreferrer"
								target="_blank"
							>
								<Icons.GitHub className="size-4" />
							</Link>
						</Button>
						<MobileNavigation />
					</nav>
				</div>
			</div>
		</header>
	)
}
