import type { FunctionComponent } from '@/lib/types'
import { Table, type Header } from '@/components/Table'
import { TeamRow } from './TeamRow'
import { useMatches } from '@/store/useMatches'

type GroupTableProps = {
  name: 'Alpha' | 'Omega'
}

export const GroupTable = (props: GroupTableProps): FunctionComponent => {
  const standings = useMatches(state => {
    if (props.name === 'Alpha') {
      return state.standings.alpha
    }
    return state.standings.omega
  })

  const headers: Header[] = [
    { text: props.name },
    { text: 'W/L' },
    { text: 'Maps' },
    { text: 'RNDS' },
  ]

  return (
    <Table headers={headers} className="!h-auto">
      {standings.teams.map((team, index) => (
        <TeamRow
          team={team}
          index={index}
          key={`${props.name}-${index}`}
          playoffSpots={standings.qualificationSpots}
        />
      ))}
    </Table>
  )
}
