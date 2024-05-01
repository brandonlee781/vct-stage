import type { Standing } from '@/types'

export const sortTeams = (a: Standing, b: Standing): number => {
  if (a.wins === b.wins) {
    if (a.losses === b.losses) {
      if (a.mapWins === b.mapWins) {
        if (a.mapLosses === b.mapLosses) {
          const aDiff = a.roundWins - a.roundLosses
          const bDiff = b.roundWins - a.roundLosses
          return bDiff - aDiff
        }
        return a.mapLosses - b.mapLosses
      }
      return b.mapWins - a.mapWins
    }
    return a.losses - b.losses
  }
  return b.wins - a.wins
}
