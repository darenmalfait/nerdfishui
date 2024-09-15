type NavigationItem = {
	title: string
	href: string
	isNew?: boolean
	isDeprecated?: boolean
}

type NavigationGroup = {
	title: string
	links: NavigationItem[]
}

export const docs: { navigation: NavigationGroup[] } = {
	navigation: [
		{
			title: 'Getting Started',
			links: [
				{ title: 'Introduction', href: '/docs' },
				{ title: 'Installation', href: '/docs/installation' },
				{ title: 'Utilities', href: '/docs/utilities' },
				{ title: 'Layout', href: '/docs/layout' },
				{ title: 'Typography', href: '/docs/typography' },
			],
		},
		{
			title: 'Layout',
			links: [{ title: 'Grid', href: '/docs/grid' }],
		},
		{
			title: 'Form Elements',
			links: [
				{ title: 'Checkbox', href: '/docs/checkbox' },
				{ title: 'Select', href: '/docs/select' },
				{ title: 'DatePicker', href: '/docs/date-picker' },
				{ title: 'Input', href: '/docs/input' },
				{ title: 'InputOTP', href: '/docs/input-otp' },
				{ title: 'Multi Email', href: '/docs/multi-email' },
				{ title: 'Multi Select', href: '/docs/multi-select' },
				{ title: 'Radio Group', href: '/docs/radio-group' },
				{ title: 'Slider', href: '/docs/slider' },
				{ title: 'Switch', href: '/docs/switch' },
				{ title: 'TimeField', href: '/docs/time-field' },
				{ title: 'Toggle', href: '/docs/toggle' },
			],
		},
		{
			title: 'Buttons',
			links: [
				{ title: 'Button', href: '/docs/button' },
				{ title: 'Link', href: '/docs/link' },
			],
		},
		{
			title: 'Data Display',
			links: [{ title: 'EmptyState', href: '/docs/empty-state', isNew: true }],
		},
		{
			title: 'Other',
			links: [
				{ title: 'Accordion', href: '/docs/accordion' },
				{ title: 'Alert Dialog', href: '/docs/alert-dialog' },
				{ title: 'Alert', href: '/docs/alert' },
				{ title: 'Aspect Ratio', href: '/docs/aspect-ratio' },
				{ title: 'Avatar', href: '/docs/avatar' },
				{ title: 'Badge', href: '/docs/badge' },
				{ title: 'Breadcrumb', href: '/docs/breadcrumb' },
				{ title: 'Calendar', href: '/docs/calendar' },
				{ title: 'Card', href: '/docs/card' },
				{ title: 'Collapsible', href: '/docs/collapsible' },
				{ title: 'Command', href: '/docs/command' },
				{ title: 'Dialog', href: '/docs/dialog' },
				{ title: 'Drawer', href: '/docs/drawer' },
				{ title: 'DropdownMenu', href: '/docs/dropdown-menu' },
				{ title: 'Flags', href: '/docs/flags' },
				{ title: 'HoverCard', href: '/docs/hover-card' },
				{ title: 'Indicator', href: '/docs/indicator' },
				{ title: 'Mockup', href: '/docs/mockup', isNew: true },
				{ title: 'NavigationList', href: '/docs/navigation-list' },
				{ title: 'NavigationMenu', href: '/docs/navigation-menu' },
				{ title: 'Popover', href: '/docs/popover' },
				{ title: 'Resizable', href: '/docs/resizable', isNew: true },
				{ title: 'ScrollArea', href: '/docs/scroll-area' },
				{ title: 'Skeleton', href: '/docs/skeleton' },
				{ title: 'Separator', href: '/docs/separator', isNew: true },
				{ title: 'Steps', href: '/docs/steps' },
				{ title: 'Table', href: '/docs/table' },
				{ title: 'Tabs', href: '/docs/tabs' },
				{ title: 'Toast', href: '/docs/toast' },
				{ title: 'Tooltip', href: '/docs/tooltip' },
			],
		},
	],
}
