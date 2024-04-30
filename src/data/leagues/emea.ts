import { LEAGUES, League } from '../../types';
import { Teams } from '../teams';

export const emeaLeague: League = {
  name: LEAGUES.emea,
  teams: {
    alpha: [
      { name: Teams.BBL, wins: 3, losses: 1, mapWins: 6, mapLosses: 3, roundDiff: 24 },
      { name: Teams.FNC, wins: 3, losses: 2, mapWins: 6, mapLosses: 5, roundDiff: 14 },
      { name: Teams.KC, wins: 3, losses: 2, mapWins: 8, mapLosses: 5, roundDiff: 13 },
      { name: Teams.TL, wins: 2, losses: 3, mapWins: 5, mapLosses: 7, roundDiff: -21 },
      { name: Teams.VIT, wins: 3, losses: 2, mapWins: 6, mapLosses: 7, roundDiff: -10 },
    ],
    omega: [
      { name: Teams.FUT, wins: 3, losses: 1, mapWins: 7, mapLosses: 3, roundDiff: 28 },
      { name: Teams.GM8, wins: 2, losses: 2, mapWins: 4, mapLosses: 4, roundDiff: -6 },
      { name: Teams.GX, wins: 0, losses: 4, mapWins: 3, mapLosses: 8, roundDiff: -36 },
      { name: Teams.KOI, wins: 0, losses: 4, mapWins: 1, mapLosses: 8, roundDiff: -42 },
      { name: Teams.NAVI, wins: 3, losses: 1, mapWins: 7, mapLosses: 4, roundDiff: 23 },
      { name: Teams.TH, wins: 2, losses: 2, mapWins: 5, mapLosses: 4, roundDiff: 13 },
    ],
  },
  matches: [
    { id: 25, week: 5, team1: Teams.BBL, team2: Teams.GX, maps: [] },
    { id: 26, week: 5, team1: Teams.KC, team2: Teams.TH, maps: [] },
    { id: 27, week: 5, team1: Teams.VIT, team2: Teams.KOI, maps: [] },
    { id: 28, week: 5, team1: Teams.NAVI, team2: Teams.FNC, maps: [] },
    { id: 29, week: 5, team1: Teams.TL, team2: Teams.GM8, maps: [] },
    { id: 30, week: 5, team1: Teams.BBL, team2: Teams.FUT, maps: [] },
  ]
}