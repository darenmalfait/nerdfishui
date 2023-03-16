'use client'

import * as React from 'react'
import {VariantProps, cva, cx} from '@nerdfish/utils'
import * as TogglePrimitive from '@radix-ui/react-toggle'

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors data-[state=on]:bg-gray-200 dark:hover:bg-gray-800 dark:data-[state=on]:bg-gray-700 focus:outline-none dark:text-gray-100 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-offset-gray-900 hover:bg-gray-100  dark:hover:text-gray-100 dark:data-[state=on]:text-gray-100',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'bg-transparent border border-gray-200 hover:bg-gray-100 dark:border-gray-700',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({className, variant, size, ...props}, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cx(toggleVariants({variant, size, className}))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export {Toggle, toggleVariants}
