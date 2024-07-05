import { cva, type VariantProps } from 'class-variance-authority'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cx(...args: ClassValue[]) {
	return twMerge(clsx(...args))
}

export { cx, cva }
export type { VariantProps }
