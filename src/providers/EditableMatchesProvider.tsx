import { Dispatch } from 'react'
import { League, Match, Team } from '../types'
import { combinedData } from '@/lib/combinedData'

type CombinedTeam = Team & { sortDiff: number }
type CombinedTeamsContextData = {
  alpha: {
    teams: CombinedTeam[]
    qualificationSpots: number;
  },
  omega: {
    teams: CombinedTeam[],
    qualificationSpots: number;
  }
}

export const EditableMatchesContext = createContext<Match[]>([])
export const CombinedTeamsContext = createContext<CombinedTeamsContextData>({
  alpha: { teams: [], qualificationSpots: 3 },
  omega: { teams: [], qualificationSpots: 3 },
})
export const EditableMatchesDispatchContext = createContext<Dispatch<MatchesReducerAction>>(() => ({}))

type EditableMatchesProviderProps = {
  children: React.ReactNode
  league: League
}

const WINS_TO_QUALIFY = 2

export const EditableMatchesProvider = ({ children, league }: EditableMatchesProviderProps) => {
  const [editableMatches, dispatch] = useReducer(
    matchesReducer,
    league.matches || []
  )

  const teams = useMemo((): CombinedTeamsContextData => {
    const alphaTeams = combinedData(league.teams.alpha, editableMatches)
    const omegaTeams = combinedData(league.teams.omega, editableMatches)

    const alphaQualedTeams = alphaTeams.filter(t => t.wins >= WINS_TO_QUALIFY).length
    const omegaQualedTeams = omegaTeams.filter(t => t.wins >= WINS_TO_QUALIFY).length

    let alphaSpots = 3
    let omegaSpots = 3

    if (alphaQualedTeams < 3) {
      alphaSpots = alphaQualedTeams
      omegaSpots += 3 - alphaQualedTeams
      
    }
    if (omegaQualedTeams < 3) {
      omegaSpots = omegaQualedTeams
      alphaSpots += 3 - omegaQualedTeams
    }

    return {
      alpha: { teams: alphaTeams, qualificationSpots: alphaSpots },
      omega: { teams: omegaTeams, qualificationSpots: omegaSpots },
    }
  }, [league, editableMatches])

  
  return (
    <EditableMatchesContext.Provider value={editableMatches}>
      <EditableMatchesDispatchContext.Provider value={dispatch}>
      <CombinedTeamsContext.Provider value={teams}>

        {children}
      </CombinedTeamsContext.Provider>
      </EditableMatchesDispatchContext.Provider>
    </EditableMatchesContext.Provider>
  )
}

type MatchesReducerAction = {
  type: 'edit' | 'reset'
  id: number,
  data?: Partial<Match>
}
function matchesReducer(matches: Match[], action: MatchesReducerAction) {
  switch(action.type) {
    case 'edit': {
      const index = matches.findIndex(m => m.id === action.id)
      if (index >= 0 && action.data) {
        const newMatches = [
          ...matches.slice(0, index),
          {
            ...matches[index],
            ...action.data
          },
          ...matches.slice(index + 1),
        ]
        return newMatches
      }
      return matches
    }
    case 'reset': {
      const index = matches.findIndex(m => m.id === action.id)
      if (index >= 0) {
        const mat = matches[index]
        const newMatches = [
          ...matches.slice(0, index),
          {
            id: mat.id,
            week: mat.week,
            team1: mat.team1,
            team2: mat.team2,
            maps: []
          },
          ...matches.slice(index + 1),
        ]
        return newMatches
      }
      return matches
    }
    default: {
      throw new Error(`Unknown Action: ${action.type}`);
    }
  }
}

export const useEditableMatches = () => {
  return useContext(EditableMatchesContext)
}
export const useEditableMatchesDispatch = () => {
  return useContext(EditableMatchesDispatchContext)
}
export const useTeams = () => {
  return useContext(CombinedTeamsContext)
}