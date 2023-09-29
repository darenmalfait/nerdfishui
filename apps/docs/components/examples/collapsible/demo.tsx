'use client'

import * as React from 'react'
import {Button, Collapsible} from '@nerdfish/ui'
import {ChevronsUpDown} from 'lucide-react'

export function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@darenmalfait</h4>
        <Collapsible.Trigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex w-9 justify-center p-0"
          >
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </Collapsible.Trigger>
      </div>
      <div className="rounded-2xl border border-gray-200 px-4 py-3 font-mono text-sm dark:border-gray-700">
        Omnis cum inventore harum exercitationem illum.
      </div>
      <Collapsible.Content className="space-y-2">
        <div className="rounded-2xl border border-gray-200 px-4 py-3 font-mono text-sm dark:border-gray-700">
          Explicabo aut debitis vitae at quo.
        </div>
        <div className="rounded-2xl border border-gray-200 px-4 py-3 font-mono text-sm dark:border-gray-700">
          Non tempora provident.
        </div>
      </Collapsible.Content>
    </Collapsible>
  )
}
