import * as React from 'react'
import {Alert} from '@nerdfish/ui'

export function AlertSuccess() {
  return (
    <Alert
      variant="success"
      title="example"
      description="example description"
      className="w-full"
    />
  )
}
