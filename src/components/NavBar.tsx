import { Link } from 'wouter'
import ExternalLink from 'components/ExternalLink'

export default function () {
  return (
    <div className="navbar fixed bottom-0 flex-col bg-neutral text-neutral-content">
      <div className="text-xl">
        <ExternalLink href="https://warpcast.com/farchiver">
          @farchiver
        </ExternalLink>
      </div>
      <div className="text-left text-xs">
        <Link href="/uses">/uses</Link>
      </div>
    </div>
  )
}
