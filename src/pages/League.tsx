import type { FunctionComponent } from '@/lib/types'
import { getRouteApi } from '@tanstack/react-router'
import type { LEAGUES } from '../types'
import { leagues } from '../data/leagues'
import { GroupTable } from '../components/GroupTable'
import { EditableMatchesProvider } from '../providers/EditableMatchesProvider'
import { MatchList } from '../components/MatchList'
import { LeagueToolbar } from '@/components/LeagueToolbar'
import { StandingsProvider } from '@/providers/StandingsProvider'

const route = getRouteApi('/league/$leagueId')
const LeaguePage = (): FunctionComponent => {
  const params = route.useParams<{ leagueId: keyof typeof LEAGUES }>()
  const league = leagues[params.leagueId]

  return (
    <EditableMatchesProvider league={league} key={league.name}>
      <StandingsProvider league={league}>
        <LeagueToolbar />
        <div className="flex flex-col sm:grid sm:grid-rows-[max-content,1fr] sm:grid-cols-2 max-w-[700px] mx-auto gap-2 p-4">
          <GroupTable name="Alpha" />
          <GroupTable name="Omega" />
          <MatchList stageFilter="1" />
        </div>
      </StandingsProvider>
    </EditableMatchesProvider>
  )
}

export default LeaguePage
