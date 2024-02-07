import { FunctionComponent } from 'preact'

interface ExternalLinkProps
  extends Omit<React.HTMLProps<HTMLAnchorElement>, 'href'> {
  href: string
}
const ExternalLink: FunctionComponent<ExternalLinkProps> = ({
  href,
  children,
  rel,
  ...rest
}: ExternalLinkProps) => (
  <a
    target="_blank"
    rel={`noopener noreferrer${rel ? ` ${rel}` : ''}`}
    href={href}
    {...rest}
  >
    {children ?? href}
  </a>
)
export default ExternalLink
