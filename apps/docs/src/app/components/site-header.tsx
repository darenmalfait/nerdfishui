import { MainNavigation } from './main-navigation'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader() {
	return (
		<header className="shadow-outline bg-popover sticky top-0 z-40 w-full">
			<div className="container mx-auto flex h-16 max-w-screen-2xl items-center space-x-4 px-4 sm:justify-between sm:space-x-0">
				<MainNavigation />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	)
}
