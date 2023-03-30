import * as React from 'react'
import {usePathname} from 'next/navigation'
import {NavigationList} from '@nerdfish/ui'
import {cx} from '@nerdfish/utils'
import {docs} from 'config/docs'
import {stripPreSlash} from 'lib/utils/string'

export function Navigation(props: JSX.IntrinsicElements['nav']) {
  const pathname = usePathname()

  return (
    <nav {...props}>
      <NavigationList>
        <div className="space-y-4">
          {docs.navigation.map(item => (
            <div key={item.title} className="py-1">
              <NavigationList.Item
                key={item.title}
                {...item}
                className="hover:!bg-transparent"
              />
              {docs.navigation
                .find(group => group.title === item.title)
                ?.links.map(link => (
                  <NavigationList.Item
                    key={link.title}
                    className={cx(
                      'pl-6 my-1 font-normal',
                      stripPreSlash(pathname).toLowerCase() ===
                        stripPreSlash(link.href).toLowerCase() &&
                        'bg-gray-100 dark:!bg-gray-800',
                    )}
                    {...link}
                  />
                ))}
            </div>
          ))}
        </div>
      </NavigationList>
    </nav>
  )
}
