import { FunctionComponent } from '@/lib/types';
import { Team } from '../types';
import { Table } from '@/components/Table';

type TeamRowProps = {
  team: Team & { sortDiff: number }
  index: number
}
export const TeamRow = ({ team, index }: TeamRowProps): FunctionComponent => {
  return (
    <Table.TableRow>
      <td>
        <div className="flex flex-nowrap h-full items-center">
          <div className={clsx('w-1 mr-1 h-full', index <= 2 ? 'bg-blue-500' : 'bg-red-300')}>&nbsp;</div>
          <span>{team.name}</span>
          
          {team.sortDiff !== 0 && (
            <div
              className={clsx(
                'ml-auto flex items-center text-xs',
                team.sortDiff > 0 ? 'text-green-600' : 'text-red-600'
              )}>
              <IconMdiChevronUp className={clsx(team.sortDiff < 0 && 'rotate-180')} /> {Math.abs(team.sortDiff)}
            </div>
          )}
        </div>
      </td>
      <td className={'text-center px-2'}>{team.wins}/{team.losses}</td>
      <td className={'text-center px-2'}>{team.mapWins}/{team.mapLosses}</td>
      <td className={clsx('text-center px-2', team.roundDiff && team.roundDiff > 0 ? 'text-green-500' : 'text-red-500')}>
        {team.roundDiff?.toString()}
      </td>
    </Table.TableRow>
  )
}