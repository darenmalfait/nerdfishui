import { type Colors } from './types'

export const light: Colors = {
	accent: '17.85 64.75% 52.16%',
	background: {
		primary: '0 0% 100%',
		muted: '200 29% 94%',
		inverted: '220 6.67% 8.82%',
	},
	foreground: {
		primary: '220 6.67% 8.82%',
		muted: '227 8% 35.29%',
		inverted: '0 0% 98%',
	},
	border: {
		primary: '0 0% 97%',
		muted: '240 4% 85.9%',
	},
	info: {
		100: '212 100% 97%',
		300: '208 97% 88%',
		500: '191 87% 26%',
	},
	warning: {
		100: '60 100% 97%',
		300: '59 97% 88%',
		500: '41 87% 26%',
	},
	danger: {
		100: '0 100% 97%',
		300: '358 97% 88%',
		500: '345 76% 37%',
	},
	success: {
		100: '152 100% 97%',
		300: '148 97% 88%',
		500: '131 87% 26%',
	},
}

export const dark: typeof light = {
	...light,
	primary: '0 0% 0%',
	background: {
		primary: '220 6.67% 8.82%',
		muted: '220 3% 17%',
		inverted: '0 0% 100%',
	},
	foreground: {
		primary: '0 0% 98%',
		muted: '240 5% 65%',
		inverted: '0 0% 2%',
	},
	border: {
		primary: '240 4% 16%',
		muted: '240 5% 65%',
	},
	info: {
		100: '183 90% 8%',
		300: '188 91% 17%',
		500: '198 65% 52%',
	},
	warning: {
		100: '35 90% 8%',
		300: '38 91% 17%',
		500: '48 65% 52%',
	},
	danger: {
		100: '333 90% 8%',
		300: '338 91% 17%',
		500: '352 79% 66%',
	},
	success: {
		100: '123 90% 8%',
		300: '128 91% 17%',
		500: '138 65% 52%',
	},
}
