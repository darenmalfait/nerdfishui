'use client'

import * as React from 'react'
import {cva, cx, VariantProps} from '@nerdfish/utils'

const containerVariants = cva('col-span-full', {
  variants: {
    size: {
      default: 'lg:col-span-6 lg:col-start-4',
      small: 'lg:col-span-6 lg:col-start-4',
      medium: 'lg:col-span-8 lg:col-start-3',
      full: 'lg:col-start-0 lg:col-span-12',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

const Container = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div'] & {
    as?: React.ElementType
  } & VariantProps<typeof containerVariants>
>(function Container({className, size, as: Tag = 'div', ...props}, ref) {
  return (
    <Tag
      {...props}
      ref={ref}
      className={cx(containerVariants({size}), className)}
    />
  )
})
Container.displayName = 'Container'

const Section = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['section'] & {
    as?: React.ElementType
  }
>(function Section({className, as: Tag = 'section', ...props}, ref) {
  return (
    <Tag
      {...props}
      ref={ref}
      className={cx('box-border w-full items-center', className)}
    />
  )
})
Section.displayName = 'Section'

export {Container, Section}
