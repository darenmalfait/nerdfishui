'use client'

import * as React from 'react'
import {Tabs} from '@nerdfish/ui'

export function TabsDemo() {
  return (
    <Tabs defaultValue="general" className="w-[400px]">
      <Tabs.List>
        <Tabs.Trigger value="general">General</Tabs.Trigger>
        <Tabs.Trigger value="privacy">Privacy</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="general">
        <p className="text-sm text-primary">General settings tab</p>
      </Tabs.Content>
      <Tabs.Content value="privacy">
        <p className="text-sm text-primary">Privacy settings tab</p>
      </Tabs.Content>
    </Tabs>
  )
}
