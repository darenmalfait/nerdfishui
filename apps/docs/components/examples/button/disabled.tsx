'use client'

import * as React from 'react'
import {Button} from '@nerdfish/ui'

export function ButtonDisabled() {
  return (
    <div className="flex space-x-2">
      <Button disabled variant="default">
        Default
      </Button>
      <Button disabled variant="nerdfish">
        Nerdfish
      </Button>
      <Button disabled variant="secondary">
        Secondary
      </Button>
      <Button disabled variant="danger">
        Danger
      </Button>
      <Button disabled variant="success">
        Success
      </Button>
      <Button disabled variant="ghost">
        Ghost
      </Button>
      <Button disabled variant="outline">
        Outline
      </Button>
      <Button disabled variant="link">
        Link
      </Button>
    </div>
  )
}
