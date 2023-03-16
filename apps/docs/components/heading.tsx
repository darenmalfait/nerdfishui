import * as React from 'react'
import {H1, H2, H3, H4} from '@nerdfish/ui'
import {cx} from '@nerdfish/utils'

import {useSections} from '../context/section-provider'
import {Tag} from './tag'

function Eyebrow({tag, label}: {tag?: string; label?: string}) {
  if (!tag && !label) {
    return null
  }

  return (
    <div className="flex items-center gap-x-3">
      {tag ? <Tag>{tag}</Tag> : null}
      {tag && label ? (
        <span className="h-0.5 w-0.5 rounded-full bg-gray-300 dark:bg-gray-600" />
      ) : null}
      {label ? (
        <span className="font-mono text-xs text-gray-400">{label}</span>
      ) : null}
    </div>
  )
}

export function Heading({
  level = 2,
  children,
  id,
  tag,
  label,
  ...props
}: {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  id: string
  tag?: string
  label?: string
}) {
  const Title = `h${level}` as any
  const Component = React.useMemo(() => {
    switch (level) {
      case 1:
        return H1
      case 2:
        return H2
      case 3:
        return H3
      case 4:
        return H4
      default:
        return H2
    }
  }, [level])
  const ref = React.useRef<HTMLHeadingElement | null>(null)
  const {registerHeading} = useSections()

  React.useEffect(() => {
    if (!ref.current || level !== 2) return

    registerHeading({id, ref, offsetRem: tag || label ? 8 : 6})
  }, [id, label, level, registerHeading, tag, ref])

  return (
    <>
      <Eyebrow tag={tag} label={label} />
      <Title
        ref={ref}
        id={id}
        className={cx(tag || label ? 'mt-2 scroll-mt-32' : 'scroll-mt-24')}
        {...props}
      >
        <Component as="div">{children}</Component>
      </Title>
    </>
  )
}
