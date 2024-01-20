'use client'

import * as React from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {Button} from '@nerdfish/ui'

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
        <Icons.Menu className="h-4 w-4 text-primary" />
      </Button>
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
            <div className="fixed inset-0 top-14 bg-inverted/10 backdrop-blur-sm" />
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
              <div className="ring-gray-900/7.5 shadow-gray-900/10 fixed bottom-0 left-0 top-14 w-full overflow-y-auto bg-primary px-4 pb-4 pt-6 shadow-lg ring-1 dark:ring-gray-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10">
                <Navigation />
              </div>
            </Transition.Child>
          </Dialog.Panel>
        </Dialog>
      </Transition.Root>
    </>
  )
}
