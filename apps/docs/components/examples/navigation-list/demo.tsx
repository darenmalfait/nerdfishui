'use client'

import * as React from 'react'
import {NavigationList} from '@nerdfish/ui'

export function NavigationListDemo() {
  return (
    <NavigationList>
      <div className="space-y-4">
        <div className="py-1">
          <NavigationList.Item
            href="https://www.nerdfish.be"
            title="Chocolate Cake"
          />
          <NavigationList.Item
            as="button"
            onClick={() => console.info('click')}
            title="Strawberry Shortcake"
          />
          <NavigationList.Item title="Carrot Cake" />
        </div>
        <div className="py-1">
          <NavigationList.Item title="Red Velvet Cake" />
          <NavigationList.Item title="Vanilla Cake" />
          <NavigationList.Item title="Lemon Cake" />
        </div>
      </div>
    </NavigationList>
  )
}
