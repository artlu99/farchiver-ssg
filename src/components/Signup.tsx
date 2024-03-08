import { ExternalLinkIcon } from 'lucide-react'
import ExternalLink from 'components/ExternalLink'
import getDeFormId from 'helpers/getDeFormId'

export default function () {
  const deformLink = 'https://app.deform.cc/form/' + getDeFormId

  return (
    <div>
      Sign up via{' '}
      <ExternalLink className="link link-hover" href={deformLink}>
        DeForm <ExternalLinkIcon className="h-4 w-4 inline align-text-top" />
      </ExternalLink>
    </div>
  )
}
