import * as React from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {motion} from 'framer-motion'

import {useMobileNav} from '../context/mobile-nav-provider'
import {Navigation} from './navigation'

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M.5 1h9M.5 8h9M.5 4.5h9" />
    </svg>
  )
}

function XIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      viewBox="0 0 10 9"
      fill="none"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m1.5 1 7 7M8.5 1l-7 7" />
    </svg>
  )
}

export function MobileNavigation() {
  const {isOpen, toggle, close} = useMobileNav()
  const ToggleIcon = isOpen ? XIcon : MenuIcon

  return (
    <>
      <button
        type="button"
        className="hover:bg-gray-900/5 flex h-6 w-6 items-center justify-center rounded-md transition dark:hover:bg-white/5 md:hidden"
        aria-label="Toggle navigation"
        onClick={toggle}
      >
        <ToggleIcon className="w-2.5 stroke-gray-900 dark:stroke-white" />
      </button>
      <Transition.Root show={isOpen} as={React.Fragment}>
        <Dialog onClose={close} className="fixed inset-0 z-50 lg:hidden">
          <Transition.Child
            as={React.Fragment}
            enter="duration-300 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-200 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-gray-900/10 fixed inset-0 top-14 backdrop-blur-sm" />
          </Transition.Child>

          <Dialog.Panel>
            <Transition.Child
              as={React.Fragment}
              enter="duration-500 ease-in-out"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="duration-500 ease-in-out"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <motion.div
                layoutScroll
                className="ring-gray-900/7.5 shadow-gray-900/10 fixed left-0 top-14 bottom-0 w-full overflow-y-auto bg-white px-4 pt-6 pb-4 shadow-lg ring-1 dark:bg-gray-900 dark:ring-gray-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10"
              >
                <Navigation />
              </motion.div>
            </Transition.Child>
          </Dialog.Panel>
        </Dialog>
      </Transition.Root>
    </>
  )
}
