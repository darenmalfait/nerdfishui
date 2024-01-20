'use client'

import * as React from 'react'
import {cva, cx, VariantProps} from '@nerdfish/utils'
import {Check} from 'lucide-react'

import {type InputProps} from './input'

const toggleVariants = cva(
  'relative flex items-center justify-center rounded-full focus:scale-75',
  {
    variants: {
      variant: {
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
        lg: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'sm',
    },
  },
)

type RawCheckboxProps = JSX.IntrinsicElements['input'] &
  VariantProps<typeof toggleVariants> & {
    bgClassName?: string
    textClassName?: string
    icon?: React.ElementType
  }

function RawCheckbox({
  className,
  variant = 'sm',
  bgClassName = 'text-success',
  textClassName = 'text-white',
  icon: Icon = Check,
  ...props
}: RawCheckboxProps) {
  return (
    <label
      className={cx(
        bgClassName,
        props.disabled && 'opacity-50',
        toggleVariants({variant}),
        className,
      )}
    >
      <input {...props} className="peer sr-only" type="checkbox" />
      <span className="border-primary peer-[:not(:disabled)]:active-ring  peer-disabled:bg-inverted/20 peer-checked:animate-check peer-checked:border-success inline-block h-full w-full rounded-full border-2 text-current transition-all duration-300 peer-disabled:opacity-50 peer-[:not(:disabled)]:cursor-pointer" />
      <span className="peer-[:not(:disabled)]:active-ring absolute inset-0 hidden rounded-full peer-checked:block peer-[:not(:disabled)]:cursor-pointer">
        <Icon
          className={cx(textClassName, 'pointer-events-none h-full w-full p-1')}
        />
      </span>
    </label>
  )
}

const Checkbox = React.forwardRef<
  HTMLInputElement,
  InputProps & RawCheckboxProps
>(function Checkbox(
  {error, name, label, id, className, defaultValue, ...props},
  ref,
) {
  const inputId = id ?? name
  const errorId = `${inputId}-error`

  return (
    <div className={cx(className, 'group w-full')}>
      <div className="relative flex items-center">
        <div className="flex h-5 items-center">
          <RawCheckbox ref={ref} id={inputId} name={name} {...props} />
        </div>
        <div className="ml-3 text-base">
          <label htmlFor={inputId} className="text-primary">
            {label}
          </label>
        </div>
      </div>

      {error ? (
        <p className="text-danger mt-2 text-left text-sm" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  )
})

export {RawCheckbox, Checkbox}
export type {RawCheckboxProps}
