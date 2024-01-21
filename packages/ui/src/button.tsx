'use client'

import * as React from 'react'
import {cva, cx, VariantProps} from '@nerdfish/utils'
import {Slot} from '@radix-ui/react-slot'

const buttonVariants = cva(
  'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-md border text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-90 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-inverted text-inverted active-ring hover:bg-inverted/75 disabled:bg-inverted/90 disabled:text-inverted/60 border-transparent',
        secondary:
          'bg-muted active:ring-primary/20 text-primary active-ring hover:bg-inverted/20 disabled:bg-muted/50 disabled:text-muted/80 border-transparent',
        nerdfish:
          'bg-nerdfish active:ring-nerdfish active-ring hover:bg-nerdfish/75 disabled:bg-nerdfish/20 disabled:text-nerdfish border-transparent text-white',
        danger:
          'bg-danger hover:bg-danger-muted border-danger disabled:bg-danger-muted/50 disabled:text-danger/80 active-ring text-danger active:ring-current',
        success:
          'bg-success hover:bg-success-muted border-success disabled:bg-success-muted/50 disabled:text-success/80 active-ring text-success active:ring-current',
        outline:
          'shadow-outline active:ring-muted/30 text-primary bg-primary active-ring hover:bg-muted disabled:text-primary/50',
        ghost:
          'text-primary hover:bg-muted disabled:text-primary/50 border-transparent',
        link: 'text-primary disabled:text-primary/50 border-none bg-transparent underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-6 rounded-md px-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-12 rounded-md px-10',
        icon: 'flex h-10 w-10 items-center justify-center rounded-md',
        iconSm: 'flex h-8 w-8 items-center justify-center rounded-md',
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
  accentuate,
  className,
}: VariantProps<typeof buttonVariants> & {
  className?: string
  accentuate?: boolean
}) {
  return cx(
    buttonVariants({variant, size, className}),
    accentuate &&
      'select-none rounded-full shadow-[0px_16px_6px_-16px_#ff4,4px_2px_4px_-2px_#f4f,-4px_2px_4px_-2px_#4f4] hover:shadow-[0px_16px_6px_-12px_#ff4,4px_6px_6px_-2px_#f4f,-4px_6px_6px_-2px_#4f4] active:translate-y-0 active:shadow-[0px_10px_3px_-16px_#ff4,8px_0px_2px_-2px_#f4f,-8px_0px_2px_-2px_#4f4]',
  )
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  accentuate?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({variant, asChild, size, className, accentuate, ...props}, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={getButtonClassName({
          variant,
          size,
          accentuate,
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
