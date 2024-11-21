import { type Colors } from './types'

export const light: Colors = {
	accent: '17.85 64.75% 52.16%', // #D46536
	background: {
		primary: '0 0% 97.25%', // #F8F8F8
		secondary: '0 0% 100%', //#fff
		muted: '0 0% 87.06%', // #DEDEDE
		inverted: '0 0% 13.33%', //#222
	},
	foreground: {
		primary: '0 0% 13.33%', // #222
		muted: '0 0% 55.29%', // #8D8D8D
		inverted: '0 0% 100%', // #FFF
	},
	border: {
		primary: '0 0% 13.33%', // #222
		muted: '0 0% 87.06%', // #DEDEDE
	},

	// INFO: status colors: using https://goodpalette.io as contrast checker
	// 100 is shade between the background and 300
	// 300 is one shade darker than 100
	// 500 needs good contrast with 100

	info: {
		100: '212 100% 97%',
		300: '208 97% 88%',
		500: '191 87% 26%',
	},
	warning: {
		100: '64.62 100% 97.45%', // #FEFFF2
		300: '60.95 100% 87.65%', // #FEFFC0
		500: '43.18 95.65% 27.06%', // #876203
	},
	danger: {
		100: '0 100% 97%',
		300: '358 97% 88%',
		500: '345 76% 37%',
	},
	success: {
		100: '152.31 100% 97.45%', // #F2FFF9
		300: '148.42 100% 88.82%', // #C6FFE1
		500: '127.23 87.37% 18.63%', // #065910
	},
}

export const dark: typeof light = {
	...light,
	background: {
		primary: '0 0% 7.06%', // #121212
		secondary: '0 0% 0%', // #000
		muted: '210 2.5% 15.69%', // #272829
		inverted: '0 0% 97.25%', // #F8F8F8
	},
	foreground: {
		primary: '0 0% 100%', // #fff
		muted: '0 0% 55.29%', // #8D8D8D
		inverted: '0 0% 13.33%', // #222
	},
	border: {
		primary: '0 0% 97.25%', // #F8F8F8
		muted: '210 2.5% 15.69%', // #272829
	},
	info: {
		100: '183 90% 8%',
		300: '188 91% 17%',
		500: '198 65% 52%',
	},
	warning: {
		100: '33.16 100% 7.45%', // #261500
		300: '36.3 100% 15.88%', // #513100
		500: '50.37 81% 60.78%', // #ECD24A
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
