import { type League, LEAGUE_NAMES } from '@/types'
import { Teams } from '../teams'

export const chinaLeague: League = {
  name: LEAGUE_NAMES.china,
  teams: {
    alpha: [
      { name: Teams.BBG },
      { name: Teams.DRG },
      { name: Teams.EDG },
      { name: Teams.NOVA },
      { name: Teams.WOL },
    ],
    omega: [
      { name: Teams.AG },
      { name: Teams.FPX },
      { name: Teams.JD },
      { name: Teams.TEC },
      { name: Teams.TE },
      { name: Teams.TY },
    ],
  },
  matches: [
    /* eslint-disable prettier/prettier */
    { id: 1, stage: '1', week: 1, team1: Teams.BBG, team2: Teams.TY, maps: [{ team1Rounds: 3, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 6 },{ team1Rounds: 13, team2Rounds: 6 }], completed: true },
    { id: 2, stage: '1', week: 1, team1: Teams.WOL, team2: Teams.TEC, maps: [{ team1Rounds: 13, team2Rounds: 5 },{ team1Rounds: 12, team2Rounds: 14 },{ team1Rounds: 10, team2Rounds: 13 }], completed: true },
    { id: 3, stage: '1', week: 1, team1: Teams.DRG, team2: Teams.AG, maps: [{ team1Rounds: 13, team2Rounds: 11 },{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 8, team2Rounds: 13 }], completed: true },
    { id: 4, stage: '1', week: 1, team1: Teams.EDG, team2: Teams.JD, maps: [{ team1Rounds: 13, team2Rounds: 5 },{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 11 }], completed: true },
    { id: 5, stage: '1', week: 1, team1: Teams.NOVA, team2: Teams.TE, maps: [{ team1Rounds: 5, team2Rounds: 13 },{ team1Rounds: 9, team2Rounds: 13 }], completed: true },
    { id: 6, stage: '1', week: 1, team1: Teams.FPX, team2: Teams.WOL, maps: [{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 13, team2Rounds: 7 }], completed: true },
    { id: 7, stage: '1', week: 2, team1: Teams.JD, team2: Teams.NOVA, maps: [{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 4, team2Rounds: 13 }], completed: true },
    { id: 8, stage: '1', week: 2, team1: Teams.FPX, team2: Teams.DRG, maps: [{ team1Rounds: 13, team2Rounds: 11 },{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 3 }], completed: true },
    { id: 9, stage: '1', week: 2, team1: Teams.AG, team2: Teams.WOL, maps: [{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 12, team2Rounds: 14 }], completed: true },
    { id: 10, stage: '1', week: 2, team1: Teams.TE, team2: Teams.BBG, maps: [{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 13, team2Rounds: 7 }], completed: true },
    { id: 11, stage: '1', week: 2, team1: Teams.DRG, team2: Teams.TEC, maps: [{ team1Rounds: 4, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 13, team2Rounds: 5 }], completed: true },
    { id: 12, stage: '1', week: 2, team1: Teams.TY, team2: Teams.EDG, maps: [{ team1Rounds: 5, team2Rounds: 13 },{ team1Rounds: 10, team2Rounds: 13 }], completed: true },
    { id: 13, stage: '1', week: 3, team1: Teams.WOL, team2: Teams.TE, maps: [{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 9, team2Rounds: 13 }], completed: true },
    { id: 14, stage: '1', week: 3, team1: Teams.NOVA, team2: Teams.FPX, maps: [{ team1Rounds: 6, team2Rounds: 13 },{ team1Rounds: 4, team2Rounds: 13 }], completed: true },
    { id: 15, stage: '1', week: 3, team1: Teams.BBG, team2: Teams.AG, maps: [{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 7, team2Rounds: 13 }], completed: true },
    { id: 16, stage: '1', week: 3, team1: Teams.DRG, team2: Teams.JD, maps: [{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 5, team2Rounds: 13 },{ team1Rounds: 14, team2Rounds: 12 }], completed: true },
    { id: 17, stage: '1', week: 3, team1: Teams.TY, team2: Teams.NOVA, maps: [{ team1Rounds: 10, team2Rounds: 13 },{ team1Rounds: 14, team2Rounds: 12 },{ team1Rounds: 13, team2Rounds: 9 }], completed: true },
    { id: 18, stage: '1', week: 3, team1: Teams.EDG, team2: Teams.TEC, maps: [{ team1Rounds: 13, team2Rounds: 5 },{ team1Rounds: 13, team2Rounds: 5 }], completed: true },
    { id: 19, stage: '1', week: 4, team1: Teams.TEC, team2: Teams.BBG, maps: [{ team1Rounds: 13, team2Rounds: 11 },{ team1Rounds: 8, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 6 }], completed: true },
    { id: 20, stage: '1', week: 4, team1: Teams.TE, team2: Teams.DRG, maps: [{ team1Rounds: 7, team2Rounds: 13 },{ team1Rounds: 10, team2Rounds: 13 }], completed: true },
    { id: 21, stage: '1', week: 4, team1: Teams.TY, team2: Teams.WOL, maps: [{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 10, team2Rounds: 13 }], completed: true },
    { id: 22, stage: '1', week: 4, team1: Teams.FPX, team2: Teams.EDG, maps: [{ team1Rounds: 4, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 11 },{ team1Rounds: 13, team2Rounds: 4 }], completed: true },
    { id: 23, stage: '1', week: 4, team1: Teams.AG, team2: Teams.NOVA, maps: [{ team1Rounds: 16, team2Rounds: 14 },{ team1Rounds: 10, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 7 }], completed: true },
    { id: 24, stage: '1', week: 4, team1: Teams.BBG, team2: Teams.JD, maps: [{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 13, team2Rounds: 10 }], completed: true },
    { id: 25, stage: '1', week: 5, team1: Teams.EDG, team2: Teams.AG, maps: [{ team1Rounds: 13, team2Rounds: 6 },{ team1Rounds: 13, team2Rounds: 5 }], completed: true },
    { id: 26, stage: '1', week: 5, team1: Teams.WOL, team2: Teams.JD, maps: [{ team1Rounds: 8, team2Rounds: 13 },{ team1Rounds: 1, team2Rounds: 13 }], completed: true },
    { id: 27, stage: '1', week: 5, team1: Teams.DRG, team2: Teams.TY, maps: [], completed: false },
    { id: 28, stage: '1', week: 5, team1: Teams.BBG, team2: Teams.FPX, maps: [], completed: false },
    { id: 29, stage: '1', week: 5, team1: Teams.NOVA, team2: Teams.TEC, maps: [], completed: false },
    { id: 30, stage: '1', week: 5, team1: Teams.TE, team2: Teams.EDG, maps: [], completed: false },
    /* eslint-enable prettier/prettier */
  ],
}
