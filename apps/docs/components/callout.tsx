import * as React from 'react'
import {cx} from '@nerdfish/utils'

interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: 'default' | 'warning' | 'danger'
}

export function Callout({
  children,
  icon,
  type = 'default',
  ...props
}: CalloutProps) {
  return (
    <div
      className={cx(
        'my-6 flex items-start rounded-md border border-b-4 border-gray-900 p-4',
        {
          'border-gray-900 dark:border-gray-700': type === 'default',
          'border-red-600': type === 'danger',
          'border-yellow-500': type === 'warning',
        },
      )}
      {...props}
    >
      {icon ? <span className="mr-4 text-2xl">{icon}</span> : null}
      <div>{children}</div>
    </div>
  )
}
