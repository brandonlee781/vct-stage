import { calculateStanding } from '@/data/calculateStanding';
import { sortTeams } from '@/data/sortTeams';
import { League, Standing } from '@/types';
import { useEditableMatches } from '@/hooks/useEditableMatches';

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

  const original = useMemo(() => {
    const alpha = [...league.teams.alpha]
      .map(({ name }) => calculateStanding(name, league.matches))
      .sort(sortTeams)
    const omega = [...league.teams.omega]
      .map(({ name }) => calculateStanding(name, league.matches))
      .sort(sortTeams)

    return {
      alpha,
      omega,
    }
  }, [league])

  useEffect(() => {
    const alpha = [...league.teams.alpha]
      .map(({ name }) => calculateStanding(name, matches))
      .sort(sortTeams)
      .map((a, i) => {
        const oldStanding = original.alpha.findIndex(p => p.name === a.name)
        return {
          ...a,
          sortDiff: oldStanding - i,
        }
      })
    const omega = [...league.teams.omega]
      .map(({ name }) => calculateStanding(name, matches))
      .sort(sortTeams)
      .map((o, i) => {
        const oldStanding = original.omega.findIndex(p => p.name === o.name)
        return {
          ...o,
          sortDiff: oldStanding - i,
        }
      })
    const alphaQualedTeams = alpha.filter(t => t.wins >= WINS_TO_QUALIFY).length
    const omegaQualedTeams = omega.filter(t => t.wins >= WINS_TO_QUALIFY).length
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
    
    setStandings({
      alpha: {
        teams: alpha,
        qualificationSpots: alphaSpots,
      },
      omega: {
        teams: omega,
        qualificationSpots: omegaSpots,
      }
    })
  }, [league, matches, original])
  return (
    <StandingsContext.Provider value={standings}>
      {children}
    </StandingsContext.Provider>
  )
}

export const useStandings = () => {
  return useContext(StandingsContext)
}