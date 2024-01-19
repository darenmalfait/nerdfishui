'use client'

import * as React from 'react'
import {__DEV__, cx} from '@nerdfish/utils'

const Grid = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div'] & {
    as?: React.ElementType
    rowGap?: boolean
    nested?: boolean
    featured?: boolean
  }
>(function Grid(
  {className, as: Tag = 'div', nested, featured, rowGap, ...props},
  ref,
) {
  return (
    <Tag
      ref={ref}
      className={cx(
        'relative',
        nested ? 'w-full' : 'mx-5vw md:mx-10vw',
        featured && 'py-10 md:py-24 lg:pb-40 lg:pt-36',
      )}
    >
      {featured ? (
        <div className="-mx-5vw absolute inset-0">
          <div className="max-w-8xl bg-muted mx-auto h-full w-full rounded-lg" />
        </div>
      ) : null}

      <div
        {...props}
        className={cx(
          'relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6',
          !nested && 'mx-auto max-w-7xl',
          rowGap && 'gap-y-4 lg:gap-y-6',
          className,
        )}
      />
    </Tag>
  )
})
Grid.displayName = 'Grid'

/**
 * Use for development only! It renders the grid columns and gaps as page overlay
 */
function GridLines() {
  if (!__DEV__) {
    throw new Error('<GridLines />  should only be used during development')
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-10 select-none">
      <Grid>
        {Array.from({length: 12}).map((_, idx) => (
          <div
            key={idx}
            className="flex h-screen items-start bg-black text-black opacity-10"
          >
            <div className="w-full pt-4 text-center text-lg text-black">
              {idx + 1}
            </div>
          </div>
        ))}
      </Grid>
    </div>
  )
}

export {Grid, GridLines}
