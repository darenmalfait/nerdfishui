import * as React from 'react'
import {cx} from '@nerdfish/utils'

export function Prose({
  as: Component = 'div',
  className,
  ...props
}: {
  as?: React.ElementType
  className?: string
  [key: string]: any
}) {
  return (
    <Component
      className={cx(
        className,
        'prose mx-auto max-w-screen-lg dark:prose-invert',
      )}
      {...props}
    />
  )
}
