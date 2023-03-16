'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'

type NavigationItemProps = {
  className?: string | ((props: {isActive: boolean}) => string | undefined)
  title: string
  href?: string
  to?: string
  as?: React.ElementType
  icon?: React.ElementType
}

function getNavigationItemClassName(className?: string) {
  return cx(
    'flex w-full items-center gap-x-2 px-3 py-2 no-underline truncate text-xs font-bold text-primary rounded-lg bg-black/0 transition hover:bg-black/5 dark:bg-white/0 dark:hover:bg-white/5',
    className,
  )
}

function Item<T>({
  as,
  className,
  title,
  href,
  to,
  icon: Icon,
  ...props
}: NavigationItemProps & T) {
  const Link = as ?? 'a'

  return (
    <Link
      href={href}
      to={to}
      className={getNavigationItemClassName(className as string)}
      {...props}
    >
      {Icon ? <Icon className="mr-2 -ml-1 h-4 w-4 shrink-0" /> : null}
      <span>{title}</span>
    </Link>
  )
}

const NavigationListRoot = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['nav']
>(function NavigationList({className, children, ...props}, ref) {
  return (
    <nav {...props} ref={ref} className={className}>
      <div className={cx('space-y-1', className)}>{children}</div>
    </nav>
  )
})

const NavigationList = Object.assign(NavigationListRoot, {
  Item,
})

export {NavigationList, getNavigationItemClassName}
