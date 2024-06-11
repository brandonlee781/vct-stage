import { type League, LEAGUE_NAMES } from '@/types'
import { Teams } from '../teams'

export const pacificLeague: League = {
  name: LEAGUE_NAMES.pacific,
  teams: {
    alpha: [
      { name: Teams.GG, points: 12 },
      { name: Teams.T1, points: 4 },
      { name: Teams.TS, points: 3 },
      { name: Teams.GE, points: 2 },
      { name: Teams.BL, points: 1 },
    ],
    omega: [
      { name: Teams.PRX, points: 10 },
      { name: Teams.DRX, points: 6 },
      { name: Teams.TAL, points: 4 },
      { name: Teams.RRQ, points: 3 },
      { name: Teams.ZETA, points: 2 },
      { name: Teams.DFM, points: 1 },
    ],
  },
  matches: [
    /* eslint-disable prettier/prettier */
    { id: 1, stage: '1', week: 1, team1: Teams.GE, team2: Teams.ZETA, maps: [{ team1Rounds: 1, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 10 },{ team1Rounds: 8, team2Rounds: 13 },], completed: true },
    { id: 2, stage: '1', week: 1, team1: Teams.TS, team2: Teams.DRX, maps: [{ team1Rounds: 8, team2Rounds: 13 },{ team1Rounds: 8, team2Rounds: 13 },], completed: true },
    { id: 3, stage: '1', week: 1, team1: Teams.BL, team2: Teams.TAL, maps: [{ team1Rounds: 13, team2Rounds: 9 },{ team1Rounds: 7, team2Rounds: 13 },{ team1Rounds: 6, team2Rounds: 13 }], completed: true },
    { id: 4, stage: '1', week: 1, team1: Teams.T1, team2: Teams.PRX, maps: [{ team1Rounds: 10, team2Rounds: 13 },{ team1Rounds: 12, team2Rounds: 14 }], completed: true },
    { id: 5, stage: '1', week: 1, team1: Teams.TS, team2: Teams.RRQ, maps: [{ team1Rounds: 10, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 6 },{ team1Rounds: 12, team2Rounds: 14 }], completed: true },
    { id: 6, stage: '1', week: 1, team1: Teams.GE, team2: Teams.DRX, maps: [{ team1Rounds: 8, team2Rounds: 13 },{ team1Rounds: 6, team2Rounds: 13 }], completed: true },
    { id: 7, stage: '1', week: 1, team1: Teams.GG, team2: Teams.TAL, maps: [{ team1Rounds: 13, team2Rounds: 9 },{ team1Rounds: 13, team2Rounds: 8 }], completed: true },
    { id: 8, stage: '1', week: 1, team1: Teams.T1, team2: Teams.DFM, maps: [{ team1Rounds: 10, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 5 },{ team1Rounds: 11, team2Rounds: 13 }], completed: true },
    { id: 9, stage: '1', week: 2, team1: Teams.GG, team2: Teams.PRX, maps: [{ team1Rounds: 13, team2Rounds: 11 },{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 6, team2Rounds: 13 }], completed: true },
    { id: 10, stage: '1', week: 2, team1: Teams.T1, team2: Teams.DRX, maps: [{ team1Rounds: 13, team2Rounds: 9 },{ team1Rounds: 5, team2Rounds: 13 },{ team1Rounds: 6, team2Rounds: 13 }], completed: true },
    { id: 11, stage: '1', week: 2, team1: Teams.TS, team2: Teams.ZETA, maps: [{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 6, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 7 }], completed: true },
    { id: 12, stage: '1', week: 2, team1: Teams.BL, team2: Teams.RRQ, maps: [{ team1Rounds: 2, team2Rounds: 13 },{ team1Rounds: 5, team2Rounds: 13 }], completed: true },
    { id: 13, stage: '1', week: 2, team1: Teams.GG, team2: Teams.DFM, maps: [{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 13, team2Rounds: 7 }], completed: true },
    { id: 14, stage: '1', week: 2, team1: Teams.GE, team2: Teams.TAL, maps: [{ team1Rounds: 13, team2Rounds: 4 },{ team1Rounds: 12, team2Rounds: 14 },{ team1Rounds: 6, team2Rounds: 13 }], completed: true },
    { id: 15, stage: '1', week: 2, team1: Teams.T1, team2: Teams.RRQ, maps: [{ team1Rounds: 13, team2Rounds: 6 },{ team1Rounds: 13, team2Rounds: 8 }], completed: true },
    { id: 16, stage: '1', week: 2, team1: Teams.BL, team2: Teams.ZETA, maps: [{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 9 },{ team1Rounds: 8, team2Rounds: 13 }], completed: true },
    { id: 17, stage: '1', week: 3, team1: Teams.GG, team2: Teams.DRX, maps: [{ team1Rounds: 10, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 9 },{ team1Rounds: 7, team2Rounds: 13 }], completed: true },
    { id: 18, stage: '1', week: 3, team1: Teams.BL, team2: Teams.DFM, maps: [{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 13, team2Rounds: 4 }], completed: true },
    { id: 19, stage: '1', week: 3, team1: Teams.GE, team2: Teams.RRQ, maps: [{ team1Rounds: 13, team2Rounds: 10 },{ team1Rounds: 13, team2Rounds: 4 }], completed: true },
    { id: 20, stage: '1', week: 3, team1: Teams.TS, team2: Teams.PRX, maps: [{ team1Rounds: 13, team2Rounds: 9 },{ team1Rounds: 13, team2Rounds: 8 }], completed: true },
    { id: 21, stage: '1', week: 3, team1: Teams.T1, team2: Teams.TAL, maps: [{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 10, team2Rounds: 13 }], completed: true },
    { id: 22, stage: '1', week: 3, team1: Teams.GG, team2: Teams.ZETA, maps: [{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 14, team2Rounds: 12 }], completed: true },
    { id: 23, stage: '1', week: 3, team1: Teams.TS, team2: Teams.DFM, maps: [{ team1Rounds: 13, team2Rounds: 4 },{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 2 }], completed: true },
    { id: 24, stage: '1', week: 3, team1: Teams.GE, team2: Teams.PRX, maps: [{ team1Rounds: 4, team2Rounds: 13 },{ team1Rounds: 7, team2Rounds: 13 }], completed: true },
    { id: 25, stage: '1', week: 4, team1: Teams.BL, team2: Teams.PRX, maps: [{ team1Rounds: 5, team2Rounds: 13 },{ team1Rounds: 6, team2Rounds: 13 }], completed: true },
    { id: 26, stage: '1', week: 4, team1: Teams.GE, team2: Teams.DFM, maps: [{ team1Rounds: 10, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 5 },{ team1Rounds: 13, team2Rounds: 11 }], completed: true },
    { id: 27, stage: '1', week: 4, team1: Teams.T1, team2: Teams.ZETA, maps: [{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 9 },{ team1Rounds: 13, team2Rounds: 10 }], completed: true },
    { id: 28, stage: '1', week: 4, team1: Teams.TS, team2: Teams.TAL, maps: [{ team1Rounds: 13, team2Rounds: 11 },{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 10, team2Rounds: 13 }], completed: true },
    { id: 29, stage: '1', week: 4, team1: Teams.BL, team2: Teams.DRX, maps: [{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 4, team2Rounds: 13 }], completed: true },
    { id: 30, stage: '1', week: 4, team1: Teams.GG, team2: Teams.RRQ, maps: [{ team1Rounds: 13, team2Rounds: 3 },{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 10, team2Rounds: 13 }], completed: true },
    
    { id: 31, stage: '2', week: 1, group: 'omega', team1: Teams.ZETA, team2: Teams.DRX, maps: [], completed: false },
    { id: 32, stage: '2', week: 1, group: 'alpha', team1: Teams.TS, team2: Teams.BL, maps: [], completed: false },
    { id: 33, stage: '2', week: 1, group: 'alpha', team1: Teams.T1, team2: Teams.GG, maps: [], completed: false },
    { id: 34, stage: '2', week: 1, group: 'omega', team1: Teams.PRX, team2: Teams.TAL, maps: [], completed: false },
    { id: 35, stage: '2', week: 1, group: 'omega', team1: Teams.RRQ, team2: Teams.DFM, maps: [], completed: false },
    { id: 36, stage: '2', week: 1, group: 'alpha', team1: Teams.TS, team2: Teams.GE, maps: [], completed: false },
    { id: 37, stage: '2', week: 2, group: 'omega', team1: Teams.TAL, team2: Teams.GE, maps: [], completed: false },
    { id: 38, stage: '2', week: 2, group: 'omega', team1: Teams.PRX, team2: Teams.DRX, maps: [], completed: false },
    { id: 39, stage: '2', week: 2, group: 'alpha', team1: Teams.GE, team2: Teams.BL, maps: [], completed: false },
    { id: 40, stage: '2', week: 2, group: 'omega', team1: Teams.DFM, team2: Teams.ZETA, maps: [], completed: false },
    { id: 41, stage: '2', week: 2, group: 'omega', team1: Teams.DRX, team2: Teams.RRQ, maps: [], completed: false },
    { id: 42, stage: '2', week: 2, group: 'alpha', team1: Teams.TS, team2: Teams.T1, maps: [], completed: false },  
    { id: 43, stage: '2', week: 3, group: 'omega', team1: Teams.TAL, team2: Teams.DFM, maps: [], completed: false },
    { id: 44, stage: '2', week: 3, group: 'omega', team1: Teams.ZETA, team2: Teams.RRQ, maps: [], completed: false },
    { id: 45, stage: '2', week: 3, group: 'alpha', team1: Teams.GE, team2: Teams.T1, maps: [], completed: false },
    { id: 46, stage: '2', week: 3, group: 'alpha', team1: Teams.BL, team2: Teams.GG, maps: [], completed: false },
    { id: 47, stage: '2', week: 3, group: 'omega', team1: Teams.PRX, team2: Teams.DFM, maps: [], completed: false },
    { id: 48, stage: '2', week: 3, group: 'omega', team1: Teams.DRX, team2: Teams.TAL, maps: [], completed: false },
    { id: 49, stage: '2', week: 4, group: 'omega', team1: Teams.PRX, team2: Teams.RRQ, maps: [], completed: false },
    { id: 50, stage: '2', week: 4, group: 'alpha', team1: Teams.GG, team2: Teams.GE, maps: [], completed: false },
    { id: 51, stage: '2', week: 4, group: 'omega', team1: Teams.DRX, team2: Teams.DFM, maps: [], completed: false },
    { id: 52, stage: '2', week: 4, group: 'omega', team1: Teams.ZETA, team2: Teams.TAL, maps: [], completed: false },
    { id: 53, stage: '2', week: 4, group: 'alpha', team1: Teams.GG, team2: Teams.TS, maps: [], completed: false },
    { id: 54, stage: '2', week: 4, group: 'omega', team1: Teams.PRX, team2: Teams.ZETA, maps: [], completed: false },
    { id: 55, stage: '2', week: 4, group: 'alpha', team1: Teams.T1, team2: Teams.BL, maps: [], completed: false },
    /* eslint-enable prettier/prettier */
  ],
}
