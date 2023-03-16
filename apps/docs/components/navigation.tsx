import * as React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {NavigationList} from '@nerdfish/ui'
import {cx} from '@nerdfish/utils'
import {AnimatePresence, motion, useIsPresent} from 'framer-motion'

import {siteConfig} from '../config/site'
import {useMobileNav} from '../context/mobile-nav-provider'
import {useSections} from '../context/section-provider'
import {remToPx} from '../lib/utils/rem-to-px'

function TopLevelNavItem({
  href,
  children,
  target,
}: Pick<JSX.IntrinsicElements['a'], 'children' | 'target'> & {
  href: string
}) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        target={target}
        className="block py-1 text-sm transition text-primary hover:text-gray-900 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({
  href,
  active,
  isAnchorLink = false,
  title,
}: {
  href: string
  active?: boolean
  isAnchorLink?: boolean
  title: string
}) {
  const {close} = useMobileNav()

  return (
    <NavigationList.Item
      as={Link}
      onClick={close}
      href={href}
      title={title}
      aria-current={active ? 'page' : undefined}
      className={cx(
        isAnchorLink ? 'pl-7' : null,
        active
          ? 'text-primary dark:text-white'
          : 'text-secondary hover:text-primary',
      )}
    />
  )
}

function VisibleSectionHighlight({
  group,
  pathname,
}: {
  group: {
    links: Array<{href: string}>
  }
  pathname: string
}) {
  const {sections, visibleSections} = useSections()

  const isPresent = useIsPresent()
  const firstVisibleSectionIndex = Math.max(
    0,
    [{id: '_top'}, ...sections].findIndex(
      section => section.id === visibleSections[0],
    ),
  )
  const itemHeight = remToPx(2)
  const height = isPresent
    ? Math.max(1, visibleSections.length) * (itemHeight + 1)
    : itemHeight + 1

  const index = group.links.findIndex(link => link.href === pathname)
  const top =
    index * (itemHeight + 3.5) + firstVisibleSectionIndex * (itemHeight + 3.5)

  return (
    <motion.div
      layout
      initial={{opacity: 0}}
      animate={{opacity: 1, transition: {delay: 0.2}}}
      exit={{opacity: 0}}
      className="absolute inset-x-0 top-0 bg-black/5 will-change-transform dark:bg-white/10"
      style={{borderRadius: 8, height, top}}
    />
  )
}

function NavigationGroup({
  group,
  className,
}: {
  group: {
    title: string
    links: Array<{href: string; tag?: string; title: string}>
  }
  className?: string
}) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  const {isOpen} = useMobileNav()
  const {sections} = useSections()
  const router = useRouter()

  const isActiveGroup =
    group.links.findIndex(link => link.href === router.pathname) !== -1

  return (
    <li className={cx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-gray-900 dark:text-white"
      >
        {group.title}
      </motion.h2>
      <div className="relative mt-3">
        <AnimatePresence initial={!isOpen}>
          {isActiveGroup ? (
            <VisibleSectionHighlight group={group} pathname={router.pathname} />
          ) : null}
        </AnimatePresence>

        <NavigationList className="space-y-1">
          {group.links.map(link => (
            <motion.li
              key={link.href}
              layout="position"
              className="relative space-y-0"
            >
              <NavLink
                title={link.title}
                href={link.href}
                active={link.href === router.pathname}
              />
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === router.pathname && sections.length > 0 ? (
                  <motion.ul
                    initial={{opacity: 0}}
                    animate={{
                      opacity: 1,
                      transition: {delay: 0.1},
                    }}
                    exit={{
                      opacity: 0,
                      transition: {duration: 0.15},
                    }}
                    className="space-y-1"
                  >
                    {sections.map(section => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          isAnchorLink
                          title={section.title}
                        />
                      </li>
                    ))}
                  </motion.ul>
                ) : null}
              </AnimatePresence>
            </motion.li>
          ))}
        </NavigationList>
      </div>
    </li>
  )
}

export const navigation = [
  {
    title: 'Global',
    links: [
      {title: 'Introduction', href: '/'},
      {title: 'Quickstart', href: '/quickstart'},
      {title: 'Hooks', href: '/hooks'},
      {title: 'Typography', href: '/typography'},
    ],
  },
  {
    title: 'Layout',
    links: [
      {title: 'Container', href: '/container'},
      {title: 'Grid', href: '/grid'},
      {title: 'Section', href: '/section'},
    ],
  },
  {
    title: 'Form Elements',
    links: [
      {title: 'Input', href: '/input'},
      {title: 'Combobox', href: '/combobox'},
      {title: 'Timepicker', href: '/timepicker'},
    ],
  },
  {
    title: 'Buttons',
    links: [
      {title: 'Button', href: '/button'},
      {title: 'ButtonLink', href: '/button-link'},
      {title: 'DoubleLabelLink', href: '/double-label-link'},
      {title: 'Link', href: '/link'},
    ],
  },
  {
    title: 'Other',
    links: [
      {title: 'Accordion', href: '/accordion'},
      {title: 'Alert', href: '/alert'},
      {title: 'Avatar', href: '/avatar'},
      {title: 'DropdownMenu', href: '/dropdown-menu'},
      {title: 'HoverCard', href: '/hover-card'},
      {title: 'NavigationList', href: '/navigation-list'},
      {title: 'ProgressiveImage', href: '/progressive-image'},
      {title: 'ScrollArea', href: '/scroll-area'},
      {title: 'Tabs', href: '/tabs'},
      {title: 'Toast', href: '/toast'},
    ],
  },
]

export function Navigation(props: JSX.IntrinsicElements['nav']) {
  return (
    <nav {...props}>
      <ul className="font-sans">
        {siteConfig.mainNav.map(item => (
          <TopLevelNavItem key={item.title} href={item.href}>
            {item.title}
          </TopLevelNavItem>
        ))}

        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 ? 'md:mt-0' : undefined}
          />
        ))}
      </ul>
    </nav>
  )
}
