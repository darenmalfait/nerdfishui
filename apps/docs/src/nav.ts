export type NavigationItem = {
	title: string
	href: string
	status?:
		| 'new'
		| 'experimental'
		| 'stable'
		| 'deprecated'
		| 'needs-update'
		| 'updated'
	disabled?: boolean
}

type NavigationGroup = {
	title: string
	links: NavigationItem[]
}

export const docsNav: NavigationGroup[] = [
	{
		title: 'Getting Started',
		links: [
			{ title: 'Introduction', href: '/docs/' },
			{ title: 'Installation', href: '/docs/installation/' },
			{ title: 'Layout', href: '/docs/layout/' },
			{ title: 'Colors', href: '/docs/colors/' },
			{ title: 'Spacing', href: '/docs/spacing/' },
			{ title: 'Radius', href: '/docs/radius/' },
			{ title: 'Typography', href: '/docs/typography/' },
		],
	},
	{
		title: 'Layout',
		links: [
			{ title: 'Aspect Ratio', href: '/docs/components/aspect-ratio/' },
			{ title: 'Card', href: '/docs/components/card/' },
			{ title: 'Empty', href: '/docs/components/empty/' },
			{ title: 'Item', href: '/docs/components/item/', status: 'new' },
			{ title: 'Separator', href: '/docs/components/separator/' },
			{ title: 'Tabs', href: '/docs/components/tabs/' },
			{
				title: 'Marquee',
				href: '/docs/components/marquee/',
				status: 'updated',
			},
		],
	},
	{
		title: 'Input',
		links: [
			{ title: 'Checkbox', href: '/docs/components/checkbox/' },
			{ title: 'Combobox', href: '/docs/components/combobox/' },
			{ title: 'Date Picker', href: '/docs/components/date-picker/' },
			{ title: 'Field', href: '/docs/components/field/' },
			{ title: 'Filters', href: '/docs/components/filters/' },
			{ title: 'Input', href: '/docs/components/input/' },
			{ title: 'Input Group', href: '/docs/components/input-group/' },
			{ title: 'InputOTP', href: '/docs/components/input-otp/' },
			{ title: 'Label', href: '/docs/components/label/' },
			{ title: 'Number Input', href: '/docs/components/number-input/' },
			{ title: 'Phone Input', href: '/docs/components/phone-input/' },
			{ title: 'Radio Group', href: '/docs/components/radio-group/' },
			{ title: 'Select', href: '/docs/components/select/' },
			{ title: 'Slider', href: '/docs/components/slider/', status: 'updated' },
			{ title: 'Switch', href: '/docs/components/switch/' },
			{ title: 'Toggle', href: '/docs/components/toggle/', status: 'updated' },
			{
				title: 'Toggle Group',
				href: '/docs/components/toggle-group/',
				status: 'new',
			},
			{ title: 'Textarea', href: '/docs/components/textarea/' },
		],
	},
	{
		title: 'Forms',
		links: [
			{
				title: 'React Hook Form',
				href: '/docs/components/forms/react-hook-form',
			},
		],
	},
	{
		title: 'Navigation and actionables',
		links: [
			{ title: 'Button', href: '/docs/components/button/' },
			{
				title: 'Breadcrumb',
				href: '/docs/components/breadcrumb/',
			},
			{
				title: 'Collapsible',
				href: '/docs/components/collapsible/',
			},
			{
				title: 'ContextMenu',
				href: '/docs/components/context-menu/',
			},
			{
				title: 'Command',
				href: '/docs/components/command/',
			},
			{
				title: 'Dropdown Menu',
				href: '/docs/components/dropdown-menu/',
			},
			{
				title: 'Navigation Menu',
				href: '/docs/components/navigation-menu/',
			},
			{
				title: 'Pagination',
				href: '/docs/components/pagination/',
			},
			{
				title: 'Sidebar',
				href: '/docs/components/sidebar/',
			},
		],
	},
	{
		title: 'Data Display',
		links: [
			{
				title: 'Accordion',
				href: '/docs/components/accordion/',
				status: 'updated',
			},
			{
				title: 'Alert',
				href: '/docs/components/alert/',
			},
			{ title: 'Alert Dialog', href: '/docs/components/alert-dialog/' },
			{
				title: 'Avatar',
				href: '/docs/components/avatar/',
			},
			{
				title: 'Badge',
				href: '/docs/components/badge/',
			},
			{
				title: 'Calendar',
				href: '/docs/components/calendar/',
			},
			{
				title: 'Card',
				href: '/docs/components/card/',
			},
			{
				title: 'Chart',
				href: '/docs/components/chart/',
				status: 'new',
			},
			{
				title: 'Dialog',
				href: '/docs/components/dialog/',
			},
			{
				title: 'Drawer',
				href: '/docs/components/drawer/',
			},
			{
				title: 'Empty',
				href: '/docs/components/empty/',
				status: 'new',
			},
			{
				title: 'Kbd',
				href: '/docs/components/kbd/',
				status: 'new',
			},
			{
				title: 'Popover',
				href: '/docs/components/popover/',
			},
			{
				title: 'Progress',
				href: '/docs/components/progress/',
				status: 'new',
			},
			{
				title: 'Sheet',
				href: '/docs/components/sheet/',
			},
			{
				title: 'Spinner',
				href: '/docs/components/spinner/',
			},
			{
				title: 'Toast',
				href: '/docs/components/toast/',
			},
			{
				title: 'Tooltip',
				href: '/docs/components/tooltip/',
			},
		],
	},
	{
		title: 'Utility',
		links: [
			{
				title: 'Aspect Ratio',
				href: '/docs/components/aspect-ratio/',
			},
			{
				title: 'Scroll Area',
				href: '/docs/components/scroll-area/',
			},
			{
				title: 'Separator',
				href: '/docs/components/separator/',
			},
			{
				title: 'Skeleton',
				href: '/docs/components/skeleton/',
			},
		],
	},
]

export const mainNav: NavigationItem[] = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Docs',
		href: '/docs',
	},
]
