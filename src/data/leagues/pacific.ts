import { type League, LEAGUE_NAMES } from '@/types'
import { Teams } from '../teams'

export const pacificLeague: League = {
  name: LEAGUE_NAMES.pacific,
  teams: {
    alpha: [
      { name: Teams.BL },
      { name: Teams.GG },
      { name: Teams.GE },
      { name: Teams.T1 },
      { name: Teams.TS },
    ],
    omega: [
      { name: Teams.DFM },
      { name: Teams.DRX },
      { name: Teams.RRQ },
      { name: Teams.PRX },
      { name: Teams.TAL },
      { name: Teams.ZETA },
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
    /* eslint-enable prettier/prettier */
  ],
}
