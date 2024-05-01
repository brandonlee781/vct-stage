import { calculateStanding } from '@/data/calculateStanding';
import { sortTeams } from '@/data/sortTeams';
import { League, Standing } from '@/types';
import { useEditableMatches } from '@/hooks/useEditableMatches';
import { unionBy } from 'lodash-es';

const WINS_TO_QUALIFY = 2

type SortedStandings = Standing & { sortDiff: number }
type StandingsContextData = {
  alpha: {
    teams: SortedStandings[]
    qualificationSpots: number;
  },
  omega: {
    teams: SortedStandings[],
    qualificationSpots: number;
  }
}

export const StandingsContext = createContext<StandingsContextData>({
  alpha: { teams: [], qualificationSpots: 3 },
  omega: { teams: [], qualificationSpots: 3 },
})

type StandingsProviderProps = {
  children: React.ReactNode
  league: League
}
export const StandingsProvider = ({ children, league }: StandingsProviderProps) => {
  const matches = useEditableMatches()
  const [standings, setStandings] = useState<StandingsContextData>({
    alpha: { teams: [], qualificationSpots: 3 },
    omega: { teams: [], qualificationSpots: 3 },
  })

  useEffect(() => {
    const allMatches = unionBy(matches, league.matches, (i) => i.id)
    const alpha = [...league.teams.alpha]
      .map(({ name }) => calculateStanding(name, allMatches))
      .sort(sortTeams)
    const omega = [...league.teams.omega]
      .map(({ name }) => calculateStanding(name, allMatches))
      .sort(sortTeams)
    
    setStandings((prevStand) => {
      const newAlpha = alpha.map((a, i) => {
        const oldStanding = prevStand.alpha.teams.findIndex(p => p.name === a.name)
        return {
          ...a,
          sortDiff: oldStanding - i,
        }
      })
      const newOmega = omega.map((o, i) => {
        const oldStanding = prevStand.omega.teams.findIndex(p => p.name === o.name)
        return {
          ...o,
          sortDiff: oldStanding - i,
        }
      })

      const alphaQualedTeams = newAlpha.filter(t => t.wins >= WINS_TO_QUALIFY).length
      const omegaQualedTeams = newOmega.filter(t => t.wins >= WINS_TO_QUALIFY).length
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
        alpha: {
          teams: newAlpha,
          qualificationSpots: alphaSpots,
        },
        omega: {
          teams: newOmega,
          qualificationSpots: omegaSpots,
        }
      }
    })
  }, [league, matches])
  return (
    <StandingsContext.Provider value={standings}>
      {children}
    </StandingsContext.Provider>
  )
}

export const useStandings = () => {
  return useContext(StandingsContext)
}