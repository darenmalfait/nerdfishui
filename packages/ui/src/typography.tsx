'use client'

import * as React from 'react'
import {ExtractProps, VariantProps, cva, cx} from '@nerdfish/utils'

const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  JSX.IntrinsicElements['p'] & {
    prose?: boolean
    as?: React.ElementType
  }
>(function Paragraph({className, prose = false, as: Tag = 'p', ...props}, ref) {
  return (
    <Tag
      {...props}
      ref={ref}
      className={cx(
        'max-w-full leading-7 mt-6 first:mt-0',
        prose ? 'prose prose-light dark:prose-invert' : 'text-primary',
        className,
      )}
    />
  )
})
Paragraph.displayName = 'Paragraph'

const specialClassName =
  'relative bg-gradient-to-r from-[var(--colors-nerdfish-100)] via-[var(--colors-nerdfish-500)] to-[var(--colors-nerdfish-900)] bg-clip-text'

const DEFAULT_TITLE_SIZE = 'h2'

const titleVariants = cva('', {
  variants: {
    size: {
      // Keep this the same to the prose styles in styles.css
      h1: 'scroll-m-20 font-title text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]',
      h2: 'mt-10 first:mt-0 scroll-m-20 font-title text-3xl font-extrabold tracking-tight lg:text-4xl',
      h3: 'mt-8 first:mt-0 scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'mt-8 first:mt-0 scroll-m-20 text-xl font-semibold tracking-tight',
      h5: 'mt-8 first:mt-0 text-lg font-bold md:text-xl',
      h6: 'mt-8 first:mt-0 text-lg font-bold',
    },
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
      special: 'text-transparent',
    },
  },
  defaultVariants: {
    size: DEFAULT_TITLE_SIZE,
  },
})

const Title = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h1'] &
    VariantProps<typeof titleVariants> & {
      as?: React.ElementType
    }
>(function Title(
  {
    className,
    as,
    size,
    variant = size === 'h1' || size === 'h2' ? 'special' : 'primary',
    ...props
  },
  ref,
) {
  const Tag = as ?? size ?? DEFAULT_TITLE_SIZE

  return (
    <Tag
      {...props}
      ref={ref}
      className={cx(
        titleVariants({
          size,
          variant,
        }),
        variant === 'special' && specialClassName,
        className,
      )}
    />
  )
})

const H1 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h1'] & ExtractProps<typeof Title>
>(function H1(props, ref) {
  return <Title {...props} size="h1" ref={ref} />
})

const H2 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h2'] & ExtractProps<typeof Title>
>(function H2(props, ref) {
  return <Title {...props} size="h2" ref={ref} />
})

const H3 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h3'] & ExtractProps<typeof Title>
>(function H3(props, ref) {
  return <Title {...props} size="h3" ref={ref} />
})

const H4 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h4'] & ExtractProps<typeof Title>
>(function H4(props, ref) {
  return <Title {...props} size="h4" ref={ref} />
})

const H5 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h5'] & ExtractProps<typeof Title>
>(function H5(props, ref) {
  return <Title {...props} size="h5" ref={ref} />
})

const H6 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h6'] & ExtractProps<typeof Title>
>(function H6(props, ref) {
  return <Title {...props} size="h6" ref={ref} />
})

export {H1, H2, H3, H4, H5, H6, Paragraph}
