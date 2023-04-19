import * as React from 'react'
import {VariantProps, cva, cx} from '@nerdfish/utils'

const badgeVariants = cva(
  'focus:ring-ring inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'bg-inverse hover:bg-inverse/80 text-inverse border-transparent',
        secondary:
          'bg-secondary hover:bg-secondary/80 text-secondary border-transparent',
        danger: 'bg-danger hover:bg-secondary/80 border-transparent text-white',
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
