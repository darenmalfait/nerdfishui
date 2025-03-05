export const colors = {
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		accent: 'hsl(var(--colors-accent) / <alpha-value>)',
		foreground: {
			DEFAULT: 'hsl(var(--colors-foreground-primary) / <alpha-value>)',
			secondary: 'hsl(var(--colors-foreground-secondary) / <alpha-value>)',
			muted: 'hsl(var(--colors-foreground-muted) / <alpha-value>)',
			inverted: 'hsl(var(--colors-foreground-inverted) / <alpha-value>)',
		},
		background: {
			DEFAULT: 'hsl(var(--colors-background-primary) / <alpha-value>)',
			secondary: 'hsl(var(--colors-background-secondary) / <alpha-value>)',
			muted: 'hsl(var(--colors-background-muted) / <alpha-value>)',
			inverted: 'hsl(var(--colors-background-inverted) / <alpha-value>)',
		},
		success: {
			DEFAULT: 'hsl(var(--colors-success-500) / <alpha-value>)',
			foreground: 'hsl(var(--colors-success-500) / <alpha-value>)',
			background: {
				DEFAULT: 'hsl(var(--colors-success-300) / <alpha-value>)',
				muted: 'hsl(var(--colors-success-100) / <alpha-value>)',
				accent: 'hsl(var(--colors-success-500) / <alpha-value>)',
			},
		},
		danger: {
			DEFAULT: 'hsl(var(--colors-danger-500) / <alpha-value>)',
			foreground: 'hsl(var(--colors-danger-500) / <alpha-value>)',
			background: {
				DEFAULT: 'hsl(var(--colors-danger-300) / <alpha-value>)',
				muted: 'hsl(var(--colors-danger-100) / <alpha-value>)',
				accent: 'hsl(var(--colors-danger-500) / <alpha-value>)',
			},
		},
		warning: {
			DEFAULT: 'hsl(var(--colors-warning-500) / <alpha-value>)',
			foreground: 'hsl(var(--colors-warning-500) / <alpha-value>)',
			background: {
				DEFAULT: 'hsl(var(--colors-warning-300) / <alpha-value>)',
				muted: 'hsl(var(--colors-warning-100) / <alpha-value>)',
				accent: 'hsl(var(--colors-warning-500) / <alpha-value>)',
			},
		},
		info: {
			DEFAULT: 'hsl(var(--colors-info-500) / <alpha-value>)',
			foreground: 'hsl(var(--colors-info-500) / <alpha-value>)',
			background: {
				DEFAULT: 'hsl(var(--colors-info-300) / <alpha-value>)',
				muted: 'hsl(var(--colors-info-100) / <alpha-value>)',
				accent: 'hsl(var(--colors-info-500) / <alpha-value>)',
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

		// DEPRECATED
		primary: 'hsl(var(--colors-foreground-primary) / <alpha-value>)',
		muted: 'hsl(var(--colors-foreground-muted) / <alpha-value>)',
		inverted: 'hsl(var(--colors-foreground-inverted) / <alpha-value>)',
	},
	backgroundColor: {
		// DEPRECATED
		success: {
			DEFAULT: 'hsl(var(--colors-success-300) / <alpha-value>)',
			muted: 'hsl(var(--colors-success-100) / <alpha-value>)',
			accent: 'hsl(var(--colors-success-500) / <alpha-value>)',
		},
		danger: {
			DEFAULT: 'hsl(var(--colors-danger-300) / <alpha-value>)',
			muted: 'hsl(var(--colors-danger-100) / <alpha-value>)',
			accent: 'hsl(var(--colors-danger-500) / <alpha-value>)',
		},
		warning: {
			DEFAULT: 'hsl(var(--colors-warning-300) / <alpha-value>)',
			muted: 'hsl(var(--colors-warning-100) / <alpha-value>)',
			accent: 'hsl(var(--colors-warning-500) / <alpha-value>)',
		},
		info: {
			DEFAULT: 'hsl(var(--colors-info-300) / <alpha-value>)',
			muted: 'hsl(var(--colors-info-100) / <alpha-value>)',
			accent: 'hsl(var(--colors-info-500) / <alpha-value>)',
		},
		primary: 'hsl(var(--colors-background-primary) / <alpha-value>)',
		secondary: 'hsl(var(--colors-background-secondary) / <alpha-value>)',
		muted: 'hsl(var(--colors-background-muted) / <alpha-value>)',
		inverted: 'hsl(var(--colors-background-inverted) / <alpha-value>)',
	},
	textColor: {
		// DEPRECATED
		primary: 'hsl(var(--colors-foreground-primary) / <alpha-value>)',
		muted: 'hsl(var(--colors-foreground-muted) / <alpha-value>)',
		inverted: 'hsl(var(--colors-foreground-inverted) / <alpha-value>)',
	},
	borderColor: {
		primary: 'hsl(var(--colors-border-primary) / <alpha-value>)',
		muted: 'hsl(var(--colors-border-muted) / <alpha-value>)',
		success: {
			DEFAULT: 'hsl(var(--colors-success-300) / <alpha-value>)',
			accent: 'hsl(var(--colors-success-500) / <alpha-value>)',
			muted: 'hsl(var(--colors-success-100) / <alpha-value>)',
		},
		danger: {
			DEFAULT: 'hsl(var(--colors-danger-300) / <alpha-value>)',
			accent: 'hsl(var(--colors-danger-500) / <alpha-value>)',
			muted: 'hsl(var(--colors-danger-100) / <alpha-value>)',
		},
		warning: {
			DEFAULT: 'hsl(var(--colors-warning-300) / <alpha-value>)',
			accent: 'hsl(var(--colors-warning-500) / <alpha-value>)',
			muted: 'hsl(var(--colors-warning-100) / <alpha-value>)',
		},
		info: {
			DEFAULT: 'hsl(var(--colors-info-300) / <alpha-value>)',
			accent: 'hsl(var(--colors-info-500) / <alpha-value>)',
			muted: 'hsl(var(--colors-info-100) / <alpha-value>)',
		},
	},
}
