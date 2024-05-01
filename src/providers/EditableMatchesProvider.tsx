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
    league.matches.filter(m => !m.completed)
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
            ...mat,
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