import type { FunctionComponent } from '@/lib/types'
import type { Standing } from '../types'
import { Table } from '@/components/Table'

type TeamRowProps = {
  team: Standing & { sortDiff: number }
  index: number
  group: 'Alpha' | 'Omega'
  playoffSpots: number
}
export const TeamRow = ({
  team,
  index,
  group,
  playoffSpots,
}: TeamRowProps): FunctionComponent => {
  const roundDiff = team.roundWins - team.roundLosses
  const rowClass = clsx(
    'h-full',
    group === 'Alpha' ? 'bg-orange-800/5' : 'bg-green-800/10'
  )
  return (
    <Table.TableRow className={rowClass}>
      <td>
        <div className="flex flex-nowrap h-full items-center">
          <div
            className={clsx(
              'w-1 mr-1 h-full',
              index <= playoffSpots - 1 ? 'bg-blue-500' : 'bg-red-300'
            )}
          >
            &nbsp;
          </div>
          <span>{team.name}</span>

          {team.sortDiff !== 0 && (
            <div
              className={clsx(
                'ml-auto flex items-center text-xs',
                team.sortDiff > 0 ? 'text-green-600' : 'text-red-600'
              )}
            >
              <IconMdiChevronUp
                className={clsx(team.sortDiff < 0 && 'rotate-180')}
              />{' '}
              {Math.abs(team.sortDiff)}
            </div>
          )}
        </div>
      </td>
      <td className={'text-center px-2'}>
        {team.wins}/{team.losses}
      </td>
      <td className={'text-center px-2'}>
        {team.mapWins}/{team.mapLosses}
      </td>
      <td
        className={clsx(
          'text-center px-2',
          roundDiff > 0 ? 'text-green-500' : 'text-red-500'
        )}
      >
        {roundDiff?.toString()}
      </td>
      <td className={'text-center px-2 text-gray-400'}>{team.points || 0}</td>
    </Table.TableRow>
  )
}
