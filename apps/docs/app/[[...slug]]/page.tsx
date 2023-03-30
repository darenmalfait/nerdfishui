import * as React from 'react'
import {notFound} from 'next/navigation'
import {allDocs} from 'contentlayer/generated'

import {DocsPageHeader} from '../../components/docs-page-header'
import {Mdx} from '../../components/mdx'

interface DocPageProps {
  params?: {
    slug?: string[]
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps['params'][]
> {
  return allDocs.map(doc => ({
    slug: doc.slugAsParams.split('/'),
  }))
}

export default async function DocPage({params}: DocPageProps) {
  const slug = params?.slug?.join('/') ?? ''
  const doc = allDocs.find(d => d.slugAsParams === slug)

  // allDocs.forEach(doc => {
  //   console.log('doc', doc._raw, doc.slugAsParams)
  // })

  // console.log('doc', doc)

  if (!doc) {
    notFound()
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader
          github={
            doc.package
              ? `https://github.com/darenmalfait/nerdfishui/tree/main/packages/${doc.package.name}/src/${doc.package.path}`
              : undefined
          }
          heading={doc.title}
          text={doc.description}
        />
        <Mdx code={doc.body.code} />
      </div>
    </main>
  )
}
