import * as React from 'react'
import {Label, RadioGroup} from '@nerdfish/ui'

export function RadioGroupDemo() {
  return (
    <RadioGroup name="radio-demo" defaultValue="comfortable" label="Spacing">
      <div className="flex items-center space-x-2">
        <RadioGroup.Item value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroup.Item value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroup.Item value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  )
}
