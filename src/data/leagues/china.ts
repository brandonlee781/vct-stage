import { LEAGUES, League } from '../../types';
import { Teams } from '../teams';

export const chinaLeague: League = {
  name: LEAGUES.china,
  teams: {
    alpha: [
      { name: Teams.BBG, wins: 2, losses: 3, mapWins: 6, mapLosses: 7, roundDiff: -10 },
      { name: Teams.DRG, wins: 3, losses: 2, mapWins: 8, mapLosses: 6, roundDiff: 1 },
      { name: Teams.EDG, wins: 3, losses: 1, mapWins: 7, mapLosses: 3, roundDiff: 31 },
      { name: Teams.NOVA, wins: 1, losses: 4, mapWins: 4, mapLosses: 9, roundDiff: -28 },
      { name: Teams.WOL, wins: 2, losses: 3, mapWins: 5, mapLosses: 7, roundDiff: -11 },
    ],
    omega: [
      { name: Teams.AG, wins: 3, losses: 1, mapWins: 6, mapLosses: 4, roundDiff: 12 },
      { name: Teams.FPX, wins: 4, losses: 0, mapWins: 8, mapLosses: 2, roundDiff: 37 },
      { name: Teams.JD, wins: 0, losses: 4, mapWins: 3, mapLosses: 8, roundDiff: -22 },
      { name: Teams.TEC, wins: 2, losses: 2, mapWins: 5, mapLosses: 6, roundDiff: -20 },
      { name: Teams.TE, wins: 3, losses: 1, mapWins: 6, mapLosses: 3, roundDiff: 21 },
      { name: Teams.TY, wins: 1, losses: 3, mapWins: 4, mapLosses: 7, roundDiff: -11 },
    ],
  },
  matches: [
    { id: 25, week: 5, team1: Teams.EDG, team2: Teams.AG, maps: [] },
    { id: 26, week: 5, team1: Teams.WOL, team2: Teams.JD, maps: [] },
    { id: 27, week: 5, team1: Teams.DRG, team2: Teams.TY, maps: [] },
    { id: 28, week: 5, team1: Teams.BBG, team2: Teams.FPX, maps: [] },
    { id: 29, week: 5, team1: Teams.NOVA, team2: Teams.TEC, maps: [] },
    { id: 30, week: 5, team1: Teams.TE, team2: Teams.EDG, maps: [] },
  ]
}