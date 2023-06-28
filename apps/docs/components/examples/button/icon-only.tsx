'use client'

import * as React from 'react'
import {Button} from '@nerdfish/ui'
import {Mail} from 'lucide-react'

export function ButtonIconOnly() {
  return (
    <Button size="icon">
      <Mail className="h-4 w-4" />
      <span className="sr-only">Mail</span>
    </Button>
  )
}
