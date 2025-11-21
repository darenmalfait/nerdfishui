import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
	return twMerge(clsx(...args))
}

export function cx(...args: ClassValue[]) {
	console.warn(
		'cx is deprecated. Please use cn from @nerdfish/utils/class instead.',
	)
	return cn(...args)
}

export { type VariantProps, cva } from 'class-variance-authority'
