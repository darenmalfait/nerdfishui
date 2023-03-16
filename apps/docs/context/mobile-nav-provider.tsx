import * as React from 'react'

interface MobileNavContextProps {
  isOpen: boolean
  toggle: () => void
  close: () => void
}

const MobileNavContext = React.createContext<MobileNavContextProps | null>(null)
MobileNavContext.displayName = 'MobileNavContext'

interface MobileNavProviderProps {
  children: React.ReactNode
}

// import { MobileNavProvider } from "path-to-context/MobileNavContext"
// use <MobileNavProvider> as a wrapper around the part you need the context for
function MobileNavProvider({children}: MobileNavProviderProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const toggle = React.useCallback(() => setIsOpen(!isOpen), [isOpen])
  const close = React.useCallback(() => setIsOpen(false), [])

  return (
    <MobileNavContext.Provider value={{isOpen, toggle, close}}>
      {children}
    </MobileNavContext.Provider>
  )
}

// import { useMobileNav } fron "path-to-context/MobileNavContext"
// within functional component
// const { sessionToken, ...MobileNavContext } = useMobileNav()
function useMobileNav(): MobileNavContextProps {
  const context = React.useContext(MobileNavContext)

  if (!context) {
    throw new Error('You should use useMobileNav within an MobileNavContext')
  }

  return context
}

export {MobileNavProvider, useMobileNav}
