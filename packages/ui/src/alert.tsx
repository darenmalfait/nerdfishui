'use client'

import * as React from 'react'
import {cva, cx, VariantProps} from '@nerdfish/utils'
import {AlertTriangle, Info, Verified, XCircle} from 'lucide-react'

const DEFAULT_VARIANT = 'info'

const bgVariants = cva('rounded-lg p-4', {
  variants: {
    variant: {
      warning: 'border-warning bg-warning-muted border',
      success: 'border-success bg-success-muted border',
      info: 'border-info bg-info-muted border',
      danger: 'border-danger bg-danger-muted border',
    },
  },
  defaultVariants: {
    variant: DEFAULT_VARIANT,
  },
})

const fgVariants = cva('', {
  variants: {
    variant: {
      warning: 'text-warning',
      success: 'text-success',
      info: 'text-info',
      danger: 'text-danger',
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
  React.ComponentPropsWithRef<'div'> & {
    variant?: VariantProps<typeof bgVariants>['variant']
    hideIcon?: boolean
    title?: React.ReactNode
    children?: React.ReactNode
    description?: string // TODO: DEPRECATED, REMOVE
  }
>(function Alert(
  {
    className,
    variant,
    hideIcon,
    title,
    children,
    description: descriptionDeprecated,
    ...props
  },
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
          {children ? (
            <div className={cx('text-sm', fgVariants({variant}))}>
              {children}
            </div>
          ) : null}
          {descriptionDeprecated ? (
            <div className={cx('text-sm', fgVariants({variant}))}>
              {descriptionDeprecated}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
})
Alert.displayName = 'Alert'

export {Alert}
