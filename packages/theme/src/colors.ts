import { type Colors } from './types'

export const light: Colors = {
	nerdfish: '17.85 64.75% 52.16%',
	accent: '178.5 64.75% 52.16%',
	background: {
		primary: '0 0% 100%',
		muted: '0 0% 97%',
		inverted: '0 0% 0%',
	},
	foreground: {
		primary: '240 10% 3.9%',
		muted: '227 8% 35.29%',
		inverted: '0 0% 98%',
	},
	border: {
		primary: '0 0% 97%',
		muted: '240 4% 85.9%',
	},
	info: {
		100: '208 100% 97%',
		300: '221 91% 91%',
		500: '210 92% 45%',
	},
	warning: {
		100: '49 100% 97%',
		300: '49 91% 91%',
		500: '31 92% 45%',
	},
	danger: {
		100: '359 100% 97%',
		300: '359 100% 94%',
		500: '359 100% 45%',
	},
	success: {
		100: '143 85% 96%',
		300: '145 92% 91%',
		500: '140 100% 27%',
	},
}

export const dark: typeof light = {
	...light,
	primary: '0 0% 0%',
	background: {
		primary: '0 0% 0%',
		muted: '240 4% 16%',
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
		100: '215 100% 6%',
		300: '223 100% 12%',
		500: '216 87% 65%',
	},
	warning: {
		100: '64 100% 6%',
		300: '60 100% 12%',
		500: '46 87% 65%',
	},
	danger: {
		100: '358 76% 10%',
		300: '357 89% 16%',
		500: '358 100% 81%',
	},
	success: {
		100: '150 100% 6%',
		300: '147 100% 12%',
		500: '150 86% 65%',
	},
}
