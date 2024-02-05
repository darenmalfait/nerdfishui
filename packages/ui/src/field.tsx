import * as React from 'react'
import {cx} from '@nerdfish/utils'

import {Description, InputError, Label} from './input'

function FieldLabel({htmlFor, label}: {htmlFor: string; label?: string}) {
  if (!label) return null

  return (
    <Label htmlFor={htmlFor} className="mb-2">
      {label}
    </Label>
  )
}

function FieldDescription({description}: {description?: React.ReactNode}) {
  if (!description) return null

  return <Description className="mt-3">{description}</Description>
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

const Field = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithRef<'div'> & {
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
      <FieldLabel label={label} htmlFor={htmlFor} />
      {children}
      <FieldDescription description={description} />
      <FieldError error={error} errorId={errorId} />
    </div>
  )
})

export {Field}
