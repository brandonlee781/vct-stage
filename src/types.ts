import type { Teams } from './data/teams'

export const LEAGUE_NAMES = {
  americas: 'Americas',
  china: 'China',
  emea: 'EMEA',
  pacific: 'PACIFIC',
}

export type Team = {
  name: Teams
  points?: number
  // roundDiff?: number;
}

export type Standing = Team & {
  wins: number
  losses: number
  mapWins: number
  mapLosses: number
  roundWins: number
  roundLosses: number
  points?: number
}

export type Match = {
  id: number
  group?: 'alpha' | 'omega' | 'cross'
  stage: '1' | '2'
  week: number
  completed?: boolean
  team1: Teams
  team2: Teams
  maps: { team1Rounds: number; team2Rounds: number }[]
}

// export type MatchWeek = {
//   weekNumber: number
//   completed?: boolean
//   matches: Match[]
// }

export type League = {
  name: string
  teams: { alpha: Team[]; omega: Team[] }
  matches: Match[]
}

export type Leagues = {
  [key in keyof typeof LEAGUE_NAMES]: League
}
