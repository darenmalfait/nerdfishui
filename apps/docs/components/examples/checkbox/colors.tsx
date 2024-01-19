'use client'

import * as React from 'react'
import {Checkbox} from '@nerdfish/ui'

export function CheckboxColors() {
  return (
    <div className="items-top flex flex-col space-x-2">
      <Checkbox
        bgClassName="text-danger"
        textClassName="text-white"
        name="newsletters4"
        label="Subscribe to our newsletter"
        defaultChecked
      />
    </div>
  )
}
