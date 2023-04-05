'use client'

import * as React from 'react'
import {ExtractProps, VariantProps, cva, cx} from '@nerdfish/utils'

import {Link} from './link'

const toggleVariants = cva(
  'group rounded-full no-underline font-title font-bold inline-flex space-x-2 items-center transition-transform active:scale-90',
  {
    variants: {
      variant: {
        default:
          'bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50 focus-ring',
        danger:
          'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600 focus-ring',
        success:
          'bg-green-500 text-white hover:bg-green-600 dark:hover:bg-green-600 focus-ring',
        outline:
          'bg-transparent border border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-100 focus-ring',
        subtle:
          'bg-gray-100 text-primary hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-700 focus-ring',
        ghost:
          'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100 dark:hover:text-gray-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent hover:underline text-primary hover:bg-transparent dark:hover:bg-transparent',
      },
      size: {
        default: 'h-10 py-2 px-4 text-sm',
        sm: 'h-9 px-3 text-xs',
        lg: 'h-11 px-8 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function getButtonClassName({
  variant = 'default',
  size = 'default',
  className,
}: VariantProps<typeof toggleVariants> & {
  className?: string
}) {
  return cx(toggleVariants({variant, size, className}))
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof toggleVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({variant, size, className, ...props}, ref) => {
    return (
      <button
        className={getButtonClassName({
          variant,
          size,
          className,
        })}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  ExtractProps<typeof Link> & ButtonProps
>(function ButtonLink({className, variant, size, disabled, ...rest}, ref) {
  return (
    <Link
      ref={ref}
      className={getButtonClassName({
        variant,
        size,
        className,
      })}
      {...rest}
    />
  )
})
ButtonLink.displayName = 'ButtonLink'

const ButtonGroup = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div']
>(function ButtonGroup({className, ...props}, ref) {
  return (
    <div
      ref={ref}
      className={cx(
        'flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4',
        className,
      )}
      {...props}
    />
  )
})
ButtonGroup.displayName = 'ButtonGroup'

export {Button, ButtonLink, ButtonGroup, getButtonClassName}
