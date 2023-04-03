'use client'

import * as React from 'react'
import {Toggle} from '@nerdfish/ui'
import {Bold, Italic} from 'lucide-react'

export function ToggleVariant() {
  return (
    <div className="flex flex-wrap gap-3">
      <Toggle variant="default" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>
    </div>
  )
}
