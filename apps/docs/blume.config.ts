import { defineConfig } from 'blume'

export default defineConfig({
	title: 'Nerdfishui',
	description: 'User-friendly UI components built with Tailwind CSS',
	content: {
		root: 'content',
	},
	examples: {
		source: 'examples',
		css: 'examples.css',
	},
	github: {
		owner: 'darenmalfait',
		repo: 'nerdfishui',
		dir: 'apps/docs',
	},
	theme: {
		/* Palette comes from @nerdfish/react via theme.css — not Blume presets */
		mode: 'system',
		radius: 'md',
	},
	feedback: false,
	ai: {
		llmsTxt: true,
		openInChat: false,
	},
	seo: {
		og: { enabled: true },
		sitemap: true,
		robots: true,
		structuredData: true,
	},
	deployment: {
		output: 'static',
		site: 'https://ui.nerdfish.be',
	},
	// Preserve old Next.js /docs/* URLs
	redirects: [
		{ from: '/docs', to: '/', status: 301 },
		{ from: '/docs/', to: '/', status: 301 },
	],
})
