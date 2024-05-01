import {
  EditableMatchesContext,
  EditableMatchesDispatchContext,
  type MatchesReducerAction,
} from '@/providers/EditableMatchesProvider'
import type { Match } from '@/types'
import type { Dispatch } from 'react'

export const useEditableMatches = (): Match[] => {
  return useContext(EditableMatchesContext)
}

export const useEditableMatchesDispatch =
  (): Dispatch<MatchesReducerAction> => {
    return useContext(EditableMatchesDispatchContext)
  }
