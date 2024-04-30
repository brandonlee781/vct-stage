import { useEditableMatches } from '../providers/EditableMatchesProvider'
import { Match, Team } from '../types'

export const useCombinedData = (group: Team[]) => {
  const matches = useEditableMatches()

  const originalSort = [...group].sort(sortTeams)

  const combinedData = group.map(team => {
    return getTeamCombined(team, matches)
  }).sort(sortTeams)

  return combinedData.map((team, index) => {
    const originalIndex = originalSort.findIndex(s => s.name === team.name)
    return {
      ...team,
      sortDiff: originalIndex - index
    }
  })
}

const getTeamCombined = (team: Team, matches: Match[]) => {
  const foundMatches = matches.filter(m => m.team1 === team.name || m.team2 === team.name)

  const combinedData = foundMatches.map(m => {
    const maps = m.maps
    if (!maps.length) {
      return { mapWinChange: 0, mapLossChange: 0, roundChange: 0 }
    }
    if (m.team1 === team.name) {
      return maps.reduce((a, b) => {
        if (b.team1Rounds && b.team1Rounds > (b.team2Rounds || 0)) {
          a.mapWinChange += 1
          a.roundChange += b.team1Rounds - (b.team2Rounds || 0)
        } else if (b.team2Rounds && b.team1Rounds && b.team2Rounds > b.team1Rounds) {
          a.mapLossChange += 1
          a.roundChange -= b.team2Rounds - b.team1Rounds
        }

        return a
      }, {
        mapWinChange: 0,
        mapLossChange: 0,
        roundChange: 0,
      })
    } else {
      return maps.reduce((a, b) => {
        if (b.team2Rounds && b.team2Rounds > (b.team1Rounds || 0)) {
          a.mapWinChange += 1
          a.roundChange += b.team2Rounds - (b.team1Rounds || 0)
        } else if (b.team1Rounds && b.team2Rounds && b.team1Rounds > b.team2Rounds) {
          a.mapLossChange += 1
          a.roundChange -= b.team1Rounds - b.team2Rounds
        }

        return a
      }, {
        mapWinChange: 0,
        mapLossChange: 0,
        roundChange: 0,
      })
    }
  }).reduce((a, b) => {
    a.mapWinChange += b.mapWinChange
    a.mapLossChange += b.mapLossChange
    a.roundChange += b.roundChange
    return a
  }, { mapWinChange: 0, mapLossChange: 0, roundChange: 0 })

  const wins = team.wins + (foundMatches.filter(m => {
    const maps = m.maps
    const team1Wins = maps.filter(map => map.team1Rounds && map.team1Rounds > (map.team2Rounds || 0))
    const team2Wins = maps.filter(map => map.team2Rounds && map.team2Rounds > (map.team1Rounds || 0))
    if (m.team1 === team.name) {
      return team1Wins.length > team2Wins.length
    } else if (m.team2 === team.name) {
      return team2Wins.length > team1Wins.length
    }
  }).length || 0)

  const losses = team.losses + (foundMatches.filter(m => {
    const maps = m.maps
    const team1Wins = maps.filter(map => map.team1Rounds && map.team1Rounds > (map.team2Rounds || 0))
    const team2Wins = maps.filter(map => map.team2Rounds && map.team2Rounds > (map.team1Rounds || 0))
    if (m.team1 === team.name) {
      return team1Wins.length < team2Wins.length
    } else if (m.team2 === team.name) {
      return team2Wins.length < team1Wins.length
    }
  }).length || 0)

  const mapWins = team.mapWins + combinedData.mapWinChange
  const mapLosses = team.mapLosses + combinedData.mapLossChange
  const roundDiff = (team.roundDiff || 0) + combinedData.roundChange

  const combinedTeam = {
    name: team.name,
    wins,
    losses,
    mapWins,
    mapLosses,
    roundDiff,
  }

  return combinedTeam
}

const sortTeams = (a: Team, b: Team) => {
  if (a.wins === b.wins) {
    if (a.losses === b.losses) {
      if (a.mapWins === b.mapWins) {
        if (a.mapLosses === b.mapLosses) {
          return (b.roundDiff || 0) - (a.roundDiff|| 0)
        }
        return a.mapLosses - b.mapLosses
      }
      return b.mapWins - a.mapWins
    }
    return a.losses - b.losses
  }
  return b.wins - a.wins
}
