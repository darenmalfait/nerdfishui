import { type Colors } from './types'

export const light: Colors = {
	brand: '17.85 64.75% 52.16%', // #D46536

	// DEPRACEATED, now brand
	accent: '17.85 64.75% 52.16%', // #D46536

	background: {
		primary: '52 36.59% 91.96%', // #F2F0E3
		secondary: '0 0% 100%', //#fff
		muted: '52 23.08% 87.25%', // #E6E4D7
		inverted: '0 0% 18.04%', //#2E2E2E
		danger: {
			primary: '355.32 76.22% 36.27%', // #A31621
			muted: '10.38 43.33% 76.47%', // #DDB2A9
		},
		success: {
			primary: '106.8 32.47% 30.2%', // #3F6634
			muted: '82.5 17.39% 72.94%', // #BDC6AE
		},
		info: {
			primary: '210 50% 40%', // #336699
			muted: '202.11 15.97% 76.67%', // #BAC6CD
		},
		warning: {
			primary: '31.94 87.1% 51.37%', // #EF8A17
			muted: '32.96 73.2% 80.98%', // #F2D2AB
		},
	},
	foreground: {
		primary: '0 0% 18.04%', // #2E2E2E
		muted: '0 0% 26.27%', // #434343
		inverted: '52 36.59% 91.96%', // #F2F0E3
		danger: {
			primary: '355.32 76.22% 36.27%', // #A31621
			contrast: '0 0% 100%', // #ffffff
		},
		success: {
			primary: '106.8 32.47% 30.2%', // #3F6634
			contrast: '0 0% 100%', // #ffffff
		},
		info: {
			primary: '210 50% 40%', // #336699
			contrast: '0 0% 100%', // #ffffff
		},
		warning: {
			primary: '31.94 87.1% 51.37%', // #EF8A17
			contrast: '0 0% 0%', // #000000
		},
	},
	border: {
		primary: '0 0% 18.04%', // #2E2E2E
		muted: '0 0% 26.27%', // #DEDEDE
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
	brand: '15 69.23% 59.22%', // #df734f

	// DEPRACATED, now brand
	accent: '15 69.23% 59.22%', // #df734f

	background: {
		primary: '0 0% 12.16%', // #1F1F1F
		secondary: '0 0% 8.63%', // #161616
		muted: '0 0% 21.18%', // #363636
		inverted: '52.94 15.6% 78.63%', // #D1CFC0
		danger: {
			primary: '358.03 64.96% 45.88%', // #C1292E
			muted: '0 30% 19.61%', // #412323
		},
		success: {
			primary: '92.43 45.12% 32.16%', // #4F772D
			muted: '90 16.67% 16.47%', // #2A3123
		},
		info: {
			primary: '186.76 97.26% 28.63%', // #028090
			muted: '190.91 25.58% 16.86%', // #203236
		},
		warning: {
			primary: '16.8 75% 39.22%', // #AF4319
			muted: '15 30.43% 18.04%', // #3C2720
		},
	},
	foreground: {
		primary: '52.94 15.6% 78.63%', // #D1CFC0
		muted: '52 10.07% 70.78%', // #bcbaad
		inverted: '0 0% 13.33%', // #1F1F1F
		danger: {
			primary: '358.03 64.96% 45.88%', // #C1292E
			contrast: '0 0% 100%', // #ffffff
		},
		success: {
			primary: '92.43 45.12% 32.16%', // #4F772D
			contrast: '0 0% 100%', // #ffffff
		},
		info: {
			primary: '186.76 97.26% 28.63%', // #028090
			contrast: '0 0% 100%', // #ffffff
		},
		warning: {
			primary: '16.8 75% 39.22%', // #AF4319
			contrast: '0 0% 100%', // #ffffff
		},
	},
	border: {
		primary: '52.94 15.6% 78.63%', // #D1CFC0
		muted: '52 10.07% 70.78%', // #bcbaad
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
