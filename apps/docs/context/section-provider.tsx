import * as React from 'react'

import {remToPx} from '../lib/utils/rem-to-px'

export type Section = {id: string; title: string; tag?: string}

interface SectionContextProps {
  sections: Section[]
  visibleSections: string[]
  registerHeading: (section: {
    id: string
    ref: React.RefObject<HTMLDivElement>
    offsetRem: number | string
  }) => void
}

const SectionContext = React.createContext<SectionContextProps | null>(null)
SectionContext.displayName = 'SectionContext'

interface SectionProviderProps {
  sections: Section[]
  children: React.ReactNode
}

// import { SectionProvider } from "path-to-context/SectionContext"
// use <SectionProvider> as a wrapper around the part you need the context for
function SectionProvider({children, sections}: SectionProviderProps) {
  const [visibleSections, setVisibleSections] = React.useState<string[]>([])

  // create a ref for each section
  const sectionRefs = React.useRef<
    {
      id: string
      headingRef: React.RefObject<any>
      offsetRem: number | string
    }[]
  >([])

  React.useEffect(() => {
    function checkVisibleSections() {
      const {innerHeight, scrollY} = window
      const newVisibleSections = []

      for (
        let sectionIndex = 0;
        sectionIndex < sections.length;
        sectionIndex++
      ) {
        const {id, headingRef, offsetRem} = sectionRefs.current[sectionIndex]
        const offset = remToPx(offsetRem)
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        const top = headingRef.current.getBoundingClientRect().top + scrollY

        if (sectionIndex === 0 && top - offset > scrollY) {
          newVisibleSections.push('_top')
        }

        const nextSection: any = sectionRefs.current[sectionIndex + 1]
        const bottom =
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          (nextSection?.headingRef.current?.getBoundingClientRect().top ??
            Infinity) +
          scrollY -
          remToPx(nextSection?.offsetRem)

        if (
          (top > scrollY && top < scrollY + innerHeight) ||
          (bottom > scrollY && bottom < scrollY + innerHeight) ||
          (top <= scrollY && bottom >= scrollY + innerHeight)
        ) {
          newVisibleSections.push(id)
        }
      }

      setVisibleSections(newVisibleSections)
    }

    const raf = window.requestAnimationFrame(() => checkVisibleSections())
    window.addEventListener('scroll', checkVisibleSections, {passive: true})
    window.addEventListener('resize', checkVisibleSections)

    return () => {
      window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', checkVisibleSections)
      window.removeEventListener('resize', checkVisibleSections)
    }
  }, [sectionRefs, sections])

  function registerHeading({
    id,
    ref,
    offsetRem,
  }: {
    id: string
    ref: React.RefObject<any>
    offsetRem: number | string
  }) {
    const index = sections.findIndex(section => section.id === id)
    sectionRefs.current[index] = {headingRef: ref, id, offsetRem}
  }

  return (
    <SectionContext.Provider
      value={{sections, visibleSections, registerHeading}}
    >
      {children}
    </SectionContext.Provider>
  )
}

// import { useSections } fron "path-to-context/SectionContext"
// within functional component
// const { sessionToken, ...SectionContext } = useSections()
function useSections(): SectionContextProps {
  const context = React.useContext(SectionContext)

  if (!context) {
    throw new Error('You should use useSections within an SectionContext')
  }

  return context
}

export {SectionProvider, useSections}
