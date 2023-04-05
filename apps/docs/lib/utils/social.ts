import {type z} from 'zod'

import {type ogImageSchema} from '../types/og'
import {getDomainUrl} from './misc'

function generateOGImageUrl({...props}: z.infer<typeof ogImageSchema>) {
  const url = getDomainUrl()

  const ogUrl = new URL(`${url}/api/og`)
  Object.entries(props).forEach(([key, value]) => {
    ogUrl.searchParams.set(key, value ?? '')
  })

  return ogUrl.toString()
}

export {generateOGImageUrl}
