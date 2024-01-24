'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import {Circle} from 'lucide-react'

import {Field} from './input'

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    name: string
    label?: string
    description?: string
    error?: string
  }
>(({className, label, description, id, name, error, ...props}, ref) => {
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
      <RadioGroupPrimitive.Root
        className={cx('grid gap-2', className)}
        {...props}
        ref={ref}
      />
    </Field>
  )
})
RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName

function RadioField({className, ...props}: JSX.IntrinsicElements['div']) {
  return (
    <div
      data-slot="field"
      {...props}
      className={cx(
        className,

        // Base layout
        'grid grid-cols-[1.125rem_1fr] items-center gap-x-4 gap-y-1 sm:grid-cols-[1rem_1fr]',

        // Control layout
        '[&>[data-slot=control]]:col-start-1 [&>[data-slot=control]]:row-start-1 [&>[data-slot=control]]:justify-self-center',

        // Label layout
        '[&>[data-slot=label]]:col-start-2 [&>[data-slot=label]]:row-start-1 [&>[data-slot=label]]:justify-self-start',

        // Description layout
        '[&>[data-slot=description]]:col-start-2 [&>[data-slot=description]]:row-start-2',

        // With description
        '[&_[data-slot=label]]:has-[[data-slot=description]]:font-medium',
      )}
    />
  )
}

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item> & {
    label?: React.ReactNode
    description?: React.ReactNode
  },
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({className, children, ...props}, ref) => {
  return (
    <RadioGroupPrimitive.Item
      data-slot="control"
      ref={ref}
      className={cx(
        'aspect-square h-4 w-4 rounded-full border border-muted text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-2.5 w-2.5 fill-current text-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

const RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItem,
  Field: RadioField,
})

export {RadioGroup}
