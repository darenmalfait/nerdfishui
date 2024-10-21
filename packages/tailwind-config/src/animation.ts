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
		rubber: {
			'0%': {
				'-webkit-transform': 'scaleX(1)',
				transform: 'scaleX(1)',
			},
			'30%': {
				'-webkit-transform': 'scale3d(1.25, .75, 1)',
				transform: 'scale3d(1.25, .75, 1)',
			},
			'40%': {
				'-webkit-transform': 'scale3d(.75, 1.25, 1)',
				transform: 'scale3d(.75, 1.25, 1)',
			},
			'50%': {
				'-webkit-transform': 'scale3d(1.15, .85, 1)',
				transform: 'scale3d(1.15, .85, 1)',
			},
			'65%': {
				'-webkit-transform': 'scale3d(.95, 1.05, 1)',
				transform: 'scale3d(.95, 1.05, 1)',
			},
			'75%': {
				'-webkit-transform': 'scale3d(1.05, .95, 1)',
				transform: 'scale3d(1.05, .95, 1)',
			},
			'100%': {
				'-webkit-transform': 'scaleX(1)',
				transform: 'scaleX(1)',
			},
		},
		squeeze: {
			'0%': {
				transform: 'scaleY(1)',
			},
			'15%': {
				transform: 'scaleY(0.95)',
			},
			'30%': {
				transform: 'scaleY(0.9)',
			},
			'55%': {
				transform: 'scaleY(0.75)',
			},
			'70%': {
				transform: 'scaleY(1.3)',
			},
			'85%': {
				transform: 'scaleY(0.95)',
			},
			'90%': {
				transform: 'scaleY(1)',
			},
		},
		loader: {
			'0%': {
				transform: 'rotate(0deg)',
			},
			'25%': {
				transform: 'rotate(180deg)',
			},
			'50%': {
				transform: 'rotate(180deg)',
			},
			'75%': {
				transform: 'rotate(360deg)',
			},
			'100%': {
				transform: 'rotate(360deg)',
			},
		},
		'loader-inner': {
			'0%': {
				height: '0%',
			},
			'25%': {
				height: '0%',
			},
			'50%': {
				height: '100%',
			},
			'75%': {
				height: '100%',
			},
			'100%': {
				height: '0%',
			},
		},
	},
	animation: {
		'accordion-down': 'accordion-down 0.2s ease-out',
		'accordion-up': 'accordion-up 0.2s ease-out',
		shake: `shake 0.5s  cubic-bezier(0.4, 0, 1, 1)`,
		pop: 'pop .3s cubic-bezier(0.4, 0, 1, 1)',
		'caret-blink': 'caret-blink 1.25s ease-out infinite',
		rubber: 'rubber 1s cubic-bezier(0.4, 0, 1, 1)',
		squeeze: 'squeeze 1s ease-out',
		loader: 'loader 2s linear infinite',
		'loader-inner': 'loader-inner 2s linear infinite',
	},
}
