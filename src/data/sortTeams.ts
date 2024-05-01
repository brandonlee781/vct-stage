import type { Standing } from '@/types'

export const sortTeams = (a: Standing, b: Standing): number => {
  const aDiff = a.wins - a.losses
  const bDiff = b.wins - b.losses
  if (aDiff === bDiff) {
    const aMapDiff = a.mapWins - a.mapLosses
    const bMapDiff = b.mapWins - b.mapLosses
    if (aMapDiff === bMapDiff) {
      const aRndDiff = a.roundWins - a.roundLosses
      const bRndDiff = b.roundWins - b.roundLosses
      return bRndDiff - aRndDiff
    }
    return bMapDiff - aMapDiff
  }
  return bDiff - aDiff
}
