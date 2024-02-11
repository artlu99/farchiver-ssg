import { CopyIcon } from 'lucide-react'
import { FunctionComponent } from 'preact'
import { ipfsPublicFolderCid, tarballsBaseUrl } from 'helpers/getAssetsUrls'

interface DownloadLinksProps
  extends Omit<React.HTMLProps<HTMLAnchorElement>, 'href'> {
  filename: string
  text: string
  CID?: string
}
const DownloadLinks: FunctionComponent<DownloadLinksProps> = ({
  filename,
  text,
  CID,
}: DownloadLinksProps) =>
  CID ? (
    <>
      <span class="text-sm">
        <a href={tarballsBaseUrl + filename}>{text}</a>|
        <a
          href={`https://gateway.pinata.cloud/ipfs/${ipfsPublicFolderCid}/${filename}`}
        >
          Pinata
        </a>
        |<a href={`ipfs://${CID}`}>IPFS</a>{' '}
        <CopyIcon
          style={{ display: 'inline-block', width: '1em', height: '1em' }}
          class="text-xs cursor-pointer"
          onClick={async () => {
            await navigator.clipboard.writeText(CID)
          }}
        />
      </span>
    </>
  ) : (
    <span class="text-sm">
      [<a href={tarballsBaseUrl + filename}>{text}</a>]
    </span>
  )

export default DownloadLinks
