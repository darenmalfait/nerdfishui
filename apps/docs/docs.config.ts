export type NavigationItem = {
	title: string
	href: string
	status?: 'new' | 'experimental' | 'stable' | 'deprecated' | 'needs-update'
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
				{ title: 'Card', href: '/docs/components/card' },
				{ title: 'Grid', href: '/docs/components/grid' },
				{
					title: 'Resizable',
					href: '/docs/components/resizable',
					status: 'new',
				},
				{ title: 'ScrollArea', href: '/docs/components/scroll-area' },
			],
		},
		{
			title: 'Forms',
			links: [
				{ title: 'Checkbox', href: '/docs/components/checkbox' },
				{ title: 'Select', href: '/docs/components/select' },
				{ title: 'DatePicker', href: '/docs/components/date-picker' },
				{ title: 'Input', href: '/docs/components/input' },
				{ title: 'Textarea', href: '/docs/components/textarea', status: 'new' },
				{ title: 'InputOTP', href: '/docs/components/input-otp' },
				{ title: 'Multi Email', href: '/docs/components/multi-email' },
				{ title: 'Multi Select', href: '/docs/components/multi-select' },
				{ title: 'Radio Group', href: '/docs/components/radio-group' },
				{ title: 'Slider', href: '/docs/components/slider' },
				{ title: 'Switch', href: '/docs/components/switch' },
				{ title: 'TimePicker', href: '/docs/components/time-picker' },
				{
					title: 'DateTimePicker',
					href: '/docs/components/date-time-picker',
					status: 'experimental',
				},
				{ title: 'DatePicker', href: '/docs/components/date-picker' },
				{ title: 'Toggle', href: '/docs/components/toggle' },
				{ title: 'Calendar', href: '/docs/components/calendar' },
			],
		},
		{
			title: 'Navigation and actionables',
			links: [
				{ title: 'Breadcrumb', href: '/docs/components/breadcrumb' },
				{ title: 'Button', href: '/docs/components/button' },
				{ title: 'DropdownMenu', href: '/docs/components/dropdown-menu' },
				{
					title: 'Link',
					href: '/docs/components/link',
					status: 'needs-update',
				},
				{ title: 'NavigationList', href: '/docs/components/navigation-list' },
				{ title: 'NavigationMenu', href: '/docs/components/navigation-menu' },
				{ title: 'Tabs', href: '/docs/components/tabs' },
			],
		},
		{
			title: 'Data Display',
			links: [
				{ title: 'Accordion', href: '/docs/components/accordion' },
				{ title: 'Alert Dialog', href: '/docs/components/alert-dialog' },
				{ title: 'Alert', href: '/docs/components/alert' },
				{ title: 'Avatar', href: '/docs/components/avatar' },
				{ title: 'Badge', href: '/docs/components/badge' },
				{ title: 'Collapsible', href: '/docs/components/collapsible' },
				{ title: 'Command', href: '/docs/components/command' },
				{ title: 'Dialog', href: '/docs/components/dialog' },
				{ title: 'Drawer', href: '/docs/components/drawer' },
				{
					title: 'EmptyState',
					href: '/docs/components/empty-state',
					status: 'new',
				},
				{ title: 'HoverCard', href: '/docs/components/hover-card' },
				{ title: 'Mockup', href: '/docs/components/mockup', status: 'new' },
				{ title: 'Popover', href: '/docs/components/popover' },
				{ title: 'Steps', href: '/docs/components/steps' },
				{ title: 'Table', href: '/docs/components/table' },
				{ title: 'Tooltip', href: '/docs/components/tooltip' },
			],
		},
		{
			title: 'Utility',
			links: [
				{ title: 'Aspect Ratio', href: '/docs/components/aspect-ratio' },
				{ title: 'Flags', href: '/docs/components/flags' },
				{ title: 'Indicator', href: '/docs/components/indicator' },
				{
					title: 'Separator',
					href: '/docs/components/separator',
					status: 'new',
				},
				{ title: 'Skeleton', href: '/docs/components/skeleton' },
				{ title: 'Toast', href: '/docs/components/toast' },
			],
		},
	],
}