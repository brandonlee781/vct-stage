import type { Leagues } from '../../types'
import { americasLeague } from './americas'
import { chinaLeague } from './china'
import { emeaLeague } from './emea'
import { pacificLeague } from './pacific'

export const leagues: Leagues = {
  americas: americasLeague,
  china: chinaLeague,
  emea: emeaLeague,
  pacific: pacificLeague,
}
