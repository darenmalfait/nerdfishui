import * as React from 'react'
import {type Metadata} from 'next'
import {notFound} from 'next/navigation'
import {generateOGImageUrl} from 'lib/utils/social'

import {DocsPageHeader} from '../../components/docs-page-header'
import {Mdx} from '../../components/mdx'
import {getMetaData} from '../../lib/utils/seo'
import {allDocs} from '.contentlayer/generated'

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

export async function generateMetadata({
  params,
}: {
  params: {slug?: string[]}
}): Promise<Metadata | undefined> {
  const slug = params.slug?.join('/') ?? ''
  const doc = allDocs.find(d => d.slugAsParams === slug)

  if (!doc) {
    notFound()
  }

  const title = `Nerdfishui ${doc.title} documentation`

  return getMetaData({
    ogImage: generateOGImageUrl({
      heading: title,
    }),
    title,
    url: slug,
    description: doc.description,
  })
}

export default async function DocPage({params}: DocPageProps) {
  const slug = params?.slug?.join('/') ?? ''
  const doc = allDocs.find(d => d.slugAsParams === slug)

  if (!doc) {
    notFound()
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-6 xl:grid">
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
