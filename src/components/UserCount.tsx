import { formatNumber } from 'helpers/formatUtils'
import { useAtom } from 'jotai'
import earlyBirdsCount from 'atoms/earlyBirdsCount'
import freeTrials from 'atoms/freeTrialsCount'
import userCount from 'atoms/userCount'

export default function () {
  const [fetchedUserCount] = useAtom(userCount)
  return <p># Satisfied Users: {formatNumber(fetchedUserCount)}</p>
}

export function FreeTrialUsers() {
  const [fetchedFreeTrialsUserCount] = useAtom(freeTrials)
  return <span>({formatNumber(fetchedFreeTrialsUserCount)} used)</span>
}

export function EarlyBirdUsers() {
  const [fetchedEarlyBirdUserCount] = useAtom(earlyBirdsCount)
  return <span>({formatNumber(fetchedEarlyBirdUserCount)} used)</span>
}
