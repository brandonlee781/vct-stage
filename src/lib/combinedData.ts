import { sortTeams } from '@/data/sortTeams'
import { Match, Team } from '../types'

export const combinedData = (group: Team[], matches: Match[]) => {
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
        if (b.team1Rounds > b.team2Rounds) {
          a.mapWinChange += 1
          a.roundChange += b.team1Rounds - b.team2Rounds
        } else if (b.team2Rounds > b.team1Rounds) {
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
        if (b.team2Rounds > b.team1Rounds) {
          a.mapWinChange += 1
          a.roundChange += b.team2Rounds - b.team1Rounds
        } else if (b.team1Rounds > b.team2Rounds) {
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
    const team1Wins = maps.filter(map => map.team1Rounds > map.team2Rounds)
    const team2Wins = maps.filter(map => map.team2Rounds > map.team1Rounds)
    if (m.team1 === team.name) {
      return team1Wins.length > team2Wins.length
    } else if (m.team2 === team.name) {
      return team2Wins.length > team1Wins.length
    }
  }).length || 0)

  const losses = team.losses + (foundMatches.filter(m => {
    const maps = m.maps
    const team1Wins = maps.filter(map => map.team1Rounds > map.team2Rounds)
    const team2Wins = maps.filter(map => map.team2Rounds > map.team1Rounds)
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


