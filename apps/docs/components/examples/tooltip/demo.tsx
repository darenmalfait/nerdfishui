import * as React from 'react'
import {Button, Tooltip, TooltipProvider} from '@nerdfish/ui'
import {Plus} from 'lucide-react'

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button
            variant="outline"
            className="flex w-10 items-center justify-center rounded-full p-0"
          >
            <Plus className="h-4 w-4" />
            <span className="sr-only">Add</span>
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          <p>Add to library</p>
        </Tooltip.Content>
      </Tooltip>
    </TooltipProvider>
  )
}
