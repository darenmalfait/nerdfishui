'use client'

import * as React from 'react'
import {cx} from '@nerdfish/utils'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({className, align = 'center', sideOffset = 4, ...props}, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cx(
      'z-50 w-64 rounded-md shadow-outline bg-muted p-4 shadow-soft-xl outline-none animate-in zoom-in-90',
      className,
    )}
    {...props}
  />
))
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

const HoverCard = Object.assign(HoverCardPrimitive.Root, {
  Content: HoverCardContent,
  Trigger: HoverCardPrimitive.Trigger,
})

export {HoverCard}
