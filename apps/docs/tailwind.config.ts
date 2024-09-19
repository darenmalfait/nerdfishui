import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'src/**/*.{ts,tsx}',
		'../../node_modules/@nerdfish/**/*.{js,ts,jsx,tsx}',
		'../../packages/ui/src/**/*.{ts,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				title: ['var(--font-geist-sans)', ...fontFamily.sans],
				sans: ['var(--font-geist-sans)', ...fontFamily.sans],
			},
		},
	},
	typography: (theme: any) => ({
		DEFAULT: {
			css: {
				h1: {
					...theme('fontSize.2xl')[1],
					marginBottom: theme('spacing.2'),
				},
			},
		},
	}),
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/typography'),
		require('@nerdfish/tailwind-config'),
	],
}
