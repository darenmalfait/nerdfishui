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
			links: [
				{ title: 'Card', href: '/docs/card' },
				{ title: 'Grid', href: '/docs/grid' },
				{ title: 'Resizable', href: '/docs/resizable', isNew: true },
				{ title: 'ScrollArea', href: '/docs/scroll-area' },
			],
		},
		{
			title: 'Forms',
			links: [
				{ title: 'Checkbox', href: '/docs/checkbox' },
				{ title: 'Select', href: '/docs/select' },
				{ title: 'DatePicker', href: '/docs/date-picker' },
				{ title: 'Input', href: '/docs/input' },
				{ title: 'Textarea', href: '/docs/textarea', isNew: true },
				{ title: 'InputOTP', href: '/docs/input-otp' },
				{ title: 'Multi Email', href: '/docs/multi-email' },
				{ title: 'Multi Select', href: '/docs/multi-select' },
				{ title: 'Radio Group', href: '/docs/radio-group' },
				{ title: 'Slider', href: '/docs/slider' },
				{ title: 'Switch', href: '/docs/switch' },
				{ title: 'TimePicker', href: '/docs/time-picker' },
				{ title: 'DatePicker', href: '/docs/date-picker' },
				{ title: 'Toggle', href: '/docs/toggle' },
				{ title: 'Calendar', href: '/docs/calendar' },
			],
		},
		{
			title: 'Navigation and actionables',
			links: [
				{ title: 'Breadcrumb', href: '/docs/breadcrumb' },
				{ title: 'Button', href: '/docs/button' },
				{ title: 'DropdownMenu', href: '/docs/dropdown-menu' },
				{ title: 'Link', href: '/docs/link' },
				{ title: 'NavigationList', href: '/docs/navigation-list' },
				{ title: 'NavigationMenu', href: '/docs/navigation-menu' },
				{ title: 'Tabs', href: '/docs/tabs' },
			],
		},
		{
			title: 'Data Display',
			links: [
				{ title: 'Accordion', href: '/docs/accordion' },
				{ title: 'Alert Dialog', href: '/docs/alert-dialog' },
				{ title: 'Alert', href: '/docs/alert' },
				{ title: 'Avatar', href: '/docs/avatar' },
				{ title: 'Badge', href: '/docs/badge' },
				{ title: 'Collapsible', href: '/docs/collapsible' },
				{ title: 'Command', href: '/docs/command' },
				{ title: 'Dialog', href: '/docs/dialog' },
				{ title: 'Drawer', href: '/docs/drawer' },
				{ title: 'EmptyState', href: '/docs/empty-state', isNew: true },
				{ title: 'HoverCard', href: '/docs/hover-card' },
				{ title: 'Mockup', href: '/docs/mockup', isNew: true },
				{ title: 'Popover', href: '/docs/popover' },
				{ title: 'Steps', href: '/docs/steps' },
				{ title: 'Table', href: '/docs/table' },
				{ title: 'Tooltip', href: '/docs/tooltip' },
			],
		},
		{
			title: 'Utility',
			links: [
				{ title: 'Aspect Ratio', href: '/docs/aspect-ratio' },
				{ title: 'Flags', href: '/docs/flags' },
				{ title: 'Indicator', href: '/docs/indicator' },
				{ title: 'Separator', href: '/docs/separator', isNew: true },
				{ title: 'Skeleton', href: '/docs/skeleton' },
				{ title: 'Toast', href: '/docs/toast' },
			],
		},
	],
}
