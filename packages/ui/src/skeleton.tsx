import * as React from 'react'
import {cx} from '@nerdfish/utils'

function Skeleton({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx('animate-pulse rounded-2xl bg-secondary', className)}
      {...props}
    />
  )
}

export {Skeleton}
