'use client'

import * as React from 'react'
import {ToggleGroup} from '@nerdfish/ui'
import {Bold, Italic, Underline} from 'lucide-react'

export function ToggleGroupDemo() {
  return (
    <div className="flex flex-col gap-2">
      <ToggleGroup type="single">
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
        <ToggleGroup.Item value="c">C</ToggleGroup.Item>
      </ToggleGroup>
      <ToggleGroup type="multiple">
        <ToggleGroup.Item value="bold" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="italic" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="underline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </ToggleGroup.Item>
      </ToggleGroup>
    </div>
  )
}
