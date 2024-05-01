import { Teams } from '../teams';
import { LEAGUES, League } from '../../types';

export const americasLeague: League = {
  name: LEAGUES.americas,
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
    { id: 1, stage: '1', week: 1, team1: Teams.C9, team2: Teams.LEV, maps: [{ team1Rounds: 7, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 18, team2Rounds: 16 },], completed: true },
    { id: 2, stage: '1', week: 1, team1: Teams.NRG, team2: Teams.LLL, maps: [{ team1Rounds: 13, team2Rounds: 10 },{ team1Rounds: 13, team2Rounds: 2 },], completed: true },
    { id: 3, stage: '1', week: 1, team1: Teams.G2, team2: Teams.EG, maps: [{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 13, team2Rounds: 3 },], completed: true },
    { id: 4, stage: '1', week: 1, team1: Teams.SEN, team2: Teams['100T'], maps: [{ team1Rounds: 13, team2Rounds: 10 },{ team1Rounds: 13, team2Rounds: 6 },], completed: true },
    { id: 5, stage: '1', week: 1, team1: Teams.KRU, team2: Teams.FUR, maps: [{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 7 },], completed: true },

    { id: 6, stage: '1', week: 2, team1: Teams.G2, team2: Teams['100T'], maps: [{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 8, team2Rounds: 13 },], completed: true },
    { id: 7, stage: '1', week: 2, team1: Teams.SEN, team2: Teams.LEV, maps: [{ team1Rounds: 17, team2Rounds: 19 },{ team1Rounds: 11, team2Rounds: 13 },], completed: true },
    { id: 8, stage: '1', week: 2, team1: Teams.NRG, team2: Teams.FUR, maps: [{ team1Rounds: 13, team2Rounds: 2 },{ team1Rounds: 13, team2Rounds: 8 },], completed: true },
    { id: 9, stage: '1', week: 2, team1: Teams.KRU, team2: Teams.MIBR, maps: [{ team1Rounds: 13, team2Rounds: 6 },{ team1Rounds: 13, team2Rounds: 8 },], completed: true },
    { id: 10, stage: '1', week: 2, team1: Teams.C9, team2: Teams.EG, maps: [{ team1Rounds: 9, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 13, team2Rounds: 4 },], completed: true },

    { id: 11, stage: '1', week: 3, team1: Teams.SEN, team2: Teams.MIBR, maps: [{ team1Rounds: 13, team2Rounds: 3 },{ team1Rounds: 13, team2Rounds: 7 },], completed: true },
    { id: 12, stage: '1', week: 3, team1: Teams.C9, team2: Teams.LLL, maps: [{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 4 },{ team1Rounds: 13, team2Rounds: 9 },], completed: true },
    { id: 13, stage: '1', week: 3, team1: Teams.KRU, team2: Teams.EG, maps: [{ team1Rounds: 13, team2Rounds: 5 },{ team1Rounds: 13, team2Rounds: 9 }], completed: true },
    { id: 14, stage: '1', week: 3, team1: Teams.NRG, team2: Teams.LEV, maps: [{ team1Rounds: 4, team2Rounds: 13 },{ team1Rounds: 4, team2Rounds: 13 },], completed: true },
    { id: 15, stage: '1', week: 3, team1: Teams.G2, team2: Teams.FUR, maps: [{ team1Rounds: 13, team2Rounds: 3 },{ team1Rounds: 13, team2Rounds: 3 },], completed: true },
    { id: 16, stage: '1', week: 3, team1: Teams.C9, team2: Teams['100T'], maps: [{ team1Rounds: 7, team2Rounds: 13 },{ team1Rounds: 6, team2Rounds: 13 },], completed: true },
    { id: 17, stage: '1', week: 3, team1: Teams.SEN, team2: Teams.EG, maps: [{ team1Rounds: 13, team2Rounds: 10 },{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 10, team2Rounds: 13 },], completed: true },
    { id: 18, stage: '1', week: 3, team1: Teams.NRG, team2: Teams.MIBR, maps: [{ team1Rounds: 13, team2Rounds: 9 },{ team1Rounds: 13, team2Rounds: 3 },], completed: true },
    { id: 19, stage: '1', week: 3, team1: Teams.G2, team2: Teams.LEV, maps: [{ team1Rounds: 6, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 9, team2Rounds: 13 },], completed: true },
    { id: 20, stage: '1', week: 3, team1: Teams.KRU, team2: Teams.LLL, maps: [{ team1Rounds: 13, team2Rounds: 8 },{ team1Rounds: 13, team2Rounds: 8 },], completed: true },

    { id: 21, stage: '1', week: 4, team1: Teams.G2, team2: Teams.MIBR, maps: [{ team1Rounds: 13, team2Rounds: 9 },{ team1Rounds: 13, team2Rounds: 3 },], completed: true },
    { id: 22, stage: '1', week: 4, team1: Teams.SEN, team2: Teams.LLL, maps: [{ team1Rounds: 7, team2Rounds: 13 },{ team1Rounds: 8, team2Rounds: 13 },], completed: true },
    { id: 23, stage: '1', week: 4, team1: Teams.C9, team2: Teams.FUR, maps: [{ team1Rounds: 2, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 3 },{ team1Rounds: 13, team2Rounds: 8 },], completed: true },
    { id: 24, stage: '1', week: 4, team1: Teams.NRG, team2: Teams.EG, maps: [{ team1Rounds: 6, team2Rounds: 13 },{ team1Rounds: 16, team2Rounds: 14 },{ team1Rounds: 11, team2Rounds: 13 },], completed: true },
    { id: 25, stage: '1', week: 4, team1: Teams.KRU, team2: Teams['100T'], maps: [{ team1Rounds: 13, team2Rounds: 7 },{ team1Rounds: 11, team2Rounds: 13 },{ team1Rounds: 13, team2Rounds: 8 },], completed: true },

    { id: 26, stage: '1', week: 5, team1: Teams.SEN, team2: Teams.FUR, maps: [], completed: false },
    { id: 27, stage: '1', week: 5, team1: Teams.NRG, team2: Teams['100T'], maps: [], completed: false },
    { id: 28, stage: '1', week: 5, team1: Teams.KRU, team2: Teams.LEV, maps: [], completed: false },
    { id: 29, stage: '1', week: 5, team1: Teams.C9, team2: Teams.MIBR, maps: [], completed: false },
    { id: 30, stage: '1', week: 5, team1: Teams.G2, team2: Teams.LLL, maps: [], completed: false },
  ]
}
