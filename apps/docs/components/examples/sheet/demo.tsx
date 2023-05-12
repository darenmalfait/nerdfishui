import * as React from 'react'
import {Button, Input, Sheet} from '@nerdfish/ui'

export function SheetDemo() {
  return (
    <Sheet>
      <Sheet.Trigger asChild>
        <Button variant="outline">Open</Button>
      </Sheet.Trigger>
      <Sheet.Content position="right" size="sm">
        <Sheet.Header>
          <Sheet.Title>Edit profile</Sheet.Title>
          <Sheet.Description>
            Make changes to your profile here. Click save when you`&apos;re
            done.
          </Sheet.Description>
        </Sheet.Header>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              name="name"
              id="name"
              label="Name"
              value="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              name="username"
              id="username"
              label="Username"
              value="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <Sheet.Footer>
          <Button type="submit">Save changes</Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  )
}
