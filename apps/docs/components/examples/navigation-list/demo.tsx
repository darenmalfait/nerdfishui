'use client'

import * as React from 'react'
import {NavigationList} from '@nerdfish/ui'
import {Icons} from 'components/icons'

export function NavigationListDemo() {
  return (
    <NavigationList>
      <NavigationList.Item
        href="https://www.nerdfish.be"
        title="Chocolate Cake"
        icon={Icons.User}
      />
      <NavigationList.Item
        as="button"
        onClick={() => console.info('click')}
        title="Strawberry Shortcake"
        icon={Icons.User}
        active
      />
      <NavigationList.Item title="Carrot Cake" />
      <NavigationList.Item title="Red Velvet Cake" />
      <NavigationList.Item title="Vanilla Cake" />
      <NavigationList.Item title="Lemon Cake" />
    </NavigationList>
  )
}
