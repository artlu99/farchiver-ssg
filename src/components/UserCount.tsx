import { formatNumber } from 'helpers/formatUtils'
import { useAtom } from 'jotai'
import userCount from 'atoms/userCount'

export default function () {
  const [fetchedUserCount] = useAtom(userCount)
  return <p># Satisfied Users: {formatNumber(fetchedUserCount)}</p>
}
