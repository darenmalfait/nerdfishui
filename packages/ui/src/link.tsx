'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import {ChevronRight} from 'lucide-react'

type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  disabled?: boolean
  external?: boolean
  as?: React.ElementType
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
  to?: string
  children?: React.ReactNode
}

const Link = React.forwardRef<HTMLElement, LinkProps>(
  function Link(props, ref) {
    const {
      disabled,
      external,
      onClick,
      to,
      href = to,
      className,
      as: Tag = 'a',
      ...rest
    } = props
    const externalProps = external
      ? {target: '_blank', rel: 'noopener noreferrer'}
      : null

    return (
      <Tag
        ref={ref}
        className={cx(
          'bg-transparent text-primary hover:bg-transparent dark:hover:bg-transparent inline-flex space-x-2',
          className,
        )}
        tabIndex={disabled ? -1 : undefined}
        to={href}
        href={href}
        aria-disabled={disabled}
        onClick={disabled ? (event: any) => event.preventDefault() : onClick}
        {...externalProps}
        {...rest}
      />
    )
  },
)

const DoubleLabelLink = React.forwardRef<
  HTMLElement,
  LinkProps & {
    description?: string
  }
>(function DoubleLabelLink(props, ref) {
  const {
    disabled,
    external,
    onClick,
    className,
    as: Tag = 'a',
    to,
    href = to,
    children,
    description,
    ...rest
  } = props
  const externalProps = external
    ? {target: '_blank', rel: 'noopener noreferrer'}
    : null

  return (
    <Tag
      ref={ref}
      className={cx(
        className,
        'group inline-flex items-center rounded-full p-1 pr-2 transition-colors bg-muted text-primary hover:bg-muted sm:text-base lg:text-sm xl:text-base',
      )}
      to={href}
      href={href}
      tabIndex={disabled ? -1 : undefined}
      aria-disabled={disabled}
      onClick={disabled ? (event: any) => event.preventDefault() : onClick}
      {...externalProps}
      {...rest}
    >
      {children ? (
        <span className="text-inverted bg-inverted rounded-full px-3 py-0.5 text-xs font-semibold uppercase leading-5 tracking-wide transition-colors">
          {children}
        </span>
      ) : null}

      {description ? <span className="ml-4 text-sm">{description}</span> : null}
      <ChevronRight
        className="text-primary/50 ml-2 h-5 w-5"
        aria-hidden="true"
      />
    </Tag>
  )
})

export {Link, DoubleLabelLink, type LinkProps}
