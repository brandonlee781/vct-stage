import { FunctionComponent } from '@/lib/types';
import { Team } from '../types';
import { Header, Table } from '@/components/Table';
import { TeamRow } from './TeamRow';
import { useCombinedData } from '../hooks/useCombinedData';

type GroupTableProps = {
  name: 'Alpha' | 'Omega'
  group: Team[]
}

export const GroupTable = (props: GroupTableProps): FunctionComponent => {
  const teams = useCombinedData(props.group)

  const headers: Header[] = [
    { text: props.name },
    { text: 'W/L' },
    { text: 'Maps' },
    { text: 'RNDS' }
  ]

  return (
    <Table headers={headers} className="min-w-[350px]">
      {teams.map((team, index) => (
        <TeamRow team={team} index={index} key={`${props.name}-${index}`}/>
      ))}
    </Table>
  )
}