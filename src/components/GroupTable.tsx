import type { FunctionComponent } from '@/lib/types'
import { Table, type Header } from '@/components/Table'
import { TeamRow } from './TeamRow'
import { useStandings } from '@/hooks/useStandings'

type GroupTableProps = {
  name: 'Alpha' | 'Omega'
}

export const GroupTable = (props: GroupTableProps): FunctionComponent => {
  const standings = useStandings()

  const group = props.name === 'Alpha' ? standings.alpha : standings.omega

  const headers: Header[] = [
    { text: props.name },
    { text: 'W/L' },
    { text: 'Maps' },
    { text: 'RNDS' },
  ]

  return (
    <Table headers={headers}>
      {group.teams.map((team, index) => (
        <TeamRow
          team={team}
          index={index}
          key={`${props.name}-${index}`}
          playoffSpots={group.qualificationSpots}
        />
      ))}
    </Table>
  )
}
