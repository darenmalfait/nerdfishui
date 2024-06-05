import * as React from 'react'
import {cva, cx, type VariantProps} from '@nerdfish/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
  {
    variants: {
      variant: {
        danger: 'bg-danger border-danger text-danger',
        default: 'bg-inverted text-inverted border-transparent',
        info: 'bg-info border-info text-info',
        outline: 'text-primary',
        secondary: 'bg-muted text-primary active-ring border-transparent',
        success: 'bg-success-muted border-success text-success',
        warning: 'bg-warning border-warning text-warning',
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
