import {
  StandingsContext,
  type StandingsContextData,
} from '@/providers/StandingsProvider'

export const useStandings = (): StandingsContextData => {
  return useContext(StandingsContext)
}
