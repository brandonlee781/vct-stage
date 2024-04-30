import { FunctionComponent } from '@/lib/types';
import { Header, Table } from '@/components/Table';
import { TeamRow } from './TeamRow';
import { useTeams } from '@/providers/EditableMatchesProvider';

type GroupTableProps = {
  name: 'Alpha' | 'Omega'
}

export const GroupTable = (props: GroupTableProps): FunctionComponent => {
  const groups = useTeams()

  const group = props.name === 'Alpha' ? groups.alpha : groups.omega

  const headers: Header[] = [
    { text: props.name },
    { text: 'W/L' },
    { text: 'Maps' },
    { text: 'RNDS' }
  ]

  return (
    <Table headers={headers} className="min-w-[350px]">
      {group.teams.map((team, index) => (
        <TeamRow team={team} index={index} key={`${props.name}-${index}`} playoffSpots={group.qualificationSpots}/>
      ))}
    </Table>
  )
}