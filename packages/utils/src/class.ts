import { type VariantProps, cva } from 'class-variance-authority'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cx(...args: ClassValue[]) {
	return twMerge(clsx(...args))
}

export { cx, cva }
export type { VariantProps }
