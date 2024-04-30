import { FunctionComponent } from '@/lib/types';
import { Link, getRouteApi } from '@tanstack/react-router';
import { LEAGUES } from '../types';
import { leagues } from '../data/leagues';
import { GroupTable } from '../components/GroupTable';
import { EditableMatchesProvider } from '../providers/EditableMatchesProvider';
import { MatchList } from '../components/MatchList';

const route = getRouteApi('/league/$leagueId')
const LeaguePage = (): FunctionComponent => {
  const params = route.useParams<{ leagueId: keyof typeof LEAGUES }>()
  const league = leagues[params.leagueId]

  return (
    <EditableMatchesProvider league={league} key={league.name}>
      <div className="w-full h-10 bg-slate-700 flex flex-row-reverse items-center px-4">
        <Link className="mx-2" to="/league/$leagueId" params={{ leagueId: 'pacific' }}>Pacific</Link>
        <Link className="mx-2" to="/league/$leagueId" params={{ leagueId: 'emea' }}>EMEA</Link>
        <Link className="mx-2" to="/league/$leagueId" params={{ leagueId: 'china' }}>China</Link>
        <Link className="mx-2" to="/league/$leagueId" params={{ leagueId: 'americas' }}>Americas</Link>
      </div>
      <div className="flex flex-nowrap w-screen justify-center p-4">
        <div className="grid grid-rows-[fit-content,1fr] grid-cols-2 gap-4">
          <GroupTable name="Alpha" group={league.teams.alpha} />
          <GroupTable name="Omega" group={league.teams.omega} />
          <MatchList />
        </div>
      </div>
    </EditableMatchesProvider>
  )
}

export default LeaguePage