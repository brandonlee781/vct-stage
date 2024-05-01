import { Teams } from '../teams';
import { LEAGUES, League } from '../../types';

export const americasLeague: League = {
  name: LEAGUES.americas,
  teams: {
    alpha: [
      { name: Teams.C9, wins: 4, losses: 1, mapWins: 8, mapLosses: 1, roundDiff: 14 },
      { name: Teams.G2, wins: 3, losses: 2, mapWins: 7, mapLosses: 4, roundDiff: 34 },
      { name: Teams.KRU, wins: 5, losses: 0, mapWins: 10, mapLosses: 2, roundDiff: 53 },
      { name: Teams.NRG, wins: 3, losses: 2, mapWins: 7, mapLosses: 4, roundDiff: 19 },
      { name: Teams.SEN, wins: 2, losses: 3, mapWins: 5, mapLosses: 6, roundDiff: 9 },
    ],
    omega: [
      { name: Teams['100T'], wins: 2, losses: 2, mapWins: 5, mapLosses: 4, roundDiff: 3 },
      { name: Teams.EG, wins: 2, losses: 3, mapWins: 5, mapLosses: 8, roundDiff: -28 },
      { name: Teams.FUR, wins: 0, losses: 4, mapWins: 0, mapLosses: 8, roundDiff: -50 },
      { name: Teams.LEV, wins: 3, losses: 1, mapWins: 7, mapLosses: 3, roundDiff: 26 },
      { name: Teams.LLL, wins: 1, losses: 3, mapWins: 3, mapLosses: 6, roundDiff: -24 },
      { name: Teams.MIBR, wins: 0, losses: 4, mapWins: 0, mapLosses: 8, roundDiff: -56 },
    ],
  },
  matches: [
    { id: 26, week: 5, team1: Teams.SEN, team2: Teams.FUR, maps: [] },
    { id: 27, week: 5, team1: Teams.NRG, team2: Teams['100T'], maps: [] },
    { id: 28, week: 5, team1: Teams.KRU, team2: Teams.LEV, maps: [] },
    { id: 29, week: 5, team1: Teams.C9, team2: Teams.MIBR, maps: [] },
    { id: 30, week: 5, team1: Teams.G2, team2: Teams.LLL, maps: [] },
  ]
}
