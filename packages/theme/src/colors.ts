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
		100: '94.29 10.77% 87.25%', // #DEE2DB
		300: '202.11 15.97% 76.67%', // #BAC6CD
		500: '210 50% 40%', // #336699
	},
	warning: {
		100: '38.18 55.93% 88.43%', // #F2E6D1
		300: '32.96 73.2% 80.98%', // #F2D2AB
		500: '31.94 87.1% 51.37%', // #EF8A17
	},
	danger: {
		100: '24.44 40.3% 86.86%', // #EBDBD0
		300: '10.38 43.33% 76.47%', // #DDB2A9
		500: '355.32 76.22% 36.27%', // #A31621
	},
	success: {
		100: '67.06 22.67% 85.29%', // #E0E2D1
		300: '82.5 17.39% 72.94%', // #BDC6AE
		500: '106.8 32.47% 30.2%', // #3F6634
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
		100: '192 7.46% 13.14%', // #1F2324
		300: '190.91 25.58% 16.86%', // #203236
		500: '186.76 97.26% 28.63%', // #028090
	},
	warning: {
		100: '17.14 10.14% 13.53%', // #26211F
		300: '15 30.43% 18.04%', // #3C2720
		500: '16.8 75% 39.22%', // #AF4319
	},
	danger: {
		100: '0 9.86% 13.92%', // #272020
		300: '0 30% 19.61%', // #412323
		500: '358.03 64.96% 45.88%', // #C1292E
	},
	success: {
		100: '100 4.48% 13.14%', // #212320
		300: '90 16.67% 16.47%', // #2A3123
		500: '92.43 45.12% 32.16%', // #4F772D
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
