import { cx } from '@nerdfish/utils'

const variantStyles = {
	small: '',
	medium: 'rounded-base px-1.5 ring-1 ring-inset',
}

const colorStyles = {
	emerald: {
		small: 'text-emerald-500 dark:text-emerald-400',
		medium:
			'ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400',
	},
	sky: {
		small: 'text-sky-500',
		medium:
			'ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400',
	},
	amber: {
		small: 'text-amber-500',
		medium:
			'ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400',
	},
	rose: {
		small: 'text-red-500 dark:text-rose-500',
		medium:
			'ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400',
	},
	gray: {
		small: 'text-gray-400 dark:text-gray-500',
		medium:
			'ring-gray-200 bg-gray-50 text-gray-500 dark:ring-gray-500/20 dark:bg-gray-400/10 dark:text-gray-400',
	},
}

export function Tag({
	children,
	variant = 'medium',
	color = 'emerald',
}: {
	children: string
	variant?: 'small' | 'medium'
	color?: 'emerald' | 'sky' | 'amber' | 'rose' | 'gray'
}) {
	return (
		<span
			className={cx(
				'rounded font-mono text-[0.625rem] font-semibold leading-6',
				variantStyles[variant],
				colorStyles[color][variant],
			)}
		>
			{children}
		</span>
	)
}
