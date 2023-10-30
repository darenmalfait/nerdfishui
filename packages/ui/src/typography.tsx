'use client'

import * as React from 'react'
import {cva, cx, ExtractProps, VariantProps} from '@nerdfish/utils'

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
      h1: 'font-title scroll-m-20 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]',
      h2: 'font-title mt-10 scroll-m-20 text-3xl font-extrabold tracking-tight first:mt-0 lg:text-4xl',
      h3: 'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0',
      h4: 'mt-8 scroll-m-20 text-xl font-semibold tracking-tight first:mt-0',
      h5: 'mt-8 text-lg font-bold first:mt-0 md:text-xl',
      h6: 'mt-8 text-lg font-bold first:mt-0',
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
      blurredClassName?: string
    }
>(function Title(
  {
    className,
    as,
    size,
    blurredClassName,
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
    >
      {size === 'h1' || size === 'h2' ? (
        <div
          className={cx(
            'absolute -left-8 z-10 h-12 w-32 rounded-full opacity-50 blur-3xl',
            {
              'bg-nerdfish': variant === 'special' && !blurredClassName,
              'bg-gray-900 dark:bg-gray-100':
                variant === 'primary' && !blurredClassName,
              'bg-gray-800 dark:bg-gray-200':
                variant === 'secondary' && !blurredClassName,
              blurredClassName,
            },
          )}
        />
      ) : null}
      {props.children}
    </Tag>
  )
})

const H1 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h1'] & ExtractProps<typeof Title>
>(function H1(props, ref) {
  return (
    <Title
      {...props}
      className={cx('relative', props.className)}
      size="h1"
      ref={ref}
    >
      {props.children}
    </Title>
  )
})

const H2 = React.forwardRef<
  HTMLHeadingElement,
  JSX.IntrinsicElements['h2'] & ExtractProps<typeof Title>
>(function H2(props, ref) {
  return (
    <Title
      {...props}
      className={cx('relative', props.className)}
      size="h2"
      ref={ref}
    >
      {props.children}
    </Title>
  )
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
