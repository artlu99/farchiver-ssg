import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import Signup from 'components/Signup'

export default function () {
  const { user } = useDynamicContext()

  return (
    <div className="prose text-left">
      {user ? null : (
        <div>

          <h4>New customers:</h4>
          <h2>
            <Signup />
          </h2>
        </div>
      )}
    </div>
  )
}
