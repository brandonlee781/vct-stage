import { Teams } from '../teams'
import { LEAGUE_NAMES, type League } from '../../types'

export const americasLeague: League = {
  name: LEAGUE_NAMES.americas,
  teams: {
    alpha: [
      { name: Teams.C9 },
      { name: Teams.G2 },
      { name: Teams.KRU },
      { name: Teams.NRG },
      { name: Teams.SEN },
    ],
    omega: [
      { name: Teams['100T'] },
      { name: Teams.EG },
      { name: Teams.FUR },
      { name: Teams.LEV },
      { name: Teams.LLL },
      { name: Teams.MIBR },
    ],
  },
  matches: [
    /* eslint-disable prettier/prettier */
    {id: 1, team1: Teams.C9, team2: Teams.LEV, maps: [ {team1Rounds: 7, team2Rounds: 13}, {team1Rounds: 13, team2Rounds: 7}, {team1Rounds: 18, team2Rounds: 16}, ], completed: true, stage: '1', week: 1, group: 'cross', },
    {id: 2, team1: Teams.NRG, team2: Teams.LLL, maps: [ {team1Rounds: 13, team2Rounds: 10}, {team1Rounds: 13, team2Rounds: 2}, ], completed: true, stage: '1', week: 1, group: 'cross', },
    {id: 3, team1: Teams.G2, team2: Teams.EG, maps: [ {team1Rounds: 13, team2Rounds: 8}, {team1Rounds: 13, team2Rounds: 3}, ], completed: true, stage: '1', week: 1, group: 'cross', },
    {id: 4, team1: Teams.SEN, team2: Teams[ '100T' ], maps: [ {team1Rounds: 13, team2Rounds: 10}, {team1Rounds: 13, team2Rounds: 6}, ], completed: true, stage: '1', week: 1, group: 'cross', },
    {id: 5, team1: Teams.KRU, team2: Teams.FUR, maps: [ {team1Rounds: 13, team2Rounds: 7}, {team1Rounds: 11, team2Rounds: 13}, {team1Rounds: 13, team2Rounds: 7}, ], completed: true, stage: '1', week: 1, group: 'cross', },
    {id: 6, team1: Teams.G2, team2: Teams[ '100T' ], maps: [ {team1Rounds: 9, team2Rounds: 13}, {team1Rounds: 8, team2Rounds: 13}, ], completed: true, stage: '1', week: 2, group: 'cross', },
    {id: 7, team1: Teams.SEN, team2: Teams.LEV, maps: [ {team1Rounds: 17, team2Rounds: 19}, {team1Rounds: 11, team2Rounds: 13}, ], completed: true, stage: '1', week: 2, group: 'cross', },
    {id: 8, team1: Teams.NRG, team2: Teams.FUR, maps: [ {team1Rounds: 13, team2Rounds: 2}, {team1Rounds: 13, team2Rounds: 8}, ], completed: true, stage: '1', week: 2, group: 'cross', },
    {id: 9, team1: Teams.KRU, team2: Teams.MIBR, maps: [ {team1Rounds: 13, team2Rounds: 6}, {team1Rounds: 13, team2Rounds: 8}, ], completed: true, stage: '1', week: 2, group: 'cross', },
    {id: 10, team1: Teams.C9, team2: Teams.EG, maps: [ {team1Rounds: 9, team2Rounds: 13}, {team1Rounds: 13, team2Rounds: 8}, {team1Rounds: 13, team2Rounds: 4}, ], completed: true, stage: '1', week: 2, group: 'cross', },
    {id: 11, team1: Teams.SEN, team2: Teams.MIBR, maps: [ {team1Rounds: 13, team2Rounds: 3}, {team1Rounds: 13, team2Rounds: 7}, ], completed: true, stage: '1', week: 3, group: 'cross', },
    {id: 12, team1: Teams.C9, team2: Teams.LLL, maps: [ {team1Rounds: 11, team2Rounds: 13}, {team1Rounds: 13, team2Rounds: 4}, {team1Rounds: 13, team2Rounds: 9}, ], completed: true, stage: '1', week: 3, group: 'cross', },
    {id: 13, team1: Teams.KRU, team2: Teams.EG, maps: [ {team1Rounds: 13, team2Rounds: 5}, {team1Rounds: 13, team2Rounds: 9} ], completed: true, stage: '1', week: 3, group: 'cross', },
    {id: 14, team1: Teams.NRG, team2: Teams.LEV, maps: [ {team1Rounds: 4, team2Rounds: 13}, {team1Rounds: 4, team2Rounds: 13}, ], completed: true, stage: '1', week: 3, group: 'cross', },
    {id: 15, team1: Teams.G2, team2: Teams.FUR, maps: [ {team1Rounds: 13, team2Rounds: 3}, {team1Rounds: 13, team2Rounds: 3}, ], completed: true, stage: '1', week: 3, group: 'cross', },
    {id: 16, team1: Teams.C9, team2: Teams[ '100T' ], maps: [ {team1Rounds: 7, team2Rounds: 13}, {team1Rounds: 6, team2Rounds: 13}, ], completed: true, stage: '1', week: 3, group: 'cross', },
    {id: 17, team1: Teams.SEN, team2: Teams.EG, maps: [ {team1Rounds: 13, team2Rounds: 10}, {team1Rounds: 11, team2Rounds: 13}, {team1Rounds: 10, team2Rounds: 13}, ], completed: true, stage: '1', week: 3, group: 'cross', },
    {id: 18, team1: Teams.NRG, team2: Teams.MIBR, maps: [ {team1Rounds: 13, team2Rounds: 9}, {team1Rounds: 13, team2Rounds: 3}, ], completed: true, stage: '1', week: 3, group: 'cross', },
    {id: 19, team1: Teams.G2, team2: Teams.LEV, maps: [ {team1Rounds: 6, team2Rounds: 13}, {team1Rounds: 13, team2Rounds: 8}, {team1Rounds: 9, team2Rounds: 13}, ], completed: true, stage: '1', week: 3, group: 'cross', },
    {id: 20, team1: Teams.KRU, team2: Teams.LLL, maps: [ {team1Rounds: 13, team2Rounds: 8}, {team1Rounds: 13, team2Rounds: 8}, ], completed: true, stage: '1', week: 3, group: 'cross', },
    {id: 21, team1: Teams.G2, team2: Teams.MIBR, maps: [ {team1Rounds: 13, team2Rounds: 9}, {team1Rounds: 13, team2Rounds: 3}, ], completed: true, stage: '1', week: 4, group: 'cross', },
    {id: 22, team1: Teams.SEN, team2: Teams.LLL, maps: [ {team1Rounds: 7, team2Rounds: 13}, {team1Rounds: 8, team2Rounds: 13}, ], completed: true, stage: '1', week: 4, group: 'cross', },
    {id: 23, team1: Teams.C9, team2: Teams.FUR, maps: [ {team1Rounds: 2, team2Rounds: 13}, {team1Rounds: 13, team2Rounds: 3}, {team1Rounds: 13, team2Rounds: 8}, ], completed: true, stage: '1', week: 4, group: 'cross', },
    {id: 24, team1: Teams.NRG, team2: Teams.EG, maps: [ {team1Rounds: 6, team2Rounds: 13}, {team1Rounds: 16, team2Rounds: 14}, {team1Rounds: 11, team2Rounds: 13}, ], completed: true, stage: '1', week: 4, group: 'cross', },
    {id: 25, team1: Teams.KRU, team2: Teams[ '100T' ], maps: [ {team1Rounds: 13, team2Rounds: 7}, {team1Rounds: 11, team2Rounds: 13}, {team1Rounds: 13, team2Rounds: 8}, ], completed: true, stage: '1', week: 4, group: 'cross', },

    {id: 26, stage: '1', week: 5, group: 'cross', team1: Teams.SEN, team2: Teams.FUR, maps: [], completed: false},
    {id: 27, stage: '1', week: 5, group: 'cross', team1: Teams.NRG, team2: Teams[ '100T' ], maps: [], completed: false},
    {id: 28, stage: '1', week: 5, group: 'cross', team1: Teams.KRU, team2: Teams.LEV, maps: [], completed: false},
    {id: 29, stage: '1', week: 5, group: 'cross', team1: Teams.C9, team2: Teams.MIBR, maps: [], completed: false},
    {id: 30, stage: '1', week: 5, group: 'cross', team1: Teams.G2, team2: Teams.LLL, maps: [], completed: false},
    /* eslint-enable prettier/prettier */
  ],
}
