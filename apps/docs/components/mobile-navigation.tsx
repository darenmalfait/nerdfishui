'use client'

import * as React from 'react'
import {Button, Drawer} from '@nerdfish/ui'

import {useMobileNav} from '../context/mobile-nav-provider'
import {Icons} from './icons'
import {Navigation} from './navigation'

export function MobileNavigation() {
  const {isOpen, toggle, close} = useMobileNav()

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        type="button"
        className="md:hidden"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <Icons.Menu className="size-4 text-primary" />
      </Button>
      <Drawer
        direction="left"
        open={isOpen}
        onOpenChange={open => {
          if (!open) close()
        }}
      >
        <Drawer.Overlay />
        <Drawer.Content className="!w-full max-w-[300px] px-4">
          <Navigation />
        </Drawer.Content>
      </Drawer>
    </>
  )
}
