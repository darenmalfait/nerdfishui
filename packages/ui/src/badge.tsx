import * as React from 'react'
import {cva, cx, VariantProps} from '@nerdfish/utils'

const badgeVariants = cva(
  'focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200',
        secondary:
          'bg-secondary text-primary active-ring border-transparent hover:bg-gray-200  dark:hover:bg-gray-700',
        danger:
          'bg-danger hover:bg-danger-900 active-ring set-colors-accent-danger border-transparent text-white',
        outline: 'text-primary',
        success: 'bg-success hover:bg-success/80 text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({className, variant, ...props}: BadgeProps) {
  return <div className={cx(badgeVariants({variant}), className)} {...props} />
}

export {Badge, badgeVariants}
