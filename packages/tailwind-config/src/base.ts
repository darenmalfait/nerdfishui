export const base = {
	html: {
		'@apply text-foreground antialiased font-sans': {},
	},
	// keep these styles in sync with the ones in packages/ui/src/typography
	// not .not-prose prose

	'.prose h1:not(:where([class~="not-prose"] *))': {
		'@applytext-4xl lg:text-[6.5vw] 2xl:text[8.125rem] leading-[1.1] font-title scroll-m-20 font-extrabold':
			{},
	},
	'.prose h2:not(:where([class~="not-prose"] *))': {
		'@apply mt-lg first:mt-0 scroll-m-20 font-title text-3xl !leading-normal':
			{},
	},
	'.prose h3:not(:where([class~="not-prose"] *))': {
		'@apply mt-md first:mt-0 scroll-m-20 text-2xl font-semibold': {},
	},
	'.prose h4:not(:where([class~="not-prose"] *))': {
		'@apply mt-md first:mt-0 scroll-m-20 text-xl font-semibold': {},
	},
	'.prose p:not(:where([class~="not-prose"] *))': {
		'@apply leading-7 mt-md first:mt-0': {},
	},
	'.prose blockquote:not(:where([class~="not-prose"] *))': {
		'@apply mt-md first:mt-0 border-gray-300 italic text-foreground-muted dark:border-gray-700 ltr:border-l-2 ltr:pl-md rtl:border-r-2 rtl:pr-md':
			{},
	},
	'.prose ul:not(:where([class~="not-prose"] *))': {
		'@apply list-disc first:mt-0 ltr:ml-md rtl:mr-md': {},
	},
	'.prose ol:not(:where([class~="not-prose"] *))': {
		'@apply list-decimal first:mt-0 ltr:ml-md rtl:mr-md': {},
	},
	'.prose ol li:not(:where([class~="not-prose"] *)), .prose ul li:not(:where([class~="not-prose"] *))':
		{
			'@apply my-2': {},
		},
	'.prose > div:not(:where([class~="not-prose"] *))': {
		'@apply mt-md first:mt-0': {},
	},
	'.bg-popover': {
		'@apply backdrop-saturate-[200%] backdrop-blur-[14px] bg-background/75 dark:bg-background/40':
			{},
	},
	'.bg-popover-inverted': {
		'@apply backdrop-saturate-[200%] backdrop-blur-[14px] bg-foreground/40 dark:bg-foreground/75':
			{},
	},
}
