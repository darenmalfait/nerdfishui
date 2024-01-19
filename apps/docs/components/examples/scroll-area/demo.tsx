'use client'

import * as React from 'react'
import {ScrollArea} from '@nerdfish/ui'

const tags = Array.from({length: 50}).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
)

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border shadow-outline">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map(tag => (
          <div className="text-sm" key={tag}>
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
