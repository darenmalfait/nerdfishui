import * as React from 'react'
import {cx} from '@nerdfish/utils'

import {Description, InputError, Label} from './input'

function FieldLabel({
  htmlFor,
  label,
  className,
}: {
  htmlFor: string
  label?: string
  className?: string
}) {
  if (!label) return null

  return (
    <Label htmlFor={htmlFor} className={className}>
      {label}
    </Label>
  )
}

function FieldDescription({
  description,
  className,
}: {
  description?: React.ReactNode
  className?: string
}) {
  if (!description) return null

  return <Description className={className}>{description}</Description>
}

function FieldError({
  error,
  errorId,
}: {
  error?: string | null
  errorId?: string
}) {
  if (!error) return null

  return (
    <InputError className="mt-3" id={errorId}>
      {error}
    </InputError>
  )
}

type FieldProps = {
  htmlFor: string
  label?: string
  error?: string | null
  errorId?: string
  description?: React.ReactNode
  descriptionId?: string
}

const Field = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'> & FieldProps
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
      <FieldLabel
        label={label}
        htmlFor={htmlFor}
        className={!description ? 'mb-3' : undefined}
      />
      <FieldDescription description={description} className="mb-3" />
      {children}
      <FieldError error={error} errorId={errorId} />
    </div>
  )
})

export {Field, type FieldProps}
