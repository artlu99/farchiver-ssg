import ExternalLink from 'components/ExternalLink'
import { ExternalLinkIcon, GithubIcon } from 'lucide-react'
import { WarpcastIcon } from 'react-farcaster-embed/icons'
import { Link } from 'wouter'

export default function () {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Public</h6>
          <Link className="link link-hover" href="/public">
            Farchives (FREE)
          </Link>
          <ExternalLink
            className="link link-hover"
            href="https://foss.farchiver.xyz"
          >
            FOSS Farchiver{' '}
            <ExternalLinkIcon className="h-4 w-4 inline align-text-top" />
          </ExternalLink>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link className="link link-hover" href="/castimonials">
            Castimonials
          </Link>
          <a className="text-gray-400" href="/">Bookmarks</a>
        </nav>
        <nav>
          <h6 className="footer-title">About</h6>
          <Link className="link link-hover" href="/uses">
            /uses
          </Link>
          <ExternalLink
            className="link link-hover"
            href="https://pgrph.xyz/@farchiver"
          >
            Blog <ExternalLinkIcon className="h-4 w-4 inline align-text-top" />
          </ExternalLink>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <Link className="link link-hover" href="/">
          <aside className="items-center grid-flow-col">
            <span role="img">🌌</span>
            <p>
              Farchiver <br />
              <i>the easiest way to save your Farcaster activity</i>
            </p>
          </aside>
        </Link>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <ExternalLink href="https://github.com/artlu99/farchiver-ssg">
              <GithubIcon />
            </ExternalLink>
            <ExternalLink href="https://warpcast.com/farchiver">
              <WarpcastIcon />
            </ExternalLink>
          </div>
        </nav>
      </footer>
    </div>
  )
}
