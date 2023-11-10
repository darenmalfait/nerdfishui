'use client'

import * as React from 'react'
import {Button} from '@nerdfish/ui'

export function ButtonAccentuate() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <Button variant="default" accentuate>
        Default
      </Button>
      <Button variant="nerdfish" accentuate>
        Nerdfish
      </Button>
      <Button variant="secondary" accentuate>
        Secondary
      </Button>
      <Button variant="danger" accentuate>
        Danger
      </Button>
      <Button variant="success" accentuate>
        Success
      </Button>
      <Button variant="ghost" accentuate>
        Ghost
      </Button>
      <Button variant="outline" accentuate>
        Outline
      </Button>
      <Button variant="link" accentuate>
        Link
      </Button>
    </div>
  )
}
