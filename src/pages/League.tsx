import { FunctionComponent } from '@/lib/types';
import { getRouteApi } from '@tanstack/react-router';
import { LEAGUES } from '../types';
import { leagues } from '../data/leagues';
import { GroupTable } from '../components/GroupTable';
import { EditableMatchesProvider } from '../providers/EditableMatchesProvider';
import { MatchList } from '../components/MatchList';
import { LeagueToolbar } from '@/components/LeagueToolbar';

const route = getRouteApi('/league/$leagueId')
const LeaguePage = (): FunctionComponent => {
  const params = route.useParams<{ leagueId: keyof typeof LEAGUES }>()
  const league = leagues[params.leagueId]

  return (
    <EditableMatchesProvider league={league} key={league.name}>
      <LeagueToolbar />
      <div className="flex flex-nowrap w-screen justify-center p-4">
        <div className="grid grid-rows-[fit-content,1fr] grid-cols-2 gap-4">
          <GroupTable name="Alpha" />
          <GroupTable name="Omega" />
          <MatchList />
        </div>
      </div>
    </EditableMatchesProvider>
  )
}

export default LeaguePage