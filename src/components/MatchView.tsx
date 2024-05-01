import type { FunctionComponent } from '@/lib/types'
import type { Match } from '../types'
import { useEditableMatchesDispatch } from '@/hooks/useEditableMatches'
type MatchProps = {
  match: Match
}

const matchWrapperClass = clsx(
  'w-full max-w-[350px]',
  'grid grid-cols-[1fr,32px,32px,1fr] gap-1 items-center self-start',
  'bg-vctMid-500',
  'rounded'
)

const showRoundsButtonClass = clsx(
  'h-2 py-1 w-full text-[8px]',
  'cursor-pointer hover:bg-gray-500 border-t border-gray-600',
  'flex items-center justify-center'
)

export const MatchView = ({ match }: MatchProps): FunctionComponent => {
  const dispatch = useEditableMatchesDispatch()
  const [showRounds, setShowRounds] = useState(false)
  const team1Score = match.maps.filter(
    m => m.team1Rounds > m.team2Rounds
  ).length
  const team2Score = match.maps.filter(
    m => m.team2Rounds > m.team1Rounds
  ).length
  const canInceaseScore = team1Score + team2Score < 3

  const increaseTeam1Score = (): void => {
    if (team1Score < 2 && canInceaseScore) {
      dispatch({
        type: 'edit',
        id: match.id,
        data: {
          ...match,
          maps: [
            ...match.maps,
            {
              team1Rounds: 13,
              team2Rounds: 9,
            },
          ],
        },
      })
    }
  }

  const decreaseTeam1Score = (): void => {
    const team1Wins = [...match.maps].filter(m => m.team1Rounds > m.team2Rounds)
    team1Wins.pop()
    const maps = [
      ...team1Wins,
      ...match.maps.filter(m => m.team2Rounds > m.team1Rounds),
    ]
    dispatch({
      type: 'edit',
      id: match.id,
      data: {
        ...match,
        maps,
      },
    })
  }

  const increaseTeam2Score = (): void => {
    if (team2Score < 2 && canInceaseScore) {
      dispatch({
        type: 'edit',
        id: match.id,
        data: {
          ...match,
          maps: [
            ...match.maps,
            {
              team1Rounds: 9,
              team2Rounds: 13,
            },
          ],
        },
      })
    }
  }

  const decreaseTeam2Score = (): void => {
    const team2Wins = [...match.maps].filter(m => m.team2Rounds > m.team1Rounds)
    team2Wins.pop()
    const maps = [
      ...team2Wins,
      ...match.maps.filter(m => m.team1Rounds > m.team2Rounds),
    ]
    dispatch({
      type: 'edit',
      id: match.id,
      data: {
        ...match,
        maps,
      },
    })
  }

  const setMapRound = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    type: 'team1' | 'team2'
  ): void => {
    const value = Number.parseInt(event.currentTarget.value)

    if (value < 0) return

    const map = match.maps[index]
    if (type === 'team1') {
      map.team1Rounds = value
    } else {
      map.team2Rounds = value
    }
    dispatch({
      type: 'edit',
      id: match.id,
      data: {
        ...match,
        maps: [
          ...match.maps.slice(0, index),
          map,
          ...match.maps.slice(index + 1),
        ],
      },
    })
  }
  const resetHandler = (): void => {
    dispatch({
      type: 'reset',
      id: match.id,
    })
    setShowRounds(false)
  }

  return (
    <div className={matchWrapperClass}>
      <div className="px-2 text-white text-sm">{match.team1}</div>
      <MatchViewButton
        disabled={match.completed}
        onLeftClick={increaseTeam1Score}
        onRightClick={decreaseTeam1Score}
      >
        {team1Score}
      </MatchViewButton>
      <MatchViewButton
        disabled={match.completed}
        onLeftClick={increaseTeam2Score}
        onRightClick={decreaseTeam2Score}
      >
        {team2Score}
      </MatchViewButton>
      <div className="px-2 text-white text-sm text-right">{match.team2}</div>
      <div className="row-start-2 col-span-4">
        {showRounds && match.maps.length > 0 && (
          <div className="border-t border-gray-600 text-white grid grid-cols-3 gap-1 p-2">
            {match.maps.map((map, index) => {
              return (
                <Fragment key={`${match.id}-map-${index}`}>
                  <input
                    type="number"
                    disabled={match.completed}
                    value={map.team1Rounds}
                    className="max-w-15 pl-2"
                    onChange={event => setMapRound(event, index, 'team1')}
                  />
                  <span className="text-center">Map {index + 1}</span>
                  <input
                    type="number"
                    disabled={match.completed}
                    value={map.team2Rounds}
                    className="max-w-15 pl-2"
                    onChange={event => setMapRound(event, index, 'team2')}
                  />
                </Fragment>
              )
            })}
            {!match.completed && (
              <button
                className="col-span-3 border border-gray-700 rounded h-8 uppercase bold bg-slate-600 mt-3"
                onClick={resetHandler}
              >
                Reset
              </button>
            )}
          </div>
        )}
        <div
          className={`${showRoundsButtonClass} ${match.maps.length > 0 ? '' : '!cursor-default hover:!bg-transparent'}`}
          onClick={() => {
            match.maps.length > 0 && setShowRounds(!showRounds)
          }}
        >
          <span
            className={clsx(
              'transition-transform duration-200',
              !showRounds && 'rotate-180'
            )}
          >
            ^
          </span>
        </div>
      </div>
    </div>
  )
}

type MatchViewButtonProps = React.HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean
  onLeftClick?: () => void
  onRightClick?: () => void
}
const MatchViewButton = ({
  children,
  disabled,
  onLeftClick,
  onRightClick,
}: MatchViewButtonProps): FunctionComponent => {
  const contextMenuHandler = (event: React.MouseEvent): void => {
    if (onRightClick) {
      event.preventDefault()
      onRightClick()
    }
  }
  return (
    <button
      className={clsx(
        `p-1 w-8 bg-transparent rounded-md my-1`,
        disabled ? 'cursor-default' : 'hover:bg-gray-700'
      )}
      onClick={onLeftClick}
      onContextMenu={contextMenuHandler}
    >
      {children}
    </button>
  )
}
