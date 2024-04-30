import {Teams} from './data/teams';

export const LEAGUES = {
  americas: 'Americas',
  china: 'China',
  emea: 'EMEA',
  pacific: 'PACIFIC'
}

export type Team = {
  name: Teams;
  wins: number;
  losses: number;
  mapWins: number;
  mapLosses: number;
  roundDiff?: number;
}

export type Match = {
  id: number
  group?: 'alpha' | 'omega'
  week: number
  team1: Teams
  team2: Teams
  maps: { team1Rounds: number, team2Rounds: number }[]
}

// export type MatchWeek = {
//   weekNumber: number
//   completed?: boolean
//   matches: Match[]
// }

export type League = {
  name: string
  teams: { alpha: Team[]; omega: Team[] }
  matches?: Match[]
}