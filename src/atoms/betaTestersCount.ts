import { atom } from 'jotai'
import { getBetaTestersCount } from 'helpers/getUserCounts'

export default atom(getBetaTestersCount())
