'use client'

import * as React from 'react'
import {Alert} from '@nerdfish/ui'

export function AlertWarning() {
  return (
    <Alert
      variant="warning"
      title="example"
      description="example description"
      className="w-full"
    />
  )
}
