'use client'

import * as React from 'react'
import {Button} from '@nerdfish/ui'
import {Mail} from 'lucide-react'

export function ButtonWithIcon() {
  return (
    <Button>
      <Mail className="mr-2 size-4" /> Login with Email
    </Button>
  )
}
