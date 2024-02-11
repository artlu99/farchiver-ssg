import { AssetDescription } from 'types'
import { CopyIcon } from 'lucide-react'
import { shortenHash } from 'helpers/formatUtils'
import { tarballsBaseUrl } from 'helpers/getAssetsUrls'
import dayjs from 'dayjs'

const TIMESTAMP_FORMAT = 'YYYY-MM-DD'

const assetsTable = (sectionTitle: string, assets: AssetDescription[]) => (
  <div className="flex flex-col w-full">
    <div className="divider divider-start">{sectionTitle}</div>
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>description</th>
            <th>date generated</th>
            <th>filename</th>
            <th>IPFS</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((a) => {
            const timestampStr = dayjs
              .unix(a.timestamp)
              .format(TIMESTAMP_FORMAT)
            return (
              <tr className="hover">
                <th>{a.description}</th>
                <td>{timestampStr}</td>
                <td>
                  <a
                    href={
                      tarballsBaseUrl +
                      a.tarball +
                      '.tar.gz' +
                      (a.encrypted ? '.gpg' : '')
                    }
                    alt={a.description}
                  >
                    {a.tarball + '.tar.gz' + (a.encrypted ? '.gpg' : '')}
                  </a>
                </td>
                <td>
                  {a.cid ? (
                    <>
                      <a href={'ipfs://' + a.cid}>{shortenHash(a.cid)}</a>{' '}
                      <CopyIcon
                        style={{
                          display: 'inline-block',
                          width: '1em',
                          height: '1em',
                        }}
                        class="text-xs cursor-pointer"
                        onClick={async () => {
                          await navigator.clipboard.writeText(a.cid ?? '')
                        }}
                      />
                    </>
                  ) : (
                    ''
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  </div>
)
export default assetsTable
