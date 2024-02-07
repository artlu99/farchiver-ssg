import ExternalLink from 'components/ExternalLink'
import getDeFormId from 'helpers/getDeFormId'

export default function () {
  const deformLink = 'https://app.deform.cc/form/' + getDeFormId

  return (
    <div>
      Sign up via <ExternalLink href={deformLink}>DeForm</ExternalLink>
    </div>
  )
}
