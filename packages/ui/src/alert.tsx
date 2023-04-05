'use client'

import * as React from 'react'
import {VariantProps, cva, cx} from '@nerdfish/utils'
import {AlertTriangle, Info, Verified, XCircle} from 'lucide-react'

const DEFAULT_VARIANT = 'info'

const bgVariants = cva('rounded-lg p-4', {
  variants: {
    variant: {
      warning:
        'border border-orange-100 bg-orange-50 dark:border-orange-200 dark:border-orange-200/20 dark:bg-orange-500/10',
      success:
        'border border-green-100 bg-green-50 dark:border-green-200 dark:border-green-200/20 dark:bg-green-500/10',
      info: 'border border-blue-100 bg-blue-50 dark:border-blue-200 dark:border-blue-200/20 dark:bg-blue-500/10',
      danger:
        'border border-red-100 bg-red-50 dark:border-red-200 dark:border-red-200/20 dark:bg-red-500/10',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

const fgVariants = cva('', {
  variants: {
    variant: {
      warning: 'text-orange-900 dark:text-orange-200',
      success: 'text-green-900 dark:text-green-200',
      info: 'text-blue-900 dark:text-blue-200',
      danger: 'text-red-900 dark:text-red-200',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

const IconMap: Record<
  Exclude<VariantProps<typeof bgVariants>['variant'], undefined | null>,
  React.ElementType
> = {
  danger: XCircle,
  warning: AlertTriangle,
  success: Verified,
  info: Info,
}

const Alert = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div'] & {
    variant?: VariantProps<typeof bgVariants>['variant']
    hideIcon?: boolean
    title?: string
    description?: string
  }
>(function Alert(
  {className, variant, hideIcon, title, description, ...props},
  ref,
) {
  const Icon = variant ? IconMap[variant] : IconMap[DEFAULT_VARIANT]

  return (
    <div {...props} className={cx(bgVariants({variant}), className)} ref={ref}>
      <div className="flex">
        {hideIcon ? null : (
          <div className="shrink-0">
            <Icon
              className={cx('h-5 w-5 mt-2', fgVariants({variant}))}
              aria-hidden="true"
            />
          </div>
        )}
        <div className="ml-3">
          {title ? (
            <h3 className={cx('text-sm font-bold', fgVariants({variant}))}>
              {title}
            </h3>
          ) : null}
          {description ? (
            <div className={cx('text-sm', fgVariants({variant}))}>
              {description}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
})
Alert.displayName = 'Alert'

export {Alert}
