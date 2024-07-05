import { MainNav } from './main-nav'
import { ThemeToggle } from './theme-toggle'

export function SiteHeader() {
	return (
		<header className="border-muted bg-primary sticky top-0 z-40 w-full border-b">
			<div className="container mx-auto flex h-16 items-center space-x-4 px-4 sm:justify-between sm:space-x-0">
				<MainNav />
				<div className="flex flex-1 items-center justify-end space-x-4">
					<nav className="flex items-center space-x-1">
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	)
}
