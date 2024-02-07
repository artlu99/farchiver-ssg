import { atom } from 'jotai'
import { getEarlyBirdsCount } from 'helpers/getUserCounts'

export default atom(getEarlyBirdsCount())
