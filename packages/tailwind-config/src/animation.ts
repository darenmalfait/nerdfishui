export const animation = {
	keyframes: {
		'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' },
		},
		'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' },
		},
		shake: {
			'0%': {
				transform: 'translateX(0px)',
			},
			'15%': {
				transform: 'translateX(-3px)',
			},
			'25%': {
				transform: 'translateX(3px)',
			},
			'45%': {
				transform: 'translateX(-2px)',
			},
			'65%': {
				transform: 'translateX(3px)',
			},
			'85%': {
				transform: 'translateX(-2px)',
			},
			'100%': {
				transform: 'translateX(0px)',
			},
		},
		pop: {
			'0%': {
				transform: 'scaleX(1) scaleY(1)',
			},
			'20%, 45%': {
				transform: 'scaleX(1.35) scaleY(0.1)',
			},
			'65%': {
				transform: 'scaleX(0.8) scaleY(1.7)',
			},
			'80%': {
				transform: 'scaleX(0.6) scaleY(0.85)',
			},
			'100%': {
				transform: 'scaleX(1) scaleY(1)',
			},
		},
		'caret-blink': {
			'0%,70%,100%': { opacity: '1' },
			'20%,50%': { opacity: '0' },
		},
	},
	animation: {
		'accordion-down': 'accordion-down 0.2s ease-out',
		'accordion-up': 'accordion-up 0.2s ease-out',
		shake: `shake 0.5s  cubic-bezier(0.4, 0, 1, 1)`,
		pop: 'pop .3s cubic-bezier(0.4, 0, 1, 1)',
		'caret-blink': 'caret-blink 1.25s ease-out infinite',
	},
}
