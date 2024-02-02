'use client'

import * as React from 'react'
import {Toggle} from '@nerdfish/ui'
import {Italic} from 'lucide-react'

export function ToggleDisabled() {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <Italic className="size-4" />
    </Toggle>
  )
}
