'use client'

import * as React from 'react'
import {Alert} from '@nerdfish/ui'

export function AlertWarning() {
  return (
    <Alert variant="warning" title="example" className="w-full">
      Example alert
    </Alert>
  )
}
