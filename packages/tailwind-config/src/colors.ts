import { type CustomThemeConfig } from 'tailwindcss/types/config'

export const colors: Partial<CustomThemeConfig> = {
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		brand: 'hsl(var(--colors-brand) / <alpha-value>)',

		foreground: {
			DEFAULT: 'hsl(var(--colors-foreground-primary) / <alpha-value>)',
			secondary: 'hsl(var(--colors-foreground-secondary) / <alpha-value>)',
			muted: 'hsl(var(--colors-foreground-muted) / <alpha-value>)',
			inverted: 'hsl(var(--colors-foreground-inverted) / <alpha-value>)',
			info: {
				DEFAULT: 'hsl(var(--colors-foreground-info-primary) / <alpha-value>)',
				contrast: 'hsl(var(--colors-foreground-info-contrast) / <alpha-value>)',
			},
			success: {
				DEFAULT:
					'hsl(var(--colors-foreground-success-primary) / <alpha-value>)',
				contrast:
					'hsl(var(--colors-foreground-success-contrast) / <alpha-value>)',
			},
			warning: {
				DEFAULT:
					'hsl(var(--colors-foreground-warning-primary) / <alpha-value>)',
				contrast:
					'hsl(var(--colors-foreground-warning-contrast) / <alpha-value>)',
			},
			danger: {
				DEFAULT: 'hsl(var(--colors-foreground-danger-primary) / <alpha-value>)',
				contrast:
					'hsl(var(--colors-foreground-danger-contrast) / <alpha-value>)',
			},
		},
		background: {
			DEFAULT: 'hsl(var(--colors-background-primary) / <alpha-value>)',
			secondary: 'hsl(var(--colors-background-secondary) / <alpha-value>)',
			muted: 'hsl(var(--colors-background-muted) / <alpha-value>)',
			inverted: 'hsl(var(--colors-background-inverted) / <alpha-value>)',
			info: {
				DEFAULT: 'hsl(var(--colors-background-info-primary) / <alpha-value>)',
				muted: 'hsl(var(--colors-background-info-muted) / <alpha-value>)',
			},
			success: {
				DEFAULT:
					'hsl(var(--colors-background-success-primary) / <alpha-value>)',
				muted: 'hsl(var(--colors-background-success-muted) / <alpha-value>)',
			},
			warning: {
				DEFAULT:
					'hsl(var(--colors-background-warning-primary) / <alpha-value>)',
				muted: 'hsl(var(--colors-background-warning-muted) / <alpha-value>)',
			},
			danger: {
				DEFAULT: 'hsl(var(--colors-background-danger-primary) / <alpha-value>)',
				muted: 'hsl(var(--colors-background-danger-muted) / <alpha-value>)',
			},
		},

		gray: {
			100: 'var(--color-gray-100)',
			200: 'var(--color-gray-200)',
			300: 'var(--color-gray-300)',
			400: 'var(--color-gray-400)',
			500: 'var(--color-gray-500)',
			600: 'var(--color-gray-600)',
			700: 'var(--color-gray-700)',
			800: 'var(--color-gray-800)',
			900: 'var(--color-gray-900)',
		},
	},

	backgroundColor: {
		primary: 'hsl(var(--colors-background-primary) / <alpha-value>)',
		secondary: 'hsl(var(--colors-background-secondary) / <alpha-value>)',
		muted: 'hsl(var(--colors-background-muted) / <alpha-value>)',
		inverted: 'hsl(var(--colors-background-inverted) / <alpha-value>)',
		info: {
			DEFAULT: 'hsl(var(--colors-background-info-primary) / <alpha-value>)',
			muted: 'hsl(var(--colors-background-info-muted) / <alpha-value>)',
		},
		success: {
			DEFAULT: 'hsl(var(--colors-background-success-primary) / <alpha-value>)',
			muted: 'hsl(var(--colors-background-success-muted) / <alpha-value>)',
		},
		warning: {
			DEFAULT: 'hsl(var(--colors-background-warning-primary) / <alpha-value>)',
			muted: 'hsl(var(--colors-background-warning-muted) / <alpha-value>)',
		},
		danger: {
			DEFAULT: 'hsl(var(--colors-background-danger-primary) / <alpha-value>)',
			muted: 'hsl(var(--colors-background-danger-muted) / <alpha-value>)',
		},
	},

	borderColor: {
		primary: 'hsl(var(--colors-border-primary) / <alpha-value>)',
		muted: 'hsl(var(--colors-border-muted) / <alpha-value>)',
		success: {
			DEFAULT: 'hsl(var(--colors-background-success-primary) / <alpha-value>)',
			muted: 'hsl(var(--colors-background-success-muted) / <alpha-value>)',
		},
		danger: {
			DEFAULT: 'hsl(var(--colors-background-danger-primary) / <alpha-value>)',
			muted: 'hsl(var(--colors-background-danger-muted) / <alpha-value>)',
		},
		warning: {
			DEFAULT: 'hsl(var(--colors-background-warning-primary) / <alpha-value>)',
			muted: 'hsl(var(--colors-background-warning-muted) / <alpha-value>)',
		},
		info: {
			DEFAULT: 'hsl(var(--colors-background-info-primary) / <alpha-value>)',
			muted: 'hsl(var(--colors-background-info-muted) / <alpha-value>)',
		},
	},
}
