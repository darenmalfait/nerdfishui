'use client'

import * as React from 'react'
import Link from 'next/link'
import {Button} from '@nerdfish/ui'

export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="https://nerdfish.be">Nerdfish</Link>
    </Button>
  )
}
