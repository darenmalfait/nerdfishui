import * as React from 'react'
import Link from 'next/link'
import {cx} from '@nerdfish/utils'

import {siteConfig} from '../config/site'
import {Logo} from './logo'
import {MobileNavigation} from './mobile-navigation'

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <MobileNavigation />
      <Link href="/" aria-label="Home">
        <div className="flex items-center space-x-3">
          <Logo className="h-6" />
          <span className="ml-2 flex items-center space-x-2 text-lg font-semibold text-primary">
            Nerdfish
            <span className="ml-1 rounded-md border border-primary p-1 text-[8px] leading-snug">
              UI
            </span>
          </span>
        </div>
      </Link>
      {siteConfig.mainNav.length ? (
        <nav className="hidden gap-6 md:flex">
          {siteConfig.mainNav.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cx(
                    'flex items-center text-lg font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-100 sm:text-sm',
                    item.disabled && 'cursor-not-allowed opacity-80',
                  )}
                >
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  )
}
