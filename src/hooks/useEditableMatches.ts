import { EditableMatchesContext } from '@/providers/EditableMatchesProvider'
import { EditableMatchesDispatchContext } from '@/providers/EditableMatchesProvider'

export const useEditableMatches = () => {
  return useContext(EditableMatchesContext)
}

export const useEditableMatchesDispatch = () => {
  return useContext(EditableMatchesDispatchContext)
}