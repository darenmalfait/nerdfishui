type NavItem = {
	title: string
	href: string
	disabled?: boolean
}

interface SiteConfig {
	name: string
	description: string
	mainNav: NavItem[]
}

const siteConfig: SiteConfig = {
	name: 'Nerdfishui',
	description: 'User-friendly UI component built with Tailwind CSS',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
	],
}

export { siteConfig, type NavItem }
