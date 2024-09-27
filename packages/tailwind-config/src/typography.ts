export const typography = {
	typography: (theme: any) => {
		return {
			DEFAULT: {
				css: {
					'> *': {
						gridColumn: '1 / -1',

						[`@media (min-width: ${theme('screens.lg')})`]: {
							gridColumn: '3 / span 8',
						},
					},
					'h1, h2, h3, h4': {
						marginTop: theme('spacing.0'),
						marginBottom: theme('spacing.0'),
					},
					img: {
						// images are wrapped in <p>, which already has margin
						marginTop: 0,
						marginBottom: 0,
						borderRadius: theme('borderRadius.lg'),
					},
				},
				dark: {
					css: {
						color: theme('colors.gray[300]'),
						'[class~="lead"]': { color: theme('colors.gray[400]') },
						a: { color: theme('colors.gray[100]') },
						strong: { color: theme('colors.gray[100]') },
						'ul > li::before': {
							backgroundColor: theme('colors.gray[700]'),
						},
						hr: { borderColor: theme('colors.gray[800]') },
						blockquote: {
							color: theme('colors.gray[100]'),
							borderLeftColor: theme('colors.gray[800]'),
						},
						h1: { color: theme('colors.gray[100]') },
						h2: { color: theme('colors.gray[100]') },
						h3: { color: theme('colors.gray[100]') },
						h4: { color: theme('colors.gray[100]') },
						pre: {
							color: theme('colors.gray[200]'),
							backgroundColor: theme('colors.gray[800]'),
						},
						thead: {
							color: theme('colors.gray[100]'),
							borderBottomColor: theme('colors.gray[700]'),
						},
						'tbody tr': { borderBottomColor: theme('colors.gray[800]') },
					},
				},
			},
		}
	},
}
