export const utilities = {
	':root': {
		'--color-gray-950': '#000000',
		'--color-gray-900': '#0A0A0A',
		'--color-gray-800': '#262626',
		'--color-gray-700': '#3C3C43',
		'--color-gray-600': '#71717a',
		'--color-gray-400': '#a1a1aa',
		'--color-gray-300': '#d4d4d8',
		'--color-gray-200': '#e4e4e7',
		'--color-gray-100': '#f4f4f5',
		'--color-gray-50': '#f8fafc',
	},
	'.outline-active': {
		'@apply relative after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:ring-2 after:ring-brand':
			{},
	},
	'.focus-outline': {
		'@apply after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] outline-none after:ring-transparent focus-visible:after:ring-2 focus-visible:after:ring-brand focus-within:[&:has(:focus-visible)]:after:ring-2 focus-within:[&:has(:focus-visible)]:after:ring-brand':
			{},
	},
	'.focus-ring': {
		'@apply focus:outline-none focus-within:outline-none transition duration-300 disabled:ring-0 hover:ring-2 focus:ring-2 focus-within:ring-2 group-hover:ring-2 group-focus:ring-2 hover:ring-primary focus:ring-primary focus-within:ring-primary group-hover:ring-primary group-focus:ring-primary ring-primary ring-offset-4 ring-offset-inverted':
			{},
	},
	'.active-ring': {
		'@apply active:ring-2 active:ring-primary active:ring-offset-inverted active:ring-offset-4':
			{},
	},
	'.shadow-outline': {
		'@apply ring-1 ring-muted/30 border-transparent': {},
	},
	'.empty-content': {
		content: "''",
	},
}
