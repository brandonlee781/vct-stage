import { Dispatch } from 'react'
import { League, Match } from '../types'

export const EditableMatchesContext = createContext<Match[]>([])
export const EditableMatchesDispatchContext = createContext<Dispatch<MatchesReducerAction>>(() => ({}))

type EditableMatchesProviderProps = {
  children: React.ReactNode
  league: League
}
export const EditableMatchesProvider = ({ children, league }: EditableMatchesProviderProps) => {
  const [editableMatches, dispatch] = useReducer(
    matchesReducer,
    league.matches || []
  )
  return (
    <EditableMatchesContext.Provider value={editableMatches}>
      <EditableMatchesDispatchContext.Provider value={dispatch}>
        {children}
      </EditableMatchesDispatchContext.Provider>
    </EditableMatchesContext.Provider>
  )
}

type MatchesReducerAction = {
  type: 'edit' | 'reset'
  id: number,
  data?: Match
}
function matchesReducer(matches: Match[], action: MatchesReducerAction) {
  switch(action.type) {
    case 'edit': {
      const index = matches.findIndex(m => m.id === action.id)
      if (index >= 0 && action.data) {
        return [
          ...matches.slice(0, index),
          action.data,
          ...matches.slice(index + 1),
        ]
      }
      return matches
    }
    case 'reset': {
      const index = matches.findIndex(m => m.id === action.id)
      if (index >= 0) {
        const mat = matches[index]
        return [
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