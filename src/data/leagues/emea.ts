import { type League, LEAGUE_NAMES } from '@/types'
import { Teams } from '../teams'

export const emeaLeague: League = {
  name: LEAGUE_NAMES.emea,
  teams: {
    alpha: [
      { name: Teams.BBL },
      { name: Teams.FNC },
      { name: Teams.KC },
      { name: Teams.TL },
      { name: Teams.VIT },
    ],
    omega: [
      { name: Teams.FUT },
      { name: Teams.GM8 },
      { name: Teams.GX },
      { name: Teams.KOI },
      { name: Teams.NAVI },
      { name: Teams.TH },
    ],
  },
  matches: [
    /* eslint-disable prettier/prettier */
    { id: 1, stage: '1', week: 1, team1: Teams.KC, team2: Teams.GX, maps: [{ team1Rounds: 13, team2Rounds: 4 },{ team1Rounds: 13, team2Rounds: 9 },], completed: true },
    { id: 2, stage: '1', week: 1, team1: Teams.KOI, team2: Teams.TL, maps: [{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 7, team2Rounds: 13 },], completed: true },
    { id: 3, stage: '1', week: 1, team1: Teams.VIT, team2: Teams.NAVI, maps: [{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 4, team2Rounds: 13 },], completed: true },
    { id: 4, stage: '1', week: 1, team1: Teams.FNC, team2: Teams.TH, maps: [{ team1Rounds: 4, team2Rounds: 13 },{ team1Rounds: 15, team2Rounds: 17 },], completed: true },
    { id: 5, stage: '1', week: 1, team1: Teams.TL, team2: Teams.FUT, maps: [{ team1Rounds: 5, team2Rounds: 13 },{ team1Rounds: 8, team2Rounds: 13 },], completed: true },
    { id: 6, stage: '1', week: 1, team1: Teams.BBL, team2: Teams.GM8, maps: [{ team1Rounds: 7, team2Rounds: 13 },{ team1Rounds: 11, team2Rounds: 13 },], completed: true },
    { id: 7, stage: '1', week: 2, team1: Teams.KC, team2: Teams.FUT, maps: [{ team1Rounds: 13, team2Rounds: 11 },{ team1Rounds: 8, team2Rounds: 13 },{ team1Rounds: 7, team2Rounds: 13 },], completed: true },
    { id: 8, stage: '1', week: 2, team1: Teams.VIT, team2: Teams.TH, maps: [{ team1Rounds: 13, team2Rounds: 9 },{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 9 },], completed: true },
    { id: 9, stage: '1', week: 2, team1: Teams.TL, team2: Teams.NAVI, maps: [{ team1Rounds: 13, team2Rounds: 10 },{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 5, team2Rounds: 13 },], completed: true },
    { id: 10, stage: '1', week: 2, team1: Teams.BBL, team2: Teams.KOI, maps: [{ team1Rounds: 13, team2Rounds: 4 },{ team1Rounds: 13, team2Rounds: 3 },], completed: true },
    { id: 11, stage: '1', week: 2, team1: Teams.FNC, team2: Teams.GX, maps: [{ team1Rounds: 13, team2Rounds: 5 },{ team1Rounds: 5, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 7 },], completed: true },
    { id: 12, stage: '1', week: 2, team1: Teams.KC, team2: Teams.GM8, maps: [{ team1Rounds: 13, team2Rounds: 6 },{ team1Rounds: 13, team2Rounds: 6 },], completed: true },
    { id: 13, stage: '1', week: 3, team1: Teams.GM8, team2: Teams.FNC, maps: [{ team1Rounds: 6, team2Rounds: 13 },{ team1Rounds: 4, team2Rounds: 13 },], completed: true },
    { id: 14, stage: '1', week: 3, team1: Teams.KC, team2: Teams.NAVI, maps: [{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 7, team2Rounds: 13 },{ team1Rounds: 6, team2Rounds: 13 },], completed: true },
    { id: 15, stage: '1', week: 3, team1: Teams.BBL, team2: Teams.TH, maps: [{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 13, team2Rounds: 10 },], completed: true },
    { id: 16, stage: '1', week: 3, team1: Teams.VIT, team2: Teams.FUT, maps: [{ team1Rounds: 7, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 9 },{ team1Rounds: 13, team2Rounds: 9 },], completed: true },
    { id: 17, stage: '1', week: 3, team1: Teams.TL, team2: Teams.GX, maps: [{ team1Rounds: 14, team2Rounds: 16 },{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 13, team2Rounds: 11 },], completed: true },
    { id: 18, stage: '1', week: 3, team1: Teams.FNC, team2: Teams.KOI, maps: [{ team1Rounds: 13, team2Rounds: 11 },{ team1Rounds: 13, team2Rounds: 4 },], completed: true },
    { id: 19, stage: '1', week: 4, team1: Teams.TL, team2: Teams.TH, maps: [{ team1Rounds: 2, team2Rounds: 13 },{ team1Rounds: 7, team2Rounds: 13 },], completed: true },
    { id: 20, stage: '1', week: 4, team1: Teams.VIT, team2: Teams.GM8, maps: [{ team1Rounds: 5, team2Rounds: 13 },{ team1Rounds: 5, team2Rounds: 13 },], completed: true },
    { id: 21, stage: '1', week: 4, team1: Teams.FNC, team2: Teams.FUT, maps: [{ team1Rounds: 7, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 15 },], completed: true },
    { id: 22, stage: '1', week: 4, team1: Teams.BBL, team2: Teams.NAVI, maps: [{ team1Rounds:8 , team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 13, team2Rounds: 9 },], completed: true },
    { id: 23, stage: '1', week: 4, team1: Teams.VIT, team2: Teams.GX, maps: [{ team1Rounds: 14, team2Rounds: 16 },{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 13, team2Rounds: 6 },], completed: true },
    { id: 24, stage: '1', week: 4, team1: Teams.KC, team2: Teams.KOI, maps: [{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 7, team2Rounds: 13 },{ team1Rounds: 15, team2Rounds: 13 },], completed: true },
    { id: 25, stage: '1', week: 5, team1: Teams.BBL, team2: Teams.GX, maps: [{ team1Rounds: 6, team2Rounds: 13 },{ team1Rounds: 11, team2Rounds: 13 },], completed: true },
    { id: 26, stage: '1', week: 5, team1: Teams.KC, team2: Teams.TH, maps: [{ team1Rounds: 12, team2Rounds: 14 },{ team1Rounds: 13, team2Rounds: 5 },{ team1Rounds: 9, team2Rounds: 13 }], completed: true },
    { id: 27, stage: '1', week: 5, team1: Teams.VIT, team2: Teams.KOI, maps: [{ team1Rounds: 5, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 4, team2Rounds: 13 }], completed: true },
    { id: 28, stage: '1', week: 5, team1: Teams.NAVI, team2: Teams.FNC, maps: [{ team1Rounds: 6, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 13, team2Rounds: 3 }], completed: true },
    { id: 29, stage: '1', week: 5, team1: Teams.TL, team2: Teams.GM8, maps: [{ team1Rounds: 13, team2Rounds: 4 },{ team1Rounds: 13, team2Rounds: 2 }], completed: true },
    { id: 30, stage: '1', week: 5, team1: Teams.BBL, team2: Teams.FUT, maps: [], completed: false },
    /* eslint-enable prettier/prettier */
  ],
}
