'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import * as PopoverPrimitive from '@radix-ui/react-popover'

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({className, align = 'center', sideOffset = 4, ...props}, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cx(
        'animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 z-50 w-72 rounded-md border border-gray-100 bg-white p-4 shadow-md outline-none dark:border-gray-800 dark:bg-gray-800',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

const Popover = Object.assign(PopoverPrimitive.Root, {
  Content: PopoverContent,
  Trigger: PopoverPrimitive.Trigger,
})

export {Popover}
