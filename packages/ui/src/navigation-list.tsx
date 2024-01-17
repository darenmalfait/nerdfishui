'use client'

import * as React from 'react'
import {cva, cx} from '@nerdfish/utils'

import {Tooltip} from './tooltip'

const navItemVariants = cva(
  'inline-flex min-w-0 max-w-full items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-secondary text-primary hover:bg-gray-200 dark:hover:bg-gray-700',
        ghost: 'hover:bg-secondary hover:text-primary',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type NavItemProps = JSX.IntrinsicElements['a'] & {
  isCollapsed?: boolean
  icon?: React.ElementType
  active?: boolean
  label?: string
  title?: string
  as?: React.ElementType
}

function Item<T>({
  as,
  className,
  icon: Icon,
  isCollapsed,
  active,
  title,
  label,
  ...props
}: NavItemProps & T) {
  const Link = as ?? 'a'

  if (isCollapsed) {
    return (
      <Tooltip delayDuration={0}>
        <Tooltip.Trigger asChild>
          <Link
            className={cx(
              navItemVariants({
                variant: active ? 'default' : 'ghost',
                size: 'icon',
              }),
              'h-9 w-9',
            )}
            {...props}
          >
            {Icon ? <Icon className="h-4 w-4" /> : null}
            <span className="sr-only">{title}</span>
          </Link>
        </Tooltip.Trigger>

        <Tooltip.Content side="right" className="flex items-center gap-4">
          {title}
          {label ? (
            <span className="text-secondary ml-auto">{label}</span>
          ) : null}
        </Tooltip.Content>
      </Tooltip>
    )
  }

  return (
    <Link
      className={cx(
        navItemVariants({variant: active ? 'default' : 'ghost', size: 'sm'}),
        'justify-start',
      )}
      {...props}
    >
      {Icon ? <Icon className="mr-2 h-4 w-4" /> : null}
      <span className="min-w-0 max-w-full flex-1 truncate">{title}</span>
      {label ? <span className={cx('ml-auto')}>{label}</span> : null}
    </Link>
  )
}

function Title({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cx(
        'mb-2 px-2 text-lg font-semibold tracking-tight',
        className,
      )}
    >
      {children}
    </h2>
  )
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cx('pb-4 grid gap-1', className)}>{children}</div>
}

const NavigationListRoot = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['nav']
>(function NavigationList({className, children, ...props}, ref) {
  return (
    <nav
      {...props}
      ref={ref}
      className={cx(
        'group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2',
        className,
      )}
    >
      <div
        className={cx(
          'grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2',
          className,
        )}
      >
        {children}
      </div>
    </nav>
  )
})

const NavigationList = Object.assign(NavigationListRoot, {
  Item,
  Title,
  Section,
})

export {NavigationList}
