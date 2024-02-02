'use client'

import * as React from 'react'
import {Button} from '@nerdfish/ui'
import {Mail} from 'lucide-react'

export function ButtonSizes() {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="nerdfish" size="default">
        Default
      </Button>
      <Button variant="nerdfish" size="sm">
        Small
      </Button>
      <Button variant="nerdfish" size="lg">
        Large
      </Button>
      <Button variant="nerdfish" size="xl">
        Extra Large
      </Button>
      <Button variant="nerdfish" size="icon">
        <Mail className="size-4" />
        <span className="sr-only">Mail</span>
      </Button>
    </div>
  )
}
