'use client'

import * as React from 'react'
import {Button, Drawer} from '@nerdfish/ui'

export function DrawerDemo() {
  return (
    <Drawer>
      <Drawer.Trigger>Open</Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Are you sure absolutely sure?</Drawer.Title>
          <Drawer.Description>This action cannot be undone.</Drawer.Description>
        </Drawer.Header>
        <Drawer.Footer>
          <Button>Submit</Button>
          <Drawer.Close>
            <Button variant="outline">Cancel</Button>
          </Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  )
}
