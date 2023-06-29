'use client'

import * as React from 'react'
import {VariantProps, cva, cx} from '@nerdfish/utils'
import {Slot} from '@radix-ui/react-slot'

const buttonVariants = cva(
  'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-inverse text-inverse active-ring hover:bg-gray-700 dark:hover:bg-gray-200',
        nerdfish:
          'bg-nerdfish hover:from-nerdfish active-ring hover:to-nerdfish-100 set-colors-accent-nerdfish text-white hover:bg-gradient-to-r',
        danger:
          'bg-danger hover:bg-danger-900 active-ring set-colors-accent-danger text-white',
        success:
          'bg-success hover:bg-success-900 active-ring set-colors-accent-success text-white',
        outline:
          'border-input text-primary bg-primary active-ring hover:text-primary border hover:bg-gray-100 dark:hover:bg-gray-800',
        secondary:
          'bg-secondary text-primary active-ring hover:bg-gray-200 dark:hover:bg-gray-700',
        ghost:
          'hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded px-3',
        lg: 'h-11 rounded px-8',
        xl: 'h-12 rounded px-10',
        icon: 'flex h-10 w-10 items-center justify-center',
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
}: VariantProps<typeof buttonVariants> & {
  className?: string
}) {
  return cx(buttonVariants({variant, size, className}))
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({variant, asChild, size, className, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
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

export {Button, ButtonGroup, getButtonClassName, buttonVariants}
