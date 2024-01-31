'use client'

import * as React from 'react'
import {cva, cx, deprecateComponent, VariantProps} from '@nerdfish/utils'

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

const DeprecatedContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'> & {
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
DeprecatedContainer.displayName = 'Container'

const Container = deprecateComponent(
  DeprecatedContainer,
  'Container is deprecated, use the built-in tailwind classes instead.',
)

const DeprecatedSection = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'section'> & {
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
DeprecatedSection.displayName = 'Section'

const Section = deprecateComponent(
  DeprecatedSection,
  'Section is deprecated, use the built-in tailwind classes instead.',
)

export {Container, Section}
