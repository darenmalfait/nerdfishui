'use client'

import * as React from 'react'
import {Toggle} from '@nerdfish/ui'
import {Bold, Italic} from 'lucide-react'

export function ToggleSize() {
  return (
    <div className="flex flex-wrap gap-3">
      <Toggle size="lg" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle size="sm" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  )
}
