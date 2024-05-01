import { type League, LEAGUES } from '@/types'
import { Teams } from '../teams'

export const emeaLeague: League = {
  name: LEAGUES.emea,
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
    { id: 25, week: 5, team1: Teams.BBL, team2: Teams.GX, maps: [] },
    { id: 26, week: 5, team1: Teams.KC, team2: Teams.TH, maps: [] },
    { id: 27, week: 5, team1: Teams.VIT, team2: Teams.KOI, maps: [] },
    { id: 28, week: 5, team1: Teams.NAVI, team2: Teams.FNC, maps: [] },
    { id: 29, week: 5, team1: Teams.TL, team2: Teams.GM8, maps: [] },
    { id: 30, week: 5, team1: Teams.BBL, team2: Teams.FUT, maps: [] },
  ],
}
