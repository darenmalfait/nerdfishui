import { type Colors } from './types'

export const light: Colors = {
	accent: '17.85 64.75% 52.16%', // #D46536
	background: {
		primary: '52 36.59% 91.96%', // #F2F0E3
		secondary: '0 0% 100%', //#fff
		muted: '52 23.08% 87.25%', // #E6E4D7
		inverted: '0 0% 18.04%', //#2E2E2E
	},
	foreground: {
		primary: '0 0% 18.04%', // #2E2E2E
		muted: '0 0% 26.27%', // #434343
		inverted: '52 36.59% 91.96%', // #F2F0E3
	},
	border: {
		primary: '0 0% 18.04%', // #2E2E2E
		muted: '0 0% 26.27%', // #DEDEDE
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

	// Code editor
	shiki: {
		foreground: '#2E2E2E',
		background: '#E6E4D7',
		token: {
			constant: '#0550ae',
			string: '#0a3069',
			comment: '#6e7781',
			keyword: '#cf222e',
			parameter: '#116329',
			function: '#8250df',
			'string-expression': '#0a3069',
			punctuation: '#212121',
			link: '#0a3069',
		},
	},
}

export const dark: typeof light = {
	...light,
	accent: '15 69.23% 59.22%', // #df734f
	background: {
		primary: '0 0% 12.16%', // #1F1F1F
		secondary: '0 0% 8.63%', // #161616
		muted: '0 0% 21.18%', // #363636
		inverted: '52.94 15.6% 78.63%', // #D1CFC0
	},
	foreground: {
		primary: '52.94 15.6% 78.63%', // #D1CFC0
		muted: '52 10.07% 70.78%', // #bcbaad
		inverted: '0 0% 13.33%', // #1F1F1F
	},
	border: {
		primary: '52.94 15.6% 78.63%', // #D1CFC0
		muted: '52 10.07% 70.78%', // #bcbaad
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

	// Code editor
	shiki: {
		foreground: '#D1CFC0',
		background: '#363636',
		token: {
			constant: '#79c0ff',
			string: '#a5d6ff',
			comment: '#8b949e',
			keyword: '#ff7b72',
			parameter: '#7ee787',
			function: '#d2a8ff',
			'string-expression': '#a5d6ff',
			punctuation: '#212121',
			link: '#a5d6ff',
		},
	},
}
