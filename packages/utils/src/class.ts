import {VariantProps, cva} from 'class-variance-authority'
import {ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

function cx(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}

export {cx, cva}
export type {VariantProps}
