export const base = {
	html: {
		'@apply text-primary antialiased font-sans': {},
	},
	// keep these styles in sync with the ones in packages/ui/src/typography
	// not .not-prose prose

	'.prose h1:not(:where([class~="not-prose"] *))': {
		'@apply scroll-m-20 font-title text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]':
			{},
	},
	'.prose h2:not(:where([class~="not-prose"] *))': {
		'@apply mt-10 first:mt-0 scroll-m-20 font-title text-3xl !leading-normal':
			{},
	},
	'.prose h3:not(:where([class~="not-prose"] *))': {
		'@apply mt-8 first:mt-0 scroll-m-20 text-2xl font-semibold tracking-tight':
			{},
	},
	'.prose h4:not(:where([class~="not-prose"] *))': {
		'@apply mt-8 first:mt-0 scroll-m-20 text-xl font-semibold tracking-tight':
			{},
	},
	'.prose p:not(:where([class~="not-prose"] *))': {
		'@apply leading-7 mt-6 first:mt-0': {},
	},
	'.prose blockquote:not(:where([class~="not-prose"] *))': {
		'@apply mt-6 first:mt-0 border-gray-300 italic text-muted dark:border-gray-700 ltr:border-l-2 ltr:pl-6 rtl:border-r-2 rtl:pr-6':
			{},
	},
	'.prose ul:not(:where([class~="not-prose"] *))': {
		'@apply list-disc first:mt-0 ltr:ml-6 rtl:mr-6': {},
	},
	'.prose ol:not(:where([class~="not-prose"] *))': {
		'@apply list-decimal first:mt-0 ltr:ml-6 rtl:mr-6': {},
	},
	'.prose ol li:not(:where([class~="not-prose"] *)), .prose ul li:not(:where([class~="not-prose"] *))':
		{
			'@apply my-2': {},
		},
	'.prose > div:not(:where([class~="not-prose"] *))': {
		'@apply mt-6 first:mt-0': {},
	},
	'.bg-popover': {
		'@apply backdrop-saturate-[200%] backdrop-blur-[14px] bg-primary/75 dark:bg-primary/40':
			{},
	},
	'.bg-popover-inverted': {
		'@apply backdrop-saturate-[200%] backdrop-blur-[14px] bg-inverted/40 dark:bg-inverted/75':
			{},
	},
}
