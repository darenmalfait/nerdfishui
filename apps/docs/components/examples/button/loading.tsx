'use client'

import * as React from 'react'
import {Button} from '@nerdfish/ui'
import {Loader2} from 'lucide-react'

export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 size-4 animate-spin" />
      Please wait
    </Button>
  )
}
