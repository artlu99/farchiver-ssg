import { atom } from 'jotai'
import { getFreeTrialsCount } from 'helpers/getUserCounts'

export default atom(getFreeTrialsCount())
