import { League, LEAGUES } from '../../types'
import { americasLeague } from './americas'
import { chinaLeague } from './china'
import { emeaLeague } from './emea'
import { pacificLeague } from './pacific'

export const leagues: { [key in keyof typeof LEAGUES]: League } = {
  americas: americasLeague,
  china: chinaLeague,
  emea: emeaLeague,
  pacific: pacificLeague
}
