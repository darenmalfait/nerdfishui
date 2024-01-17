'use client'

import * as React from 'react'
import {useSelectedLayoutSegment} from 'next/navigation'
import {NavigationList} from '@nerdfish/ui'
import {docs} from 'config/docs'
import {stripPreSlash} from 'lib/utils/string'

export function Navigation(props: JSX.IntrinsicElements['nav']) {
  const segment = useSelectedLayoutSegment() ?? '/'

  return (
    <nav {...props}>
      <NavigationList>
        {docs.navigation.map(item => (
          <NavigationList.Section key={item.title}>
            <NavigationList.Title
              key={item.title}
              {...item}
              className="hover:!bg-transparent"
            >
              {item.title}
            </NavigationList.Title>
            {docs.navigation
              .find(group => group.title === item.title)
              ?.links.map(link => {
                return (
                  <NavigationList.Item
                    key={link.title}
                    active={segment === stripPreSlash(link.href)}
                    {...link}
                  />
                )
              })}
          </NavigationList.Section>
        ))}
      </NavigationList>
    </nav>
  )
}
