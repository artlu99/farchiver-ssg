import ExternalLink from 'components/ExternalLink'
import viz from 'img/viz.gif'

export default function () {
  return (
    <>
      <img src={viz} />
      <div className="text-left">
        <h3>PAID SERVICE</h3>
        <ul>
          <li>
            delightful{' '}
            <ExternalLink href="https://obsidian.md/">Obsidian</ExternalLink>{' '}
            visualization
          </li>
          <li>each cast/reply/recast = one Markdown file</li>
          <li>likes+follows = links</li>
          <li>replies/threads are linked</li>
        </ul>
      </div>
    </>
  )
}
