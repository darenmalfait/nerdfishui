import { Button } from '@nerdfish/ui'
import Link from 'next/link'
import { Icons } from './icons'
import { MainNavigation } from './main-navigation'
import { MobileNavigation } from './mobile-navigation'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader() {
	return (
		<header className="border-muted/20 bg-popover sticky top-0 z-40 w-full border border-b">
			<div className="container mx-auto flex h-16 max-w-screen-2xl items-center space-x-4 px-4 sm:justify-between sm:space-x-0">
				<MainNavigation />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						<ThemeToggle />
						<Button variant="ghost" size="icon" asChild>
							<Link
								href="https://github.com/darenmalfait/nerdfishui"
								rel="noopener noreferrer"
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
