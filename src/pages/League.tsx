import type { FunctionComponent } from '@/lib/types'
import { GroupTable } from '../components/GroupTable'
import { MatchList } from '../components/MatchList'
import { LeagueToolbar } from '@/components/LeagueToolbar'

const LeaguePage = (): FunctionComponent => {
  return (
    <div>
      <LeagueToolbar />
      <div className="flex flex-col sm:grid sm:grid-rows-[max-content,1fr] sm:grid-cols-2 max-w-[700px] mx-auto gap-2 p-4">
        <GroupTable name="Alpha" />
        <GroupTable name="Omega" />
        <MatchList stageFilter="1" />
      </div>
    </div>
  )
}

export default LeaguePage
