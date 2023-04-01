import * as React from 'react'
import {Button} from '@nerdfish/ui'
import {Mail} from 'lucide-react'

export function ButtonWithIcon() {
  return (
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  )
}
