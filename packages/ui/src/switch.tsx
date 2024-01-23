'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import * as SwitchPrimitives from '@radix-ui/react-switch'

import {getInputClassName} from './input'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({className, ...props}, ref) => (
  <SwitchPrimitives.Root
    className={cx(
      getInputClassName(),
      // basic styles
      'peer inline-flex p-0 h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full transition-colors',
      // checked state
      'data-[state=checked]:bg-inverted data-[state=checked]:border-transparent dark:data-[state=checked]:bg-inverted/50',
      // disabled state
      'disabled-within:opacity-50 disabled-within:cursor-not-allowed disabled-within:shadow-none disabled-within:hover:border-transparent',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cx(
        'pointer-events-none block h-5 w-5 rounded-full bg-primary dark:bg-inverted shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=checked]:bg-primary data-[state=unchecked]:translate-x-0.5',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export {Switch}
