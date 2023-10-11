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
  active?: boolean
}

function getNavigationItemClassName({
  className,
  active,
}: {
  className?: string
  active?: boolean
}) {
  return cx(
    'py-2 no-underline items-center cursor-pointer truncate text-sm my-0 flex items-center whitespace-nowrap rounded-md px-4 font-semibold text-primary transition-colors',
    active && 'bg-primary',
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
  active,
  ...props
}: NavigationItemProps & T) {
  const Link = as ?? 'a'

  return (
    <Link
      href={href}
      to={to}
      className={getNavigationItemClassName({
        className: className as string,
        active,
      })}
      {...props}
    >
      {Icon ? (
        <Icon
          className={cx(
            '-ml-1 mr-2 flex h-8 w-8 p-2 shrink-0 items-center justify-center rounded-md bg-center text-center xl:p-2',
            active
              ? 'bg-gradient-to-r from-nerdfish-100 via-nerdfish-500 to-nerdfish-900 text-white'
              : 'bg-primary text-primary',
          )}
        />
      ) : null}
      <span
        className={cx(
          'pointer-events-none opacity-100 duration-300',
          !Icon && 'py-2',
        )}
      >
        {title}
      </span>
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
