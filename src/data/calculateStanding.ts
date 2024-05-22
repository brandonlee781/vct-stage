import type { Match, Standing, Team } from '@/types'

export const calculateStanding = (
  team: Team,
  matches: Match[] = []
): Standing => {
  let wins = 0
  let losses = 0
  let mapWins = 0
  let mapLosses = 0
  let roundWins = 0
  let roundLosses = 0
  let points = team.points || 0

  for (const match of matches) {
    if (match.team1 === team.name || match.team2 === team.name) {
      const mapRoundKey: keyof Match['maps'][0] =
        match.team1 === team.name ? 'team1Rounds' : 'team2Rounds'
      const mapOppKey: keyof Match['maps'][0] =
        match.team1 === team.name ? 'team2Rounds' : 'team1Rounds'
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
        if (match.stage === '2') {
          points += 1
        }
      } else if (localMapWins < localMapLosses) {
        losses += 1
      }
    }
  }

  return {
    name: team.name,
    wins,
    losses,
    mapWins,
    mapLosses,
    roundWins,
    roundLosses,
    points,
  }
}
