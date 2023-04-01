import * as React from 'react'
import {Alert} from '@nerdfish/ui'

export function AlertDanger() {
  return (
    <Alert
      variant="danger"
      title="example"
      description="example description"
      className="w-full"
    />
  )
}
