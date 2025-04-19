export const typography = {
	typography: (theme: any) => {
		return {
			DEFAULT: {
				css: {
					'--tw-prose-body': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-headings': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-lead': 'hsl(var(--colors-foreground-primary-muted))',
					'--tw-prose-links': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-bold': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-counters': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-bullets': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-hr': 'hsl(var(--colors-foreground-muted))',
					'--tw-prose-quotes': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-quote-borders': 'hsl(var(--colors-foreground-muted))',
					'--tw-prose-captions': 'hsl(var(--colors-foreground-primary-muted))',
					'--tw-prose-code': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-pre-code': 'hsl(var(--colors-background-muted))',
					'--tw-prose-pre-bg': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-th-borders': 'hsl(var(--colors-foreground-muted))',
					'--tw-prose-td-borders': 'hsl(var(--colors-background-muted))',
					'--tw-prose-invert-body': 'hsl(var(--colors-background-muted))',
					'--tw-prose-invert-headings':
						'hsl(var(--colors-foreground-inverted))',
					'--tw-prose-invert-lead': 'hsl(var(--colors-foreground-muted))',
					'--tw-prose-invert-links': 'hsl(var(--colors-foreground-inverted))',
					'--tw-prose-invert-bold': 'hsl(var(--colors-foreground-inverted))',
					'--tw-prose-invert-counters': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-invert-bullets': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-invert-hr': 'hsl(var(--colors-foreground-primary-muted))',
					'--tw-prose-invert-quotes': 'hsl(var(--colors-background-muted))',
					'--tw-prose-invert-quote-borders':
						'hsl(var(--colors-foreground-primary-muted))',
					'--tw-prose-invert-captions': 'hsl(var(--colors-foreground-primary))',
					'--tw-prose-invert-code': 'hsl(var(--colors-foreground-inverted))',
					'--tw-prose-invert-pre-code': 'hsl(var(--colors-foreground-muted))',
					'--tw-prose-invert-pre-bg': 'hsl(var(--colors-background-muted))',
					'--tw-prose-invert-th-borders':
						'hsl(var(--colors-foreground-primary))',
					'--tw-prose-invert-td-borders':
						'hsl(var(--colors-foreground-primary-muted))',
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
			},
		}
	},
}
