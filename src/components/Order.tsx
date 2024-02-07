import { Link } from 'wouter'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import Signup from 'components/Signup'
import UserCount from 'components/UserCount'

export default function () {
  const { user } = useDynamicContext()

  return (
    <div className="text-left">
      <h3>New customers (incl. free trial):</h3>
      <h2>
        <Signup />
      </h2>
      <hr />
      <h3>Whitelist + Existing customers (incl. free trial):</h3>
      {user ? (
        <h2>
          Access the <Link href="/private">Farchive</Link>
        </h2>
      ) : (
        <h2>
          <Link href="/private">Connect wallet</Link> to access the Farchive.
        </h2>
      )}
      <hr />
      <h3>
        <UserCount />
      </h3>
    </div>
  )
}
