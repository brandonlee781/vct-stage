import type { Match, Standing } from '@/types'
import type { Teams } from './teams'

export const calculateStanding = (
  teamName: Teams,
  matches: Match[] = []
): Standing => {
  let wins = 0
  let losses = 0
  let mapWins = 0
  let mapLosses = 0
  let roundWins = 0
  let roundLosses = 0

  for (const match of matches) {
    if (match.team1 === teamName || match.team2 === teamName) {
      const mapRoundKey: keyof Match['maps'][0] =
        match.team1 === teamName ? 'team1Rounds' : 'team2Rounds'
      const mapOppKey: keyof Match['maps'][0] =
        match.team1 === teamName ? 'team2Rounds' : 'team1Rounds'
      let localMapWins = 0
      let localMapLosses = 0

      for (const map of match.maps) {
        if (map[mapRoundKey] > map[mapOppKey]) {
          // this is a map win
          localMapWins += 1
        } else {
          // this is a map loss
          localMapLosses += 1
        }
        roundWins += map[mapRoundKey]
        roundLosses += map[mapOppKey]
      }

      mapWins += localMapWins
      mapLosses += localMapLosses
      if (match.maps.length < 2) continue
      if (localMapWins > localMapLosses) {
        wins += 1
      } else if (localMapWins < localMapLosses) {
        losses += 1
      }
    }
  }

  return {
    name: teamName,
    wins,
    losses,
    mapWins,
    mapLosses,
    roundWins,
    roundLosses,
  }
}
