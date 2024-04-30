import { LEAGUES, League } from '../../types';
import { Teams } from '../teams';

export const pacificLeague: League = {
  name: LEAGUES.pacific,
  teams: {
    alpha: [
      { name: Teams.BL, wins: 1, losses: 5, mapWins: 4, mapLosses: 11, roundDiff: -50 },
      { name: Teams.GG, wins: 3, losses: 3, mapWins: 9, mapLosses: 6, roundDiff: 20 },
      { name: Teams.GE, wins: 2, losses: 4, mapWins: 6, mapLosses: 9, roundDiff: -22 },
      { name: Teams.T1, wins: 2, losses: 4, mapWins: 6, mapLosses: 9, roundDiff: -1 },
      { name: Teams.TS, wins: 3, losses: 3, mapWins: 8, mapLosses: 8, roundDiff: 18 },
    ],
    omega: [
      { name: Teams.DFM, wins: 1, losses: 4, mapWins: 5, mapLosses: 9, roundDiff: -48 },
      { name: Teams.DRX, wins: 5, losses: 0, mapWins: 10, mapLosses: 2, roundDiff: 51 },
      { name: Teams.RRQ, wins: 3, losses: 2, mapWins: 6, mapLosses: 6, roundDiff: -12 },
      { name: Teams.PRX, wins: 4, losses: 1, mapWins: 8, mapLosses: 3, roundDiff: 33 },
      { name: Teams.TAL, wins: 4, losses: 1, mapWins: 8, mapLosses: 5, roundDiff: 8 },
      { name: Teams.ZETA, wins: 2, losses: 3, mapWins: 6, mapLosses: 8, roundDiff: 3 },
    ],
  }
}