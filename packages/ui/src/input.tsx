'use client'

import * as React from 'react'
import {cva, cx, VariantProps} from '@nerdfish/utils'
import {AlertCircle} from 'lucide-react'

const inputVariants = cva(
  'w-full rounded-lg border-0 bg-transparent outline-none placeholder:text-gray-500',
  {
    variants: {
      size: {
        sm: 'p-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-8 py-5 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

const addonVariants = cva(
  'bg-popover inline-flex w-auto font-normal shadow-none',
  {
    variants: {
      size: {
        sm: 'm-1 px-3 py-0 text-xs',
        md: 'm-1 px-3 py-1 text-base',
        lg: 'mx-2 my-1 p-3 text-lg',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

type InputSize = VariantProps<typeof inputVariants>['size']

type RawInputProps = {
  hasError?: boolean
  icon?: React.ElementType
  inputSize?: InputSize
  addOnLeading?: React.ReactNode
  addOnTrailing?: React.ReactNode
  action?: () => void
} & (
  | ({type: 'textarea'} & JSX.IntrinsicElements['textarea'])
  | JSX.IntrinsicElements['input']
)

type InputProps = {
  defaultValue?: string | null
  name: string
  label?: string
  className?: string
  error?: string | null
  description?: React.ReactNode
}

function getInputClassName(
  className?: string,
  hasError?: boolean,
  inputSize: InputSize = 'md',
  isInputField: boolean = true,
) {
  return cx(
    'text-md focus-ring group w-full rounded-lg font-bold disabled:opacity-70',
    isInputField && inputVariants({size: inputSize}),
    hasError
      ? 'border border-red-100 bg-red-50 dark:border-red-200 dark:border-red-200/20 dark:bg-red-500/10'
      : 'bg-black/5 dark:bg-white/10 text-primary',

    className,
  )
}

function FormHelperText({className, ...props}: JSX.IntrinsicElements['div']) {
  return (
    <div className={cx('text-sm text-primary-400', className)} {...props} />
  )
}

function Label({className, htmlFor, ...props}: JSX.IntrinsicElements['label']) {
  return (
    <label
      htmlFor={htmlFor}
      className={cx('block text-sm font-medium text-secondary', className)}
      {...props}
    />
  )
}

function Addon({
  children,
  className,
  inputSize,
}: {
  children: React.ReactNode
  className?: string
  inputSize?: InputSize
}) {
  return (
    <div className={cx(addonVariants({size: inputSize}), className)}>
      <div className="flex flex-col justify-center leading-7">
        <span className="flex whitespace-nowrap">{children}</span>
      </div>
    </div>
  )
}

const RawInput = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  RawInputProps
>(function RawInput(props, ref) {
  const {
    type,
    hasError,
    addOnLeading,
    addOnTrailing,
    children,
    inputSize,
    icon: Icon,
    ...rawInputProps
  } = props

  const className = getInputClassName(
    props.className,
    hasError,
    inputSize,
    false,
  )

  if (type === 'textarea') {
    return (
      <div
        className={cx(className, 'relative flex w-full items-center space-x-2')}
      >
        {Icon ? (
          <Icon
            width="20px"
            height="20px"
            className={cx(
              'absolute top-0 right-5 z-10 flex h-full items-center justify-center p-0',
              hasError && 'text-red-500',
            )}
          />
        ) : null}
        <textarea
          {...(rawInputProps as JSX.IntrinsicElements['textarea'])}
          ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
          aria-invalid={hasError}
          className={cx('h-36', inputVariants({size: inputSize}), {
            'pr-14': !!Icon,
          })}
        />
        {children ? <div className="flex shrink-0">{children}</div> : null}
      </div>
    )
  }

  return (
    <div className="flex flex-nowrap items-center space-x-2">
      <div
        className={cx(className, 'relative flex w-full items-center shadow-sm')}
      >
        {addOnLeading ? (
          <Addon inputSize={inputSize} className="rounded-l-lg">
            {addOnLeading}
          </Addon>
        ) : null}
        <input
          type={type}
          {...(rawInputProps as JSX.IntrinsicElements['input'])}
          className={cx(
            !!addOnLeading && '!pl-2',
            !!Icon && 'pr-14',
            inputVariants({size: inputSize}),
          )}
          ref={ref as React.ForwardedRef<HTMLInputElement>}
        />
        {Icon && !hasError ? (
          <Icon
            width="20px"
            height="20px"
            className="text-gray-300' absolute right-5 top-0 z-10 flex h-full items-center justify-center p-0"
          />
        ) : null}
        {hasError ? (
          <div className="absolute right-5 top-0 z-10 flex h-full items-center justify-center p-0">
            <AlertCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        ) : null}
        {addOnTrailing ? (
          <Addon inputSize={inputSize} className="rounded-r-lg">
            {addOnTrailing}
          </Addon>
        ) : null}
      </div>
      {children ? <div className="flex shrink-0">{children}</div> : null}
    </div>
  )
})

function InputError({
  className,
  id,
  ...props
}: JSX.IntrinsicElements['p'] & {id?: string}) {
  if (!props.children) {
    return null
  }

  return (
    <p
      {...props}
      className={cx('mb-0 text-sm text-left text-red-600', className)}
      role="alert"
      id={id}
    />
  )
}

const Field = React.forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements['div'] & {
    htmlFor: string
    label?: string
    error?: string | null
    errorId?: string
    description?: React.ReactNode
    descriptionId?: string
  }
>(function Field(
  {
    children,
    className,
    description,
    descriptionId,
    error,
    errorId,
    htmlFor,
    label,
    ...props
  },
  ref,
) {
  return (
    <div className={cx('w-full', className)} {...props} ref={ref}>
      {label ? (
        <Label htmlFor={htmlFor} className="mb-2">
          {label}
        </Label>
      ) : null}
      {children}
      {description ? (
        <span className="text-secondary mt-2 text-sm" id={descriptionId}>
          {description}
        </span>
      ) : null}
      {error ? (
        <InputError className="mt-2" id={errorId}>
          {error}
        </InputError>
      ) : null}
    </div>
  )
})

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps & RawInputProps
>(function Input(
  {defaultValue, error, name, label, className, description, id, ...props},
  ref,
) {
  const inputId = id ?? name
  const errorId = `${inputId}-error`
  const descriptionId = `${inputId}-description`

  return (
    <Field
      {...{
        description,
        descriptionId,
        error,
        errorId,
        htmlFor: inputId,
        label,
      }}
    >
      <RawInput
        hasError={!!error}
        {...(props as RawInputProps)}
        ref={ref}
        name={name}
        id={inputId}
        autoComplete={name}
        required
        defaultValue={defaultValue}
        aria-describedby={
          error ? errorId : description ? descriptionId : undefined
        }
      />
    </Field>
  )
})

export {
  Field,
  FormHelperText,
  getInputClassName,
  Input,
  InputError,
  Label,
  RawInput,
}

export type {RawInputProps, InputProps, InputSize}
