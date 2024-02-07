import { AssetDescription, FidDetail } from 'types'
import { DynamicWidget, getAuthToken } from '@dynamic-labs/sdk-react-core'
import { Link } from 'wouter'
import { MoveLeft } from 'lucide-react'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { useEffect, useState } from 'preact/hooks'
import ExternalLink from 'components/ExternalLink'
import Signup from 'components/Signup'
import assetsTable from 'components/AssetsTable'
import axios from 'axios'
import getDeFormId from 'helpers/getDeFormId'

const deformLink = 'https://app.deform.cc/form/' + getDeFormId

const signupMessage = <Signup />
const requestMoreMessage = (
  <div>
    Request more Farchives via{' '}
    <ExternalLink href={deformLink}>DeForm</ExternalLink>.
  </div>
)
const noFarchivesFoundMessage = (
  <div>No Farchives found linked to this wallet.</div>
)
const connectMessage = <div>Connect Wallet to access your download links.</div>
const greetings = (fidDetail: FidDetail) => {
  const username = fidDetail.username
  const pfp = fidDetail.pfp

  return (
    <div>
      {pfp ? (
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={pfp} alt={username} />
          </div>
        </div>
      ) : null}
      <div>
        Hello {username ? '@' + username : '<unknown>'}, great to see you!
      </div>
    </div>
  )
}
const tabulation = (owned: AssetDescription[], shared: AssetDescription[]) => (
  <div>
    You have {owned.length} owned items and {shared.length} shared items.
  </div>
)

export default function Private() {
  const [assets, setAssets] = useState<{
    fidDetail: FidDetail | undefined
    owned: AssetDescription[]
    shared: AssetDescription[]
  }>({ fidDetail: undefined, owned: [], shared: [] })

  const dynamicJwtToken = getAuthToken()
  const { user } = useDynamicContext()

  useEffect(() => {
    dynamicJwtToken &&
      axios
        .post('/a', dynamicJwtToken)
        .then((res) => {
          setAssets(res.data)
        })
        .catch((err) => console.log(err))
  }, [dynamicJwtToken])

  const fidDetail = assets.fidDetail
  const fid = assets.fidDetail?.fid ?? 'undefined'
  const owned = fid === 'undefined' ? [] : assets.owned
  const shared = fid === 'undefined' ? [] : assets.shared
  const display = owned.length + shared.length > 0

  return (
    <div>
      <DynamicWidget />
      <div>
        {user ? null : connectMessage}
        {user ? null : signupMessage}
        {fidDetail ? greetings(fidDetail) : null}
        {user && !display ? noFarchivesFoundMessage : null}
        {user && !display ? signupMessage : null}
        {user && display ? tabulation(owned, shared) : null}
        {user && display ? requestMoreMessage : null}
        {fidDetail && owned.length > 0 ? assetsTable('Owned', owned) : null}
        {fidDetail && shared.length > 0 ? assetsTable('Shared', shared) : null}
        {display ? <div className="divider"></div> : null}
      </div>
      <div>
        <Link href="/">
          <button className="btn btn-neutral">
            <MoveLeft />
          </button>
        </Link>
      </div>
    </div>
  )
}
