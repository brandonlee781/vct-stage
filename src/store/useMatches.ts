/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import computed from 'zustand-computed'
import type { Leagues, Match, Standing } from '@/types'
import { leagues } from '@/data/leagues'
import { calculateStanding } from '@/data/calculateStanding'
import { sortTeams } from '@/data/sortTeams'

const WINS_TO_QUALIFY = 2

type MatchesState = {
  leagues: Leagues
  current: keyof Leagues | null
}

type MatchesActions = {
  setCurrent: (current: keyof Leagues) => void
  editMatch: (id: number, data: Partial<Match>) => void
  resetMatch: (id: number) => void
}

// #region Computed State
export type SortedStandings = Standing & { sortDiff: number }
export type Standings = {
  alpha: {
    teams: SortedStandings[]
    qualificationSpots: number
  }
  omega: {
    teams: SortedStandings[]
    qualificationSpots: number
  }
}
type ComputedMatchState = {
  standings: Standings
  matches: Match[]
}

const defaultStandings: Standings = {
  alpha: {
    teams: [],
    qualificationSpots: 3,
  },
  omega: {
    teams: [],
    qualificationSpots: 3,
  },
}

const computeStandings = (state: MatchesState & MatchesActions): Standings => {
  if (!state.current) return defaultStandings
  const league = state.leagues[state.current]
  const alphaOriginal = [...league.teams.alpha]
    .map(team =>
      calculateStanding(
        team,
        league.matches.filter(m => m.completed)
      )
    )
    .sort(sortTeams)
  const omegaOriginal = [...league.teams.omega]
    .map(team =>
      calculateStanding(
        team,
        league.matches.filter(m => m.completed)
      )
    )
    .sort(sortTeams)

  const alpha = [...league.teams.alpha]
    .map(team => calculateStanding(team, league.matches))
    .sort(sortTeams)
    .map((a, index) => {
      const oldStanding = alphaOriginal.findIndex(p => p.name === a.name)
      return {
        ...a,
        sortDiff: oldStanding - index,
      }
    })
  const omega = [...league.teams.omega]
    .map(team => calculateStanding(team, league.matches))
    .sort(sortTeams)
    .map((o, index) => {
      const oldStanding = omegaOriginal.findIndex(p => p.name === o.name)
      return {
        ...o,
        sortDiff: oldStanding - index,
      }
    })
  const alphaQualedTeams = alpha.filter(t => t.wins >= WINS_TO_QUALIFY).length
  const omegaQualedTeams = omega.filter(t => t.wins >= WINS_TO_QUALIFY).length
  let alphaSpots = 3
  let omegaSpots = 3

  if (alphaQualedTeams < 3 && omegaQualedTeams >= 3) {
    alphaSpots = alphaQualedTeams
    omegaSpots += 3 - alphaQualedTeams
  }
  if (omegaQualedTeams < 3 && alphaQualedTeams >= 3) {
    omegaSpots = omegaQualedTeams
    alphaSpots += 3 - omegaQualedTeams
  }

  return {
    alpha: {
      teams: alpha,
      qualificationSpots: alphaSpots,
    },
    omega: {
      teams: omega,
      qualificationSpots: omegaSpots,
    },
  }
}

const computeMatchState = (
  state: MatchesState & MatchesActions
): ComputedMatchState => {
  let matches: Match[] = []
  if (state.current) {
    matches = state.leagues[state.current].matches
  }
  return {
    standings: computeStandings(state),
    matches,
  }
}
// #endregion

export const useMatches = create<MatchesState & MatchesActions>()(
  devtools(
    computed(
      set => ({
        leagues: leagues,
        current: null,
        setCurrent: current => set(state => ({ ...state, current: current })),
        editMatch: (id, data) => set(state => editMatch(state, id, data)),
        resetMatch: id => set(state => resetMatch(state, id)),
      }),
      computeMatchState
    ),
    {
      name: 'MatchesStore',
      enabled: import.meta.env.DEV,
    }
  )
)

const editMatch = (
  state: MatchesState,
  id: number,
  data: Partial<Match>
): MatchesState => {
  if (!state.current) return state
  const matches = state.leagues[state.current].matches
  const index = matches.findIndex(m => m.id === id)
  if (index >= 0 && data && !matches[index].completed) {
    const newMatches = [
      ...matches.slice(0, index),
      {
        ...matches[index],
        ...data,
      },
      ...matches.slice(index + 1),
    ]
    return {
      ...state,
      leagues: {
        ...state.leagues,
        [state.current]: {
          ...state.leagues[state.current],
          matches: newMatches,
        },
      },
    }
  }
  return state
}

const resetMatch = (state: MatchesState, id: number): MatchesState => {
  if (!state.current) return state
  const matches = state.leagues[state.current].matches
  const index = matches.findIndex(m => m.id === id)
  if (index >= 0 && !matches[index].completed) {
    const mat = matches[index]
    const newMatches = [
      ...matches.slice(0, index),
      {
        ...mat,
        maps: [],
      },
      ...matches.slice(index + 1),
    ]

    return {
      ...state,
      leagues: {
        ...state.leagues,
        [state.current]: {
          ...state.leagues[state.current],
          matches: newMatches,
        },
      },
    }
  }
  return state
}
