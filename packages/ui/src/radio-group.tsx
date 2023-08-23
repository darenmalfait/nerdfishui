'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import {Circle} from 'lucide-react'

import {InputError, Label} from './input'

const RadioGroupRoot = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    label?: string
    description?: string
    error?: string
  }
>(({className, label, description, error, ...props}, ref) => {
  const inputId = props.id ?? props.name
  const errorId = `${inputId}-error`
  const descriptionId = `${inputId}-description`

  return (
    <div className="w-full">
      {label ? (
        <div className="flex flex-col justify-between gap-y-1 md:flex-row md:gap-x-1 md:gap-y-0">
          <Label htmlFor={inputId} className="mb-2">
            {label}
          </Label>
          {description ? (
            <span className="text-sm text-gray-200" id={descriptionId}>
              {description}
            </span>
          ) : null}
        </div>
      ) : null}

      <RadioGroupPrimitive.Root
        className={cx('grid gap-2', className)}
        {...props}
        ref={ref}
      />

      {error ? (
        <InputError className="mt-2" id={errorId}>
          {error}
        </InputError>
      ) : null}
    </div>
  )
})
RadioGroupRoot.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({className, children, ...props}, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cx(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
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
})

export {RadioGroup}
