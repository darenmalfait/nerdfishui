'use client'

import * as React from 'react'
import {Toggle} from '@nerdfish/ui'
import {Italic} from 'lucide-react'

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  )
}
