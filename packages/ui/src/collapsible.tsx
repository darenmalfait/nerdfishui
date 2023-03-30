'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent

const Collapsible = Object.assign(CollapsiblePrimitive.Root, {
  Trigger: CollapsibleTrigger,
  Content: CollapsibleContent,
})

export {Collapsible}
